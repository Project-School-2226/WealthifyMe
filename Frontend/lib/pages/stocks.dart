import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:wealthify_me/auth_service.dart';
import 'package:wealthify_me/pages/stocks_insights_page.dart';
import '../models/stock_symbol.dart';
import 'stock_search_page.dart';

class Stocks extends StatefulWidget {
   // Pass user_id to this page

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
  }

  Future<void> _fetchUserStocks() async {
    setState(() {
      _isFetching = true; // Show loading state
    });

    try {
      final url = Uri.parse(
          'https://literate-magpie-separately.ngrok-free.app/stocks/getUserStocks?user_id=${userId}');
      final response = await http.get(url, headers: {"Content-Type": "application/json"});

      if (response.statusCode == 200) {
        final data = json.decode(response.body);

        if (data['status'] == 'success') {
          final fetchedStocks = (data['stocks'] as List)
              .map((json) => StockSymbol.fromJson(json))
              .toList();

          setState(() {
            _allSymbols = fetchedStocks;
          });

          // Fetch prices for all stocks
          await StockSymbol.fetchPricesForStocks(_allSymbols);
        }
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
    // Filter out already added stocks
    final newStocks = selectedStocks
        .where((stock) => !_allSymbols.contains(stock))
        .toList();

    if (newStocks.isNotEmpty) {
      setState(() {
        _allSymbols.addAll(newStocks);
      });

      // Fetch prices for newly added stocks
      await StockSymbol.fetchPricesForStocks(newStocks);
    }
  }

  @override
  Widget build(BuildContext context) {
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
            icon: const Icon(Icons.refresh, color: Colors.yellow),
            onPressed: _fetchLatestPrices, // Refresh all stock prices
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
          else
            Expanded(
              child: ListView.builder(
                itemCount: _allSymbols.length,
                itemBuilder: (context, index) {
                  final symbol = _allSymbols[index];
                  return stockCard(
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
