---
layout: default
---

# Chương 9, Tôi không thể đưa lớp này vào kiểm thử khai thác

Đây là trường hợp khó. Nếu việc khởi tạo một lớp trong kiểm thử khai thác luôn dễ dàng, thì cuốn sách này sẽ ngắn hơn rất nhiều. Thật không may, nó thường khó thực hiện.

Dưới đây là bốn vấn đề phổ biến nhất mà chúng ta thường gặp phải:

1. Các đối tượng của lớp không thể tạo ra một cách dễ dàng.

2. Kiểm thử khai thác sẽ không dễ dàng xây dựng với lớp đó bên trong.

3. Hàm khởi tạo mà chúng ta cần sử dụng có tác dụng phụ xấu.

4. Công việc quan trọng xảy ra trong hàm khởi tạo và chúng ta cần cảm nhận được điều đó.

Trong chương này, chúng ta sẽ đi qua một loạt các ví dụ làm nổi bật những vấn đề này bằng các ngôn ngữ khác nhau. Có nhiều hơn một cách để giải quyết từng vấn đề này. Tuy nhiên, đọc qua các ví dụ này là một cách tuyệt vời để làm quen với kho kỹ thuật phá vỡ sự phụ thuộc và học cách đánh đổi chúng cũng như áp dụng chúng trong các tình huống cụ thể.
