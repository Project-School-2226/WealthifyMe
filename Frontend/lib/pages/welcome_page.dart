import 'package:flutter/material.dart';

class WelcomePage extends StatefulWidget {
  const WelcomePage({super.key});

  @override
  State<WelcomePage> createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<double> _fadeAnimation;
  int _currentStep = 0;

  final List<Map<String, String>> _questions = [
    {"question": "What is your current balance?", "hint": "Enter your balance"},
    {"question": "What are your financial goals?", "hint": "E.g., Save for a house, retirement"},
    {"question": "How much do you save monthly?", "hint": "Enter the amount in dollars"},
    {"question": "What is your biggest expense?", "hint": "E.g., Rent, Food, Utilities"},
  ];

  final Map<int, String> _answers = {};

  final TextEditingController _textController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..forward();
    _fadeAnimation = CurvedAnimation(
      parent: _animationController,
      curve: Curves.easeIn,
    );
  }

  @override
  void dispose() {
    _animationController.dispose();
    _textController.dispose();
    super.dispose();
  }

  void _nextStep() {
    setState(() {
      // Save the current answer
      _answers[_currentStep] = _textController.text;

      if (_currentStep < _questions.length - 1) {
        // Move to the next step
        _currentStep++;
        _textController.clear(); // Clear the text field for the next question
      } else {
        // All questions answered, send data to the backend
        debugPrint("Collected Answers: $_answers");
        Navigator.of(context).pushReplacementNamed('/dashboard');
      }
    });
  }

  void _previousStep() {
    if (_currentStep > 0) {
      setState(() {
        _currentStep--;
        _textController.text = _answers[_currentStep] ?? ''; // Restore the previous answer
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: FadeTransition(
          opacity: _fadeAnimation,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Welcome to WealthifyMe!',
                style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                      fontWeight: FontWeight.bold,
                      color: Colors.teal,
                    ),
              ),
              const SizedBox(height: 10),
              const Text(
                'Let’s set up your profile.',
                style: TextStyle(fontSize: 18, color: Colors.grey),
              ),
              const SizedBox(height: 30),
              Text(
                _questions[_currentStep]["question"]!,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _textController,
                keyboardType: TextInputType.text,
                decoration: InputDecoration(
                  hintText: _questions[_currentStep]["hint"],
                  border: const OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 30),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  if (_currentStep > 0)
                    TextButton(
                      onPressed: _previousStep,
                      child: const Text('Back'),
                    ),
                  ElevatedButton(
                    onPressed: _nextStep,
                    child: Text(_currentStep < _questions.length - 1 ? 'Next' : 'Finish'),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}