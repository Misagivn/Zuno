import 'package:flutter/material.dart';
import 'package:front_end/utils/app_color.dart';
import 'package:front_end/screens/RecoveryPassword_screen.dart';

class VerifyCodeScreen extends StatefulWidget {
  const VerifyCodeScreen({super.key});

  @override
  State<VerifyCodeScreen> createState() => _VerifyCodeScreenState();
}

class _VerifyCodeScreenState extends State<VerifyCodeScreen> {
  final TextEditingController _codeController = TextEditingController();

  void _verifyCode() {
    final code = _codeController.text.trim();

    if (code.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Vui lòng nhập mã xác nhận')),
      );
      return;
    }

    // TODO: Kiểm tra mã xác nhận (gọi API nếu cần)
    print('Mã xác nhận: $code');

    // Nếu mã hợp lệ, chuyển sang màn hình khôi phục mật khẩu
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => RecoveryPasswordScreen()),
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
          'Xác nhận mã',
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
            SizedBox(height: 24),
            Text(
              'Nhập mã xác nhận đã được gửi đến email của bạn',
              style: TextStyle(fontSize: 18, color: AppColors.textLight),
            ),
            SizedBox(height: 24),
            TextField(
              controller: _codeController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(
                labelText: 'Mã xác nhận',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.verified),
              ),
            ),
            SizedBox(height: 32),
            SizedBox(
              width: double.infinity,
              height: 48,
              child: ElevatedButton(
                onPressed: _verifyCode,
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.button,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
                child: Text(
                  'Xác nhận',
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
