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

FitNesse không phải là một ứng dụng thực sự quan trọng. Nếu có bug thì cũng không có ai phải chết, không ai mất hàng triệu đô la. Nên tôi có thể bàn giao chỉ dựa trên việc unit test chạy thành công. Mặt khác, FitNesse có hàng ngàn người dùng và mặc dù đã bổ sung thêm 20000 dòng code vào năm ngoái, danh sách lỗi của tôi chỉ có 17 lỗi (phần nhiều là của mỹ phầm???). Nên tôi biết tỉ lệ bug của mình là rất thấp.

Đây không phải là một hiện tượng đơn lẻ. Dã có một số báo cáo và nghiên cứu mô tả về việc giảm thiểu đáng kể bug này. Từ IBM, đến Microsoft, từ Sabre đến Symantec, từ công ty này đến công ty khác, từ nhóm này đến nhóm khác đã trải qua việc giảm thiểu lỗi đi 2 lần, 5 lần và thậm chí 10 lần. Đây là những con số mà không chuyên gia nào nên bỏ qua.

### Lòng can đảm

Tại sao bạn không sửa code xấu khi bạn nhìn thấy chúng? Phản ứng đầu tiên của bạn khi nhìn thấy một hàm lộn xộn là "Thật là một mớ lộn xộn, nó phải được dọn dẹp." Phản ứng thứ 2 của bạn là "Mình sẽ không chạm vào nó!" Vì sao? Vì bạn biết rằng sẽ rất rủi ro nếu bạn làm hỏng nó; và nếu bạn làm hỏng nó, tất cả lỗi sẽ thuộc về bạn. 

Nhưng sẽ thế nào nếu bạn biết chắc rằng việc dọn dẹp của bạn không phá hỏng cái gì? Sẽ thế nào nếu bạn có sự chắc chắn mà tôi vừa đề cập? Sẽ thế nào nếu bạn chỉ cần bấm nút và trong vòng 90s sau bạn sẽ _biết_ thay đổi của bạn không phá vỡ gì cả _và hoạt động tốt?_

Đây là một trong những lợi ích mạnh mẽ nhất của TDD. Khi bạn có một bộ unit test mà bạn tin tưởng, bạn sẽ không còn lo sợ việc thực hiện thay đổi. Khi bạn thấy code xấu, bạn chỉ cần dọn dẹp nó ngay tại chỗ. Code sẽ trở thành đát sét và bạn có thể yên tâm nhào nặn, điêu khắc thành những cấu trúc đơn giản và đẹp mắt.

Khi lập trình viên không còn sợ sự thay đổi, họ dọn dẹp! Và code sạch là code dễ hiểu, dễ dàng thay đổi, và dễ dàng mở rộng. Bug thậm chí ít hơn vì code đã trở nên đơn giản hơn. Và code được cải thiện đều đặn thay vì liên tục mục nát như thường thấy trong rất nhiều dự án khác.

Lập trình viên chuyên nghiệp nào sẽ cho phép sự mục nát tiếp tục?

### Tài liệu

Đã bao giờ bạn sử dụng framework của bên thứ 3? Thường thì bạn sẽ được cung cấp hướng dẫn sử dụng với định dạng dễ đọc được viết bởi lập trình viên. Hướng dẫn sử dụng điển hình dùng 27 bức ảnh màu 8x10 bóng bẩy với những vòng tròn và mũi tên, ở đằng sau mỗi bức ảnh là một đoạn hướng dẫn làm cách nào để cấu hình, triển khai, thao tác và sử dụng framework đó. Cuối cùng, trong phần phụ lục, thường có một phần nhỏ, xấu xí, chứa tất cả các ví dụ về code.

Đâu là nơi bạn sẽ mở ra đầu tiên khi xem hướng dẫn sử dụng? Nếu bạn là một lập trình viên, bạn sẽ xem ví dụ về code đầu tiên. Vì bạn biết code sẽ tiết lộ cho bạn sự thật. 27 bức ảnh màu 8x10 bóng bẩy với những vòng tròn và mũi tên và hướng dẫn ở đằng sau có thể đẹp, nhưng nếu bạn muốn biết cách sử dụng code, bạn phải đọc code.

Mỗi một unit test bạn viết khi bạn tuân thủ 3 quy tắc là một ví dụ, được viết trong code, mô tả cách hệ thống được sử dụng. Nếu bạn tuần thủ 3 quy tắc, thì sẽ có một unit test mô tả cách tạo ra mọi đối tượng trong hệ thống, tất cả các cách những đối tượng đó có thể tạo ra. Sẽ có một unit test mô tả cách để gọi mọi hàm trong hệ thống, tất cả các cách những hàm đó có thể được gọi. Với mọi thứ bạn cần biết, sẽ luôn có một unit test mô tả chi tiết điều đó.

Những unit test chính là tài liệu. Chúng mô tả mức thấp nhất của thiết kế hệ thống. Chúng rõ ràng, chính xác, được viết bằng ngôn ngữ người đọc hiểu được, và hoàn toàn có thể chạy được. Chúng là loại tài liệu cấp thấp tốt nhất có thể có. Chuyên gia nào sẽ không cung cấp tài liệu như vậy?

### Thiết kế

Khi bạn tuân thủ 3 quy tắc và viết unit test trước. Bạn sẽ đối mặt với một tình huống khó xử. Thường thì bạn biết chính xác code mà bạn muốn viết, nhưng 3 quy tắc yêu cầu bạn phải biết unit test lỗi trước vì code chưa tồn tại! Có nghĩa là bạn phải kiểm tra code mà bạn sắp viết.

Vấn đề với unit test là bạn phải cô lập đoạn code đó. Thường rất khó để kiểm tra một hàm nếu hàm đó gọi những hàm khác. Để viết được unit test đó, bạn phải tìm ra một số cách để tách hàm đó khỏi tất cả những hàm khác. Nói cách khác, việc viết unit test trước buộc bạn phải nghĩ đến những _thiết kế tốt_.

Nếu bạn không viết unit test trước, sẽ không có gì ngăn bạn ghép các chức năng lại với nhau thành một khối không thể test được. Nếu bạn viết unit test sau, bạn có thể kiểm tra các đầu vào và đầu ra của toàn bộ chức năng, nhưng sẽ rất khó để kiểm tra các chức năng riêng lẻ.

Do đó, tuân theo 3 quy tắc và viết các unit test trước sẽ tạo động lực thúc đẩy bạn hướng tới một thiết kế rời rạc tốt hơn. Chuyên gia nào lại không sử dụng các công cụ giúp họ hướng tới những thiết kế tốt hơn?

"Nhưng tôi có thể viết unit test sau", bạn nói. Không, bạn không thể. Không hẳn vậy. Bạn có thể viết _vài_ unit test sau. Bạn thậm chí có thể có độ phủ cao nếu viết test sau nếu bạn đo đạc cẩn thận. Nhưng những unit test viết sau thực tế chỉ là sự phòng thủ. Unit test viết trước là tấn công. Sự thật cuối cùng, unit test viết bởi những người được cấp cho code và đã biết cách giải quyết vấn đề. Không có cách nào so sánh được với những unit test được viết trước.

### Lựa chọn của chuyên gia

Kết quả của tất cả những điều này là TDD là một sự lựa chọn chuyên nghiệp. Đây là một khuôn mẫu nâng cao sự chắc chắn, can đảm, giảm thiểu sai sót, tài liệu và thiết kế. Với tất cả những điều trên, việc không sử dụng nó có thể coi là _không chuyên nghiệp_.

## Khi nào không nên áp dụng TDD

Mặc dù có rất nhiều điểm tốt, nhưng TDD không phải là một tôn giáo hay công thức ma thuật. Việc tuân theo 3 quy tắc không đảm bảo bất kỳ lợi ích nào trong số trên. Bạn vẫn có thể viết code xấu ngay cả khi bạn viết test trước. Thật vậy, bạn có thể viết những unit test tồi. 

Đồng thời, đôi khi việc tuân theo 3 quy tắc chỉ đơn giản là không thực tế hoặc không phù hợp. Những tình huống này rất hiếm, nhưng chúng có thể xảy ra. Không một chuyên gia nào tuân theo một khuôn mẫu khi nó gây hại nhiều hơn lợi ích mang lại.