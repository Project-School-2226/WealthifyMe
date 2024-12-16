import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart'; // Add this dependency for charts
import 'package:intl/intl.dart'; // For date formatting

class FilteredData extends StatefulWidget {
  @override
  _FilteredDataState createState() => _FilteredDataState();
}

class _FilteredDataState extends State<FilteredData> {
  int _selectedButtonIndex = 0;

  // Dummy data for demonstration
  final List<Map<String, dynamic>> transactions = [
    {'date': '2024-12-01', 'amount': 150, 'category': 'Food'},
    {'date': '2024-12-02', 'amount': 200, 'category': 'Transport'},
    {'date': '2024-12-03', 'amount': 100, 'category': 'Food'},
    {'date': '2024-12-04', 'amount': 50, 'category': 'Entertainment'},
    {'date': '2024-12-05', 'amount': 300, 'category': 'Salary'},
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16),
      child: Column(
        children: [
          // Buttons at the top
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      _selectedButtonIndex = 0;
                    });
                  },
                  style: ElevatedButton.styleFrom(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  child: Text('Date Range Plot'),
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      _selectedButtonIndex = 1;
                    });
                  },
                  style: ElevatedButton.styleFrom(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  child: Text('Category Pie Chart'),
                ),
                ElevatedButton(
                  onPressed: () {
                    setState(() {
                      _selectedButtonIndex = 2;
                    });
                  },
                  style: ElevatedButton.styleFrom(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  child: Text('Other View'),
                ),
              ],
            ),
          ),
          // Content based on the selected button
          Expanded(
            child: _selectedButtonIndex == 0
                ? _buildDateRangePlot()
                : _selectedButtonIndex == 1
                    ? _buildCategoryPieChart()
                    : _buildOtherView(),
          ),
        ],
      ),
    );
  }

  Widget _buildDateRangePlot() {
    List<FlSpot> dataPoints = [];
    for (var transaction in transactions) {
      DateTime date = DateFormat('yyyy-MM-dd').parse(transaction['date']);
      dataPoints.add(
        FlSpot(date.millisecondsSinceEpoch.toDouble(), transaction['amount'].toDouble()),
      );
    }

    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: LineChart(
        LineChartData(
          gridData: FlGridData(show: true),
          titlesData: FlTitlesData(show: true),
          borderData: FlBorderData(show: true),
          lineBarsData: [
            LineChartBarData(
              spots: dataPoints,
              isCurved: true,
              color: Colors.blue,
              belowBarData: BarAreaData(show: true, color: Colors.blue.withOpacity(0.3)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCategoryPieChart() {
    Map<String, double> categoryTotals = {};
    for (var transaction in transactions) {
      String category = transaction['category'];
      double amount = transaction['amount'];
      categoryTotals[category] = (categoryTotals[category] ?? 0) + amount;
    }

    List<PieChartSectionData> sections = categoryTotals.entries
        .map(
          (entry) => PieChartSectionData(
            value: entry.value,
            color: Colors.primaries[categoryTotals.keys.toList().indexOf(entry.key) % Colors.primaries.length],
            title: '${entry.key}: ${entry.value}',
            radius: 50,
            titleStyle: TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: Colors.white),
          ),
        )
        .toList();

    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: PieChart(
        PieChartData(
          sections: sections,
          borderData: FlBorderData(show: false),
          sectionsSpace: 0,
        ),
      ),
    );
  }

  Widget _buildOtherView() {
    return Center(child: Text('Other View'));
  }
}