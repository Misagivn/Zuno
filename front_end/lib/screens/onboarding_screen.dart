import 'package:flutter/material.dart';
import 'package:front_end/screens/login_screen.dart';
import 'package:introduction_screen/introduction_screen.dart';

class OnboardingScreen extends StatelessWidget {
  final introKey = GlobalKey<IntroductionScreenState>();

  OnboardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    
    final pageDecoration = PageDecoration(
      titleTextStyle: TextStyle(fontSize: 28, fontWeight: FontWeight.w700),
      bodyTextStyle: TextStyle(fontSize: 19),
      bodyPadding: EdgeInsets.fromLTRB(16, 0, 16, 16),
      pageColor: Colors.white,
      imagePadding: EdgeInsets.zero,
    );
    return IntroductionScreen(
      key: introKey,
      globalBackgroundColor: Colors.white,
      pages: [
        PageViewModel(
          title: "Mua sắm ngay",
          body:
              "Zuno là ứng dụng mua sắm trực tuyến hiện đại, với giao diện thân thiện, Zuno mang đến trải nghiệm mua sắm tiện lợi, an toàn và cá nhân hóa cho mọi người.",
          image: Image.asset("images/splash1.png", width: 200),
          decoration: pageDecoration,
        ),

        PageViewModel(
          title: "Giảm giá mạnh",
          body:
              "Hàng loạt chương trình giảm giá mạnh mỗi ngày, flash sale theo khung giờ và mã giảm giá độc quyền giúp người dùng tiết kiệm tối đa khi mua sắm.",
          image: Image.asset("images/splash2.png", width: 200),
          decoration: pageDecoration,
        ),

        PageViewModel(
  title: "", // <- thêm dòng này để tránh lỗi
  bodyWidget: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    crossAxisAlignment: CrossAxisAlignment.center,
    children: [
      Image.asset("images/splash3.png", width: 200),
      const SizedBox(height: 24),
      Text(
        "Miễn phí ship",
        style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
        textAlign: TextAlign.center,
      ),
      const SizedBox(height: 16),
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16.0),
        child: Text(
          "Zuno mang đến chính sách miễn phí giao hàng cực kỳ hấp dẫn. Với đơn hàng đạt mức tối thiểu hoặc trong các khung giờ ưu đãi, người dùng sẽ được miễn phí ship toàn quốc, bất kể sản phẩm nào. Mua sắm tại Zuno - tiện lợi từ giá cả đến tận tay!",
          style: TextStyle(fontSize: 16),
          textAlign: TextAlign.center,
        ),
      ),
      const SizedBox(height: 32),
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: 15),
        child: ElevatedButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => LoginScreen()),
            );
          },
          style: ElevatedButton.styleFrom(
            minimumSize: Size.fromHeight(55),
            backgroundColor: Color(0xFF5B2ECC),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8),
            ),
          ),
          child: Text(
            "Mua sắm ngay cùng Zuno!",
            style: TextStyle(fontSize: 18, color: Colors.white),
          ),
        ),
      ),
    ],
  ),
  decoration: pageDecoration,
),

      ],
      showSkipButton: false,
      showDoneButton: false,
      showBackButton: false,
      back: Text(
        "Trở về",
        style: TextStyle(fontWeight: FontWeight.w600, color: Color(0xFF5B2ECC)),
      ),
      next: Text(
        "Tiếp tục",
        style: TextStyle(fontWeight: FontWeight.w600, color: Color(0xFF5B2ECC)),
      ),

      onDone: () {},
      onSkip: () {},
      dotsDecorator: DotsDecorator(
        size: Size.square(10),
        activeSize: Size(20, 10),
        activeColor: Color(0xFF5B2ECC),
        color: Colors.black26,
        spacing: EdgeInsets.symmetric(horizontal: 3),
        activeShape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(25),
        ),
      ),
    );
  }
}
