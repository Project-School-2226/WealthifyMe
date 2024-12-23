// main_page.dart
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:wealthify_me/auth/auth_page.dart';
import 'package:wealthify_me/auth_service.dart';
import 'package:wealthify_me/pages/home_container.dart';
import 'package:wealthify_me/pages/welcome_page.dart';

class MainPage extends StatelessWidget {
  const MainPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: StreamBuilder<User?>(
        stream: FirebaseAuth.instance.authStateChanges(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (!snapshot.hasData) {
            return const AuthPage();
          }

          // User is logged in, check if it's their first time
          return _CheckFirstTimeLogin(user: snapshot.data!);
        },
      ),
    );
  }
}

// Separate widget to handle first-time login check
class _CheckFirstTimeLogin extends StatelessWidget {
  final User user;

  const _CheckFirstTimeLogin({required this.user});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<Map<String, dynamic>>(
      future: AuthService().checkFirstTimeLogin(user.uid),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        }

        // If there's an error checking first-time status, default to HomeContainer
        if (snapshot.hasError || snapshot.data == null) {
          debugPrint('Error checking first time login: ${snapshot.error}');
          return  HomeContainer();
        }

        final isFirstTime = snapshot.data!['firstTime'] as bool? ?? false;
        return isFirstTime ? const WelcomePage() : HomeContainer();
      },
    );
  }
}