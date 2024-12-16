import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_dotenv/flutter_dotenv.dart';

class StockInsightsPage extends StatefulWidget {
  final String stockSymbol;

  const StockInsightsPage({Key? key, required this.stockSymbol})
      : super(key: key);

  @override
  State<StockInsightsPage> createState() => _StockInsightsPageState();
}

class _StockInsightsPageState extends State<StockInsightsPage> {
  List<FlSpot> _dataPoints = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _fetchStockData();
  }

  Future<void> _fetchStockData() async {
    final baseUrl = dotenv.env['SERVER_URL'];
    final apiUrl =
        '$baseUrl/stocks/getCurrentDayStockData?symbol=${widget.stockSymbol}';

    try {
      final response = await http.get(Uri.parse(apiUrl));
      if (response.statusCode == 200) {
        final decodedData = json.decode(response.body);
        final candles = decodedData['data']['candles'];

        // Parse data points for the graph
        final dataPoints = candles.map<FlSpot>((candle) {
          final time = DateTime.parse(candle[0]).millisecondsSinceEpoch / 1000;
          final closePrice = candle[4]; // 5th field: closing price
          return FlSpot(time.toDouble(), closePrice.toDouble());
        }).toList();

        setState(() {
          _dataPoints = dataPoints;
          _isLoading = false;
        });
      } else {
        throw Exception('Failed to fetch stock data');
      }
    } catch (e) {
      setState(() {
        _isLoading = false;
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error fetching stock data: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.stockSymbol),
        backgroundColor: Colors.black,
      ),
      body: _isLoading
          ? const Center(
              child: CircularProgressIndicator(),
            )
          : Padding(
              padding: const EdgeInsets.all(16.0),
              child: LineChart(
                LineChartData(
                  gridData: FlGridData(
                    show: true,
                    drawHorizontalLine: true,
                    drawVerticalLine: false,
                    horizontalInterval: 50,
                  ),
                  titlesData: FlTitlesData(
                    bottomTitles: AxisTitles(
                      sideTitles: SideTitles(
                        showTitles: true,
                        getTitlesWidget: (value, meta) {
                          DateTime date = DateTime.fromMillisecondsSinceEpoch(
                              value.toInt() * 1000);
                          return Text(
                            "${date.hour}:${date.minute.toString().padLeft(2, '0')}",
                            style: const TextStyle(
                                color: Colors.grey, fontSize: 10),
                          );
                        },
                        reservedSize: 20,
                        interval: 3600, // Display labels every hour
                      ),
                    ),
                    leftTitles: AxisTitles(
                      sideTitles: SideTitles(
                        showTitles: true,
                        reservedSize: 40,
                        getTitlesWidget: (value, meta) {
                          return Text(
                            '${value.toStringAsFixed(0)}',
                            style: const TextStyle(
                                color: Colors.grey, fontSize: 10),
                          );
                        },
                        interval: 50, // Adjust y-axis intervals dynamically
                      ),
                    ),
                    topTitles:
                        AxisTitles(sideTitles: SideTitles(showTitles: false)),
                    rightTitles:
                        AxisTitles(sideTitles: SideTitles(showTitles: false)),
                  ),
                  borderData: FlBorderData(
                    show: true,
                    border: Border.all(color: Colors.grey.shade300),
                  ),
                  lineBarsData: [
                    LineChartBarData(
                      spots: _dataPoints,
                      isCurved: true,
                      color: Colors.blueAccent,
                      barWidth: 2,
                      dotData: FlDotData(show: false),
                      belowBarData: BarAreaData(
                        show: true,
                        gradient: LinearGradient(
                          colors: [
                            Colors.blueAccent.withOpacity(0.3),
                            Colors.transparent
                          ],
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                        ),
                      ),
                    ),
                  ],
                  lineTouchData: LineTouchData(
                    touchTooltipData: LineTouchTooltipData(
                      getTooltipItems: (spots) {
                        return spots.map((spot) {
                          DateTime date = DateTime.fromMillisecondsSinceEpoch(
                              (spot.x * 1000).toInt());
                          return LineTooltipItem(
                            " ${date.hour}:${date.minute.toString().padLeft(2, '0')}\n"
                            " Last: ${spot.y.toStringAsFixed(2)}",
                            const TextStyle(
                                color: Colors.black,
                                fontWeight: FontWeight.bold),
                          );
                        }).toList();
                      },
                    ),
                    getTouchedSpotIndicator:
                        (LineChartBarData barData, List<int> indicators) {
                      return indicators.map((int index) {
                        return TouchedSpotIndicatorData(
                          FlLine(color: Colors.blueAccent, strokeWidth: 1),
                          FlDotData(show: true),
                        );
                      }).toList();
                    },
                    touchCallback:
                        (FlTouchEvent event, LineTouchResponse? response) {},
                  ),
                ),
              ),
            ),
    );
  }
}
