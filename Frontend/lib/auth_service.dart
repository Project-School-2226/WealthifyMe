import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class AuthService {
  final FirebaseAuth _firebaseauth = FirebaseAuth.instance;
  final userStream = FirebaseAuth.instance.authStateChanges();

  Future<void> sendUserDataToBackend(String email, String displayName) async {
    final user = FirebaseAuth.instance.currentUser;
    final user_id = user?.uid;
    if (user_id == null) {
      print('User ID is null. User might not be signed in.');
      return;
    }
    print(email + ' ' + displayName + ' ');
    print(user_id);
    final url = Uri.parse(
        'https://ed84-2409-408c-1cb5-2cd9-809c-bb9e-8bd7-afed.ngrok-free.app/api/save');
    try {
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(
            {'user_id': user_id, 'email': email, 'username': displayName}),
      );

      if (response.statusCode == 200) {
        // Successfully sent data to backend
        print('Successfully sent user data to backend');
      } else {
        // Failed to send data to backend
        print(
            'Failed to send user data to backend. Status code  ${response.body}');
      }
    } catch (e) {
      print('Failed to send user data to backend.');
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
    try {
      UserCredential userCredential =
          await _firebaseauth.createUserWithEmailAndPassword(
        email: email,
        password: password,
      );
      await userCredential.user?.updateDisplayName(username);

      await sendUserDataToBackend(email, username);
      return userCredential;
    } on FirebaseAuthException catch (e) {
      throw Exception(e.code);
    }
  }

  Future<UserCredential?> signInWitGoogle() async {
    final GoogleSignIn googleSignIn = GoogleSignIn();
    // final GoogleSignInAccount? guser = await GoogleSignIn().signIn();

    await googleSignIn.signOut();

    final GoogleSignInAccount? guser = await googleSignIn.signIn();
    //user cancelled the sign in
    if (guser == null) return null;

    final GoogleSignInAuthentication gAuth = await guser.authentication;
    final credential = GoogleAuthProvider.credential(
      accessToken: gAuth.accessToken,
      idToken: gAuth.idToken,
    );

    UserCredential userCredential =
        await _firebaseauth.signInWithCredential(credential);

    final isNewUser = userCredential.additionalUserInfo?.isNewUser ?? false;
    print('isNewUser: $isNewUser');
    if (isNewUser) {
      final email = userCredential.user?.email ?? '';
      final displayName = userCredential.user?.displayName ?? '';
      print('Sending user data to backend: $email, $displayName');
      await sendUserDataToBackend(email, displayName);
    }

    return userCredential;
  }

  Future<void> signOut() async {
    await FirebaseAuth.instance.signOut();
  }

  Future<void> addStockSymbolsToBackend(
      List<String> selectedStockSymbols) async {
    final user = FirebaseAuth.instance.currentUser;
    final user_id = user?.uid; // Get the current user's UID

    if (user_id == null) {
      print("User is not logged in");
      return;
    }

    final url = Uri.parse(
        'https://literate-magpie-separately.ngrok-free.app/stocks/addStocks');
    final payload = {
      "user_id": user_id,
      "stocks": selectedStockSymbols,
    };

    try {
      final response = await http.post(
        url,
        headers: {"Content-Type": "application/json"},
        body: jsonEncode(payload),
      );

      if (response.statusCode == 200) {
        print("Stocks added successfully: ${response.body}");
      } else {
        print("Failed to add stocks: ${response.body}");
      }
    } catch (e) {
      print("Error adding stocks: $e");
    }
  }

  String? getUserId() {
    final user = FirebaseAuth.instance.currentUser;
    final user_id = user?.uid;
    return user_id;
  }
}
