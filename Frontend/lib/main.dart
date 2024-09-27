import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:wealthify_me/components/login.dart';
import 'package:wealthify_me/expense_tracker.dart';
import 'package:wealthify_me/auth_service.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: StreamBuilder(
        stream: AuthService().userStream,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return const ExpenseTracker();
          } else {
            return const LoginPage();
          }
        },
      ),
    );
  }
}
