import 'package:flutter/material.dart';
import 'package:front_end/utils/app_color.dart';
import 'package:front_end/screens/VerifyCode_screen.dart';

class ForgotPasswordScreen extends StatefulWidget {
  const ForgotPasswordScreen({super.key});

  @override
  State<ForgotPasswordScreen> createState() => _ForgotPasswordScreenState();
}

class _ForgotPasswordScreenState extends State<ForgotPasswordScreen> {
  final TextEditingController _emailController = TextEditingController();

  // Hàm kiểm tra định dạng email hợp lệ
  bool _isValidEmail(String email) {
    final emailRegex = RegExp(r"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$");
    return emailRegex.hasMatch(email);
  }

  void _handleResetPassword() {
    final email = _emailController.text.trim();

    if (email.isEmpty) {
      _showMessage('Vui lòng nhập email');
      return;
    }

    if (!_isValidEmail(email)) {
      _showMessage('Email không hợp lệ');
      return;
    }

    // TODO: Gọi API gửi mã xác nhận qua email
    print('✅ Gửi yêu cầu khôi phục mật khẩu đến: $email');

    // Chuyển đến màn hình nhập mã xác thực
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => const VerifyCodeScreen(),
      ),
    );
  }

  void _showMessage(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Text(
          'Quên mật khẩu',
          style: TextStyle(color: AppColors.textDark),
        ),
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: AppColors.textDark),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 32.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 24),
            Text(
              'Nhập email để lấy lại mật khẩu',
              style: TextStyle(fontSize: 18, color: AppColors.textLight),
            ),
            const SizedBox(height: 24),
            TextField(
              controller: _emailController,
              keyboardType: TextInputType.emailAddress,
              decoration: const InputDecoration(
                labelText: 'Email',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.email),
              ),
            ),
            const SizedBox(height: 32),
            SizedBox(
              width: double.infinity,
              height: 48,
              child: ElevatedButton(
                onPressed: _handleResetPassword,
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.button,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
                child: Text(
                  'Gửi yêu cầu',
                  style: TextStyle(color: AppColors.textButton),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
