import 'dart:convert';
import 'package:http/http.dart' as http;

class StockSymbol {
  final String symbol;
  final String companyName;
  final String isin;
  double? latestPrice;

  StockSymbol({
    required this.symbol,
    required this.companyName,
    required this.isin,
    this.latestPrice,
  });

  factory StockSymbol.fromJson(Map<String, dynamic> json) {
    return StockSymbol(
      symbol: json['SYMBOL'],
      companyName: json['NAME OF COMPANY'],
      isin: json['ISIN NUMBER'],
    );
  }

  // Static method to fetch latest prices for multiple stocks
  static Future<void> fetchPricesForStocks(List<StockSymbol> stocks) async {
    try {
      final symbols = stocks.map((stock) => stock.symbol).toList();
      final url = Uri.parse(
          'https://literate-magpie-separately.ngrok-free.app/stocks/getStockPrices');
      final response = await http.post(
        url,
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({'symbols': symbols}),
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);

        if (data['status'] == 'success') {
          for (var stock in stocks) {
            final priceData = data['stockPrices']
                .firstWhere((price) => price['symbol'] == stock.symbol, orElse: () => null);

            if (priceData != null) {
              stock.latestPrice = priceData['lastPrice'];
            }
          }
        }
      } else {
        print("Error fetching stock prices: ${response.body}");
      }
    } catch (e) {
      print("Error fetching stock prices: $e");
    }
  }
}
