---
layout: default
---

# Chương 5 Test Driven Development

Đã hơn 10 năm từ khi TDD xuất hiện lần đầu tiên. Nó đến từ một phần của làn sóng Extreme Programming (XP), nhưng kể từ đó đã được mô hình Scrum và hầu như tất cả các mô hình Agile khác áp dụng. Ngay cá các mô hình không phải Agile cũng thực hành TDD.

Khi đó, vào năm 1998, khi lần đầu tôi được nghe về "Lập trình kiếm thử trước (Test First Programming)", tôi đã không tin lắm. Ai lại làm thế? Viết unit test _trước_? Ai muốn làm một việc ngờ nghệch như vậy?

Nhưng lúc đó tôi đã là một lập trình viên chuyên nghiệp được 30 năm rồi, và tôi đã thấy nhiều thứ đến và đi trong ngành. Tôi biết tốt hơn là không nên gạt bỏ bất cứ điều gì ngoài tầm tay, đặc biết là khi một người như Kent Beck nói về nó.

Vậy là vào năm 1999 tôi đến Medford, Oregon để gặp Kent và học hỏi từ anh ấy. Toàn bộ trải nghiệm đó là một cú sốc!

Chúng tôi ngồi trong văn phòng của Kent và bắt đầu code một vài bài toán nhỏ đơn giản bằng Java. Tôi muốn xử lý những thứ vặt vãnh này ngay lập tức. Nhưng Kent không đồng ý và cùng tôi làm từng bước một theo quy trình. Đầu tiên anh ấy viết một phần nhỏ unit test, hầu như không đủ để thực thi code. Sau đó anh ấy viết vừa đủ để unit test đó chạy được. Sau đó anh ấy viết thêm test, rồi lại viết thêm code. 

Chu kỳ thời gian đó hoàn toàn nằm ngoài kinh nghiệm của tôi. Tôi đã quen với việc viết code trong một khoảng một giờ trước khi biên dịch hoặc chạy. Nhưng Kent thực thi chính xác code của mình mỗi 30s hoặc hơn. Tôi đã vô cùng sửng sốt!

Hơn thế nữa, tôi nhận ra chu kỳ thời gian đó! Đó là loại mà tôi đã sử dụng nhiều năm trước đây khi còn là một cậu nhóc lập trình game bằng các ngôn ngữ thông dịch như Basic hoặc Logo. Những ngôn ngữ đó hoàn toàn không có thời gian build, vì vậy bạn chỉ cần thêm một dòng code và chạy. Bạn di qua một chu kỳ rất nhanh. Và do đó, bạn có thể làm việc rất hiệu quả _với_ những ngôn ngữ đó.

Nhưng đối với lập trình _thực tế_, kiểu chu kỳ thời gian này khá vô lý. Trong lập trình _thực tế_, bạn dành rất nhiều thời gian để viết code, sau đó dành nhiều thời gian hơn để biên dịch. Và thậm chí debug gỡ lỗi còn mất nhiều thời gian hơn nữa. _Tôi là một lập trình viên C++, chết tiệt!_ Và với C++ chúng ta phải build và liên kết, mất đến vài phút, đôi khi hàng giờ. Chu kỳ thời gian 30s là không tưởng tượng được.

Tuy nhiên chúng ta có Kent, xử lý chương trình Java với chu ký 30s và không có dấu hiệu nào cho thấy anh ấy sẽ sớm chậm lại. Vì vậy, tôi chợt nhận ra khi ngồi trong văng phòng của Kent, rằng bằng cách sử dụng cách này, tôi có thể viết code với ngôn ngữ thực tế với chu kỳ thời gian của Logo! Tôi đã mắc câu.