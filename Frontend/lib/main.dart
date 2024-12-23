import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:wealthify_me/auth/main_page.dart';
import 'package:wealthify_me/pages/dashboard.dart';
import 'package:wealthify_me/pages/home_container.dart';
import 'package:wealthify_me/pages/welcome_page.dart';
import 'firebase_options.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  await dotenv.load(fileName: ".env");
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor: const Color.fromARGB(200, 16, 27, 34),
        appBarTheme: const AppBarTheme(
          backgroundColor: Color.fromARGB(255, 16, 27, 34),
          titleTextStyle: TextStyle(
            color: Colors.yellow,
            fontSize: 32,
            fontWeight: FontWeight.bold,
          ),
        ),
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      initialRoute: '/', // Start with MainPage
      routes: {
        '/': (context) => const MainPage(), // Main authentication page
        '/welcome': (context) => const WelcomePage(), // Welcome setup page
        '/dashboard': (context) => const TransactionsPage(), // User dashboard
        '/home': (context) =>  HomeContainer(), // Home page
        // Add any other routes you might need
      },
    );
  }
}
