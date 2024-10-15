import 'package:flutter/material.dart';
import 'package:wealthify_me/pages/login.dart';
import 'package:wealthify_me/pages/sign_up_page.dart';

class AuthPage extends StatefulWidget {
  const AuthPage({super.key});

  @override
  State<AuthPage> createState() => _AuthPageState();
}

class _AuthPageState extends State<AuthPage> {
  bool showLoginPage = true; 

  @override
  Widget build(BuildContext context) {
    if (showLoginPage) {
      return LoginPage(showSignUpPage: () => setState(() => showLoginPage = !showLoginPage));
    } else {
      return SignUpPage(showLoginPage: () => setState(() => showLoginPage = !showLoginPage));
    }

  }
}