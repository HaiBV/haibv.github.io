---
layout: default
---

# Chương 23, Làm thế nào để biết rằng tôi không làm phá vỡ bất cứ thứ gì?

Code là một loại vật liệu xây dựng kỳ lạ. Hầu hết các vật liệu mà bạn có thể dùng để làm đồ vật, chẳng hạn như kim loại, gỗ và nhựa, đều bị hao mòn. Chúng bị hỏng khi được sử dụng qua thời gian. Code thì lại khác nhau. Kể cả bạn cứ để mặc nó, nó cũng không bao giờ bị hỏng. Họa chăng là có vài tia năng lượng làm mất một bit trong ổ cứng của bạn, cách duy nhất khiến nó bị lỗi là có ai đó chỉnh sửa. Chạy đi chạy lại một cỗ máy bằng kim loại, đến cuối cùng nó cũng hỏng. Chạy đi chạy lại cùng một đoạn code, và, tốt, nó cứ chạy đi chạy lại.

Điều này đặt một gánh nặng lớn lên chúng ta với tư cách là lập trình viên. Chúng ta không chỉ là tác nhân chính gây ra lỗi trong phần mềm mà còn khá dễ để gây ra điều đó. Làm thế nào để dễ dàng thay đổi code? Về mặt cơ học, khá đơn giản. Bất kỳ ai cũng có thể mở trình soạn thảo văn bản và phun ra những thứ vô nghĩa và phức tạp. Nhập một bài thơ. Một số trong số chúng sẽ biên dịch (hãy truy cập www.ioccc.org và xem cuộc thi Obfuscate C để biết chi tiết). Bỏ qua tính hài hước, thật đáng ngạc nhiên khi việc phá vỡ phần mềm lại dễ dàng như thế. Bạn đã bao giờ lần theo một lỗi bí ẩn rồi phát hiện ra có một ký tự đi lạc nào đó bạn vô tình nhập vào? Một số ký tự đã được nhập khi bìa sách rơi xuống lúc bạn chuyển nó qua bàn phím của mình? Code là vật liệu khá dễ vỡ.

Trong chương này, chúng ta sẽ thảo luận về nhiều cách khác nhau để giảm thiểu rủi ro khi chỉnh sửa. Một số trong số chúng là máy móc và một số là tâm lý (ouch!), nhưng việc tập trung vào chúng là rất quan trọng, đặc biệt là khi chúng ta phá vỡ sự phụ thuộc trong code kế thừa để thực hiện các kiểm thử.
