import 'package:flutter/material.dart';
import 'package:front_end/screens/splash_screen.dart';
import 'utils/app_color.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Zuno',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: AppColors.button,
        scaffoldBackgroundColor: AppColors.background,
        textTheme: ThemeData.light().textTheme.apply(
              bodyColor: AppColors.textDark,
              displayColor: AppColors.textDark,
            ),
        inputDecorationTheme: InputDecorationTheme(
          border: OutlineInputBorder(),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: AppColors.primary,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8),
            ),
          ),
        ),
      ),
      home: SplashScreen(),
    );
  }
}
