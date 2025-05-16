import 'package:flutter/material.dart';
import 'dart:async';

import 'package:front_end/screens/login_screen.dart';
import 'package:front_end/screens/onboarding_screen.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Timer(
      Duration(seconds: 5),
      () => Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => OnboardingScreen()),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Container(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        decoration: BoxDecoration(
          color: Colors.black,
          image: DecorationImage(
            image: AssetImage("images/image2.jpg"),
            fit: BoxFit.cover,
            opacity: 0.4,
          ),
        ),
        child: Center(
          child: Image.asset("images/zuno_logo.png", width: 200, height: 200),
        ),
      ),
    );
  }
}
