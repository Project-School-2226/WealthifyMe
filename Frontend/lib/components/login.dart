import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'dart:ui';

import 'package:flutter/widgets.dart'; // Import for ImageFilter

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 0, 0, 0),
      appBar: AppBar(
        title: const Text(
          'Wealthify',
          style: TextStyle(
            color: Color.fromARGB(255, 255, 221, 0),
            fontFamily: 'Poppins',
            fontSize: 30,
            fontWeight: FontWeight.bold,
          ),
        ),
        backgroundColor: Color.fromARGB(255, 9, 10, 11),
      ),
      body: Stack(
        children: [
          // Background image
          Positioned.fill(
            child: Image.asset(
              'assets/background3.png',
              fit: BoxFit.cover,
            ),
          ),
          // Blurred container
          Positioned.fill(
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
              child: Container(
                color: Colors.black.withOpacity(0.5),
                child: Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: Column(
                              children: [
                                SizedBox(height: 50),
                                TextField(
                                  autocorrect: true,
                                  cursorColor: Colors.white,
                                  style: TextStyle(color: Colors.white),
                                  decoration: InputDecoration(
                                    enabledBorder: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(5),
                                      borderSide: BorderSide(
                                          color: Colors.white, width: 0.3),
                                    ),
                                    border: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(5),
                                      borderSide:
                                          BorderSide(color: Colors.white),
                                    ),
                                    focusedBorder: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(5),
                                      borderSide:
                                          const BorderSide(color: Colors.white),
                                    ),
                                    fillColor:
                                        Color.fromARGB(255, 31, 30, 30),
                                    contentPadding: EdgeInsets.all(20),
                                    filled: true,
                                    labelText: 'Username',
                                    labelStyle: TextStyle(
                                        color: const Color.fromARGB(255, 169, 169, 169),
                                        fontWeight: FontWeight.bold,
                                        fontSize: 20,
                                        fontFamily: 'Poppins'),
                                    floatingLabelBehavior:
                                        FloatingLabelBehavior.auto,
                                    floatingLabelAlignment:
                                        FloatingLabelAlignment.start,
                                    floatingLabelStyle: const TextStyle(
                                        color: Colors.white,
                                        fontWeight: FontWeight.w500),
                                  ),
                                ),
                                SizedBox(height: 40),
                                TextField(
                                  autocorrect: true,
                                  style: TextStyle(color: Colors.white),
                                  cursorColor: Colors.white,
                                  decoration: InputDecoration(
                                    enabledBorder: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(5),
                                      borderSide: BorderSide(
                                          color: Colors.white, width: 0.2),
                                    ),
                                    border: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(5),
                                    ),
                                    focusedBorder: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(5),
                                      borderSide:
                                          const BorderSide(color: Colors.white),
                                    ),
                                    focusColor: Colors.white,
                                    fillColor:
                                        Color.fromARGB(255, 31, 30, 30),
                                    contentPadding: EdgeInsets.all(20),
                                    filled: true,
                                    labelText: 'Password',
                                    labelStyle: TextStyle(
                                        color: const Color.fromARGB(255, 169, 169, 169),
                                        fontWeight: FontWeight.bold,
                                        fontSize: 20,
                                        fontFamily: 'Poppins'),
                                    floatingLabelBehavior:
                                        FloatingLabelBehavior.auto,
                                    floatingLabelAlignment:
                                        FloatingLabelAlignment.start,
                                    floatingLabelStyle:
                                        TextStyle(color: Colors.white),
                                  ),
                                ),
                                SizedBox(height: 40),
                                SizedBox(
                                  width: double.infinity,
                                  height: 50,
                                  child: ElevatedButton(
                                    onPressed: () => {},
                                    style: ButtonStyle(
                                      alignment: Alignment.center,
                                      shape: MaterialStateProperty.all<
                                          RoundedRectangleBorder>(
                                        RoundedRectangleBorder(
                                          borderRadius:
                                              BorderRadius.circular(10),
                                        ),
                                      ),
                                      side: MaterialStateProperty.all<
                                          BorderSide>(const BorderSide(
                                          color: Colors.grey)),
                                      backgroundColor:
                                          MaterialStateProperty.all<Color>(
                                              Colors.transparent),
                                    ),
                                    child: const Text(
                                      'Sign In',
                                      style: TextStyle(
                                          color: Colors.white,
                                          fontSize: 20,
                                          fontWeight: FontWeight.bold,
                                          fontFamily: 'Poppins'),
                                    ),
                                  ),
                                ),
                                SizedBox(height: 20),
                                Text(
                                  'Forgot Password?',
                                  style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'Poppins'),
                                ),
                              ],
                            ),
                          )
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}