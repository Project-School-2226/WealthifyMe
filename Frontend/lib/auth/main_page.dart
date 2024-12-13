import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:wealthify_me/auth/auth_page.dart';
import 'package:wealthify_me/pages/dashboard.dart';
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
          if (snapshot.hasData) {
            final user = snapshot.data!;
            debugPrint("Creation Time: ${user.metadata.creationTime}");
            debugPrint("Last Sign-In Time: ${user.metadata.lastSignInTime}");
            final creationTime = user.metadata.creationTime;
            final lastSignInTime = user.metadata.lastSignInTime;
            final isFirstTime = creationTime != null && lastSignInTime != null &&
                creationTime.difference(lastSignInTime).inSeconds.abs() < 1;

            if (isFirstTime) { 
              return const HomeContainer();
            } else {
              return const HomeContainer();
            }
 
          } else {
            return const AuthPage();
          }
        },
      ),
    );
  }
}
