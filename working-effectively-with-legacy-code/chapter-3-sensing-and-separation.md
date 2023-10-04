---
layout: default
---

# Chương 3 Hiểu biết và tách biệt

Lý tưởng nhất là khi chúng ta không phải làm bất cứ điều gì đặc biệt đối với một lớp để bắt đầu làm việc với nó. Trong một hệ thống lý tưởng, chúng ta có thể khởi tạo các đối tượng thuộc bất kỳ lớp nào trong kiểm thử khai thác và khiến chúng hoạt động. Chúng ta có thể khởi tạo các đối tượng, viết kiểm thử cho chúng và sau đó chuyển sang những thứ khác. Nếu mọi việc dễ dàng như vậy thì sẽ chẳng có gì để viết về nó, nhưng thật không may, chúng thường khó. Sự phụ thuộc giữa các lớp có thể gây khó khăn cho việc kiểm thử các cụm đối tượng cụ thể. Chúng ta có thể muốn tạo một đối tượng của một lớp và đặt các câu hỏi cho nó, nhưng để tạo ra nó, chúng ta cần các đối tượng của một lớp khác và những đối tượng đó cần các đối tượng của một lớp khác, v.v. Cuối cùng, bạn kết thúc với gần như toàn bộ hệ thống. Trong một số ngôn ngữ, đây không phải là vấn đề lớn. Ở những nơi khác, đáng chú ý nhất là C++, chỉ riêng thời gian liên kết có thể khiến việc quay vòng nhanh chóng gần như không thể xảy ra nếu bạn không phá bỏ sự phụ thuộc.

Trong các hệ thống không được phát triển đồng thời với các kiểm thử đơn vị, chúng ta thường phải phá bỏ các phần phụ thuộc để đưa các lớp vào kiểm thử khai thác, nhưng đó không phải là lý do duy nhất để phá bỏ phụ thuộc. Đôi khi lớp chúng ta muốn kiểm thử có ảnh hưởng đến các lớp khác và các kiểm thử của chúng ta cần biết về chúng. Đôi khi chúng ta có thể cảm nhận được những tác động đó thông qua giao diện của lớp khác. Vào những lúc khác, chúng ta không thể. Lựa chọn duy nhất mà chúng ta có là mạo danh lớp khác để có thể trực tiếp cảm nhận được tác động.

Nói chung, khi chúng tôi muốn thực hiện các kiểm thử, có hai lý do để phá bỏ sự phụ thuộc: cảm biến và tách biệt.

1. Cảm biến — Chúng ta phá bỏ các phần phụ thuộc để nhận biết khi không thể truy cập các giá trị mà code của chúng ta tính toán.
2. Tách biệt — Chúng ta phá bỏ các phần phụ thuộc để phân tách khi thậm chí không thể lấy một đoạn code vào bộ kiểm thử khai thác để chạy.
