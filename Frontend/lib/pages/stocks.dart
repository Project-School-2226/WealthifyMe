import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:wealthify_me/auth_service.dart';
import 'package:wealthify_me/pages/stocks_insights_page.dart';
import '../models/stock_symbol.dart';
import 'stock_search_page.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class Stocks extends StatefulWidget {
  const Stocks({Key? key}) : super(key: key);

  @override
  State<Stocks> createState() => _StocksState();
}

class _StocksState extends State<Stocks> {
  List<StockSymbol> _allSymbols = [];
  bool _isFetching = false;
  String? userId = AuthService().getUserId();

  @override
  void initState() {
    super.initState();
    _fetchUserStocks(); // Fetch user stocks on page load
    _fetchLatestPrices(); // Fetch latest prices for user stocks
  }

  Future<void> _fetchUserStocks() async {
    setState(() {
      _isFetching = true; // Show loading state
    });

    try {
      final baseUrl = dotenv.env['SERVER_URL']!;
      final url = Uri.parse('$baseUrl/stocks/getUserStocks?user_id=$userId');
      final response =
          await http.get(url, headers: {"Content-Type": "application/json"});

      if (response.statusCode == 200) {
        final List<dynamic> fetchedSymbols =
            json.decode(response.body)['stocks'];

        // Load symbols.json from assets
        String jsonString = await DefaultAssetBundle.of(context)
            .loadString('assets/symbols.json');
        List<dynamic> jsonList = json.decode(jsonString);

        // Map fetched symbols to their corresponding company names
        List<StockSymbol> fetchedStocks = fetchedSymbols.map((symbol) {
          final stockData = jsonList.firstWhere(
              (json) => json['SYMBOL'] == symbol,
              orElse: () => null);
          return StockSymbol(
            symbol: symbol,
            companyName:
                stockData != null ? stockData['NAME OF COMPANY'] : 'Unknown',
            isin: stockData != null ? stockData['ISIN NUMBER'] : 'Unknown',
          );
        }).toList();

        setState(() {
          _allSymbols = fetchedStocks;
        });

        // Fetch prices for all stocks
        await StockSymbol.fetchPricesForStocks(_allSymbols);
      } else {
        print("Error fetching user stocks: ${response.body}");
      }
    } catch (e) {
      print("Error fetching user stocks: $e");
    }

    setState(() {
      _isFetching = false; // Hide loading state
    });
  }

  Future<void> _fetchLatestPrices() async {
    setState(() {
      _isFetching = true; // Show loading state
    });

    await StockSymbol.fetchPricesForStocks(_allSymbols);

    setState(() {
      _isFetching = false; // Update UI after fetching
    });
  }

  Future<void> _addNewStocks(List<StockSymbol> selectedStocks) async {
    final newStocks = selectedStocks
        .where((stock) => !_allSymbols.any((s) => s.symbol == stock.symbol))
        .toList();

    if (newStocks.isNotEmpty) {
      setState(() {
        _allSymbols.addAll(newStocks);
      });

      // Fetch prices for newly added stocks
      await StockSymbol.fetchPricesForStocks(newStocks);
    }
  }

  Future<void> _deleteStock(StockSymbol stock) async {
    try {
      final baseUrl = dotenv.env['SERVER_URL']!;
      final url = Uri.parse(
          '$baseUrl/stocks/deleteStock?user_id=$userId&symbol=${stock.symbol}');
      final response = await http.delete(
        url,
        headers: {"Content-Type": "application/json"},
      );

      if (response.statusCode == 200) {
        setState(() {
          _allSymbols.remove(stock);
        });
      } else {
        print("Error deleting stock: ${response.body}");
      }
    } catch (e) {
      print("Error deleting stock: $e");
    }
  }

  Future<void> _refreshStocks() async {
    await _fetchUserStocks();
    await _fetchLatestPrices();
  }

  @override
  Widget build(BuildContext context) {
    final hasStocks = _allSymbols.isNotEmpty;

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Stocks',
          style: TextStyle(
            color: Colors.yellow,
          ),
        ),
        actions: [
          IconButton(
            icon: hasStocks
                ? Icon(Icons.refresh, color: Colors.yellow)
                : Icon(Icons.refresh, color: Colors.grey),
            onPressed:
                hasStocks ? _refreshStocks : null, // Disable if no stocks
          ),
        ],
        backgroundColor: Colors.black,
        elevation: 0,
      ),
      backgroundColor: Colors.black,
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  'Your Stocks',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                TextButton(
                  onPressed: () async {
                    final List<StockSymbol>? selectedStocks =
                        await Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => const SearchPage(),
                      ),
                    );

                    if (selectedStocks != null && selectedStocks.isNotEmpty) {
                      await _addNewStocks(selectedStocks);
                    }
                  },
                  child: const Text(
                    'Add Stocks',
                    style: TextStyle(color: Colors.blue),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 10),
          if (_isFetching)
            const Center(
              child: CircularProgressIndicator(
                color: Colors.yellow,
              ),
            )
          else if (!hasStocks)
            const Center(
              child: Padding(
                padding: EdgeInsets.all(16.0),
                child: Text(
                  'No stocks added yet. Please add some stocks!',
                  style: TextStyle(color: Colors.grey, fontSize: 16),
                  textAlign: TextAlign.center,
                ),
              ),
            )
          else
            Expanded(
              child: ListView.builder(
                itemCount: _allSymbols.length,
                itemBuilder: (context, index) {
                  final symbol = _allSymbols[index];
                  return Dismissible(
                    key: Key(symbol.symbol), // Unique key for each item
                    direction:
                        DismissDirection.endToStart, // Swipe from right to left
                    background: Container(
                      color: Colors.red, // Background color when swiping
                      alignment:
                          Alignment.centerRight, // Align icon to the right
                      padding: const EdgeInsets.symmetric(horizontal: 16),
                      child: const Icon(Icons.delete, color: Colors.white),
                    ),
                    onDismissed: (direction) async {
                      // Delete the stock when dismissed
                      await _deleteStock(symbol);

                      // Show a SnackBar for undo action (optional)
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content: Text('${symbol.companyName} deleted'),
                        ),
                      );
                    },
                    child: stockCard(
                      symbol.companyName,
                      symbol.latestPrice != null
                          ? '\₹${symbol.latestPrice!.toStringAsFixed(2)}'
                          : 'Fetching...',
                      symbol.symbol,
                      () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) =>
                                StockInsightsPage(stockSymbol: symbol.symbol),
                          ),
                        );
                      },
                    ),
                  );
                },
              ),
            ),
        ],
      ),
    );
  }

  Widget stockCard(
      String name, String price, String symbol, VoidCallback onTap) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        padding: const EdgeInsets.all(16.0),
        decoration: BoxDecoration(
          color: Colors.blueGrey[700],
          borderRadius: BorderRadius.circular(8.0),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    name,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    symbol,
                    style: const TextStyle(color: Colors.grey, fontSize: 14),
                  ),
                ],
              ),
            ),
            Text(
              price,
              style: const TextStyle(color: Colors.green, fontSize: 16),
            ),
          ],
        ),
      ),
    );
  }
}
