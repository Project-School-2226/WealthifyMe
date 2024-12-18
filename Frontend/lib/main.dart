import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:wealthify_me/auth/main_page.dart';
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
      scaffoldBackgroundColor: Color.fromARGB(200, 16,27,34),
      appBarTheme: const AppBarTheme(
        backgroundColor: Color.fromARGB(255, 16,27,34),
        titleTextStyle: TextStyle(
          color: Colors.yellow,
          fontSize: 32,
          fontWeight: FontWeight.bold,
        ),
      ),
      visualDensity: VisualDensity.adaptivePlatformDensity,
    ),
      home: const MainPage(),
    );
  }
}
