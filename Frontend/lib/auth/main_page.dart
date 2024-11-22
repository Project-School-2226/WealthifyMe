import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:wealthify_me/auth/auth_page.dart';
import 'package:wealthify_me/pages/dashboard.dart';
import 'package:wealthify_me/pages/home_container.dart';

class MainPage extends StatelessWidget {
  const MainPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: StreamBuilder<User?>(
          stream: FirebaseAuth.instance.authStateChanges(),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return const HomeContainer();
            } else {
              return const AuthPage();
            }
          }),
    );
  }
}
