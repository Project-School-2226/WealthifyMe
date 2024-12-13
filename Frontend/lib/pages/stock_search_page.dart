import 'package:flutter/material.dart';
import 'dart:convert';
import '../models/stock_symbol.dart';
import 'package:wealthify_me/auth_service.dart';
class SearchPage extends StatefulWidget {
  const SearchPage({Key? key}) : super(key: key);

  @override
  State<SearchPage> createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  final TextEditingController _searchController = TextEditingController();
  List<StockSymbol> _allSymbols = [];
  List<StockSymbol> _filteredSymbols = [];
  List<StockSymbol> _selectedSymbols = []; // To track selected stocks
  bool _isSearching = false;

  @override
  void initState() {
    super.initState();
    _loadSymbols();
    _searchController.addListener(_onSearchChanged);
  }

  Future<void> _loadSymbols() async {
    String jsonString =
        await DefaultAssetBundle.of(context).loadString('assets/symbols.json');
    List<dynamic> jsonList = json.decode(jsonString);

    setState(() {
      _allSymbols = jsonList.map((json) => StockSymbol.fromJson(json)).toList();
    });
  }

  void _onSearchChanged() {
    final searchText = _searchController.text.toUpperCase();
    setState(() {
      _isSearching = searchText.isNotEmpty;
      if (_isSearching) {
        _filteredSymbols = _allSymbols
            .where((symbol) => symbol.symbol.startsWith(searchText))
            .toList();
      } else {
        _filteredSymbols = [];
      }
    });
  }

  void _toggleSelection(StockSymbol symbol) {
    setState(() {
      if (_selectedSymbols.contains(symbol)) {
        _selectedSymbols.remove(symbol);
      } else {
        _selectedSymbols.add(symbol);
      }
    });
  }

  bool _isSelected(StockSymbol symbol) {
    return _selectedSymbols.contains(symbol);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Add Stocks',
          style: TextStyle(
            color: Colors.yellow,
          ),
        ),
        backgroundColor: Colors.black,
        elevation: 0,
      ),
      backgroundColor: Colors.black,
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: TextField(
              controller: _searchController,
              style: const TextStyle(color: Colors.white),
              decoration: InputDecoration(
                hintText: 'Search stocks...',
                hintStyle: TextStyle(color: Colors.grey),
                filled: true,
                fillColor: Colors.grey[900],
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                  borderSide: BorderSide.none,
                ),
                prefixIcon: Icon(Icons.search, color: Colors.grey),
              ),
            ),
          ),
          if (_isSearching)
            Expanded(
              child: Container(
                color: Colors.black,
                child: ListView.builder(
                  itemCount: _filteredSymbols.length,
                  itemBuilder: (context, index) {
                    final symbol = _filteredSymbols[index];
                    return ListTile(
                      title: Text(
                        symbol.symbol,
                        style: const TextStyle(color: Colors.white),
                      ),
                      subtitle: Text(
                        symbol.companyName,
                        style: const TextStyle(color: Colors.grey),
                      ),
                      trailing: Icon(
                        _isSelected(symbol)
                            ? Icons.check_circle
                            : Icons.circle_outlined,
                        color: _isSelected(symbol) ? Colors.green : Colors.grey,
                      ),
                      onTap: () {
                        _toggleSelection(symbol);
                      },
                    );
                  },
                ),
              ),
            ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: ElevatedButton(
              onPressed: _selectedSymbols.isNotEmpty
                  ? () async {
          await AuthService().addStockSymbolsToBackend(_selectedSymbols.map((e) => e.symbol).toList());
                      Navigator.pop(context, _selectedSymbols);
                    }
                  : null, // Disable button if no stocks are selected
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.yellow,
                foregroundColor: Colors.black,
                disabledBackgroundColor: Colors.grey,
              ),
              child: const Text('Done'),
            ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }
}
