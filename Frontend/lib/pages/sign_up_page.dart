import 'dart:ui';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class SignUpPage extends StatefulWidget {
  final VoidCallback showLoginPage;
  const SignUpPage({super.key, required this.showLoginPage});

  @override
  State<SignUpPage> createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _confirmpasswordController =
      TextEditingController();
  bool _isLoading = false;
  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    _confirmpasswordController.dispose();
    super.dispose();
  }

  bool passwordConfirmed() {
    if (_passwordController.text.trim() ==
        _confirmpasswordController.text.trim()) {
      return true;
    } else {
      return false;
    }
  }

  Future<void> signUp() async {
    if (_emailController.text.isEmpty || _passwordController.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please fill in all fields')),
      );
      return;
    }

    setState(() {
      _isLoading = true;
    });

    try {
      if (passwordConfirmed()) {
        await FirebaseAuth.instance.createUserWithEmailAndPassword(
          email: _emailController.text.trim(),
          password: _passwordController.text.trim(),
        );
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Sign up successful!')),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Passwords do not match')),
        );
      }
      // Optionally, navigate to another page or update UI
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('${e.toString()}')),
      );
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 0, 0, 0),
      appBar: AppBar(
        title: const Text(
          'WealthifyMe',
          style: TextStyle(
            color: Color.fromARGB(255, 255, 221, 0),
            fontFamily: 'Poppins',
            fontSize: 30,
            fontWeight: FontWeight.bold,
          ),
        ),
        backgroundColor: const Color.fromARGB(255, 9, 10, 11),
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
          // Scrollable content
          SafeArea(
            child: SingleChildScrollView(
              child: ConstrainedBox(
                constraints: BoxConstraints(
                  minHeight: MediaQuery.of(context).size.height -
                      AppBar().preferredSize.height -
                      MediaQuery.of(context).padding.top,
                ),
                child: IntrinsicHeight(
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
                                      const SizedBox(height: 50),
                                      TextField(
                                        controller: _emailController,
                                        autocorrect: true,
                                        cursorColor: Colors.white,
                                        style: const TextStyle(
                                            color: Colors.white),
                                        decoration: InputDecoration(
                                          enabledBorder: OutlineInputBorder(
                                            borderRadius:
                                                BorderRadius.circular(5),
                                            borderSide: const BorderSide(
                                                color: Colors.white,
                                                width: 0.3),
                                          ),
                                          border: OutlineInputBorder(
                                            borderRadius:
                                                BorderRadius.circular(5),
                                            borderSide: const BorderSide(
                                                color: Colors.white),
                                          ),
                                          focusedBorder: OutlineInputBorder(
                                            borderRadius:
                                                BorderRadius.circular(5),
                                            borderSide: const BorderSide(
                                                color: Colors.white),
                                          ),
                                          fillColor: const Color.fromARGB(
                                              255, 31, 30, 30),
                                          contentPadding:
                                              const EdgeInsets.all(20),
                                          filled: true,
                                          labelText: 'Email',
                                          labelStyle: const TextStyle(
                                              color: Color.fromARGB(
                                                  255, 169, 169, 169),
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
                                      const SizedBox(height: 40),
                                      TextField(
                                        controller: _passwordController,
                                        autocorrect: true,
                                        obscureText: true,
                                        style: const TextStyle(
                                            color: Colors.white),
                                        cursorColor: Colors.white,
                                        decoration: InputDecoration(
                                          enabledBorder: OutlineInputBorder(
                                            borderRadius:
                                                BorderRadius.circular(5),
                                            borderSide: const BorderSide(
                                                color: Colors.white,
                                                width: 0.2),
                                          ),
                                          border: OutlineInputBorder(
                                            borderRadius:
                                                BorderRadius.circular(5),
                                          ),
                                          focusedBorder: OutlineInputBorder(
                                            borderRadius:
                                                BorderRadius.circular(5),
                                            borderSide: const BorderSide(
                                                color: Colors.white),
                                          ),
                                          focusColor: Colors.white,
                                          fillColor: const Color.fromARGB(
                                              255, 31, 30, 30),
                                          contentPadding:
                                              const EdgeInsets.all(20),
                                          filled: true,
                                          labelText: 'Password',
                                          labelStyle: const TextStyle(
                                              color: Color.fromARGB(
                                                  255, 169, 169, 169),
                                              fontWeight: FontWeight.bold,
                                              fontSize: 20,
                                              fontFamily: 'Poppins'),
                                          floatingLabelBehavior:
                                              FloatingLabelBehavior.auto,
                                          floatingLabelAlignment:
                                              FloatingLabelAlignment.start,
                                          floatingLabelStyle: const TextStyle(
                                              color: Colors.white),
                                        ),
                                      ),
                                      const SizedBox(height: 40),
                                      TextField(
                                        controller: _confirmpasswordController,
                                        autocorrect: true,
                                        obscureText: true,
                                        style: const TextStyle(
                                            color: Colors.white),
                                        cursorColor: Colors.white,
                                        decoration: InputDecoration(
                                          enabledBorder: OutlineInputBorder(
                                            borderRadius:
                                                BorderRadius.circular(5),
                                            borderSide: const BorderSide(
                                                color: Colors.white,
                                                width: 0.2),
                                          ),
                                          border: OutlineInputBorder(
                                            borderRadius:
                                                BorderRadius.circular(5),
                                          ),
                                          focusedBorder: OutlineInputBorder(
                                            borderRadius:
                                                BorderRadius.circular(5),
                                            borderSide: const BorderSide(
                                                color: Colors.white),
                                          ),
                                          focusColor: Colors.white,
                                          fillColor: const Color.fromARGB(
                                              255, 31, 30, 30),
                                          contentPadding:
                                              const EdgeInsets.all(20),
                                          filled: true,
                                          labelText: 'Confirm Password',
                                          labelStyle: const TextStyle(
                                              color: Color.fromARGB(
                                                  255, 169, 169, 169),
                                              fontWeight: FontWeight.bold,
                                              fontSize: 20,
                                              fontFamily: 'Poppins'),
                                          floatingLabelBehavior:
                                              FloatingLabelBehavior.auto,
                                          floatingLabelAlignment:
                                              FloatingLabelAlignment.start,
                                          floatingLabelStyle: const TextStyle(
                                              color: Colors.white),
                                        ),
                                      ),
                                      const SizedBox(height: 30),
                                      SizedBox(
                                        width: double.infinity,
                                        height: 50,
                                        child: GestureDetector(
                                          onTap: signUp,
                                          child: ElevatedButton(
                                            onPressed:
                                                _isLoading ? null : signUp,
                                            style: ButtonStyle(
                                              alignment: Alignment.center,
                                              shape: MaterialStateProperty.all<
                                                  RoundedRectangleBorder>(
                                                RoundedRectangleBorder(
                                                  borderRadius:
                                                      BorderRadius.circular(10),
                                                ),
                                              ),
                                              backgroundColor:
                                                  MaterialStateProperty.all<
                                                          Color>(
                                                      const Color.fromARGB(
                                                          255,
                                                          219,
                                                          190,
                                                          7)), // Gold color
                                            ),
                                            child: _isLoading
                                                ? const SizedBox(
                                                    width: 20,
                                                    height: 20,
                                                    child:
                                                        CircularProgressIndicator(
                                                      valueColor:
                                                          AlwaysStoppedAnimation<
                                                                  Color>(
                                                              Colors.black),
                                                      strokeWidth: 2,
                                                    ),
                                                  )
                                                : const Text(
                                                    'Sign Up',
                                                    style: TextStyle(
                                                        color: Colors
                                                            .black, // Changed to black for better contrast
                                                        fontSize: 20,
                                                        fontWeight:
                                                            FontWeight.bold,
                                                        fontFamily: 'Poppins'),
                                                  ),
                                          ),
                                        ),
                                      ),
                                      const SizedBox(height: 20),
                                      Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.center,
                                        children: [
                                          const Text(
                                            'Already a member?',
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontSize: 14,
                                              fontFamily: 'Poppins',
                                            ),
                                          ),
                                          GestureDetector(
                                            onTap: widget.showLoginPage,
                                            child: const Text(
                                              'Sign in',
                                              style: TextStyle(
                                                color: Color.fromARGB(
                                                    255, 255, 221, 0),
                                                fontSize: 14,
                                                fontWeight: FontWeight.bold,
                                                fontFamily: 'Poppins',
                                              ),
                                            ),
                                          )
                                        ],
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
              ),
            ),
          ),
        ],
      ),
    );
  }
}
