---
layout: default
---

# Chương 1 Thay đổi phần mềm

Thay đổi code là một việc tuyệt vời. Đó là những gì chúng ta làm để kiếm sống. Nhưng có những cách thay đổi code khiến cuộc sống trở nên khó khăn và có những cách khiến nó trở nên dễ dàng hơn nhiều. Trong ngành này, chúng ta chưa nói nhiều về điều đó. Điều gần nhất mà chúng ta nhận được là tài liệu về tái cấu trúc. Tôi nghĩ chúng ta có thể mở rộng cuộc thảo luận ra một chút và nói về cách xử lý code trong những tình huống khó khăn nhất. Để làm được điều đó, chúng ta phải tìm hiểu sâu hơn về cơ chế của sự thay đổi.

## Bốn lý do để thay đổi phần mềm

Hãy xem xét bốn lý do chính để thay đổi phần mềm.

1. Thêm tính năng
2. Sửa lỗi
3. Cải thiện thiết kế
4. Tối ưu hóa việc sử dụng tài nguyên

### Thêm tính năng và Sửa lỗi

Thêm một tính năng có vẻ như là loại thay đổi đơn giản nhất để thực hiện. Phần mềm hoạt động theo một cách và người dùng nói rằng hệ thống cần phải làm thêm một điều gì đó khác.

Giả sử chúng ta đang làm việc với một ứng dụng web và một quản lý nói với chúng ta rằng cô ấy muốn logo công ty được chuyển từ bên trái của trang sang bên phải. Chúng ta nói chuyện với cô ấy về điều đó và phát hiện ra rằng nó không chỉ đơn giản như vậy. Cô ấy muốn di chuyển logo, nhưng cô ấy cũng muốn những thay đổi khác. Cô ấy muốn nó phải sống động cho lần phát hành tiếp theo. Đây là sửa lỗi hay là thêm tính năng mới? Nó còn tùy vào quan điểm của bạn. Từ quan điểm của khách hàng, cô ấy chắc chắn đang yêu cầu chúng ta khắc phục sự cố. Có thể cô ấy đã xem trang web và tham dự một cuộc họp với những người trong bộ phận của cô ấy, và họ quyết định thay đổi vị trí đặt logo đồng thời yêu cầu thêm một chút chức năng. Từ quan điểm của lập trình viên, thay đổi đó có thể được coi là một tính năng hoàn toàn mới. "Nếu họ ngừng thay đổi yêu cầu, thì chúng ta đã xong việc rồi." Nhưng trong một số tổ chức, việc di chuyển logo chỉ được coi là một sửa lỗi, bất kể thực tế là nhóm sẽ phải làm rất nhiều công việc mới.

Thật dễ để kết luận rằng tất cả những điều trên chỉ mang tính chủ quan. Bạn xem nó như một bản sửa lỗi, còn tôi xem nó như một tính năng, và không có gì phải bàn. Tuy nhiên, đáng buồn là trong nhiều tổ chức, các bản sửa lỗi và tính năng được theo dõi và hạch toán riêng vì liên quan đến các hợp đồng hoặc sáng kiến chất lượng. Ở cấp độ con người, chúng ta có thể nói đi nói lại không ngừng về việc có phải chúng ta có đang thêm mới các tính năng hay sửa lỗi hay không, nhưng tất cả chỉ là thay đổi code và các tạo phẩm khác. Thật không may, câu chuyện về sửa lỗi và bổ sung tính năng này che giấu một thứ quan trọng hơn nhiều đối với chúng ta về mặt kỹ thuật: thay đổi hành vi. Có một sự khác biệt lớn giữa việc thêm hành vi mới và thay đổi hành vi cũ.

Hành vi là thứ quan trọng nhất của phần mềm. Đó là những gì người dùng phụ thuộc vào. Người dùng thích khi chúng ta thêm hành vi (miễn đó là điều họ thực sự muốn), nhưng nếu chúng tôi thay đổi hoặc xóa hành vi mà họ đang phụ thuộc(khi đứng trước lỗi), thì họ sẽ ngừng tin tưởng chúng ta.

Quay lại ví dụ về logo của công ty, chúng ta có thêm hành vi không? Có. Sau khi thay đổi, hệ thống sẽ hiển thị logo ở bên phải trang. Chúng ta có đang loại bỏ bất kỳ hành vi nào không? Có, sẽ không có logo ở phía bên trái.

Hãy xem xét một tình huống khó hơn. Giả sử một khách hàng muốn thêm một logo vào phía bên phải của trang nhưng ban đầu không có biểu tượng nào ở phía bên trái. Có, chúng tôi đang thêm hành vi, nhưng chúng tôi có xóa bất kỳ hành vi nào không? Có bất cứ thứ gì được hiển thị ở nơi sắp hiển thị logo không?

Chúng ta đang thay đổi hành vi, thêm nó hay cả hai?
