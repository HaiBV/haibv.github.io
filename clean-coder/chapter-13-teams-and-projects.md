---
layout: default
---

# Chương 13 Đội nhóm và dự án

Sẽ ra sao nếu bạn có nhiều dự án nhỏ cần hoàn thiện? Bạn sẽ phân bổ những dự án đó cho lập trình viên như thế nào? Sẽ ra sao nếu bạn có một dự án thực sự lớn cần hoàn thiện?

## Có nên trộn vào?

Tôi cố vấn cho một số ngân hàng và tổ chức bảo hiểm trong vài năm. Có một điểm chung kỳ lạ giữa họ là cách họ phân chia những dự án.

Thông thường một dự án ở ngân hàng sẽ là một công việc tương đối nhỏ cần từ một đến 2 lập trình viên trong khoảng vài tuần. Dự án này thường sẽ được quản lý bởi 1 PM, người này đang quản lý những dự án khác. Dự án có một BA, người cũng cung cấp yêu cầu cho những dự án khác. Nó được giao cho một vài lập trình viên cũng làm việc ở một vài dự án khác. Một hoặc 2 tester được chỉ định vào dự án, và họ cũng làm việc ở những dự án khác.

Bạn đã nhận ra khuôn mẫu chưa? Dự án quả nhỏ nên không cá nhân nào có thể được chỉ định toàn thời gian. Mọi người đang làm việc trong dự án ở mức 50, hoặc thậm chí 25 phần trăm.

Bây giờ, quy tắc là: Không có cái gì gọi là nửa người.

Thật vô nghĩa khi nói một lập trình viên dành một nửa thời gian của họ cho dự án A và thời gian còn lại cho dự án B, đặc biệt là khi 2 dự án có 2 PM khác nhau, 2 BA khác nhau, lập trình viên khác nhau và tester khác nhau. Làm thế nào bạn có thể gọi đó là một đội? Đó không phải là một đội, đó là một thứ máy xay sinh tố.

### Một đội gắn kết

Cần thời gian để thành lập một team. Những thành viên bắt đầu hình thành các mối quan hệ. Họ học cách cộng tác với nhau. Họ hiểu được những điều kỳ quặc, điểm mạnh và điểm yếu của nhau. Cuối cùng họ sẽ bắt đầu _gắn kết_.

Có một điều thực sự nhiệm màu ở một team gắn kết. Họ có thể làm ra những điều kỳ diệu. Họ dự đoán, che chở, hỗ trợ cho nhau và thể hiện những gì tốt nhất ở mỗi người. Họ khiến mọi thứ hoạt động.

Một team gắn kết thường bao gồm khoảng chục người. Có thể nhiều đến 20 hoặc ít hơn là 3, nhưng con số tốt nhất có lẽ là khoảng 12. Team nên bao gồm lập trình viên, tester, và BA. Và nó cần có một PM.

Tỉ lệ giữa lập trình viên so với tester và BA có thể thay đổi rất nhiều, những 2:1 là một con số tốt. Vì vậy, một team gắn kết 12 người sẽ bao gồm 7 lập trình viên, 2 tester, 2 BA và 1 PM.

Các BA phân tích các yêu cầu và viết các kiểm tra chấp nhận tự động. Tester cũng viết các kiểm tra chấp nhận tự động. Chúng sẽ khác nhau về mặt quan điểm. Cả 2 đều đọc yêu cầu. Nhưng BA tập trung vào giá trị sản phẩm, còn tester tập trung vào tính đúng đắn. BA sẽ viết những con đường hoàn hảo; tester quan tấm đến những thứ có thể gây nên sai sót và các trường hợp thất bại và giới hạn. 

PA sẽ theo dõi tiến độ của nhóm và đảm bảo rằng cả nhóm hiểu được lịch trình và mức độ ưu tiên. 

Một trong các thành viên trong nhóm có thể đóng vai trò huấn luyện hoặc quản lý bán thời gian với trách nhiệm bảo vệ quy trình và kỷ luật nhóm. Họ đóng vai trò lương tâm của nhóm khi họ bị cám dỗ di sai quy trình vì áp lực lịch trình.

### Sôi nổi

Cần có thời gian để một nhóm như vậy tìm ra sự khác biệt giữa họ, thống nhất với nhau và thực sự gắn kết. Có thể mất đến 6 tháng, thậm chí 1 năm. Nhưng một khi nó xảy ra, đó là một điều kỳ diệu. Một team gắn kết sẽ cùng nhau lập kế hoạch, cùng nhau giải quyết vấn đề, cùng nhau đối mặt với khó khăn và khiến _mọi thứ hoạt động_.

Một khi nó xảy ra, thật là lố bịch khi phá vỡ team chỉ vì dự án kết thúc. Tốt nhất là giữ team đó lại với nhau và tiếp tục giao những dự án khác.

### Điều gì sẽ có trước, Team hay Dự án?

Ngân hàng và các công ty bảo hiểm cố gắng thành lập các nhóm xung quanh dự án. Đó là một cách làm ngốc nghếch. Những team đó không thể gắn kết. Các cá nhân chỉ tham gia dự án trong một thời gian ngắn, và chỉ trong 1% thời gian của họ, và do đó không bao giờ học được cách làm việc với nhau.

Các tổ chức phát triển chuyên nghiệp phân bổ dự án cho các nhóm đã gắn kết hiện có, họ không thành lập nhóm xung quanh các dự án. Một nhóm gắn kết có thể chấp nhận nhiều dự án đồng thời và sẽ phân chia công việc theo ý kiến, kỹ năng của riêng họ. Nhóm gắn kết sẽ hoàn thành các dự án.

### Nhưng làm thế nào bạn quản lý được việc đó?

Các team đều có vận tốc. Vận tốc của một team hiểu đơn giản là khối lượng công việc đọi đó có thể hoàn thành trong một khoảng thời gian cố định. Một số team đo vận tốc của họ bằng _point_ mỗi tuần, với _point_ là đơn vị cho mức độ phức tạp. Họ chi nhỏ các chức năng của những dự án họ thực hiện và ước tính chúng theo point. Sau đó, họ đo xem họ hoàn thành được bao nhiêu point mỗi tuần.

Vận tốc là một thước đo thống kê. Một team có thể hoàn thành 38 point một tuần, 42 point trong tuần tiếp theo, và 25 point trong tuần kế tiếp. Giá trị này sẽ được tính trung bình theo thời gian.

Ban quản lý có thể đặt mục tiêu cho từng dự án được giao cho team. Ví dụ, nếu vận tốc trung bình của team là 50 và họ đang làm việc trên 3 dự án, ban quản lý có thể yêu cầu team chia công sức của họ thành 15, 15 và 20.

Bên cạnh việc có một team gắn kết làm việc với những dự án của bạn, lợi thế của việc lên kế hoạch này là trong trường hợp khẩn cấp, khách hàng có thể nói: "Dự án B đang rơi vào khủng hoảng; dành 100% công sức của bạn cho dự án đó trong 3 tuần tới"

Việc phân bổ lại mức ưu tiên một cách nhanh chóng hầu như không thể với các team xuất phát từ máy xay sinh tốt, nhưng với team gắn kết đang thực hiện 2 hoặc 3 dự án đồng thời có thể giúp ích rất nhiều.