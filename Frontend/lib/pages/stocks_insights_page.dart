import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart'; // Add this to your pubspec.yaml
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
          final time = DateTime.parse(candle[0]).millisecondsSinceEpoch /
              1000; // Convert to epoch
          final openPrice = candle[1];
          return FlSpot(time.toDouble(), openPrice.toDouble());
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
                  titlesData: FlTitlesData(
                    leftTitles: AxisTitles(sideTitles: SideTitles(showTitles: true)),
                    bottomTitles: AxisTitles(
                      sideTitles: SideTitles(
                        showTitles: true,
                        getTitlesWidget: (value, meta) {
                          final date = DateTime.fromMillisecondsSinceEpoch(
                              value.toInt() * 1000);
                          return Text("${date.hour}:${date.minute}");
                        },
                        interval: 3600, // Show titles for every hour
                      ),
                    ),
                  ),
                  lineBarsData: [
                    LineChartBarData(
                      spots: _dataPoints,
                      isCurved: true,
                      barWidth: 2,
                      color: Colors.blue,
                      belowBarData: BarAreaData(
                        show: true,
                        gradient: LinearGradient(
                          colors: [Colors.blue.withOpacity(0.3)],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
    );
  }
}
