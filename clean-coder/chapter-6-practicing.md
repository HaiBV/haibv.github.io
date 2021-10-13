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

Mặc dù những chương trình nhỏ này chắc chắn là chương trình luyện tập, nhưng nói chung các lập trình viên đã không _luyện tập_. Thực ra thì, ý nghĩ đó chưa bao giờ xảy ra với chúng tôi. Chúng tôi quá bận để viết code để luyện tập kỹ năng của mình. Và ngoài ra, bên ngoài sẽ là gì? Trong những năm đó, lập trình không đòi hỏi phản ứng nhanh hay những đôi tay linh hoạt. Chúng tôi không sử dụng trình chỉnh sửa trên màn hình cho đến cuối những năm 70. Chúng tôi dành phần lớn thời gian để biên dịch hoặc gỡ những đoạn code dài khủng khiếp. Chúng tôi vẫn chưa phát minh ra chu trình ngắn như TDD, vậy nên chúng tôi không yêu cầu sự tinh chỉnh mà việc luyện tập mang lại.
