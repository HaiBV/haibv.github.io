---
layout: default
---

# Chương 19 Dự án của tôi không hướng đối tượng. Làm cách nào để thực hiện an toàn các thay đổi?

Tiêu đề của chương này có chút châm biếm. Chúng ta có thể thực hiện các thay đổi an toàn bằng bất kỳ ngôn ngữ nào, nhưng một số ngôn ngữ khiến việc thay đổi trở nên dễ dàng hơn những ngôn ngữ khác. Mặc dù định hướng đối tượng đã lan rộng khá nhiều trong ngành nhưng vẫn có nhiều ngôn ngữ và cách lập trình khác. Có các ngôn ngữ dựa trên quy tắc, ngôn ngữ lập trình chức năng, ngôn ngữ lập trình dựa trên ràng buộc — danh sách vẫn còn dài. Nhưng trong số tất cả những ngôn ngữ này, không ngôn ngữ nào phổ biến bằng các ngôn ngữ thủ tục cũ đơn giản, chẳng hạn như C, COBOL, FORTRAN, Pascal và BASIC.

Ngôn ngữ thủ tục đặc biệt khó khăn trong môi trường kế thừa. Điều quan trọng là phải kiểm thử code trước khi sửa đổi nó, nhưng số việc bạn có thể làm để đưa kiểm thử đơn vị trong các ngôn ngữ thủ tục là khá ít. Thông thường, điều dễ dàng nhất có thể làm là suy nghĩ thật kỹ, vá lỗi hệ thống và hy vọng rằng những thay đổi của bạn là đúng.

Vấn đề khó khăn trong kiểm thử là một căn bệnh nặng trong code kế thừa thủ tục. Các ngôn ngữ thủ tục thường không có các đường nối mà các ngôn ngữ lập trình OO (và nhiều ngôn ngữ chức năng) có. Các lập trình viên hiểu biết có thể vượt qua điều này bằng cách quản lý các phần phụ thuộc của họ một cách cẩn thận (chẳng hạn, có rất nhiều chương trình tuyệt vời được viết bằng C), nhưng cũng dễ dàng kết thúc bằng một tiếng gầm gừ thực sự khó thay đổi dần dần và có thể kiểm chứng được.

Bởi vì việc phá vỡ các phần phụ thuộc trong code thủ tục là rất khó nên chiến lược tốt nhất thường là cố gắng kiểm thử một lượng lớn code trước khi thực hiện bất kỳ điều gì khác và sau đó sử dụng các kiểm thử đó để nhận một số phản hồi trong khi phát triển. Các kỹ thuật trong _Chương 12, Tôi cần thực hiện nhiều thay đổi trong một khu vực. Tôi có phải phá vỡ các phụ thuộc của tất cả các lớp liên quan không?_ có thể giúp được phần nào. Chúng áp dụng cho code thủ tục cũng như code hướng đối tượng. Nói tóm lại, bạn nên tìm _điểm chặn (180)_ và sau đó sử dụng _đường nối liên kết (36)_ để phá vỡ các phần phụ thuộc vừa đủ để đưa code vào trong kiểm thử khai thác. Nếu ngôn ngữ của bạn có bộ tiền xử lý macro, bạn cũng có thể sử dụng _đường nối tiền xử lý (33)_.

Đó là cách hành động tiêu chuẩn nhưng không phải là cách duy nhất. Trong phần còn lại của chương này, chúng ta xem xét các cách để phá vỡ sự phụ thuộc cục bộ trong các chương trình thủ tục, cách thực hiện các thay đổi có thể kiểm thử dễ dàng hơn và các cách tiếp tục khi chúng ta đang sử dụng ngôn ngữ có đường dẫn di chuyển sang OO.
