import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class AuthService {
  final FirebaseAuth _firebaseauth = FirebaseAuth.instance;
  final userStream = FirebaseAuth.instance.authStateChanges();
  final user = FirebaseAuth.instance.currentUser;

  Future<void> sendUserDataToBackend(String email, String displayName) async {
    final url = Uri.parse(
        'https://f0ac-2409-408c-1c1f-e39-b853-3549-7930-576f.ngrok-free.app/api/save'); // Replace with your API endpoint
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email, 'username': displayName}),
    );

    if (response.statusCode == 200) {
      // Successfully sent data to backend
      print('User data sent to backend successfully');
    } else {
      // Failed to send data to backend
      print('Failed to send user data to backend');
    }
  }

  Future<UserCredential> signInWithEmailAndPassword(
      String email, String password) async {
    try {
      UserCredential userCredential = await _firebaseauth
          .signInWithEmailAndPassword(email: email, password: password);
      return userCredential;
    } on FirebaseAuthException catch (e) {
      throw Exception(e.code);
    }
  }

  Future<UserCredential> signUpWithEmailAndPassword(
      String email, String password, String username) async {
    UserCredential userCredential =
        await _firebaseauth.createUserWithEmailAndPassword(
      email: email,
      password: password,
    );

    // Update the display name in Firebase
    await userCredential.user?.updateDisplayName(username);

    // Store user data in Firestore
    await FirebaseFirestore.instance
        .collection('users')
        .doc(userCredential.user?.uid)
        .set({
      'username': username,
      'email': email,
    });

    // Send email and username to backend
    await sendUserDataToBackend(email, username);

    return userCredential;
  }

  Future<UserCredential?> signInWitGoogle() async {
    final GoogleSignInAccount? guser = await GoogleSignIn().signIn();

    //user cancelled the sign in
    if (guser == null) return null;

    final GoogleSignInAuthentication gAuth = await guser!.authentication;
    final credential = GoogleAuthProvider.credential(
      accessToken: gAuth.accessToken,
      idToken: gAuth.idToken,
    );

    UserCredential userCredential =
        await _firebaseauth.signInWithCredential(credential);

    // Check if user is signing in for the first time
    if (userCredential.additionalUserInfo?.isNewUser ?? false) {
      // Store user data in Firestore
      await FirebaseFirestore.instance
          .collection('users')
          .doc(userCredential.user?.uid)
          .set({
        'username': userCredential.user?.displayName ?? '',
        'email': userCredential.user?.email ?? '',
      });

      // Send email and username to backend
      await sendUserDataToBackend(userCredential.user?.email ?? '',
          userCredential.user?.displayName ?? '');
    }

    return userCredential;
  }

  Future<void> signOut() async {
    await FirebaseAuth.instance.signOut();
  }
}
