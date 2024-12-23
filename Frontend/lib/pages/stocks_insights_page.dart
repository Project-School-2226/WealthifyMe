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
          final time = DateTime.parse(candle[0]).millisecondsSinceEpoch / 1000;
          final closePrice = candle[4]; // 5th field for y-axis (Close price)
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
          : SingleChildScrollView(
              scrollDirection: Axis.horizontal, // Enable horizontal scrolling
              child: Container(
                width: MediaQuery.of(context).size.width * 1.5, // Adjust graph width
                padding: const EdgeInsets.all(16.0),
                child: LineChart(
LineChartData(
  gridData: FlGridData(
    show: true,
    drawHorizontalLine: true,
    horizontalInterval:
        (_dataPoints.map((e) => e.y).reduce((a, b) => a > b ? a : b) -
                _dataPoints.map((e) => e.y).reduce((a, b) => a < b ? a : b)) /
            5,
  ),
  titlesData: FlTitlesData(
    leftTitles: AxisTitles(
      sideTitles: SideTitles(
        showTitles: true,
        getTitlesWidget: (value, meta) {
          return Padding(
            padding: const EdgeInsets.only(right: 8.0),
            child: Text(
              '\₹${value.toStringAsFixed(0)}',
              style: TextStyle(
                color: Colors.grey.shade700,
                fontSize: 12,
              ),
            ),
          );
        },
        reservedSize: 50,
        interval: 50,
      ),
    ),
    bottomTitles: AxisTitles(
      sideTitles: SideTitles(
        showTitles: true,
        getTitlesWidget: (value, meta) {
          final date = DateTime.fromMillisecondsSinceEpoch(
              value.toInt() * 1000);
          return Text(
            "${date.hour}:${date.minute.toString().padLeft(2, '0')}",
            style: TextStyle(
              color: Colors.grey.shade700,
              fontSize: 10,
            ),
          );
        },
        interval: (_dataPoints.length ~/ 6).toDouble(),
      ),
    ),
  ),
  lineBarsData: [
    LineChartBarData(
      spots: _dataPoints,
      isCurved: true,
      barWidth: 3,
      color: Colors.blueAccent,
      dotData: FlDotData(
        show: false, // Remove dots
      ),
      belowBarData: BarAreaData(
        show: true,
        gradient: LinearGradient(
          colors: [
            Colors.blueAccent.withOpacity(0.3),
            Colors.blueAccent.withOpacity(0.0),
          ],
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
        ),
      ),
    ),
  ],
  borderData: FlBorderData(show: true),
  extraLinesData: ExtraLinesData(
    horizontalLines: [
      HorizontalLine(
        y: _dataPoints.map((e) => e.y).reduce((a, b) => a + b) / _dataPoints.length,
        color: Colors.redAccent,
        strokeWidth: 2,
        label: HorizontalLineLabel(
          show: true,
          alignment: Alignment.centerRight,
          style: TextStyle(
            color: Colors.redAccent,
            fontSize: 10,
          ),
          labelResolver: (value) => "Avg Price",
        ),
      ),
    ],
  ),
)

                ),
              ),
            ),
    );
  }
}
