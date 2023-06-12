---
layout: default
---

# Chương 10, Tôi không thể chạy được phương thức này trong kiểm thử khai thác

Việc đặt kiểm thử tại vị trí thực hiện các thay đổi đôi khi là cả một vấn đề. Nếu bạn có thể khởi tạo lớp của mình một cách riêng biệt trong kiểm thử khai thác, hãy coi mình là người may mắn. Rất nhiều người không thể làm điều đó. Nếu bạn gặp khó khăn, hãy xem _Chương 9, Tôi không thể đưa lớp này vào kiểm thử khai thác_

Khởi tạo lớp thường chỉ là phần đầu của cuộc chiến. Phần thứ hai là viết kiểm thử cho các phương thức chúng ta cần thay đổi. Đôi khi chúng ta không cần khởi tạo lớp để làm điều đó. Nếu phương thức không sử dụng nhiều dữ liệu với thực thể, chúng ta có thể sử dụng _Công khai Phương thức tĩnh (345)_ để có quyền truy cập vào code. Nếu phương thức khá dài và khó xử lý, chúng ta có thể sử dụng _Chia nhỏ Đối tượng Phương thức (330)_ để chuyển code sang một lớp khác có thể khởi tạo dễ dàng hơn.

May mắn thay, trong hầu hết các trường hợp, khối lượng công việc mà chúng ta phải làm để viết các kiểm thử cho các phương thức không quá nhiều. Dưới đây là một số vấn đề mà chúng ta có thể gặp phải.

- Phương thức này có thể không truy cập được để kiểm thử. Nó có thể là riêng tư hoặc có một số vấn đề về khả năng truy cập khác.
- Có thể khó gọi phương thức vì khó khởi tạo các tham số cần để gọi nó.
- Phương thức này có thể có các tác dụng phụ xấu (sửa đổi cơ sở dữ liệu, phóng tên lửa hành trình, v.v.), do đó không thể chạy kiểm thử.
- Chúng ta có thể cần hiểu rõ một số đối tượng mà phương thức sử dụng.

Phần còn lại của chương này bao gồm một tập hợp các tình huống chỉ ra những cách khác nhau để vượt qua chúng và một số sự đánh đổi liên quan.

## Trường hợp của phương thức ẩn

Chúng ta cần thay đổi một phương thức trong một lớp, nhưng đó là một phương thức riêng tư. Chúng ta nên làm gì?

Câu hỏi đầu tiên đặt ra là liệu có thể kiểm thử nó thông qua một phương thức công khai hay không. Nếu có thể, đó là một điều đáng làm. Nó giúp chúng ta tránh khỏi rắc rối khi cố truy cập một phương thức riêng tư. Ngoài ra còn có một lợi ích khác, nếu kiểm thử thông qua các phương thức công khai, chúng ta đảm bảo phương thức đó đã được kiểm thử khi sử dụng nó. Điều này có thể giúp chúng ta thu hẹp công việc một chút. Trong code kế thừa, thường có các phương thức có chất lượng rất đáng ngờ nằm đâu đó trong các lớp. Khối lượng công việc cho những tác vụ tái cấu trúc phải thực hiện - để khiến một phương thức riêng tư trở nên hữu dụng - có thể khá lớn. Mặc dù thật tuyệt khi có các phương thức chung hữu ích cho nhiều lời gọi, nhưng thực tế là mỗi phương thức phải đủ chức năng để hỗ trợ lời gọi sử dụng nó và đủ rõ ràng để hiểu và dễ thay đổi. Nếu chúng ta kiểm thử một phương thức riêng tư thông qua các phương thức công khai sử dụng nó, thì không có nhiều nguy cơ khiến nó trở nên quá chung chung. Nếu phương thức cần được công khai vào một ngày nào đó, người dùng đầu tiên bên ngoài lớp nên viết các trường hợp kiểm thử giải thích chính xác chức năng của phương thức và cách lời gọi có thể sử dụng phương thức đó một cách chính xác.

Tất cả đều ổn, nhưng trong một số trường hợp, chúng ta chỉ muốn viết một trường hợp kiểm thử cho một phương thức riêng tư, một phương thức mà lời gọi của nó được chôn sâu trong một lớp. Chúng ta muốn có phản hồi cụ thể và các kiểm thử giải thích được cách sử dụng phương thức — hoặc, giả sử, việc kiểm thử nó thông qua các phương thức công khai trên lớp là một điều khó khăn.

Vì vậy, làm thế nào để chúng ta viết kiểm thử cho một phương thức riêng tư? Đây là một trong những câu hỏi liên quan đến kiểm thử phổ biến nhất. May mắn thay, có một câu trả lời rất trực tiếp cho câu hỏi này: Nếu chúng ta cần kiểm thử một phương thức riêng tư, chúng ta nên công khai nó. Nếu biến nó trở thành công khai gây phiền hà, thì trong hầu hết mọi trường hợp, có nghĩa là lớp đó đang làm quá nhiều và chúng ta cần phải sửa nó. Hãy xem xét các trường hợp sau. Tại sao việc công khai một phương thức riêng tư lại gây phiền hà? Dưới đây là một số lý do:

1. Phương thức chỉ là một tiện ích; không phải là thứ khách hàng quan tâm.
2. Nếu khách hàng sử dụng phương thức này, chúng có thể ảnh hưởng xấu đến kết quả từ các phương thức khác trong lớp.

Lý do đầu tiên không quá nghiêm trọng. Có thể chấp nhận bổ sung một phương thức công khai trong giao diện của một lớp, mặc dù chúng ta nên cố gắng tìm hiểu xem liệu việc đặt phương thức đó trong một lớp khác có tốt hơn không. Lý do thứ hai nghiêm trọng hơn một chút, nhưng may mắn thay có một biện pháp khắc phục: Các phương thức riêng tư có thể được chuyển sang một lớp mới. Chúng có thể công khai trên lớp đó và lớp của chúng ta có thể tạo một thực thể bên trong của nó. Điều đó làm cho các phương thức có thể kiểm thử được và giúp thiết kế tốt hơn.
