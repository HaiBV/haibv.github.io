---
layout: default
---

# Chương 21 - Tôi đang thay đổi cùng một đoạn code ở khắp mọi nơi

Đây có thể là một trong những điều khó chịu nhất trong các hệ thống cũ. Bạn cần thực hiện một sự thay đổi và bạn nghĩ, "Ồ, chỉ thế thôi." Sau đó, bạn phát hiện ra rằng bạn phải thực hiện đi thực hiện lại cùng một thay đổi vì có khoảng chục địa điểm có code tương tự như vậy trong hệ thống. Bạn có cảm giác rằng nếu bạn tái thiết kế hoặc tái cấu trúc hệ thống, có thể không gặp phải vấn đề này nữa, nhưng làm gì có thời gian cho việc đó? Vì vậy, bạn còn lại một điểm nhức nhối khác trong hệ thống, một điều gì đó nhìn chung làm tăng thêm sự tồi tệ.

Nếu bạn biết về tái cấu trúc, bạn sẽ có nhiều lợi thế hơn. Bạn biết rằng việc loại bỏ sự trùng lặp không nhất thiết phải đòi hỏi nỗ lực lớn lao chẳng hạn như tái thiết kế hoặc tái cấu trúc. Bạn hoàn toàn có thể cải thiện từng phần nhỏ trong khi thực hiện công việc của mình. Theo thời gian, hệ thống sẽ trở nên tốt hơn miễn là mọi người không tạo nên sự trùng lặp sau lưng bạn. Nếu là như vậy, bạn có thể thực hiện các bước với chúng mà không cần đến bạo lực, nhưng đó lại là một vấn đề khác. Câu hỏi quan trọng là nó có đáng không? Chúng ta nhận được gì khi nhiệt tình loại bỏ sự trùng lặp khỏi một vùng code? Kết quả thật đáng ngạc nhiên. Chúng ta hãy xem một ví dụ.

Chúng ta có một hệ thống mạng nhỏ dựa trên Java và phải gửi lệnh đến máy chủ. Hai lệnh mà chúng ta có được gọi là `AddEmployeeCmd` và `LogonCommand`. Khi cần đưa ra một lệnh, chúng ta sẽ khởi tạo nó và chuyển luồng đầu ra tới phương thức ghi của nó.