import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class AuthService {
  final FirebaseAuth _firebaseauth = FirebaseAuth.instance;
  final userStream = FirebaseAuth.instance.authStateChanges();
  final user = FirebaseAuth.instance.currentUser;

  Future<void> sendUserDataToBackend(
      String email, String displayName, String uid) async {
    final url = Uri.parse(
        'https://fea0-2409-408c-1ec0-947f-fc3e-cb6f-69fb-b8d3.ngrok-free.app/api/save'); // Replace with your API endpoint
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'email': email,
        'username': displayName,
        'user_id': uid,
      }),
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
    await userCredential.user?.updateDisplayName(username);
    String uid = userCredential.user!.uid;
    
    await sendUserDataToBackend(email, username, uid);

    // Send email and username to backend

    return userCredential;
  }

  Future<UserCredential?> signInWitGoogle() async {
    final GoogleSignIn googleSignIn = GoogleSignIn();
    // final GoogleSignInAccount? guser = await GoogleSignIn().signIn();

    await googleSignIn.signOut();

    final GoogleSignInAccount? guser = await googleSignIn.signIn();
    //user cancelled the sign in
    if (guser == null) return null;

    final GoogleSignInAuthentication gAuth = await guser!.authentication;
    final credential = GoogleAuthProvider.credential(
      accessToken: gAuth.accessToken,
      idToken: gAuth.idToken,
    );

    UserCredential userCredential =
        await _firebaseauth.signInWithCredential(credential);

    if (userCredential.additionalUserInfo?.isNewUser ?? false) {
      await sendUserDataToBackend(
          userCredential.user?.email ?? '',
          userCredential.user?.displayName ?? '',
          userCredential.user?.uid ?? '');
    }
    print(userCredential.additionalUserInfo?.isNewUser);
    return userCredential;
  }

  Future<void> signOut() async {
    await FirebaseAuth.instance.signOut();
  }
}
