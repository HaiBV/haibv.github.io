---
layout: default
---

# Chương 23, Làm thế nào để biết rằng tôi không làm phá vỡ bất cứ thứ gì?

Code là một loại vật liệu xây dựng kỳ lạ. Hầu hết các vật liệu mà bạn có thể dùng để làm đồ vật, chẳng hạn như kim loại, gỗ và nhựa, đều bị hao mòn. Chúng bị hỏng khi được sử dụng qua thời gian. Code thì lại khác nhau. Kể cả bạn cứ để mặc nó, nó cũng không bao giờ bị hỏng. Họa chăng là có vài tia năng lượng làm mất một bit trong ổ cứng của bạn, cách duy nhất khiến nó bị lỗi là có ai đó chỉnh sửa. Chạy đi chạy lại một cỗ máy bằng kim loại, đến cuối cùng nó cũng hỏng. Chạy đi chạy lại cùng một đoạn code, và, tốt, nó cứ chạy đi chạy lại.

Điều này đặt một gánh nặng lớn lên chúng ta với tư cách là lập trình viên. Chúng ta không chỉ là tác nhân chính gây ra lỗi trong phần mềm mà còn khá dễ để gây ra điều đó. Làm thế nào để dễ dàng thay đổi code? Về mặt cơ học, khá đơn giản. Bất kỳ ai cũng có thể mở trình soạn thảo văn bản và phun ra những thứ vô nghĩa và phức tạp. Nhập một bài thơ. Một số trong số chúng sẽ biên dịch (hãy truy cập www.ioccc.org và xem cuộc thi Obfuscate C để biết chi tiết). Bỏ qua tính hài hước, thật đáng ngạc nhiên khi việc phá vỡ phần mềm lại dễ dàng như thế. Bạn đã bao giờ lần theo một lỗi bí ẩn rồi phát hiện ra có một ký tự đi lạc nào đó bạn vô tình nhập vào? Một số ký tự đã được nhập khi bìa sách rơi xuống lúc bạn chuyển nó qua bàn phím của mình? Code là vật liệu khá dễ vỡ.

Trong chương này, chúng ta sẽ thảo luận về nhiều cách khác nhau để giảm thiểu rủi ro khi chỉnh sửa. Một số trong số chúng là máy móc và một số là tâm lý (ouch!), nhưng việc tập trung vào chúng là rất quan trọng, đặc biệt là khi chúng ta phá vỡ sự phụ thuộc trong code kế thừa để thực hiện các kiểm thử.

## Chỉnh sửa siêu nhận thức

Điều chúng ta thực sự làm khi chỉnh sửa code là gì? Chúng ta đang cố gắng đạt được điều gì? Chúng ta thường có những mục tiêu lớn. Chúng ta muốn thêm một tính năng hoặc sửa lỗi. Thật tuyệt khi biết những mục tiêu đó là gì, nhưng làm cách nào để biến chúng thành hành động?

Khi ngồi trước bàn phím, chúng ta có thể phân loại tất cả tổ hợp phím được thực hiện thành hai loại. Có thể thay đổi hành vi của phần mềm hoặc không. Nhập văn bản trong một bình luận? Điều đó không thay đổi hành vi. Nhập văn bản trong một chuỗi ký tự? Điều đó thì có, hầu như mọi lúc. Nếu chuỗi ký tự nằm trong đoạn code không bao giờ được gọi, thì hành vi sẽ không thay đổi. Tổ hợp phím mà bạn thực hiện sau đó kết thúc một cuộc gọi phương thức sử dụng chuỗi ký tự đó, vậy thì, điều đó sẽ thay đổi hành vi. Vì vậy, về mặt kỹ thuật, việc giữ phím cách khi định dạng code là tái cấu trúc rất vi mô. Đôi khi gõ code cũng là tái cấu trúc. Việc thay đổi số trong biểu thức được sử dụng trong code của bạn không phải là tái cấu trúc; đó là _thay đổi về chức năng_ và điều quan trọng là phải biết điều đó khi bạn thay đổi.

Đây là cốt lõi của lập trình, biết chính xác tác dụng của mỗi lần nhấn phím. Điều này không có nghĩa là bạn phải thông suốt mọi thứ, nhưng bất cứ điều gì giúp chúng ta biết - thực sự biết - cách chúng ta đang tác động đến phần mềm khi chúng ta nhập đều có thể giúp giảm lỗi. _Phát triển dựa trên thử nghiệm (TDD)_ (88) rất hiệu quả theo cách này. Khi bạn có thể đưa code của mình vào bộ kiểm thử khai thác và chạy kiểm thử đối với code đó trong vòng chưa đầy một giây, bạn có thể chạy kiểm thử bất cứ khi nào bạn cần với tốc độ cực nhanh và thực sự biết tác động của thay đổi là gì.

> Nếu nó vẫn chưa ra mắt vào thời điểm cuốn sách này được phát hành, tôi nghi ngờ rằng ai đó sẽ sớm phát triển một IDE cho phép bạn chỉ định một tập hợp các kiểm thử sẽ chạy ở mỗi lần nhấn phím. Đó sẽ là một cách đáng kinh ngạc để đóng vòng phản hồi.
>
> Điều đó phải xảy ra. Không thể tránh khỏi. Đã có những IDE kiểm tra cú pháp trên mỗi lần nhấn phím và thay đổi màu mã khi có lỗi. Kích hoạt kiểm thử khi chỉnh sửa là bước tiếp theo.

Các kiểm thử thúc đẩy chỉnh sửa siêu nhận thức. Lập trình cặp cũng vậy. Chỉnh sửa siêu nhận thức nghe có vẻ mệt mỏi? Vâng, quá nhiều của bất cứ điều gì là mệt mỏi. Điều quan trọng là nó không gây khó chịu. Chỉnh sửa siêu nhận thức là trạng thái dòng chảy, trạng thái mà bạn có thể ngắt kết nối với thế giới bên ngoài và chỉ làm việc với code. Nó thực sự có thể rất mới mẻ. Cá nhân tôi cảm thấy mệt mỏi hơn nhiều khi không nhận được bất kỳ phản hồi nào. Lúc đó, tôi sợ rằng mình đang phá hỏng code mà không biết. Tôi đang đấu tranh để duy trì tất cả trạng thái này trong đầu, ghi nhớ những gì tôi đã thay đổi và những gì tôi chưa thay đổi, và suy nghĩ về cách tôi có thể thuyết phục bản thân sau này rằng tôi đã thực sự làm được những gì mình đặt ra làm.

## Mục tiêu chỉnh sửa duy nhất

Tôi không nghĩ rằng ấn tượng đầu tiên của mọi người về ngành công nghiệp máy tính là giống nhau, nhưng khi lần đầu tiên tôi nghĩ đến việc trở thành một lập trình viên, tôi đã thực sự bị thu hút bởi những câu chuyện về các lập trình viên siêu thông minh, những chàng trai và cô gái có thể giữ trạng thái của toàn bộ hệ thống trong đầu, viết code chính xác một cách nhanh chóng và ngay lập tức biết được thay đổi này là đúng hay sai. Đúng là mọi người rất khác nhau về khả năng ghi nhớ một lượng lớn chi tiết phức tạp trong đầu. Tôi có thể làm điều đó, ở một mức độ nào đó. Tôi đã từng biết đến nhiều phần mơ hồ của ngôn ngữ lập trình C++, và tại một thời điểm nào đó, tôi đã nhớ rất rõ các chi tiết của siêu mô hình UML trước khi tôi nhận ra rằng việc trở thành một lập trình viên với cùng với biết nhiều về các chi tiết của UML thực sự vô nghĩa và hơi buồn.

Sự thật là có nhiều loại hình "thông minh" khác nhau. Nhớ được nhiều trạng thái hệ thống trong đầu có thể hữu ích, nhưng nó không thực sự giúp chúng ta đưa ra quyết định tốt hơn. Tại thời điểm này trong sự nghiệp của mình, tôi nghĩ mình là một lập trình viên giỏi hơn nhiều so với trước đây, mặc dù tôi biết ít hơn về các chi tiết của từng ngôn ngữ mà tôi làm việc. Phán đoán là một kỹ năng lập trình quan trọng và chúng ta có thể gặp rắc rối khi chúng ta cố gắng hành động như những lập trình viên siêu thông minh.

Đã ban giờ bạn gặp sự việc sau? Bạn bắt đầu làm một việc, và sau đó bạn nghĩ, "Hừm, có lẽ mình nên dọn dẹp cái này." Vì vậy, bạn dừng lại để cấu trúc lại một chút, nhưng bạn bắt đầu nghĩ xem code thực sự sẽ trông như thế nào, rồi bạn tạm dừng. Tính năng mà bạn đang làm vẫn cần được hoàn thiện, vì vậy bạn quay lại vị trí ban đầu nơi bạn đang chỉnh sửa code. Bạn quyết định rằng bạn cần gọi một phương thức, sau đó bạn nhảy đến vị trí của phương thức đó, nhưng bạn phát hiện ra rằng phương thức đó sẽ cần thực hiện một việc khác, vì vậy bạn bắt đầu thay đổi nó trong khi thay đổi ban đầu của bạn đang chờ được xử lý và (nín thở) đối tác trong cặp của bạn ở bên cạnh bạn hét lên "Đúng, đúng, đúng! Khắc phục điều đó và sau đó chúng tôi sẽ làm điều này." Bạn cảm thấy mình giống như một con ngựa đua đang chạy trên đường đua và đối tác của bạn không thực sự giúp ích được gì. Anh ấy đang cưỡi bạn như một tay đua ngựa hoặc tệ hơn là một con bạc trên khán đài.

Chà, đó là cách nó diễn ra ở một số nhóm. Một cặp có một chương trình thú vị, nhưng 3 quý cuối năm chỉ dùng để sửa tất cả code mà họ đã phá vỡ trong quý trước. Nghe có vẻ kinh khủng, phải không? Nhưng, không, đôi khi nó rất vui. Bạn và đối tác của mình có thể bước ra khỏi cỗ máy như những anh hùng. Bạn đã gặp con thú trong hang ổ của nó và giết nó. Bạn là nhất.

Nó có đáng không? Hãy xem xét một góc nhìn khác về điều này.


