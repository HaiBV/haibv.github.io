---
layout: default
---

# Chương 15 - Toàn bộ ứng dụng của tôi chỉ gồm các lệnh gọi API

Xây dựng, mua hoặc mượn. Đó là những lựa chọn mà tất cả chúng ta phải thực hiện khi phát triển phần mềm. Rất nhiều lần khi đang làm việc với một ứng dụng, chúng ta nghi ngờ rằng mình có thể tiết kiệm thời gian và công sức bằng cách mua một số thư viện của nhà cung cấp, sử dụng một số nguồn mở hoặc thậm chí chỉ sử dụng những đoạn code đáng kể từ các thư viện đi kèm với nền tảng của chúng ta (J2EE, .NET, v.v.). Có rất nhiều thứ cần cân nhắc khi chọn tích hợp code chúng ta không thể thay đổi. Chúng ta phải biết nó ổn định đến mức nào, có đủ và dễ sử dụng hay không. Và cuối cùng khi quyết định sử dụng code của bên thứ 3, chúng ta thường gặp phải một vấn đề khác. Đến cuối cùng các ứng dụng trông giống như chẳng có gì ngoài lời gọi lặp đi lặp lại đến thư viện của bên thứ 3. Làm cách nào để chúng ta thực hiện những thay đổi trong code như vậy?

Sự cám dỗ ngay lập tức nói rằng chúng ta không thực sự cần kiểm thử. Suy cho cùng, chúng ta không thực sự làm được điều gì đáng kể; chúng ta chỉ gọi một phương thức ở đây và ở kia và code của chúng ta rất đơn giản. Nó thực sự đơn giản. Làm sao có thể sai được?

Nhiều dự án kế thừa bắt đầu từ những khởi đầu khiêm tốn đó. Code ngày càng phát triển và mọi thứ không còn đơn giản nữa. Theo thời gian, chúng ta vẫn có thể thấy các vùng code không chạm vào API nhưng chúng được nhúng trong một tập hợp code không thể kiểm thử được. Chúng ta phải chạy ứng dụng mỗi khi thay đổi thứ gì đó để đảm bảo rằng nó vẫn hoạt động và lại rơi vào tình thế tiến thoái lưỡng nan của người viết hệ thống cũ. Những thay đổi là không chắc chắn; chúng ta không viết hết code nhưng phải bảo trì nó.

Ở nhiều khía cạnh, các hệ thống tràn ngập lệnh gọi thư viện khó xử lý hơn so với các hệ thống tự xây dựng. Lý do đầu tiên là thường rất khó để làm cho cấu trúc tốt hơn vì tất cả những gì bạn thấy là các lệnh gọi API. Bất cứ điều gì có thể là gợi ý về một thiết kế đều không có ở đó. Lý do thứ hai khiến các hệ thống sử dụng nhiều API gặp khó khăn là do chúng ta không sở hữu API. Nếu làm vậy, chúng ta có thể đổi tên các giao diện, lớp và phương thức để làm cho mọi thứ rõ ràng hơn hoặc thêm các phương thức vào các lớp để cung cấp chúng cho các phần khác nhau của code.
