---
layout: default
---

# Chương 4 Mô hình đường nối

Một trong những điều mà gần như tất cả mọi người đều nhận thấy khi cố gắng viết kiểm thử cho code hiện có là mức độ kém phù hợp của code với việc kiểm thử. Nó không chỉ riêng về các chương trình hoặc ngôn ngữ cụ thể. Nói chung, các ngôn ngữ lập trình dường như không hỗ trợ tốt cho việc kiểm thử. Có vẻ như cách duy nhất để có được một chương trình có thể kiểm thử dễ dàng là viết kiểm thử khi bạn phát triển nó hoặc dành một chút thời gian để "thiết kế cho khả năng kiểm thử". Có rất nhiều hy vọng cho cách tiếp cận trước đây, nhưng nếu phần lớn code trong lĩnh vực này là bằng chứng thì cách tiếp cận sau đã không thành công lắm.

Một điều mà tôi nhận thấy là khi cố gắng kiểm thử code, tôi đã bắt đầu nghĩ về code theo một cách khá khác. Tôi chỉ có thể coi đây là một vấn đề riêng tư, nhưng tôi nhận thấy rằng cách nhìn nhận code khác này giúp ích cho tôi khi làm việc với các ngôn ngữ lập trình mới và xa lạ. Vì tôi không thể đề cập đến mọi ngôn ngữ lập trình trong cuốn sách này nên tôi quyết định trình bày quan điểm này ở đây với hy vọng rằng nó sẽ giúp ích cho bạn cũng như giúp ích cho tôi.

## Một trang văn bản khổng lồ

Khi mới bắt đầu lập trình, tôi thật may mắn vì đã bắt đầu đủ muộn để có một chiếc máy tính của riêng mình và một trình biên dịch chạy trên chiếc máy đó; nhiều người bạn của tôi bắt đầu lập trình từ thời còn sử dụng thẻ đục lỗ. Khi tôi quyết định học lập trình ở trường, tôi bắt đầu làm việc trên thiết bị đầu cuối trong phòng thí nghiệm. Chúng tôi có thể biên dịch code của mình từ xa trên máy DEC VAX. Có một hệ thống kế toán nhỏ được áp dụng. Mỗi lần biên dịch đều khiến chúng tôi mất tiền từ tài khoản của mình và chúng tôi có một khoảng thời gian sử dụng máy cố định trong mỗi học kỳ.

Vào thời điểm đó trong cuộc đời tôi, một chương trình chỉ là một danh sách. Cứ sau vài giờ, tôi lại đi bộ từ phòng thí nghiệm đến phòng máy in, lấy bản in chương trình của mình và xem xét kỹ lưỡng, cố gắng tìm ra điều gì đúng hay sai. Tôi không đủ hiểu biết để quan tâm nhiều đến tính mô-đun. Chúng tôi phải viết code mô-đun để chứng minh rằng chúng tôi có thể làm được điều đó, nhưng tại thời điểm đó, tôi thực sự quan tâm nhiều hơn đến việc liệu code có tạo ra câu trả lời đúng hay không. Khi tôi bắt đầu viết code hướng đối tượng, tính mô-đun đã mang tính hàn lâm. Tôi sẽ không đổi lớp này sang lớp khác trong quá trình làm bài tập ở trường. Khi mới bước chân vào ngành, tôi bắt đầu quan tâm rất nhiều đến những thứ đó, nhưng ở trường, một chương trình đối với tôi chỉ là một danh sách, một tập hợp dài các chức năng mà tôi phải viết và hiểu từng cái một.

Cách nhìn này về một chương trình như một danh sách có vẻ chính xác, ít nhất nếu chúng ta nhìn vào cách mọi người xử lý các chương trình mà họ viết. Nếu chúng ta không biết lập trình là gì và nhìn thấy một căn phòng đầy những lập trình viên đang làm việc, chúng ta có thể nghĩ rằng họ là những học giả đang kiểm tra và biên tập những tài liệu lớn quan trọng. Một chương trình có thể giống như một trang văn bản lớn. Thay đổi một chút văn bản có thể khiến ý nghĩa của toàn bộ tài liệu thay đổi nên mọi người thực hiện những thay đổi đó một cách cẩn thận để tránh sai sót.

Nhìn bề ngoài thì điều đó hoàn toàn đúng, nhưng còn tính mô-đun thì sao? Chúng ta thường được khuyên rằng sẽ tốt hơn nếu viết chương trình được tạo thành từ những phần nhỏ có thể tái sử dụng, nhưng tần suất các phần nhỏ được sử dụng lại một cách độc lập như thế nào? Không thường xuyên lắm. Tái sử dụng là khó khăn. Ngay cả khi các phần mềm trông có vẻ độc lập, chúng vẫn thường phụ thuộc lẫn nhau theo những cách tinh tế.
