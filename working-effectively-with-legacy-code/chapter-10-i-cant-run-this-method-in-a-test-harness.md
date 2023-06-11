---
layout: default
---

# Chương 10, Tôi không thể chạy được phương thức này trong kiểm thử khai thác

Việc đặt kiểm thử tại vị trí thực hiện các thay đổi đôi khi là cả một vấn đề. Nếu bạn có thể khởi tạo lớp của mình một cách riêng biệt trong kiểm thử khai thác, hãy coi mình là người may mắn. Rất nhiều người không thể làm điều đó. Nếu bạn gặp khó khăn, hãy xem _Chương 9, Tôi không thể đưa lớp này vào kiểm thử khai thác_

Khởi tạo lớp thường chỉ là phần đầu của cuộc chiến. Phần thứ hai là viết kiểm thử cho các phương thức chúng ta cần thay đổi. Đôi khi chúng ta không cần khởi tạo lớp để làm điều đó. Nếu phương thức không sử dụng nhiều dữ liệu với thực thể, chúng ta có thể sử dụng _Công khai Phương thức tĩnh (345)_ để có quyền truy cập vào code. Nếu phương thức khá dài và khó xử lý, chúng ta có thể sử dụng _Chia nhỏ Đối tượng Phương thức (330)_ để chuyển code sang một lớp khác có thể khởi tạo dễ dàng hơn.

May mắn thay, trong hầu hết các trường hợp, khối lượng công việc mà chúng ta phải làm để viết các kiểm thử cho các phương thức không quá nhiều. Dưới đây là một số vấn đề mà chúng ta có thể gặp phải.

- Phương thức này có thể không truy cập được để kiểm thử. Nó có thể là riêng tư hoặc có một số vấn đề về khả năng truy cập khác.
- Có thể khó gọi phương thức vì khó khởi tạo các tham số cần để gọi nó.
- Phương thức này có thể có các tác dụng phụ xấu (sửa đổi cơ sở dữ liệu, phóng tên lửa hành trình, v.v.), do đó không thể chạy thử nghiệm.
- Chúng ta có thể cần hiểu rõ một số đối tượng mà phương thức sử dụng.

Phần còn lại của chương này bao gồm một tập hợp các tình huống chỉ ra những cách khác nhau để vượt qua chúng và một số sự đánh đổi liên quan.
