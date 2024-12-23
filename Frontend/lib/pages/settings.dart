import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class Category {
  final String categoryId;
  final String categoryName;
  final String categoryType;
  double budget;

  Category({
    required this.categoryId,
    required this.categoryName,
    required this.categoryType,
    this.budget = 0.0,
  });

  factory Category.fromJson(Map<String, dynamic> json) {
    return Category(
      categoryId: json['category_id'] ?? '',
      categoryName: json['category_name'] ?? '',
      categoryType: json['category_type'] ?? '',
      budget: (json['budget'] ?? 0.0).toDouble(),
    );
  }
}

class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  State<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  final String _defaultProfileImage = 'assets/default_profile.png';
  String _username = 'Loading...';
  String _profileImageUrl = '';
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _fetchUserProfile();
  }

  Future<void> _fetchUserProfile() async {
    try {
      final user = FirebaseAuth.instance.currentUser;
      if (user != null) {
        setState(() {
          _username = user.displayName ?? 'No Username';
          _profileImageUrl = user.photoURL ?? '';
          _isLoading = false;
        });
      }
    } catch (e) {
      setState(() {
        _username = 'Failed to load username';
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Settings'),
        elevation: 0,
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : SingleChildScrollView(
              child: Column(
                children: [
                  const SizedBox(height: 20),
                  _buildProfileCard(),
                  const SizedBox(height: 30),
                  const Divider(),
                  _buildSettingsOptions(),
                ],
              ),
            ),
    );
  }

  Widget _buildProfileCard() {
    return Container(
      padding: const EdgeInsets.all(16),
      margin: const EdgeInsets.symmetric(horizontal: 16),
      decoration: BoxDecoration(
        color: Theme.of(context).cardColor,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.2),
            spreadRadius: 1,
            blurRadius: 6,
            offset: const Offset(0, 3),
          ),
        ],
      ),
      child: Column(
        children: [
          CircleAvatar(
            radius: 50,
            backgroundImage: _profileImageUrl.isNotEmpty
                ? NetworkImage(_profileImageUrl)
                : AssetImage(_defaultProfileImage) as ImageProvider,
            backgroundColor: Colors.grey[300],
          ),
          const SizedBox(height: 10),
          Text(
            _username,
            style: Theme.of(context).textTheme.titleLarge,
          ),
        ],
      ),
    );
  }

  Widget _buildSettingsOptions() {
    return Column(
      children: [
        ListTile(
          leading: const Icon(Icons.edit, color: Colors.blue),
          title: Text('Edit Profile',
              style: TextStyle(color: Colors.white)),
          trailing: const Icon(Icons.arrow_forward_ios, color: Colors.white,),
          onTap: () => Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const EditProfilePage()),
          ),
        ),
        const Divider(),
        ListTile(
          leading: const Icon(Icons.flag, color: Colors.orange),
          title: Text('Set Up Goals',
              style: TextStyle(color: Colors.white)),
          trailing: const Icon(Icons.arrow_forward_ios),
          onTap: () => Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const SetupGoalsPage()),
          ),
        ),
      ],
    );
  }
}

class EditProfilePage extends StatelessWidget {
  const EditProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Edit Profile', style: TextStyle(color: Colors.white),)),
      body: const Center(child: Text('Edit Profile Page')),
    );
  }
}

class SetupGoalsPage extends StatefulWidget {
  const SetupGoalsPage({super.key});

  @override
  State<SetupGoalsPage> createState() => _SetupGoalsPageState();
}

class _SetupGoalsPageState extends State<SetupGoalsPage> {
  final List<Category> _categories = [];
  final TextEditingController _budgetController = TextEditingController();
  final Map<String, double> _updatedBudgets = {};
  bool _isLoading = true;
  String _errorMessage = '';

  @override
  void initState() {
    super.initState();
    _fetchCategories();
  }

  @override
  void dispose() {
    _budgetController.dispose();
    super.dispose();
  }

  Future<void> _fetchCategories() async {
    try {
      final user = FirebaseAuth.instance.currentUser;
      if (user == null) throw Exception('User not authenticated');

      final baseUrl = dotenv.env['SERVER_URL'];
      if (baseUrl == null)
        throw Exception('SERVER_URL not found in environment');

      final response = await http.get(
        Uri.parse('$baseUrl/categories/${user.uid}'),
      );

      if (!mounted) return;

      if (response.statusCode == 200) {
        final List<dynamic> data = json.decode(response.body);
        setState(() {
          _categories.clear();
          _categories.addAll(data
              .map((json) => Category.fromJson(json))
              .where((cat) => cat.categoryType == 'Expense'));
          _isLoading = false;
        });
      } else {
        throw Exception('Failed to load categories: ${response.statusCode}');
      }
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _errorMessage = e.toString();
        _isLoading = false;
      });
    }
  }

  void _updateLocalBudget(String categoryName, double budget) {
    setState(() {
      _updatedBudgets[categoryName] = budget;
      final index =
          _categories.indexWhere((cat) => cat.categoryName == categoryName);
      if (index != -1) {
        _categories[index].budget = budget;
      }
    });
  }

  Future<void> _submitAllBudgets() async {
    if (_updatedBudgets.isEmpty) return;

    setState(() => _isLoading = true);

    try {
      final user = FirebaseAuth.instance.currentUser;
      if (user == null) throw Exception('User not authenticated');

      final baseUrl = dotenv.env['SERVER_URL'];
      if (baseUrl == null) throw Exception('SERVER_URL not found in environment');

      final budgetData = _updatedBudgets.entries.map((e) => {
        'category_name': e.key,
        'amount': e.value,
      }).toList();

      final response = await http.post(
        Uri.parse('$baseUrl/api/saveUserBudget'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'user_id': user.uid,
          'budget': budgetData,
        }),
      );

      if (!mounted) return;

      if (response.statusCode == 200 || response.statusCode == 201) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Budgets saved successfully')),
        );
        _updatedBudgets.clear();
      } else {
        throw Exception('Failed to save budgets: ${response.statusCode}');
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: ${e.toString()}')),
      );
    } finally {
      setState(() => _isLoading = false);
    }
  }
 
  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return const Scaffold(
        body: Center(child: CircularProgressIndicator()),
      );
    }

    return Scaffold(
      backgroundColor: Colors.blueGrey[50], // Light soft blue // Peach color // Muted coral yellow
      appBar: AppBar(
        title: const Text('Budget Goals'),
        iconTheme: IconThemeData(color: Colors.white),
      ),
      body: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              borderRadius: const BorderRadius.only(
                bottomLeft: Radius.circular(24),
                bottomRight: Radius.circular(24),
              ),
            ),
            child: Text(
              'Set monthly budget limits for your expense categories',
              style: Theme.of(context).textTheme.bodyLarge,
              textAlign: TextAlign.center,
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: _categories.length,
              padding: const EdgeInsets.all(16),
              itemBuilder: (context, index) {
                final category = _categories[index];
                final isUpdated = _updatedBudgets.containsKey(category.categoryName);
                
                return Container(
                  margin: const EdgeInsets.only(bottom: 12),
                  decoration: BoxDecoration(
                    color: Theme.of(context).cardColor,
                    borderRadius: BorderRadius.circular(16),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.grey.withOpacity(0.1),
                        spreadRadius: 1,
                        blurRadius: 8,
                        offset: const Offset(0, 2),
                      ),
                    ],
                  ),
                  child: ListTile(
                    contentPadding: const EdgeInsets.symmetric(
                      horizontal: 20,
                      vertical: 8,
                    ),
                    leading: CircleAvatar(
                      backgroundColor: isUpdated 
                          ? Colors.green.withOpacity(0.2)
                          : Theme.of(context).colorScheme.primary.withOpacity(0.2),
                      child: Icon(
                        Icons.attach_money,
                        color: isUpdated 
                            ? Colors.green
                            : Theme.of(context).colorScheme.primary,
                      ),
                    ),
                    title: Text(
                      category.categoryName,
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    subtitle: Text(
                      '\$${category.budget.toStringAsFixed(2)}',
                      style: TextStyle(
                        color: isUpdated ? Colors.green : null,
                        fontSize: 16,
                      ),
                    ),
                    trailing: IconButton(
                      icon: const Icon(Icons.edit),
                      onPressed: () => _showBudgetDialog(category),
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
      floatingActionButton: _updatedBudgets.isNotEmpty
          ? FloatingActionButton.extended(
              onPressed: _submitAllBudgets,
              backgroundColor: Theme.of(context).colorScheme.primary,
              label: const Text('Save All Budgets'),
              icon: const Icon(Icons.save),
            )
          : null,
    );
  }

  Future<void> _showBudgetDialog(Category category) async {
    _budgetController.text = category.budget.toString();
    return showDialog(
      context: context,
      builder: (context) => AlertDialog(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        title: Text(
          'Set Budget for ${category.categoryName}',
          style: const TextStyle(fontSize: 18),
        ),
        content: TextField(
          controller: _budgetController,
          keyboardType: const TextInputType.numberWithOptions(decimal: true),
          decoration: InputDecoration(
            hintText: 'Enter budget amount',
            prefixText: '\$',
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
              borderSide: BorderSide(
                color: Theme.of(context).colorScheme.primary,
                width: 2,
              ),
            ),
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text(
              'Cancel',
              style: TextStyle(
                color: Theme.of(context).colorScheme.secondary,
              ),
            ),
          ),
          FilledButton(
            onPressed: () {
              final newBudget = double.tryParse(_budgetController.text);
              if (newBudget != null) {
                _updateLocalBudget(category.categoryName, newBudget);
                Navigator.pop(context);
              }
            },
            child: const Text('Save'),
          ),
        ],
      ),
    );
  }
}