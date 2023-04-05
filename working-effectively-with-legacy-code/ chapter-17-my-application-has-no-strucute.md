---
layout: default
---

# Chương 17 Ứng dụng của tôi không có kiến trúc

Các ứng dụng tồn tại quá lâu có xu hướng trở nên lộn xộn. Họ có thể đã bắt đầu với một kiến trúc được-cân-nhắc-kỹ-lưỡng, nhưng qua nhiều năm, dưới áp lực về tiến độ, họ có thể đi đến giai đoạn không một ai thực sự hiểu được toàn bộ cấu trúc. Người ta có thể làm việc nhiều năm trong một dự án và không biết các tính năng mới sẽ đi đến đâu; họ chỉ biết những đoạn hack đã được đặt trong hệ thống gần đây. Khi họ thêm các tính năng mới, họ sẽ chuyển đến “điểm hack” vì đó là nơi mà họ hiểu rõ nhất.

Không có biện pháp nào có thể khắc phục dễ dàng tình trạng này và mức độ khẩn cấp của mỗi tình huống rất khác nhau. Trong một số trường hợp, các lập trình viên như đụng phải một bức tường. Rất khó để thêm tính năng mới và điều đó khiến toàn bộ tổ chức rơi vào khủng hoảng. Mọi người được giao nhiệm vụ tìm hiểu xem liệu giữa thiết kế lại hoặc viết lại hệ thống thì cách nào sẽ tốt hơn. Trong các tổ chức khác, hệ thống hoạt động khập khiễng trong nhiều năm. Vâng, phải mất nhiều thời gian hơn mức cần thiết để thêm tính năng mới, nhưng đó chỉ được coi là cái giá của việc kinh doanh. Không ai biết nó có thể tốt hơn bao nhiêu hoặc mất bao nhiêu tiền vì cấu trúc kém.

Khi các nhóm không nhận thức được kiến trúc của họ, nó có xu hướng xuống cấp. Điều gì cản trở sự nhận thức này?

- Hệ thống có thể phức tạp đến mức phải mất nhiều thời gian để có được bức tranh toàn cảnh.
- Hệ thống có thể phức tạp đến mức không có bức tranh toàn cảnh.
- Nhóm đang ở trong một chế độ phản ứng gấp gáp, giải quyết hết trường hợp khẩn cấp này đến trường hợp khẩn cấp khác đến mức họ đánh mất tầm nhìn tổng thể.

