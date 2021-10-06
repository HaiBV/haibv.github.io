---
layout: default
---

# Chương 5 Test Driven Development

Đã hơn 10 năm từ khi TDD xuất hiện lần đầu tiên. Nó đến từ một phần của làn sóng Extreme Programming (XP), nhưng kể từ đó đã được mô hình Scrum và hầu như tất cả các mô hình Agile khác áp dụng. Ngay cá các mô hình không phải Agile cũng thực hành TDD.

Khi đó, vào năm 1998, khi lần đầu tôi được nghe về "Lập trình kiếm thử trước (Test First Programming)", tôi đã không tin lắm. Ai lại làm thế? Viết unit test _trước_? Ai muốn làm một việc ngờ nghệch như vậy?

Nhưng lúc đó tôi đã là một lập trình viên chuyên nghiệp được 30 năm rồi, và tôi đã thấy nhiều thứ đến và đi trong ngành. Tôi biết tốt hơn là không nên gạt bỏ bất cứ điều gì ngoài tầm tay, đặc biết là khi một người như Kent Beck nói về nó.

Vậy là vào năm 1999 tôi đến Medford, Oregon để gặp Kent và học hỏi từ anh ấy. Toàn bộ trải nghiệm đó là một cú sốc!

Chúng tôi ngồi trong văn phòng của Kent và bắt đầu code một vài bài toán nhỏ đơn giản bằng Java. Tôi muốn xử lý những thứ vặt vãnh này ngay lập tức. Nhưng Kent không đồng ý và cùng tôi làm từng bước một theo quy trình. Đầu tiên anh ấy viết một phần nhỏ unit test, hầu như không đủ để thực thi code. Sau đó anh ấy viết vừa đủ để unit test đó chạy được. Sau đó anh ấy viết thêm test, rồi lại viết thêm code. 

Chu trình đó hoàn toàn nằm ngoài kinh nghiệm của tôi. Tôi đã quen với việc viết code trong một khoảng một giờ trước khi biên dịch hoặc chạy. Nhưng Kent thực thi chính xác code của mình mỗi 30s hoặc hơn. Tôi đã vô cùng sửng sốt!

Hơn thế nữa, tôi nhận ra chu trình đó! Đó là loại mà tôi đã sử dụng nhiều năm trước đây khi còn là một cậu nhóc lập trình game bằng các ngôn ngữ thông dịch như Basic hoặc Logo. Những ngôn ngữ đó hoàn toàn không có thời gian build, vì vậy bạn chỉ cần thêm một dòng code và chạy. Bạn di qua một chu kỳ rất nhanh. Và do đó, bạn có thể làm việc rất hiệu quả _với_ những ngôn ngữ đó.

Nhưng đối với lập trình _thực tế_, kiểu chu trình này khá vô lý. Trong lập trình _thực tế_, bạn dành rất nhiều thời gian để viết code, sau đó dành nhiều thời gian hơn để biên dịch. Và thậm chí debug gỡ lỗi còn mất nhiều thời gian hơn nữa. _Tôi là một lập trình viên C++, chết tiệt!_ Và với C++ chúng ta phải build và liên kết, mất đến vài phút, đôi khi hàng giờ. Chu trình 30s là không tưởng tượng được.

Tuy nhiên chúng ta có Kent, xử lý chương trình Java với chu ký 30s và không có dấu hiệu nào cho thấy anh ấy sẽ sớm chậm lại. Vì vậy, tôi chợt nhận ra khi ngồi trong văng phòng của Kent, rằng bằng cách sử dụng cách này, tôi có thể viết code với ngôn ngữ thực tế với chu trình của Logo! Tôi đã mắc câu.

## Đưa ra kết luận

Kể từ ngày đó, tôi đã học được rằng TDD không chỉ là một thủ thuật đơn gian để rút ngắn chu trình của tôi. Phương pháp này có rất nhiều lợi ích mà tôi sẽ mô tả ở dưới đây.

Nhưng trước đó tôi cần phải nói rằng:
- The jury is in! (chơi chữ từ câu "The jury is out", ý chỉ quyết định đã được đưa ra)
- Cuộc tranh cãi đã kết thúc
- Sử dụng GOTO sẽ gây hại
- và TDD hoạt động

Vâng, có rất nhiều blog và bài viết gây tranh cãi khi viết về TDD trong những năm qua và vẫn còn đó. Vào những ngày đầu tiên họ nỗ lực và nghiêm túc phê bình và thấu hiểu. Tuy nhiên, bây giờ thì chỉ còn khen ngợi. Mấu chốt ở chỗ TDD hoạt động và mọi người cần phải vượt qua nó.

Tôi biết điều này nghe có vẻ cứng rắn và một chiều. nhưng theo như số liệu đưa ra, tôi không nghĩ bác sĩ phẫu thuật phải bảo về việc rửa tay, và tôi cũng không nghĩ các lập trình viên phải bảo vệ TDD.

Làm sao bạn có thể coi bản thân là một chuyên gia nếu bạn không _biết_ code của mình hoạt động? Làm sao bạn có thể biết code của bạn hoạt động nếu bạn không kiểm thử chúng mỗi khi bạn thực hiện một thay đổi? Làm thế nào bạn có thể kiểm thử chúng mỗi khi bạn thực hiện một thay đổi nếu bạn không có những unit test tự động với độ phủ cao? Làm thế nào bạn viết được những unit test tự động với độ phủ cao mà không thực hành TDD?

Câu cuối cùng đòi hỏi một số nỗ lực. Vậy TDD là gì?

## 3 quy tắc của TDD

1. Bạn không được viết code thành phẩm cho đến khi bạn viết một unit test chạy thất bại.
2. Bạn không được viết nhiều hơn 1 unit test chạy thất bại, hãy viết code để unit test đó chạy thành công.
3. Bạn không được viết code thành phẩm nhiều hơn cần thiết để chạy thành công unit test hiện tại. 

3 quy tắc trên sẽ khóa bạn trong một chu kỳ dài khoảng 30s. Bạn bắt đầu viết mọt phần nhỏ của unit test. Nhưng trong vòng vài giây, bạn phải nhắc đến tên của lớp hoặc hàm nào đó bạn chưa viết, nên unit test đó chạy thất bại. Sau đó bạn phải viết code để unit test đó thực thi. Nhưng bạn không thể viết nhiều hơn thế, vì vậy bạn tiếp tục viết thêm unit test.

Chu kỳ tiếp tục lặp đi lặp lại. Thêm một ít code kiểm thử. Thêm một ít code thành phẩm. Hai phần code phát triển đồng thời và bổ sung cho nhau. Unit test phù hợp với code thành phẩm như kháng thể phù hợp với kháng nguyên.

### Lợi ích

#### Chắc chắn

Nếu bạn áp dụng TDD như một khuôn mẫu chuyên nghiệp, bạn sẽ viết hàng chục unit test mỗi ngày, hàng trăm unit test mỗi tuần và hàng ngàn unit test mỗi năm. Và bạn luôn có tất cả những unit test đó để chạy bất cứ khi nào bạn thực hiện thay đổi code.

Tôi là một trong những tác giả và người bảo trì của FitNesse, một công cụ kiểm thử dựa trên Java. Tính đến thời điểm hiện tại, FitNesse có khoảng 64000 dòng code, trong đó 28000 dòng code dành cho 2200 unit test riêng lẻ. Những unit test này phủ ít nhất 90% code thành phẩm và mất khoảng 90s để chạy.

Mỗi khi tôi thực hiện một thay đổi ở bất kỳ phần nào của FitNesse, tôi chỉ cần chạy những unit test đó. Nếu chúng đạt, tôi gần như chắc chắn rằng sự thay đổi không làm hỏng bất cứ thứ gì. Thế nào là "gần như chắc chắn"? Đủ để bàn giao công việc!

Quy trình QA cho FitNesse là dòng lệnh: ant release. Lệnh đó dựng FitNesse từ đầu, sau đó chạy tất cả các unit test và kiểm thử chấp nhận. Nếu chúng đều thành công, tôi sẽ bàn giao thành phẩm.


### Giảm tỷ lệ lỗi