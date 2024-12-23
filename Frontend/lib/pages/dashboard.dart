import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:ui';
import 'package:intl/intl.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:wealthify_me/auth_service.dart';
import 'filtered_data.dart';
import 'welcome_page.dart';

class Category {
  final String categoryId;
  final String categoryName;
  final String categoryType;

  Category({
    required this.categoryId,
    required this.categoryName,
    required this.categoryType,
  });

  factory Category.fromJson(Map<String, dynamic> json) {
    return Category(
      categoryId: json['category_id'],
      categoryName: json['category_name'],
      categoryType: json['category_type'],
    );
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

  factory Transaction.fromJson(Map<String, dynamic> json) {
    return Transaction(
      userId: json['user_id'],
      transactionId: json['transaction_id'] ?? json['_id'],
      type: json['type'],
      amount: (json['amount'] as num).toDouble(),
      categoryId: json['category_id'],
      description: json['description'],
      transactionDate: DateTime.parse(json['transaction_date']),
    );
  }
}
class TransactionsPage extends StatefulWidget {
  const TransactionsPage({Key? key}) : super(key: key);

  @override
  _TransactionsPageState createState() => _TransactionsPageState();
}

class _TransactionsPageState extends State<TransactionsPage> {
  List<Transaction> _transactions = [];
  List<Category> _categories = [];
  bool _isLoading = true;
  String _errorMessage = '';
  bool _isFirstTime = false;
  bool _isCheckingFirstTime = true; // Add this variable

  // Pagination variables
  int _currentPage = 1;
  int _totalPages = 1;
  final int _pageSize = 10;
  bool _isLoadingMore = false;

  final ScrollController _scrollController = ScrollController();
  final GlobalKey<DisplayBalanceState> _balanceKey = GlobalKey<DisplayBalanceState>();

  @override
  void initState() {
    super.initState();
    _CheckFirstTimeLogin();
    _fetchInitialData();
    
    // Add scroll listener for pagination
    _scrollController.addListener(_onScroll);
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void _onScroll() {
    if (_scrollController.position.pixels == _scrollController.position.maxScrollExtent) {
      _loadMoreTransactions();
    }
  }

  Future<void> _fetchInitialData() async {
    try {
      await _fetchCategories();
      await _fetchTransactions(page: 1);
    } catch (e) {
      if (mounted) {
        setState(() {
          _errorMessage = 'Failed to load initial data: $e';
          _isLoading = false;
        });
      }
    }
  }

  Future<void> _CheckFirstTimeLogin() async { 
    try {
      final response = await AuthService().checkFirstTimeLogin(FirebaseAuth.instance.currentUser!.uid);
      setState(() {
        _isFirstTime = response['firstTime'] as bool? ?? false;
        _isCheckingFirstTime = false; // Mark as finished
      });
    } catch (error) {
      print('Error checking first time login');
    }
  }

  Future<void> _fetchCategories() async {
    try {
      final User? currentUser = FirebaseAuth.instance.currentUser;

      if (currentUser == null) {
        if (mounted) {
          setState(() {
            _errorMessage = 'User not authenticated';
            _isLoading = false;
          });
        }
        return;
      }

      final baseUrl = dotenv.env['SERVER_URL']!;
      final url = Uri.parse("$baseUrl/categories/${currentUser.uid}");

      final response = await http.get(url);

      if (response.statusCode == 200) {
        final List<dynamic> fetchedCategoriesData = json.decode(response.body);

        final List<Category> parsedCategories = fetchedCategoriesData
            .map((categoryData) => Category.fromJson(categoryData))
            .toList();

        if (mounted) {
          setState(() {
            _categories = parsedCategories;
          });
        }
      } else {
        if (mounted) {
          setState(() {
            _errorMessage =
                'Failed to load categories. Status code: ${response.statusCode}';
          });
        }
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          _errorMessage = 'Error fetching categories: $e';
        });
      }
    }
  }

Future<void> _fetchTransactions({int page = 1}) async {
    if (_isLoadingMore && page > 1) return;

    try {
      final User? currentUser = FirebaseAuth.instance.currentUser;
      
      if (currentUser == null) {
        if (mounted) {
          setState(() {
            _errorMessage = 'User not authenticated';
            _isLoading = false;
          });
        }
        return;
      }

      final String userId = currentUser.uid;
      final baseUrl = dotenv.env['SERVER_URL']!;
      final url = Uri.parse("$baseUrl/transactions/usertransactions/$userId?page=$page&limit=$_pageSize");

      setState(() {
        page == 1 ? _isLoading = true : _isLoadingMore = true;
      });

      final response = await http.get(url);

      if (response.statusCode == 200) {
        final Map<String, dynamic> responseData = json.decode(response.body);
        final List<dynamic> fetchedTransactionsData = responseData['transactions'];
        final Map<String, dynamic> pagination = responseData['pagination'];
        
        final List<Transaction> parsedTransactions = fetchedTransactionsData
            .map((transactionData) => Transaction.fromJson(transactionData))
            .toList();
        
        if (mounted) {
          setState(() {
            if (page == 1) {
              _transactions = parsedTransactions;
            } else {
              _transactions.addAll(parsedTransactions);
            }
            _currentPage = pagination['currentPage'];
            _totalPages = pagination['totalPages'];
            _isLoading = false;
            _isLoadingMore = false;
          });
        }
      } else {
        if (mounted) {
          setState(() {
            _errorMessage = 'Failed to load transactions. Status code: ${response.statusCode}';
            _isLoading = false;
            _isLoadingMore = false;
          });
        }
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          _errorMessage = 'Error fetching transactions: $e';
          _isLoading = false;
          _isLoadingMore = false;
        });
      }
    }
  }

  Future<void> _loadMoreTransactions() async {
    if (_currentPage < _totalPages && !_isLoading && !_isLoadingMore) {
      await _fetchTransactions(page: _currentPage + 1);
    }
  }

  void _showAddTransactionDialog() {
  final _formKey = GlobalKey<FormState>();
  String _type = 'Income';
  double _amount = 0.0;
  String? _categoryId;
  String? _description;

  showDialog(
    context: context,
    builder: (BuildContext context) {
      return StatefulBuilder(
        builder: (BuildContext context, StateSetter setState) {
          List<Category> _filteredCategories = _categories
              .where((category) => category.categoryType == _type)
              .toList();

          return BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 5.0, sigmaY: 5.0),
            child: AlertDialog(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16.0),
              ),
              backgroundColor: const Color(0xFF2D2F41),
              title: const Text(
                'Add New Transaction',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                ),
              ),
              content: Form(
                key: _formKey,
                child: SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      DropdownButtonFormField<String>(
                        value: _type,
                        decoration: const InputDecoration(
                          labelText: 'Transaction Type',
                          labelStyle: TextStyle(color: Colors.white),
                          filled: true,
                          fillColor: Color(0xFF42455A),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(10.0),
                            ),
                          ),
                        ),
                        dropdownColor: const Color(0xFF42455A),
                        style: const TextStyle(color: Colors.white),
                        items: ['Income', 'Expense']
                            .map((type) => DropdownMenuItem(
                                  value: type,
                                  child: Row(
                                    children: [
                                      Icon(
                                        type == 'Income'
                                            ? Icons.add
                                            : Icons.remove,
                                        color: Colors.white,
                                      ),
                                      const SizedBox(width: 10),
                                      Text(type),
                                    ],
                                  ),
                                ))
                            .toList(),
                        onChanged: (value) {
                          if (value != null) {
                            setState(() {
                              _type = value;
                              _categoryId = null;
                            });
                          }
                        },
                      ),
                      const SizedBox(height: 20),
                      TextFormField(
                        decoration: const InputDecoration(
                          labelText: 'Amount',
                          prefixIcon: Icon(Icons.attach_money, color: Colors.white),
                          labelStyle: TextStyle(color: Colors.white),
                          filled: true,
                          fillColor: Color(0xFF42455A),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(10.0),
                            ),
                          ),
                        ),
                        keyboardType: const TextInputType.numberWithOptions(
                            decimal: true),
                        style: const TextStyle(color: Colors.white),
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Please enter an amount';
                          }
                          if (double.tryParse(value) == null ||
                              double.parse(value) <= 0) {
                            return 'Enter a valid amount';
                          }
                          return null;
                        },
                        onSaved: (value) {
                          _amount = double.parse(value!);
                        },
                      ),
                      const SizedBox(height: 20),
                      DropdownButtonFormField<String>(
                        decoration: const InputDecoration(
                          labelText: 'Category',
                          prefixIcon: Icon(Icons.category, color: Colors.white),
                          labelStyle: TextStyle(color: Colors.white),
                          filled: true,
                          fillColor: Color(0xFF42455A),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(10.0),
                            ),
                          ),
                        ),
                        dropdownColor: const Color(0xFF42455A),
                        style: const TextStyle(color: Colors.white),
                        value: _categoryId,
                        hint: const Text(
                          'Select a category',
                          style: TextStyle(color: Colors.white70),
                        ),
                        items: _filteredCategories.isNotEmpty
                            ? _filteredCategories
                                .map((category) => DropdownMenuItem(
                                      value: category.categoryId,
                                      child: Text(category.categoryName),
                                    ))
                                .toList()
                            : [
                                const DropdownMenuItem(
                                  value: null,
                                  child: Text(
                                    'No categories available',
                                    style: TextStyle(color: Colors.white70),
                                  ),
                                ),
                              ],
                        onChanged: (value) {
                          setState(() {
                            _categoryId = value;
                          });
                        },
                        validator: (value) {
                          if (value == null) {
                            return 'Please select a category';
                          }
                          return null;
                        },
                      ),
                      const SizedBox(height: 20),
                      TextFormField(
                        decoration: const InputDecoration(
                          labelText: 'Description (Optional)',
                          prefixIcon: Icon(Icons.text_fields, color: Colors.white),
                          labelStyle: TextStyle(color: Colors.white),
                          filled: true,
                          fillColor: Color(0xFF42455A),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(10.0),
                            ),
                          ),
                        ),
                        style: const TextStyle(color: Colors.white),
                        onSaved: (value) {
                          _description = value;
                        },
                      ),
                    ],
                  ),
                ),
              ),
              actions: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    TextButton(
                      child: const Text(
                        'Cancel',
                        style: TextStyle(color: Colors.redAccent),
                      ),
                      onPressed: () {
                        Navigator.of(context).pop();
                      },
                    ),
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.greenAccent,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8.0),
                        ),
                      ),
                      child: const Text('Save Transaction'),
                      onPressed: () {
                        if (_formKey.currentState!.validate()) {
                          _formKey.currentState!.save();
                          _addTransaction(
                            _type,
                            _amount,
                            _categoryId,
                            _description,
                            DateTime.now(),
                          );
                          Navigator.of(context).pop();
                        }
                      },
                    ),
                  ],
                ),
              ],
            ),
          );
        },
      );
    },
  );
}

  Future<void> _addTransaction(String type, double amount, String? categoryId,
      String? description, DateTime transactionDate) async {
    try {
      final User? currentUser = FirebaseAuth.instance.currentUser;
      

      if (currentUser == null) {
        _showErrorSnackBar('User not authenticated');
        return;
      }

      final baseUrl = dotenv.env['SERVER_URL']!;
      final url = Uri.parse("$baseUrl/transactions/createtransaction");

      final response = await http.post(
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        body: json.encode({
          'user_id': currentUser.uid,
          'type': type,
          'amount': amount,
          'category_id': categoryId,
          'description': description,
          'transaction_date': DateTime.now().toIso8601String(),
        }),
      );

      if (response.statusCode == 201) {
        // Refresh transactions
        await _fetchTransactions();

        // Refresh balance
        _balanceKey.currentState?.fetchBalance();

        // Show success message
        _showSuccessSnackBar('Transaction added successfully');
      } else {
        _showErrorSnackBar('Failed to add transaction');
      }
    } catch (e) {
      _showErrorSnackBar('Error adding transaction: $e');
    }
  }

  void _showSuccessSnackBar(String message) {
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(message),
          backgroundColor: Colors.green,
        ),
      );
    }
  }

  void _showErrorSnackBar(String message) {
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(message),
          backgroundColor: Colors.red,
        ),
      );
    }
  }

  Future<void> _fetchDataAndShowDialog() async {
    final user = FirebaseAuth.instance.currentUser;

    final url = 'https://serval-generous-eagle.ngrok-free.app/llm/summary/${user?.uid}'; // Replace with your URL

    try {
      // Make the GET request
      final response = await http.get(Uri.parse(url));

      if (response.statusCode == 200) {
        final Map<String, dynamic> jsonData = jsonDecode(response.body);
        final data = jsonData['response'];

        _showResponseDialog(data.toString()); 
      } else {
        _showResponseDialog('Failed to load data. Status code: ${response.statusCode}');
      }
    } catch (error) {
      _showResponseDialog('An error occurred: $error');
    }
  }

void _showResponseDialog(String responseMessage) {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return AlertDialog(
        backgroundColor: Color(0xFF2C3E50), // Dark background for a sleek look
        title: Text(
          'Summary',
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
            fontSize: 18,
          ),
        ),
        content: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              responseMessage,
              style: TextStyle(
                color: Colors.white,
                fontSize: 16,
                height: 1.5, // Line height for better readability
              ),
            ),
          ),
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(15.0), // Rounded corners for the dialog
        ),
        actions: <Widget>[
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
            },
            child: Text(
              'Close',
              style: TextStyle(
                color: Color(0xFF3498DB), // Blue color for the button
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      );
    },
  );
}

@override
Widget build(BuildContext context) {
  if (_isCheckingFirstTime) {
    return Scaffold(
      body: Center(
        child: CircularProgressIndicator(), // Show loading until check completes
      ),
    );
  }
  if(_isFirstTime) {
    return WelcomePage();
  }
  return Scaffold(
    appBar: AppBar(
      title: Text('My Transactions'),
      actions: [
        IconButton(
            icon: Icon(Icons.summarize_outlined, color: Colors.white),
            onPressed: _fetchDataAndShowDialog, // Call the function when pressed
          ),
      ],
    ),
    body: Column(
      children: [
        // Filtered data widget
        DisplayBalance(key: _balanceKey),
        // Expanded widget to contain the list
        Expanded(
          child: _buildBody(),
        ),
      ],
    ),
    floatingActionButton: Padding(
      padding: const EdgeInsets.all(0.0),
      child: FloatingActionButton(
        onPressed: _showAddTransactionDialog,
        child: Icon(Icons.add),
        backgroundColor: Colors.blue,
      ),
    ),
  );
}


  Widget _buildBody() {
    // Show loading indicator while fetching initial data
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
              onPressed: _fetchInitialData,
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
              color: Color.fromARGB(255, 255, 255, 255)
            ),
            SizedBox(height: 20),
            Text(
              'No transactions found',
              style: TextStyle(
                color: const Color.fromARGB(255, 255, 253, 253),
                fontSize: 18,
              ),
            ),
            SizedBox(height: 10),
            Text(
              'Start adding transactions to track your financial activity',
              style: TextStyle(
                color: const Color.fromARGB(255, 255, 255, 255),
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      );
    }

    // Display transactions in a ListView with pagination
    return Column(
      children: [
        Expanded(
          child: ListView.builder(
            controller: _scrollController,
            itemCount: _transactions.length + (_isLoadingMore ? 1 : 0),
            itemBuilder: (context, index) {
              // Check if we've reached the end and are loading more
              if (index == _transactions.length) {
                return Center(child: CircularProgressIndicator());
              }

              final transaction = _transactions[index];
              return Card(
                elevation: 4,
                color: Color.fromARGB(255, 5, 2, 12),
                margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                child: ListTile(
                  title: Text(
                    transaction.description ?? 'Unnamed Transaction',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: Colors.white
                    ),
                  ),
                  subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Amount: ${transaction.amount.toStringAsFixed(2)}',
                        style: TextStyle(
                          fontWeight: FontWeight.w900,
                          color: Color.fromARGB(255, 162, 215, 164),
                          fontSize: 24
                        ),
                      ),
                      Text('Date: ${_formatDate(transaction.transactionDate)}',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 15,
                          fontWeight: FontWeight.bold
                        ),
                      ),
                    ],
                  ),
                  trailing: Text(
                    transaction.type,
                    style: TextStyle(
                      color: transaction.type == 'Income' ? const Color.fromARGB(255, 166, 221, 167) : Color.fromARGB(255, 254, 161, 154),
                      fontWeight: FontWeight.bold,
                      fontSize: 15
                    ),
                  ),
                ),
              );
            },
          ),
        ),
        // Pagination indicator
        if (_currentPage < _totalPages)
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              'Page $_currentPage of $_totalPages',
              style: TextStyle(color: Colors.white),
            ),
          ),
      ],
    );
  }


String _formatDate(DateTime date) {
  //at?
  return DateFormat('dd/MM/yyyy hh:mm a').format(date.toLocal());
}
}
