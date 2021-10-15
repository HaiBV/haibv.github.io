---
layout: default
---

# Chương 6 Luyện tập

Mọi chuyên gia luyện tập kỹ năng của họ bằng cách thực hành các bài tập rèn luyện kỹ năng. Nhạc sỹ luyện tập với các thang âm. Cầu thủ bóng đá chạy đến khi mệt. Bác sỹ luyện tập kỹ thuật khâu và phẫu thuật. Luật sư tập tranh luận. Binh sỹ diễn tập nhiệm vụ. Khi hiệu suất quan trọng, các chuyên gia luyện tập. Toàn bộ chương này nói về những phương pháp luyện tập lập trình viên có thể thực hành kỹ năng của họ.

## Nền tảng của việc luyện tập

Luyện tập không phải là một khái niệm mới trong lập trình phần mềm, nhưng chúng ta không hề nhận ra nó cho đến đầu những năm 2000. Có lẽ ví dụ chính thức đầu tiên của một chương trình dùng để thực hành đã được in ở trang 6 của [K&R-C] (Ngôn ngữ lập trình C).

```cpp
main();
{
  printf('hello, world\n');
}
```

Bất kỳ ai trong chúng ta cũng đã viết chương trình trên với một hoặc nhiều ngôn ngữ. Chúng ta sử dụng nó như một cách để tìm hiểu môi trường mới hoặc ngôn ngữ mới. Viết và chạy chương trình đó là bằng chứng cho thấy chúng ta có thể viết và chạy _bất kỳ_ chương trình nào.

Khi tôi còn trẻ, một trong những chương trình đầu tiên mà môi viết trên một máy tính mới là SQINT, bình phương số nguyên. Tôi viết chúng bằng Assembler, BASIC, FORTRAN, COBOL, và vô vàn ngôn ngữ khác. Một lần nữa, nó là một cách để chứng minh rằng tôi có thể khiến máy tính làm những gì tôi muốn.

Trong đầu những năm 80 là thời điểm những chiếc máy tính cá nhân lần đầu tiên được bày bán rộng rãi ngoài cửa hàng. Bất cứ khi nào sở hữu 1 chiếc, như VIC-20, hoặc Commodore-64, hoặc TRS-80, tôi đều viết một chương trình nhỏ in ra một chuỗi vô hạn các ký tự '\' và '/' trên màn hình. Các hình mẫu mà chương trình này tạo ra đẹp mắt và nhìn có vẻ phức tạp hơn nhiều do với chính chương trình tạo ra chúng.

Mặc dù những chương trình nhỏ này chắc chắn là chương trình luyện tập, nhưng nói chung các lập trình viên đã không _luyện tập_. Thực ra thì, ý nghĩ đó chưa bao giờ xảy ra với chúng tôi. Chúng tôi quá bận để viết code để luyện tập kỹ năng của mình. Và ngoài ra, bên ngoài sẽ là gì? Trong những năm đó, lập trình không đòi hỏi phản ứng nhanh hay những đôi tay linh hoạt. Chúng tôi không sử dụng trình chỉnh sửa trên màn hình cho đến cuối những năm 70. Chúng tôi dành phần lớn thời gian để biên dịch hoặc gỡ những đoạn code dài khủng khiếp. Chúng tôi vẫn chưa phát minh ra chu trình thời gian ngắn như TDD, vậy nên chúng tôi không yêu cầu sự tinh chỉnh mà việc luyện tập mang lại.

### Hai mươi số không

Nhưng nhiều thứ đã thay đổi so thuở sơ khai của ngành lập trình. Một vài thứ đã thay đổi rất nhiều. Những thứ khác không thay đổi gì cả.

Một trong những chiếc máy đầu tiên tôi từng sử dụng để lập trình là PDP-8/I. Chiếc máy này có chu trình 1,5 micro giây. Nó có 4096 12-bit từ trong bộ nhớ. Nó có kích thước bằng một chiếc tủ lạnh và tiêu tốn khá nhiều điện. Nó có một ổ lưu đĩa có thể chứa 32K 12-bit từ, và chúng tôi nói chuyện với nó bằng teletype 10-ký-tự-mỗi-giây. Chúng tôi nghĩ rằng đây là một cỗ máy mạnh mẽ và chúng tôi đã sử dụng nó để làm nên những điều kỳ diệu.

Tôi vừa mua một chiếc laptop Macbook Pro mới. Nó có bộ xử lý 2.8GHz lõi kép, 8GB RAM, 512GB SSD, và màn hình 17-inch 1920x1200 LED. Tôi mang nó trong balo của tôi. Có thể đặt trên đùi và tiêu thụ ít hơn 85w.

Chiếc laptop của tôi nhanh hơn 8000 lần, có bộ nhớ trong nhiều hơn 2 triệu lần, có bộ nhớ nhiều hơn 16 triệu lần, tiêu thụ 1% điện năng và kích thước chỉ bằng 1%, và giá tiền chỉ bằng 1/25 có với PDP-8/I. Hãy làm một phép tính: 

8000 x 2000000 x 16000000 x 100 x 100 x 25 =6.4 x 10^22

Một con số _lớn_. Chúng ta đang nói về 22 _cấp độ mũ!_ Đó là số Ångström từ đây tới chòm sao Alpha Centauri. Đó là số lượng electron trên một tờ dollar. Đó là khối lượng trái đất theo đơn vị của Michael Moore. Đó là một con số vô cùng lớn. Và nó đang ở trong laptop của tôi, và có thể là của bạn nữa.

Và tôi đang làm gì với sức mạnh của 22 cấp số mũ của 10? Tôi đang làm những việc tương tự như tôi đã làm với PDP-8/I. Tôi đang viết những câu lệnh _if_, vòng lặp _while_, và _những việc được giao_.

Oh, tôi có những công cụ tốt hơn để viết những câu lệnh đó. Và tôi có những ngôn ngữ tốt hơn để viết những câu lệnh đó. Nhưng bản chất của những câu lệnh đó không hề thay đổi. Code ở năm 2010 sẽ dễ nhận biết với một lập trình viên từ những năm 1960. Đất sét mà chúng tôi chế tác không thay đổi nhiều trong 4 thập kỷ đó.

### Vòng thời gian

Nhưng cách chúng ta làm việ đã thay đổi đáng kể. Vào những năm 60, tôi có thể phải đợi 1 hoặc 2 ngày để có được kết quả biên dịch. Đến cuối những năm 70, biên dịch một chương trình với 50 nghìn dòng mất 45 phút. Ngay đến những năm 90, thời gian biên dịch vẫn còn rất lâu.

Lập trình viên ngày nay không đợi biên dịch. Lập trình viên bây giờ có sức mạnh rất lớn dưới những ngón tay và họ có thể quay vòng tái cấu trúc trong chỉ vài giây. 

Ví dụ, tôi làm việc với dự án FitNesse với 64 nghìn dòng code Java. Một bản dựng hoàn chỉnh, bao gồm toàn bộ unit test và test tích hợp, mất dưới 4 phút để chạy. Nếu qua được test, tôi sẵn sàng bàn giao sản phẩm. _Nên toàn bộ quy trình QA, từ source code cho đến triển khai, chỉ cần ít hơn 4 phút._ Thời gian biên dịch không đáng kể. Từng unit test chỉ cần vài _giây_. Vì vậy tôi có thể thực hiện quay vòng giữa biên dịch/kiểm thử _10 lần mỗi phút_.