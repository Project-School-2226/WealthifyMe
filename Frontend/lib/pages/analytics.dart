import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:fl_chart/fl_chart.dart';
import 'package:intl/intl.dart';

class AnalyticsDashboard extends StatefulWidget {
  const AnalyticsDashboard({Key? key}) : super(key: key);

  @override
  _AnalyticsDashboardState createState() => _AnalyticsDashboardState();
}

class _AnalyticsDashboardState extends State<AnalyticsDashboard> {
  String timeframe = 'month';
  Map<String, dynamic>? analyticsData;
  bool isLoading = true;
  String? error;

  @override
  void initState() {
    super.initState();
    fetchAnalytics();
  }

  Future<void> fetchAnalytics() async {
    try {
      setState(() {
        isLoading = true;
        error = null;
      });

      final user = FirebaseAuth.instance.currentUser;
      if (user == null) throw Exception('User not authenticated');

      final baseUrl = dotenv.env['SERVER_URL'] ?? '';
      final response = await http.get(
        Uri.parse('$baseUrl/transactions/analytics?user_id=${user.uid}&timeframe=$timeframe'),
      );

      if (response.statusCode == 200) {
        setState(() {
          analyticsData = json.decode(response.body);
          isLoading = false;
        });
      } else {
        throw Exception('Failed to load analytics');
      }
    } catch (e) {
      setState(() {
        error = e.toString();
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Analytics'),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: fetchAnalytics,
          ),
        ],
      ),
      body: isLoading
        ? const Center(child: CircularProgressIndicator())
        : error != null
          ? Center(child: Text('Error: $error'))
          : SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    _buildTimeframeSelector(),
                    const SizedBox(height: 20),
                    _buildSummaryCards(
                      analyticsData?['summary'] ?? {},
                      analyticsData?['metrics'] ?? {},
                    ),
                    const SizedBox(height: 20),
                    _buildCategoryPieChart(
                      analyticsData?['categoryAnalysis'] ?? [],
                    ),
                    const SizedBox(height: 20),
                    _buildMonthlyTrendChart(),
                    const SizedBox(height: 20),
                    _buildLargeExpensesList(),
                  ],
                ),
              ),
            ),
    );
  }

  Text name(params) {
    return Text(params['name'], style: TextStyle(color: Colors.white),);
  }

  Widget _buildTimeframeSelector() {
    final segments = [
      ButtonSegment(value: 'week', label: name({'name': 'Week'})),
      ButtonSegment(value: 'month', label: name({'name': 'Month'})),
      ButtonSegment(value: 'year', label: name({'name': 'Year'})),
    ];
    return SegmentedButton<String>(
      segments: segments,
      selected: {timeframe},
      onSelectionChanged: (Set<String> selection) {
        setState(() {
          timeframe = selection.first;
          fetchAnalytics();
        });
      },
    );
  }

  Widget _buildSummaryCards(Map<String, dynamic> summary, Map<String, dynamic> metrics) {
    final currencyFormat = NumberFormat.currency(symbol: '\$');
    
    return GridView.count(
      crossAxisCount: 2,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      mainAxisSpacing: 10,
      crossAxisSpacing: 10,
      childAspectRatio: 1.5,
      children: [
        _buildMetricCard(
          'Total Income',
          currencyFormat.format(summary['totalIncome'] ?? 0),
          const Color.fromARGB(255, 0, 233, 8),
          
        ),
        _buildMetricCard(
          'Total Expenses',
          currencyFormat.format(summary['totalExpenses'] ?? 0),
          const Color.fromARGB(255, 255, 17, 0),
        ),
        _buildMetricCard(
          'Savings Rate',
          '${(metrics['savingsRate'] ?? 0).toStringAsFixed(1)}%',
          const Color.fromARGB(255, 0, 140, 255),
        ),
        _buildMetricCard(
          'Net Income',
          currencyFormat.format(metrics['netIncome'] ?? 0),
          const Color.fromARGB(255, 219, 12, 255),
        ),
      ],
    );
  }

  Widget _buildMetricCard(String title, String value, Color color) {
    return Card(
      elevation: 4,
      color: const Color(0xFF1E2A38),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              title,
              style: const TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w500,
                color: Colors.white
              ),
            ),
            const SizedBox(height: 8),
            Text(
              value,
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: color,
                decorationColor: Colors.white
              ),
            ),
          ],
        ),
      ),
    );
  }

 Widget _buildCategoryPieChart(List<dynamic> categoryAnalysis) {
  if (categoryAnalysis.isEmpty) {
    return const SizedBox.shrink();
  }

  // Predefined color palette for better visual harmony
  final colors = [
    const Color(0xFF2196F3), // Blue
    const Color(0xFF4CAF50), // Green
    const Color(0xFFFFC107), // Amber
    const Color(0xFFE91E63), // Pink
    const Color(0xFF9C27B0), // Purple
    const Color(0xFF00BCD4), // Cyan
    const Color(0xFFFF5722), // Deep Orange
    const Color(0xFF795548), // Brown
  ];

  final total = categoryAnalysis.fold(
    0.0,
    (sum, item) => sum + (item['totalAmount'] ?? 0.0),
  );

  final sections = categoryAnalysis.asMap().entries.map((entry) {
    final category = entry.value;
    final value = category['totalAmount'] ?? 0.0;
    final title = category['_id']['category_name'] ?? 'Unknown';
    final percentage = (value / total * 100).toStringAsFixed(1);
    
    return PieChartSectionData(
      value: value.toDouble(),
      title: percentage + '%',
      titleStyle: const TextStyle(
        fontSize: 14,
        fontWeight: FontWeight.bold,
        color: Colors.white,
        shadows: [
          Shadow(
            color: Colors.black26,
            blurRadius: 2,
          ),
        ],
      ),
      radius: 110,
      color: colors[entry.key % colors.length],
      badgeWidget: value / total > 0.05 ? Text(
        title,
        style: const TextStyle(
          fontSize: 12,
          color: Colors.white,
          fontWeight: FontWeight.w500,
        ),
      ) : null,
      badgePositionPercentageOffset: 0.7,
    );
  }).toList();

  return Card(
    elevation: 8,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(16),
    ),
    color:const Color(0xFF1E2A38),
    child: Padding(
      padding: const EdgeInsets.all(24.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                'Spending by Category',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                  letterSpacing: 0.5,
                ),
              ),
              
            ],
          ),
          const SizedBox(height: 24),
          SizedBox(
            height: 350,
            child: Stack(
              children: [
                PieChart(
                  PieChartData(
                    sections: sections,
                    sectionsSpace:1,
                    centerSpaceRadius: 50,

                  ),
                ),
                Center(
                  child: Text(
                    '${categoryAnalysis.length}\nCategories',
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w500,
                      color: Colors.white70,
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          // Legend
          Wrap(
            spacing: 16,
            runSpacing: 8,
            children: categoryAnalysis.asMap().entries.map((entry) {
              final category = entry.value;
              final title = category['_id']['category_name'] ?? 'Unknown';
              final value = category['totalAmount'] ?? 0.0;
              
              return Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    width: 12,
                    height: 12,
                    decoration: BoxDecoration(
                      color: colors[entry.key % colors.length],
                      shape: BoxShape.circle,
                    ),
                  ),
                  const SizedBox(width: 5),
                  Text(
                    '$title: \$${value.toStringAsFixed(2)}',
                    style: const TextStyle(
                      fontSize: 12,
                      color: Color.fromARGB(255, 255, 246, 246),
                    ),
                  ),
                ],
              );
            }).toList(),
          ),
        ],
      ),
    ),
  );
}

Widget _buildMonthlyTrendChart() {
  final monthlyTrend = analyticsData?['monthlyTrend'] ?? [];
  if (monthlyTrend.isEmpty) {
    return const SizedBox.shrink();
  }

  final List<FlSpot> incomeSpots = [];
  final List<FlSpot> expenseSpots = [];

  for (var i = 0; i < monthlyTrend.length; i++) {
    final item = monthlyTrend[i];
    final month = item['_id']['month'] - 1;
    final amount = item['totalAmount'].toDouble();
    
    if (item['_id']['type'] == 'Income') {
      incomeSpots.add(FlSpot(month.toDouble(), amount));
    } else {
      expenseSpots.add(FlSpot(month.toDouble(), amount));
    }
  }

  return Card(
    elevation: 8,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(15),
    ),
    color: const Color(0xFF1E2A38),
    child: Padding(
      padding: const EdgeInsets.fromLTRB(16, 20, 16, 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                'Monthly Trends',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                  letterSpacing: 0.5,
                ),
              ),
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: Colors.green.withOpacity(0.2),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Row(
                      children: [
                        Container(
                          width: 8,
                          height: 8,
                          decoration: const BoxDecoration(
                            shape: BoxShape.circle,
                            color: Color(0xFF4CAF50),
                          ),
                        ),
                        const SizedBox(width: 4),
                        const Text(
                          'Income',
                          style: TextStyle(
                            color: Color(0xFF4CAF50),
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 8),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: Colors.red.withOpacity(0.2),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Row(
                      children: [
                        Container(
                          width: 8,
                          height: 8,
                          decoration: const BoxDecoration(
                            shape: BoxShape.circle,
                            color: Color(0xFFE57373),
                          ),
                        ),
                        const SizedBox(width: 4),
                        const Text(
                          'Expense',
                          style: TextStyle(
                            color: Color(0xFFE57373),
                            fontSize: 12,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ],
          ),
          const SizedBox(height: 20),
          SizedBox(
            height: 300,
            child: LineChart(
              LineChartData(
                gridData: FlGridData(
                  show: true,
                  drawVerticalLine: true,
                  horizontalInterval: 1000,
                  verticalInterval: 1,
                  getDrawingHorizontalLine: (value) {
                    return FlLine(
                      color: Colors.white24,
                      strokeWidth: 0.5,
                    );
                  },
                  getDrawingVerticalLine: (value) {
                    return FlLine(
                      color: Colors.white24,
                      strokeWidth: 0.5,
                    );
                  },
                ),
                titlesData: FlTitlesData(
                  show: true,
                  rightTitles: AxisTitles(
                    sideTitles: SideTitles(showTitles: false),
                  ),
                  topTitles: AxisTitles(
                    sideTitles: SideTitles(showTitles: false),
                  ),
                  bottomTitles: AxisTitles(
                    sideTitles: SideTitles(
                      showTitles: true,
                      reservedSize: 30,
                      interval: 1,
                      getTitlesWidget: (value, meta) {
                        return SideTitleWidget(
                          axisSide: meta.axisSide,
                          child: Text(
                            DateFormat('MMM').format(DateTime(2024, value.toInt() + 1)),
                            style: const TextStyle(
                              color: Color(0xFF7C8DA6),
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                  leftTitles: AxisTitles(
                    sideTitles: SideTitles(
                      showTitles: true,
                      interval: 1000,
                      reservedSize: 42,
                      getTitlesWidget: (value, meta) {
                        return SideTitleWidget(
                          axisSide: meta.axisSide,
                          child: Text(
                            '\$${value.toInt()}',
                            style: const TextStyle(
                              color: Color(0xFF7C8DA6),
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                ),
                borderData: FlBorderData(
                  show: true,
                  border: Border.all(color: const Color(0xFF37434d), width: 1),
                ),
                minX: 0,
                maxX: 11,
                lineBarsData: [
                  LineChartBarData(
                    spots: incomeSpots,
                    isCurved: true,
                    gradient: const LinearGradient(
                      colors: [Color(0xFF4CAF50), Color(0xFF81C784)],
                    ),
                    barWidth: 3,
                    isStrokeCapRound: true,
                    dotData: FlDotData(
                      show: true,
                      getDotPainter: (spot, percent, barData, index) {
                        return FlDotCirclePainter(
                          radius: 4,
                          color: const Color(0xFF4CAF50),
                          strokeWidth: 2,
                          strokeColor: Colors.white,
                        );
                      },
                    ),
                    belowBarData: BarAreaData(
                      show: true,
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [
                          const Color(0xFF4CAF50).withOpacity(0.2),
                          const Color(0xFF4CAF50).withOpacity(0.0),
                        ],
                      ),
                    ),
                  ),
                  LineChartBarData(
                    spots: expenseSpots,
                    isCurved: true,
                    gradient: const LinearGradient(
                      colors: [Color(0xFFE57373), Color(0xFFEF9A9A)],
                    ),
                    barWidth: 3,
                    isStrokeCapRound: true,
                    dotData: FlDotData(
                      show: true,
                      getDotPainter: (spot, percent, barData, index) {
                        return FlDotCirclePainter(
                          radius: 4,
                          color: const Color(0xFFE57373),
                          strokeWidth: 2,
                          strokeColor: Colors.white,
                        );
                      },
                    ),
                    belowBarData: BarAreaData(
                      show: true,
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [
                          const Color(0xFFE57373).withOpacity(0.2),
                          const Color(0xFFE57373).withOpacity(0.0),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    ),
  );
}

  Widget _buildLargeExpensesList() {
    final largeExpenses = analyticsData?['largeExpenses'] ?? [];
    if (largeExpenses.isEmpty) {
      return const SizedBox.shrink();
    }

    return Card(
      elevation: 4,
      color: const Color(0xFF1E2A38),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Largest Expenses',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white),
            ),
            const SizedBox(height: 16),
            ListView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: largeExpenses.length,
              itemBuilder: (context, index) {
                final expense = largeExpenses[index];
                return ListTile(
                  title: Text(expense['description'] ?? 'No description', style: TextStyle(color: Color.fromARGB(255, 255, 255, 255)),),
                  subtitle: Text(expense['category_name'] ?? 'Unknown Category',style: TextStyle(color: Color.fromARGB(151, 252, 248, 39)),),
                  trailing: Text(
                    NumberFormat.currency(symbol: '\$').format(expense['amount'] ?? 0),
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 14,
                      color: Color.fromARGB(255, 251, 24, 7),
                    ),
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}