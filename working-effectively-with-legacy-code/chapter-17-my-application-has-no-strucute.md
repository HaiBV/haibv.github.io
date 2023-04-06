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

Thông thường, nhiều tổ chức sử dụng vai trò kiến trúc sư hệ thống để giải quyết những vấn đề này. Họ thường được giao nhiệm vụ dựng lên bức tranh toàn cảnh và đưa ra các quyết định giúp bảo tồn nó cho cả nhóm. Cách làm này có thể hoạt động, nhưng có một cảnh báo khá rõ ràng. Kiến trúc sư hệ thống phải ở trong nhóm đó, làm việc với các thành viên hàng ngày, nếu không code sẽ rẽ sang hướng khác so với bức tranh toàn cảnh. Điều này có thể xảy ra theo hai hướng: Ai đó có thể đang làm một việc không phù hợp trong code hoặc bản thân bức tranh toàn cảnh có thể cần phải được sửa đổi. Trong một số tình huống tồi tệ nhất mà tôi gặp phải với các nhóm, kiến trúc sư hệ thống có cái nhìn hoàn toàn khác về hệ thống so với các lập trình viên. Điều này thường xảy ra khi kiến trúc sư hệ thống có các trách nhiệm khác và không thể trực tiếp làm việc với code hoặc không trao đổi với các thành viên còn lại của nhóm đủ thường xuyên để thực sự biết những gì đang diễn ra. Kết quả là, việc trao đổi thông tin bị phá vỡ trong toàn bộ tổ chức.

Có một sự thật phũ phàng là kiến trúc hệ thống quá quan trọng để giao cho một số ít người. Có một kiến trúc sư hệ thống cũng tốt, nhưng việc cốt lõi để giữ cho một kiến trúc nguyên vẹn là đảm bảo mọi người trong nhóm biết nó là gì và tất cả đều có trách nhiệm với nó. Mọi người làm việc với code nên biết kiến trúc của nó và những người khác có thể hưởng lợi từ những gì họ học được. Khi mọi người làm việc với cùng một nhóm ý tưởng, trí thông minh hệ thống tổng thể của nhóm sẽ được khuếch đại. Giả sử, nếu bạn có một nhóm gồm 20 người và chỉ có 3 người biết chi tiết về kiến trúc hệ thống, thì 3 người đó phải làm rất nhiều việc để giữ cho 17 người còn lại đi đúng hướng hoặc 17 người còn lại mắc sai lầm do không quen với bức tranh toàn cảnh.

Làm thế nào chúng ta có được bức tranh toàn cảnh về một hệ thống lớn? Có rất nhiều cách để làm điều này. Cuốn sách _Các mẫu mô hình tái cấu trúc hướng đối tượng (Object-Oriented Reengineering Patterns)_, của Serge Demeyer, Stephane Ducasse, và Oscar M. Nierstrasz (Nhà xuất bản Morgan Kaufmann, 2002), chứa một danh sách các kỹ thuật chỉ để giải quyết vấn đề này. Ở đây tôi cũng mô tả một số kỹ thuật khác mạnh mẽ không kém. Nếu bạn thực hành chúng thường xuyên trong một nhóm, chúng sẽ giúp duy trì mối quan tâm về kiến trúc trong nhóm - và đó có lẽ là điều quan trọng nhất bạn có thể làm để bảo tồn kiến trúc. Thật khó để chú ý đến điều gì đó mà bạn không nghĩ đến thường xuyên.
