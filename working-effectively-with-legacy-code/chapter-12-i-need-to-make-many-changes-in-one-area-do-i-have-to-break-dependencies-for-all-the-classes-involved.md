---
layout: default
---

# Chương 12, Tôi cần thực hiện nhiều thay đổi trong một khu vực. Tôi có phải phá vỡ các phụ thuộc của tất cả các lớp liên quan không?

Trong một số trường hợp, rất dễ dàng để bắt đầu viết kiểm thử cho một lớp. Nhưng với code kế thừa thì thường là khó hơn. Sự phụ thuộc có thể khá khó để phá vỡ. Khi bạn cam kết đưa các lớp vào kiểm thử khai thác để giúp công việc dễ dàng hơn, một trong những điều khó chịu nhất có thể gặp phải là những thay đổi rải rác. Bạn cần thêm một tính năng mới vào hệ thống và thấy rằng mình phải sửa ba hoặc bốn lớp có liên quan chặt chẽ với nhau. Mỗi lớp sẽ mất vài giờ để kiểm thử. Chắc chắn rằng, bạn biết đến cuối cùng code sẽ tốt hơn, nhưng bạn có thực sự phải phá vỡ tất cả những phụ thuộc đó một cách riêng lẻ không? Có thể không.

Thông thường, việc kiểm thử "lùi một cấp độ" sẽ đáng để tìm một nơi có thể viết các kiểm thử cho một số thay đổi cùng một lúc. Chúng ta có thể viết các kiểm thử tại một phương thức công khai duy nhất để thay đổi một số phương thức riêng tư hoặc chúng ta có thể viết các kiểm thử tại giao diện của một đối tượng để cộng tác với một số đối tượng mà nó nắm giữ. Khi làm điều này, chúng ta có thể kiểm thử những thay đổi đang thực hiện, nhưng cũng tạo cho mình một số "vỏ bọc" để tái cấu trúc nhiều hơn trong khu vực. Cấu trúc code bên dưới các kiểm thử có thể thay đổi hoàn toàn miễn là các kiểm thử xác định hành vi của chúng.

> Các kiểm thử cấp cao hơn có thể hữu ích trong việc tái cấu trúc. Mọi người thường thích chúng hơn các kiểm thử chi tiết ở mỗi lớp vì họ nghĩ rằng thay đổi khó hơn khi có nhiều kiểm thử nhỏ được viết trên một giao diện phải thay đổi. Trên thực tế, các thay đổi thường dễ dàng hơn bạn mong đợi vì bạn có thể thực hiện các thay đổi đối với các kiểm thử và sau đó thực hiện các thay đổi đối với code, di chuyển cấu trúc theo từng bước nhỏ an toàn.

> Mặc dù các kiểm thử cấp cao hơn là một công cụ quan trọng, nhưng chúng không nên thay thế cho các kiểm thử đơn vị. Thay vào đó, chúng nên là bước đầu tiên để thực hiện các kiểm thử đơn vị.

Làm cách nào để có được những “kiểm thử bao phủ này? Điều đầu tiên mà chúng ta phải tìm ra là nơi để viết chúng. Nếu bạn chưa xem, hãy xem _Chương 11, Tôi Cần Thực Hiện Thay Đổi. Tôi nên kiểm thử những phương thức nào?_ Chương đó mô tả _các bản phác thảo hiệu ứng_ (155), một công cụ mạnh mẽ mà bạn có thể sử dụng để tìm ra nơi viết kiểm thử. Trong chương này, tôi mô tả khái niệm về _điểm đánh chặn_ và chỉ ra cách tìm ra chúng. Tôi cũng mô tả loại điểm đánh chặn tốt nhất mà bạn có thể tìm thấy trong code, _điểm chèn ép_. Tôi chỉ cho bạn cách tìm chúng và cách chúng có thể giúp bạn khi bạn muốn viết kiểm thử để bao phủ code bạn sắp thay đổi.
