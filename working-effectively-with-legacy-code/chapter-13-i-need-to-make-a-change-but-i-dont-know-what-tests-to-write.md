---
layout: default
---

# Chương 13, Tôi cần thực hiện thay đổi nhưng tôi không biết kiểm thử nào phải viết

Khi mọi người nói về kiểm thử, họ thường đề cập đến các kiểm thử sử dụng để tìm lỗi. Thường thì những kiểm thử này là kiểm thử thủ công. Viết các kiểm thử tự động để tìm lỗi trong code kế thừa thường không mang lại cảm giác hiệu quả bằng việc chạy thử code. Nếu bạn có một số cách để thực thi code kế thừa một cách thủ công, bạn thường có thể tìm ra lỗi rất nhanh. Nhược điểm là bạn phải làm đi làm lại công việc thủ công đó bất cứ khi nào bạn thay đổi code. Và, thành thật mà nói, mọi người không làm điều đó. Gần như mọi nhóm mà tôi từng làm việc phụ thuộc vào kiểm thử thủ công để tìm những thay đổi của họ đều đã bị tụt hậu rất xa. Sự tự tin của nhóm không phải là những gì nó có thể được.

Không, tìm lỗi trong code kế thừa thường không phải là vấn đề. Về mặt chiến lược, nó thực sự có thể là nỗ lực sai hướng. Thông thường tốt hơn là làm điều gì đó giúp nhóm của bạn bắt đầu viết code chính xác một cách nhất quán. Cách để giành chiến thắng là tập trung nỗ lực vào việc không đưa lỗi vào code ngay từ đầu.

Kiểm thử tự động là một công cụ rất quan trọng, nhưng không phải để tìm lỗi — ít nhất là không phải trực tiếp. Nói chung, các kiểm thử tự động nên chỉ định một mục tiêu mà chúng ta muốn hoàn thành hoặc cố gắng duy trì hành vi đã có. Trong dòng phát triển tự nhiên, các kiểm thử _chỉ định_ trở thành các kiểm thử _bảo tồn_. Bạn sẽ tìm thấy lỗi, nhưng thường không phải là lần đầu tiên chạy kiểm thử. Bạn tìm thấy lỗi trong các lần chạy sau khi bạn thay đổi hành vi mà bạn không mong đợi.

Điều này sẽ giúp chúng ta với code kế thừa ở đâu? Trong code kế thừa, chúng ta có thể không có bất kỳ kiểm thử nào đối với những thay đổi mà chúng ta cần thực hiện, vì vậy, không có cách nào để thực sự xác minh rằng chúng ta đang duy trì hành vi khi thực hiện thay đổi. Vì lý do này, cách tiếp cận tốt nhất có thể thực hiện khi cần thực hiện thay đổi là củng cố khu vực chúng ta muốn thay đổi bằng các kiểm thử để cung cấp một số loại mạng lưới an toàn. Chúng ta sẽ tìm thấy các lỗi trong quá trình thực hiện và sẽ phải xử lý chúng, nhưng trong hầu hết các code kế thừa, nếu coi việc tìm và sửa tất cả các lỗi là mục tiêu của mình thì chúng ta sẽ không bao giờ hoàn thành.
