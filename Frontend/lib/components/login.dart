import 'package:flutter/material.dart';
import 'dart:ui' as ui;
import 'package:flutter_svg/flutter_svg.dart'; // New import for SVG
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  Future<UserCredential?> signInWithGoogle() async {
    try {
      // Trigger the authentication flow
      final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();

      if (googleUser == null) {
        print('Sign in aborted by user');
        return null;
      }

      // Obtain the auth details from the request
      final GoogleSignInAuthentication googleAuth =
          await googleUser.authentication;

      // Create a new credential
      final credential = GoogleAuthProvider.credential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );

      // Once signed in, return the UserCredential
      return await FirebaseAuth.instance.signInWithCredential(credential);
    } catch (e) {
      print('Error signing in with Google: $e');
      return null;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 0, 0, 0),
      appBar: AppBar(
        title: const Text(
          'Wealthify',
          style: TextStyle(
            color: Color.fromARGB(57, 69, 221, 0),
            fontFamily: 'Poppins',
            fontSize: 30,
            fontWeight: FontWeight.bold,
          ),
        ),
        backgroundColor: const Color.fromARGB(255, 9, 10, 11),
      ),
      body: SafeArea(
        child: Stack(
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
                filter: ui.ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                child: Container(
                  color: Colors.black.withOpacity(0.5),
                  child: SingleChildScrollView(
                    child: ConstrainedBox(
                      constraints: BoxConstraints(
                        minHeight: MediaQuery.of(context).size.height -
                            AppBar().preferredSize.height -
                            MediaQuery.of(context).padding.top,
                      ),
                      child: IntrinsicHeight(
                        child: Padding(
                          padding: const EdgeInsets.all(10.0),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
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
                                              borderRadius:
                                                  BorderRadius.circular(5),
                                              borderSide: BorderSide(
                                                  color: Colors.white,
                                                  width: 0.3),
                                            ),
                                            border: OutlineInputBorder(
                                              borderRadius:
                                                  BorderRadius.circular(5),
                                              borderSide: BorderSide(
                                                  color: Colors.white),
                                            ),
                                            focusedBorder: OutlineInputBorder(
                                              borderRadius:
                                                  BorderRadius.circular(5),
                                              borderSide: const BorderSide(
                                                  color: Colors.white),
                                            ),
                                            fillColor:
                                                Color.fromARGB(255, 31, 30, 30),
                                            contentPadding: EdgeInsets.all(20),
                                            filled: true,
                                            labelText: 'Username',
                                            labelStyle: TextStyle(
                                                color: const Color.fromARGB(
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
                                        SizedBox(height: 40),
                                        TextField(
                                          autocorrect: true,
                                          style: TextStyle(color: Colors.white),
                                          cursorColor: Colors.white,
                                          decoration: InputDecoration(
                                            enabledBorder: OutlineInputBorder(
                                              borderRadius:
                                                  BorderRadius.circular(5),
                                              borderSide: BorderSide(
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
                                            fillColor:
                                                Color.fromARGB(255, 31, 30, 30),
                                            contentPadding: EdgeInsets.all(20),
                                            filled: true,
                                            labelText: 'Password',
                                            labelStyle: TextStyle(
                                                color: const Color.fromARGB(
                                                    255, 169, 169, 169),
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
                                                  BorderSide>(
                                                const BorderSide(
                                                    color: Colors.grey),
                                              ),
                                              backgroundColor:
                                                  MaterialStateProperty.all<
                                                          Color>(
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
                                        SizedBox(height: 20),
                                        SizedBox(
                                          width: double.infinity,
                                          height: 50,
                                          child: ElevatedButton.icon(
                                            onPressed: () async {
                                              try {
                                                UserCredential? userCredential =
                                                    await signInWithGoogle();
                                                if (userCredential != null) {
                                                  print(
                                                      'Signed in: ${userCredential.user?.displayName}');
                                                  // Navigate to your app's main screen or perform any other action
                                                } else {
                                                  ScaffoldMessenger.of(context)
                                                      .showSnackBar(
                                                    SnackBar(
                                                        content: Text(
                                                            'Sign in cancelled or failed')),
                                                  );
                                                }
                                              } catch (e) {
                                                print(
                                                    'Error during sign in: $e');
                                                ScaffoldMessenger.of(context)
                                                    .showSnackBar(
                                                  SnackBar(
                                                      content: Text(
                                                          'Error during sign in: $e')),
                                                );
                                              }
                                            },
                                            style: ElevatedButton.styleFrom(
                                              backgroundColor: Colors.white,
                                              shape: RoundedRectangleBorder(
                                                borderRadius:
                                                    BorderRadius.circular(10),
                                              ),
                                            ),
                                            icon: SvgPicture.asset(
                                              'assets/google_logo.svg',
                                              height: 24,
                                            ),
                                            label: Text(
                                              'Sign in with Google',
                                              style: TextStyle(
                                                color: Colors.black87,
                                                fontSize: 18,
                                                fontWeight: FontWeight.bold,
                                                fontFamily: 'Poppins',
                                              ),
                                            ),
                                          ),
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
      ),
    );
  }
}
