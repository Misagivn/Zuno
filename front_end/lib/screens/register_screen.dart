import 'package:flutter/material.dart';
import 'package:front_end/utils/app_color.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  void _handleRegister() {
    final name = _nameController.text;
    final email = _emailController.text;
    final password = _passwordController.text;

    // Tạm in ra console
    print('Name: $name');
    print('Email: $email');
    print('Password: $password');

    // TODO: Validate và gọi API đăng ký
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 32.0),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Tạo tài khoản Zuno mới 📝 ',
                  style: TextStyle(
                    fontSize: 26,
                    fontWeight: FontWeight.bold,
                    color: AppColors.textDark,
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  'Điền thông tin để tiếp tục tạo tài khoản',
                  style: TextStyle(color: AppColors.textLight),
                ),
                SizedBox(height: 32),
                TextField(
                  controller: _nameController,
                  decoration: InputDecoration(
                    labelText: 'Họ và tên',
                    border: OutlineInputBorder(),
                    prefixIcon: Icon(Icons.person),
                  ),
                ),
                SizedBox(height: 16),
                TextField(
                  controller: _emailController,
                  decoration: InputDecoration(
                    labelText: 'Email',
                    border: OutlineInputBorder(), 
                    prefixIcon: Icon(Icons.email),
                  ),
                ),
                SizedBox(height: 16),
                TextField(
                  controller: _passwordController,
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'Mật khẩu',
                    border: OutlineInputBorder(),
                    prefixIcon: Icon(Icons.lock),
                  ),
                ),
                SizedBox(height: 24),
                SizedBox(
                  width: double.infinity,
                  height: 48,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.button,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                    ),
                    onPressed: _handleRegister,
                    child: Text('Đăng ký', 
                      style: TextStyle(color: AppColors.textButton),
                    ),
                  ),
                ),
                SizedBox(height: 16),
                Center(
                  child: TextButton(
                    onPressed: () {
                      Navigator.pop(context); // Quay lại đăng nhập
                    },
                    child: Text(
                      'Đã có tài khoản? Đăng nhập',
                      style: TextStyle(color: AppColors.textLight),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
