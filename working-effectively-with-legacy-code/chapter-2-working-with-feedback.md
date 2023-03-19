---
layout: default
---

# Chương 2 Làm việc với phản hồi

Những thay đổi trong một hệ thống có thể được thực hiện theo hai cách chính. Tôi thích gọi chúng là _Chỉnh sửa và Cầu nguyện_ và _Bao phủ và Sửa đổi_. Thật không may, _Chỉnh sửa và Cầu nguyện_ gần như là tiêu chuẩn của ngành. Khi bạn sử dụng _Chỉnh sửa và Cầu nguyện_, bạn cẩn thận lập kế hoạch cho những thay đổi bạn sẽ thực hiện, bạn đảm bảo rằng bạn hiểu code mà bạn sẽ sửa đổi, sau đó bạn bắt đầu thực hiện các thay đổi. Khi hoàn tất, bạn chạy hệ thống để xem liệu thay đổi đã được kích hoạt hay chưa, sau đó bạn xem xét kỹ hơn để đảm bảo rằng bạn không làm hỏng bất kỳ thứ gì. Việc xem xét xung quanh là điều cần thiết. Khi bạn thực hiện các thay đổi của mình, bạn đang hy vọng và cầu nguyện, sau đó dành thêm thời gian khi đã hoàn thành để đảm bảo rằng bạn đã thực hiện đúng.

Nhìn bề ngoài, _Chỉnh sửa và Cầu nguyện_ có vẻ giống "làm việc cẩn thận", một cách làm rất chuyên nghiệp. Sự "cẩn thận" mà bạn thực hiện luôn được đặt lên hàng đầu và bạn càng cẩn thận hơn khi thực hiện những thay đổi mang tính xâm lấn vì rất có thể xảy ra nhiều sai sót. Nhưng để an toàn thì cẩn thận thôi là không đủ. Tôi không nghĩ rằng bất kỳ ai trong chúng ta sẽ chọn một bác sĩ phẫu thuật mổ bằng dao cắt bơ chỉ vì anh ta làm việc cẩn thận. Thay đổi phần mềm hiệu quả, giống như phẫu thuật hiệu quả, thực sự cần đến các kỹ năng sâu hơn. Làm việc cẩn thận sẽ không giúp được gì nhiều cho bạn nếu bạn không sử dụng các công cụ và kỹ thuật phù hợp.

_Bao phủ và Sửa đổi_ là một cách khác để thực hiện thay đổi. Ý tưởng đằng sau đó là chúng ta có thể làm việc với một _mạng lưới an toàn_ khi thay đổi phần mềm. Lưới an toàn sử dụng ở đây không phải là thứ mà chúng ta đặt bên dưới bàn để đỡ nếu chúng ta ngã khỏi ghế. Thay vào đó, nó giống như một chiếc áo choàng được phủ lên code mà chúng ta đang làm việc để đảm bảo rằng những thay đổi kém chất lượng không bị rò rỉ ra ngoài và ảnh hưởng đến phần còn lại của phần mềm. Bao phủ phần mềm có nghĩa là bao phủ nó bằng các bài kiểm thử. Khi chúng ta có một tập hợp các bài kiểm thử tốt xung quanh một đoạn code, chúng ta có thể thực hiện các thay đổi và tìm ra rất nhanh xem chúng có tác động tốt hay xấu. Chúng tôi vẫn áp dụng cách làm cẩn thận tương tự, nhưng với phản hồi nhận được, chúng tôi có thể thực hiện các thay đổi cẩn thận hơn.

Nếu bạn không quen với việc sử dụng kiểm thử kiểu này, thì tất cả những điều trên nghe có vẻ hơi kỳ quặc. Thông thường, kiểm thử được viết và thực hiện sau phát triển. Một nhóm lập trình viên viết code và một nhóm kiểm thử sẽ chạy thử code, sau đó kết luận xem nó có đáp ứng một số đặc điểm kỹ thuật hay không. Trong số tổ chức truyền thống, đây là cách thông thường để phát triển phần mềm. Nhóm có thể nhận được phản hồi, nhưng thời gian vòng phản hồi rất lớn. Thường là trong vài tuần hoặc vài tháng, sau đó những người trong nhóm khác mới cho bạn biết liệu bạn đã làm đúng hay chưa.

Kiểm thử thực hiện theo cách này thực sự là "kiểm thử để cố gắng chứng minh tính đúng đắn". Mặc dù đó là một mục tiêu tốt, nhưng các kiểm thử cũng có thể được sử dụng theo một cách rất khác. Chúng ta có thể thực hiện "kiểm thử để phát hiện sự thay đổi”.

Theo thuật ngữ truyền thống, điều này được gọi là kiểm thử hồi quy. Chúng ta định kỳ chạy kiểm thử với những hành vi tốt đã biết, kiểm tra và tìm hiểu xem phần mềm của chúng ta có còn hoạt động như trước đây hay không.

Khi bạn có kiểm thử xung quanh vùng mà bạn sẽ thực hiện thay đổi, chúng sẽ hoạt động như một bàn kẹp cho phần mềm. Bạn có thể cố định hầu hết các hành vi và biết rằng bạn chỉ đang thay đổi những gì bạn dự định.


(Bàn kẹp cho phần mềm)


Kiểm thử hồi quy là một ý tưởng tuyệt vời. Tại sao mọi người không làm điều đó thường xuyên hơn? Có một vấn đề nhỏ với kiểm thử hồi quy. Thường khi thực hành nó, mọi người hay thực hiện ở giao diện ứng dụng. Không quan trọng đó là ứng dụng web, ứng dụng dòng lệnh hay ứng dụng dựa trên GUI; kiểm thử hồi quy theo truyền thống được coi là một phong cách kiểm thử cấp ứng dụng. Nhưng điều này thật đáng tiếc. Thông tin phản hồi chúng tôi có thể nhận được từ nó là rất hữu ích. Nó trả tiền để làm điều đó ở mức độ chi tiết hơn.

Hãy thực hiện một thí nghiệm nhỏ về trong suy nghĩ. Chúng ta đang bước vào một chức năng lớn chứa một lượng lớn logic phức tạp. Chúng ta phân tích, chúng ta nghĩ, chúng ta nói chuyện với những người biết nhiều về đoạn code đó hơn chúng ta, và sau đó chúng ta thực hiện thay đổi. Chúng ta muốn đảm bảo rằng thay đổi không phá vỡ bất cứ điều gì, nhưng chúng ta làm điều đó như thế nào? May mắn thay, chúng ta có một nhóm chất lượng với bộ kiểm tra hồi quy có thể chạy qua đêm. Chúng ta gọi điện và yêu cầu họ lên lịch chạy thử, và họ nói rằng, vâng, họ có thể chạy kiểm thử qua đêm, nhưng thật tốt là chúng ta đã gọi sớm. Các nhóm khác thường cố gắng lên lịch chạy hồi quy vào giữa tuần và nếu chúng ta đợi lâu hơn, có thể không có khung thời gian và máy móc cho chúng ta. Chúng ta thở phào nhẹ nhõm rồi quay lại làm việc. Còn khoảng năm thay đổi nữa để thực hiện giống như thay đổi cuối cùng. Tất cả chúng đều ở những khu vực phức tạp như nhau. Và chúng ta không đơn độc. Chúng ta biết rằng một số khác cũng đang thực hiện các thay đổi.

Sáng hôm sau, chúng tôi nhận được một cú điện thoại. Daiva trong quá trình thử nghiệm cho chúng tôi biết rằng các thử nghiệm AE1021 và AE1029 đã thất bại chỉ vào đêm qua. Cô ấy không chắc liệu đó có phải do những thay đổi của chúng tôi hay không, nhưng cô ấy gọi cho chúng tôi vì cô ấy biết chúng tôi sẽ lo việc đó cho cô ấy. Chúng tôi sẽ gỡ lỗi và xem liệu các lỗi này là do một trong những thay đổi của chúng tôi hay của người khác.

Điều này có nghe có thực không? Thật không may, nó rất thực tế.

Hãy xem xét một kịch bản khác.

Chúng tôi cần thực hiện thay đổi đối với một chức năng khá dài và phức tạp. May mắn thay, chúng tôi tìm thấy một tập hợp các kiểm thử đơn vị dành cho nó. Những người cuối cùng chạm vào code đã viết một tập khoảng 20 kiểm thử đơn vị để tìm hiểu nó một cách kỹ lưỡng. Chúng tôi chạy chúng và phát hiện ra rằng tất cả chúng đều vượt qua. Tiếp theo, chúng tôi xem qua các kiểm thử để hiểu hành vi thực tế của code là gì.

Chúng tôi đã sẵn sàng để thực hiện thay đổi của mình, nhưng sau đó nhận ra rằng khá khó để tìm ra cách thay đổi nó. Code này không rõ ràng và chúng tôi thực sự muốn hiểu rõ hơn về code này trước khi thực hiện thay đổi của mình. Các kiểm thử không nắm bắt mọi thứ, vì vậy chúng tôi muốn làm cho code thật rõ ràng để có thể tự tin hơn vào thay đổi của mình. Bên cạnh đó, chúng tôi không muốn bản thân hoặc bất kỳ ai khác phải trải qua công việc chúng tôi đang làm để cố gắng hiểu nó. Thật sự lãng phí thời gian!

Chúng tôi bắt đầu tái cấu trúc một chút. Chúng tôi trích xuất một số phương thức và di chuyển một số logic điều kiện. Sau mỗi thay đổi nhỏ mà chúng tôi thực hiện, chúng tôi chạy lại tập kiểm thử đơn vị nhỏ đó. Chúng vượt qua hầu hết mọi lần chúng tôi chạy chúng. Một vài phút trước, chúng tôi đã mắc lỗi và đảo ngược logic theo một điều kiện, nhưng kiểm thử không thành công và chúng tôi đã khôi phục sau khoảng một phút. Khi chúng tôi tái cấu trúc xong, code đã rõ ràng hơn nhiều. Chúng tôi thực hiện thay đổi mình đặt ra và tin tưởng rằng điều đó là đúng. Chúng tôi đã thêm một số kiểm thử để xác minh hành vi mới. Các lập trình viên tiếp theo làm việc với đoạn code này sẽ tiếp cận dễ hơn và có các kiểm thử về chức năng của nó.

Bạn muốn có phản hồi trong một phút hay qua đêm? Kịch bản nào hiệu quả hơn?

Kiểm thử đơn vị là một trong những thành phần quan trọng nhất trong công việc code kế thừa. Hệ thống phân cấp mà các kiểm thử hồi quy cung cấp rất tuyệt vời, nhưng các kiểm thử nhỏ, cục bộ là vô giá. Chúng có thể cung cấp cho bạn thông tin phản hồi khi bạn phát triển và cho phép bạn tái cấu trúc an toàn hơn nhiều.
