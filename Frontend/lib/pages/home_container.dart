import 'package:flutter/material.dart';
import 'package:wealthify_me/pages/chat.dart';
import 'package:wealthify_me/pages/dashboard.dart';
import 'package:wealthify_me/pages/recommendations.dart';
import 'package:wealthify_me/pages/stocks.dart';

class HomeContainer extends StatefulWidget {
  @override
  _HomeContainerState createState() => _HomeContainerState();
}

class _HomeContainerState extends State<HomeContainer> {
  int _selectedIndex = 0;

  final List<Widget> _pages = [
    TransactionsPage(),
    const Recommendations(),
    Chat(),
    Stocks(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: _selectedIndex,
        children: [
          for (final page in _pages) page,
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: (index) => setState(() => _selectedIndex = index),
        backgroundColor: Colors.black,
        type: BottomNavigationBarType.fixed,
        selectedItemColor: Colors.white,
        unselectedItemColor: Colors.white60,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.dashboard),
            label: 'Dashboard',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.recommend),
            label: 'Recommendations',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.chat),
            label: 'Chat',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.show_chart),
            label: 'Stocks',
          ),
        ],
      ),
    );
  }
}
