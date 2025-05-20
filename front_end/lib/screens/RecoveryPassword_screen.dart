import 'package:flutter/material.dart';
import 'package:front_end/screens/PasswordChangedSuccess_screen.dart';
import 'package:front_end/utils/app_color.dart';

class RecoveryPasswordScreen extends StatefulWidget {
  const RecoveryPasswordScreen({super.key});

  @override
  State<RecoveryPasswordScreen> createState() => _RecoveryPasswordScreenState();
}

class _RecoveryPasswordScreenState extends State<RecoveryPasswordScreen> {
  final TextEditingController _newPasswordController = TextEditingController();
  final TextEditingController _confirmPasswordController = TextEditingController();

  void _handleChangePassword() {
    final newPassword = _newPasswordController.text.trim();
    final confirmPassword = _confirmPasswordController.text.trim();

    // Kiểm tra các trường có bị bỏ trống
    if (newPassword.isEmpty || confirmPassword.isEmpty) {
      _showMessage('Vui lòng điền đầy đủ thông tin');
      return;
    }

    // Kiểm tra độ dài mật khẩu
    if (newPassword.length < 6) {
      _showMessage('Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }

    // Kiểm tra mật khẩu và xác nhận khớp nhau
    if (newPassword != confirmPassword) {
      _showMessage('Mật khẩu xác nhận không khớp');
      return;
    }

    // TODO: Gọi API đổi mật khẩu tại đây
    print('✅ Mật khẩu đã đổi thành: $newPassword');

    // Chuyển sang màn hình thông báo thành công
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => const PasswordChangedSuccessScreen()),
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
          'Khôi phục mật khẩu',
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
              'Vui lòng nhập mật khẩu mới cho tài khoản của bạn',
              style: TextStyle(fontSize: 18, color: AppColors.textLight),
            ),
            SizedBox(height: 24),
            TextField(
              controller: _newPasswordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: 'Mật khẩu mới',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.lock),
              ),
            ),
            SizedBox(height: 16),
            TextField(
              controller: _confirmPasswordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: 'Xác nhận mật khẩu',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.lock_outline),
              ),
            ),
            SizedBox(height: 32),
            SizedBox(
              width: double.infinity,
              height: 48,
              child: ElevatedButton(
                onPressed: _handleChangePassword,
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
