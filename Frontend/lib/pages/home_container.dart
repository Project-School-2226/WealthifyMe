import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:wealthify_me/pages/dashboard.dart';
import 'package:wealthify_me/pages/recommendations.dart';
import 'package:wealthify_me/pages/chat.dart';
import 'package:wealthify_me/pages/profile.dart';

class HomeContainer extends StatefulWidget {
  const HomeContainer({super.key});
  @override
  State<HomeContainer> createState() => _HomeContainerState();
}

class _HomeContainerState extends State<HomeContainer> {
  int _selectedIndex = 0;

  final List<Widget> _pages = [
    TransactionsPage(),
    const Recommendations(),
    Chat(),
    Profile(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          _pages[_selectedIndex],
          Align(
            alignment: Alignment.bottomCenter,
            child: Padding(
              padding: const EdgeInsets.only(bottom: 5, left: 16, right: 16),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(24),
                child: BackdropFilter(
                  filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                  child: Container(
                    height: 65,
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.2),
                      borderRadius: BorderRadius.circular(24),
                      border: Border.all(
                        color: Colors.white.withOpacity(0.2),
                        width: 1.5,
                      ),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        _buildNavItem(0, Icons.dashboard, "Dashboard"),
                        _buildNavItem(1, Icons.recommend, "Recommendations"),
                        _buildNavItem(2, Icons.chat, "Chat"),
                        _buildNavItem(3, Icons.person, "Profile"),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildNavItem(int index, IconData icon, String label) {
    return GestureDetector(
      onTap: () => setState(() => _selectedIndex = index),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            icon,
            color: _selectedIndex == index ? Colors.white : Colors.white60,
            size: 24,
          ),
          const SizedBox(height: 4),
          Text(
            label,
            style: TextStyle(
              color: _selectedIndex == index ? Colors.white : Colors.white60,
              fontSize: 12,
            ),
          ),
        ],
      ),
    );
  }
}