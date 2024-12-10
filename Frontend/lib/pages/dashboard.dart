import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:intl/intl.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class TransactionsPage extends StatefulWidget {
  const TransactionsPage({Key? key}) : super(key: key);

  @override
  _TransactionsPageState createState() => _TransactionsPageState();
}

class _TransactionsPageState extends State<TransactionsPage> {
  // List to store transactions matching the new schema
  List<Transaction> _transactions = [];
  
  // Boolean to track loading state
  bool _isLoading = true;
  
  // Error message variable
  String _errorMessage = '';

  @override
  void initState() {
    super.initState();
    // Fetch transactions when the page loads
    _fetchTransactions();
  }

  Future<void> _fetchTransactions() async {
    try {
      // Get the current authenticated user
      final User? currentUser = FirebaseAuth.instance.currentUser;
      print(currentUser.toString());
      
      // Ensure user is authenticated
      if (currentUser == null) {
        setState(() {
          _errorMessage = 'User not authenticated';
          _isLoading = false;
        });
        return;
      }

      // Get the user's Firebase UID
      final String userId = currentUser.uid;

      final baseUrl = dotenv.env['SERVER_URL']!;

      // API endpoint URL with user ID parameter
      final url = Uri.parse(
        "$baseUrl/transactions/usertransactions/$userId"
      );

      // Make GET request 
      final response = await http.get(url);

      // Check if the request was successful
      if (response.statusCode == 200) {
        // Parse the JSON response
        final List<dynamic> fetchedTransactionsData = json.decode(response.body);
        
        // Convert raw data to Transaction objects
        final List<Transaction> parsedTransactions = fetchedTransactionsData
            .map((transactionData) => Transaction.fromJson(transactionData))
            .toList();
        
        // Update state with fetched transactions
        setState(() {
          _transactions = parsedTransactions;
          _isLoading = false;
        });
      } else {
        // Handle error scenario
        setState(() {
          _errorMessage = 'Failed to load transactions. Status code: ${response.statusCode}';
          _isLoading = false;
        });
      }
    } catch (e) {
      // Handle network or parsing errors
      setState(() {
        _errorMessage = 'Error fetching transactions: $e';
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My Transactions'),
        actions: [
          // Optional: Add a refresh button
          IconButton(
            icon: Icon(Icons.refresh),
            onPressed: _fetchTransactions,
          )
        ],
      ),
      body: _buildBody(),
    );
  }

  Widget _buildBody() {
    // Show loading indicator while fetching data
    if (_isLoading) {
      return Center(child: CircularProgressIndicator());
    }

    // Show error message if something went wrong
    if (_errorMessage.isNotEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              _errorMessage,
              style: TextStyle(color: Colors.red),
              textAlign: TextAlign.center,
            ),
            ElevatedButton(
              onPressed: _fetchTransactions,
              child: Text('Retry'),
            )
          ],
        ),
      );
    }

    // No transactions found
    if (_transactions.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              Icons.wallet_outlined, 
              size: 100, 
              color: Colors.grey[400]
            ),
            SizedBox(height: 20),
            Text(
              'No transactions found',
              style: TextStyle(
                color: Colors.grey[600],
                fontSize: 18,
              ),
            ),
            SizedBox(height: 10),
            Text(
              'Start adding transactions to track your financial activity',
              style: TextStyle(
                color: Colors.grey[500],
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      );
    }

    // Display transactions in a ListView
    return ListView.builder(
      itemCount: _transactions.length,
      itemBuilder: (context, index) {
        final transaction = _transactions[index];
        return Card(
          elevation: 4,
          margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          child: ListTile(
            title: Text(
              transaction.description ?? 'Unnamed Transaction',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: transaction.type == 'Income' ? Colors.green : Colors.red,
              ),
            ),
            subtitle: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Amount: \$${transaction.amount.toStringAsFixed(2)}',
                  style: TextStyle(
                    fontWeight: FontWeight.w500,
                  ),
                ),
                Text('Date: ${_formatDate(transaction.transactionDate)}'),
                if (transaction.categoryId != null)
                  Text(
                    'Category: ${transaction.categoryId}',
                    style: TextStyle(
                      color: Colors.grey[700],
                    ),
                  ),
              ],
            ),
            trailing: Text(
              transaction.type,
              style: TextStyle(
                color: transaction.type == 'Income' ? Colors.green : Colors.red,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        );
      },
    );
  }

  // Helper method to format date
  String _formatDate(DateTime date) {
    return DateFormat('MM/dd/yyyy').format(date);
  }
}


class Transaction {
  final String userId;
  final String transactionId;
  final String type;
  final double amount;
  final String? categoryId;
  final String? description;
  final DateTime transactionDate;

  Transaction({
    required this.userId,
    required this.transactionId,
    required this.type,
    required this.amount,
    this.categoryId,
    this.description,
    required this.transactionDate,
  });

  // Factory constructor to create a Transaction from a JSON map
  factory Transaction.fromJson(Map<String, dynamic> json) {
    return Transaction(
      userId: json['user_id'],
      transactionId: json['transaction_id'],
      type: json['type'],
      amount: (json['amount'] as num).toDouble(),
      categoryId: json['category_id'],
      description: json['description'],
      transactionDate: DateTime.parse(json['transaction_date']),
    );
  }
}