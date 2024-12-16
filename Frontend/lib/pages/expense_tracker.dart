import 'package:flutter/material.dart';

void main() {
  runApp(const ExpenseTrackerApp());
}

class ExpenseTrackerApp extends StatelessWidget {
  const ExpenseTrackerApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: ExpenseTrackerHome(),
    );
  }
}

class ExpenseTrackerHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        elevation: 0,
        title: const Text(
          "Daily Expense Tracker",
          style: TextStyle(color: Colors.white, fontSize: 20),
        ),
        actions: [
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.search, color: Colors.white),
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Balance Section
            const Text(
              "Balance",
              style: TextStyle(color: Colors.white, fontSize: 16),
            ),
            const SizedBox(height: 8),
            const Text(
              "₹1,11,111",
              style: TextStyle(
                  color: Colors.white,
                  fontSize: 32,
                  fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),

            // Chart and Filters
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.grey[900],
                borderRadius: BorderRadius.circular(12),
              ),
              child: Column(
                children: [
                  // Tabs
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      _ChartTab(label: "DAILY", isSelected: true),
                      const SizedBox(width: 16),
                      _ChartTab(label: "MONTHLY", isSelected: false),
                      const SizedBox(width: 16),
                      _ChartTab(label: "YEARLY", isSelected: false),
                    ],
                  ),
                  const SizedBox(height: 16),

                  // Placeholder for Chart
                  Container(
                    height: 150,
                    decoration: BoxDecoration(
                      color: Colors.black,
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Center(
                      child: Text(
                        "Graph Placeholder",
                        style: TextStyle(color: Colors.grey[700]),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),

            // Transactions
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: const [
                Text(
                  "Transactions",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  "See all",
                  style: TextStyle(color: Colors.blue, fontSize: 14),
                ),
              ],
            ),
            const SizedBox(height: 16),

            // Transaction List
            Expanded(
              child: ListView(
                children: const [
                  _TransactionTile(
                    label: "Stock Market Profit",
                    amount: "+₹6000",
                    isExpense: false,
                  ),
                  _TransactionTile(
                    label: "Netflix",
                    amount: "-₹499",
                    isExpense: true,
                  ),
                  _TransactionTile(
                    label: "Salary",
                    amount: "+₹30000",
                    isExpense: false,
                  ),
                  _TransactionTile(
                    label: "Spotify",
                    amount: "-₹199",
                    isExpense: true,
                  ),
                  _TransactionTile(
                    label: "Crypto Profit",
                    amount: "+₹5000",
                    isExpense: false,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),

      // Floating Action Button
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        backgroundColor: Colors.blue,
        child: const Icon(Icons.add, color: Colors.white),
      ),

      // Bottom Navigation
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Colors.grey[900],
        selectedItemColor: Colors.blue,
        unselectedItemColor: Colors.white,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: "Home",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.analytics),
            label: "Stats",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: "Profile",
          ),
        ],
      ),
    );
  }
}

class _ChartTab extends StatelessWidget {
  final String label;
  final bool isSelected;

  const _ChartTab({
    required this.label,
    required this.isSelected,
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      label,
      style: TextStyle(
        color: isSelected ? Colors.blue : Colors.grey,
        fontSize: 16,
        fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
      ),
    );
  }
}

class _TransactionTile extends StatelessWidget {
  final String label;
  final String amount;
  final bool isExpense;

  const _TransactionTile({
    required this.label,
    required this.amount,
    required this.isExpense,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 8),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.grey[850],
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            label,
            style: const TextStyle(color: Colors.white, fontSize: 16),
          ),
          Text(
            amount,
            style: TextStyle(
              color: isExpense ? Colors.red : Colors.green,
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
        ],
      ),
    );
  }
}
