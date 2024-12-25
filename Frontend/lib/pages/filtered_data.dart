import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class DisplayBalance extends StatefulWidget {
  const DisplayBalance({Key? key}) : super(key: key);
  
  @override
  DisplayBalanceState createState() => DisplayBalanceState();
}

class DisplayBalanceState extends State<DisplayBalance> {
  String? balance;
  final baseUrl = dotenv.env['SERVER_URL'];
  final currentUser = FirebaseAuth.instance.currentUser;

  @override
  void initState() {
    super.initState();
    fetchBalance();
  }

  Future<void> fetchBalance() async {
    if (currentUser == null) return;
    final url = Uri.parse('$baseUrl/balance/${currentUser!.uid}');
    try {
      final response = await http.get(url);
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        if (mounted) {
          setState(() {
            balance = data['balance']['balance'].toString();
          });
        }
      } else {
        if (mounted) {
          setState(() {
            balance = 'Error';
          });
        }
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          balance = 'Error';
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10.0),
      child: Center(
        child: Container(
          width: 400,
          height: 150,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: LinearGradient(
              colors: [
                const Color.fromARGB(255, 194, 178, 87),
                Color.fromARGB(255, 12, 22, 62)
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.3),
                blurRadius: 20,
                offset: Offset(0, 10),
              )
            ],
          ),
          child: Stack(
            children: [
              Positioned(
                top: 20,
                right: 20,
                child: Icon(
                  Icons.account_balance_wallet,
                  color: Colors.white.withOpacity(0.3),
                  size: 60,
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Current Balance',
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.8),
                        fontSize: 16,
                        fontWeight: FontWeight.w300,
                      ),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      balance == null
                          ? 'Loading...'
                          : balance == 'Error'
                              ? 'Error'
                              : '₹$balance',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 32,
                        fontWeight: FontWeight.bold,
                        letterSpacing: 1.2,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}