---
layout: default
---

# Chương 11 Sự hợp tác

Phần lớn chương trình được tạo ra bởi các đội nhóm (team). Đội nhóm có hiệu quả tốt khi các thành viên hợp tác chuyên nghiệp với nhau. Nếu trong một team, bạn là một người cô độc hoặc một ẩn sĩ, thì đó là sự thiếu chuyên nghiệp.

Vào năm 1974, tôi lúc đó 22 tuổi. Cuộc hôn nhân với người vợ tuyệt vời của tôi, Ann Marie, vừa được 6 tháng. Vẫn còn một năm nữa mới đến ngày sinh con đầu lòng của chúng tôi, Angela. Và lúc đó tôi đang làm việc tại Chicago Laser Systems, một bộ phận của Teradyne.

Làm việc cùng là cậu bạn thời trung học, Tim Conrad. Tim và tôi đã làm được khá nhiều điều kỳ diệu trong thời đại của chúng tôi. Chúng tôi cùng nhau dựng vài chiếc máy tính trong tầng hầm nhà Tim. Chúng tôi dựng thang Jacob ở tầng hầm nhà tôi. Chúng tôi dạy nhau cách lập trình PDP-8s và cách nối các mạch tích hợp và bóng bán dẫn vào chương trình máy tính.

Chúng tôi là những lập trình viên làm việc trên một hệ thống sử dụng tia laze để cắt những thành phần điện tử như điện trở, tụ điện với độ chính xác cực cao. Ví dụ: chúng tôi đã cắt tinh thể cho chiếc đồng hồ kỹ thuật số đầu tiên, Motorola Pulsar.

Chiếc máy tính chúng tôi dùng để lập trình là M365, một phiên bản PDP-8 của Teradyne. Chúng tôi sử dụng ngôn ngữ Assemble, và mã nguồn được lưu trên những cuộn băng từ. Mặc dù chúng tôi có thể chỉnh sửa trên màn hình, nhưng quá trình này khá phức tạp, nên hầu như chúng tôi sử dụng danh sách in cho việc đọc code và chỉnh sửa sơ bộ.

Chúng tôi không có công cụ nào để tìm kiếm trong code base. Không có cách nào để tìm ra tất cả những nơi sử dụng một hàm hoặc một hằng số nào đó. Và như bạn đang tưởng tượng, đây là một trở ngại khá lớn.

Vậy là vào một ngày nọ, Tim và tôi quyết định sẽ viết một chương trình tham chiếu chéo. Chương trình này sẽ đọc mã nguồn của chúng tôi trong các cuộn băng và in ra danh sách mọi ký hiệu, cùng với tệp và số dòng nơi ký hiệu đó được sử dụng.

Chương trình ban đầu khá dễ để viết. Nó đơn giản chỉ đọc các đoạn băng chứa code, phân tích cú pháp Assemble, tạo một bảng ký hiệu và thêm các tham chiếu các mục đó. Nó hoạt động tốt, nhưng chậm kinh khủng. Phải mất hơn một giờ để xử lý chương trình điều hành chính (MOP - Master Operating Program) của chúng tôi

Lý do nó quá chậm là vì chúng tôi giữ bảng ký hiệu khá lớn vào một bộ nhớ đệm duy nhất. Bất cứ khi nào chúng tôi tìm thấy một tham chiếu mới, chúng tôi sẽ chèn nó vào bộ đệm, di chuyển phần còn lại xuống một vài byte để tạo khoảng trống.

Tim và tôi không phải chuyên gia về cấu trúc dữ liệu và giải thuật. Chúng tôi chưa bao giờ được nghe về bảng băm hoặc tìm kiếm nhị phân. Chúng tôi không biết làm thế nào để tạo ra một thuật toán nhanh hơn. Chúng tôi chỉ biết rằng những gì chúng tôi làm là quá chậm.

Vậy là chúng tôi thử hết cách này đến cách khác. Chúng tôi thử đặt tham chiếu vào trong linked list. Chúng tôi thử để những khoảng trống trong mảng và chỉ phát triển bộ đệm khi các khoảng trống được lấp đầy. Chúng tôi thử tạo linked list của những khoảng trống. Chúng tôi thử mọi ý tưởng điền rồ nhất.

Chúng tôi đứng trước bảng trắng trong văn phòng, vẽ mô hình về cấu trúc dữ liệu của mình và thực hiện tính toán để dự đoán về hiệu suất. Chúng tôi đến văn phòng mỗi ngày với một ý tưởng mới. Chúng tôi hợp tác với nhau như những "con yêu tinh"

Một vài ý tưởng trong đó làm tăng hiệu suất. Vài thứ làm chậm đi. Thật đáng buồn. Đây là lần đầu tiên tôi nhận ra việc tối ưu phần mềm khó đến mức nào và quy trình này không trực quan ra sao.

Cuối cùng chúng tôi đã rút ngắn thời gian xuống dưới 15 phút, rất gần với khoảng thời gian cần để đọc đoạn băng nguồn. Vì vậy chúng tôi đã hài lòng.

# Lập trình viên và mọi người

Chúng ta không trở thành lập trình viên bởi vì chúng ta thích làm việc với mọi người. Như một quy luật, chúng ta thấy các mối quan hệ giữa cá nhân với nhau thật lộn xộn và khó đoán. Chúng tôi thích những hành vi rõ ràng và dự đoán được của những chiếc máy mà chúng tôi lập trình. Chúng ta hành phúc nhất khi ở một mình trong phòng hàng giờ tập trung sâu vào một vấn đề thực sự thú vị nào đó.

OK, đó là sự tổng quá hóa quá mức và có vô số những ngoại lệ. Có rất nhiều lập trình viên giỏi làm việc với mọi người và thích thử thách. Nhưng điểm trung bình của nhóm vẫn có xu hướng theo như tôi đã nêu. Chúng tôi, những lập trình viên, tận hưởng cảm giác một mình và đắm chìm vào sự tập trung.

## Lập trình viên với sếp

Vào những năm 70 và 80, khi còn là một lập trình viên ở Teradyne, tôi đã học được cách gỡ lỗi _thực sự_ giỏi. Tôi yêu những thử thách và luôn muốn đối mặt với các vấn đề một cách đầy năng lượng và nhiệt tình. Không một lỗi nào có thể tránh khỏi tôi quá lâu!

Khi tôi xử lý được 1 lỗi, nó giống như giành được chiến thắng, hoặc tiêu diệt được Jabberwock! Tôi đến gặp sếp của tôi lúc đó, Ken Finder, với thanh Vorpal trên tay, và sau sưa mô tả cho ông hiểu lỗi đó _thú vị_ thế nào. Một ngày nọ, Ken cuối cùng đã nổi đóa lên trong sự thất vọng: "Lỗi không thú vị. Lỗi chỉ cần sửa thôi!"

Tôi học được vài thứ ngày hôm đó. Làm việc với đam mê là một điều tuyệt vời. Nhưng đồng thời cũng nên để mắt đến mục tiêu của người đang trả lương cho bạn.

Trách nhiệm đầu tiên của một lập trình viên chuyên nghiệp là hoàn thành các yêu cầu của người sử dụng lao động. Tức là kết hợp với các quản lý, phân tích nghiệp vụ , tester, và các thành viên khác trong team để có được sự _thấu hiểu_ về mục tiêu nghiệp vụ. Điều đó không có nghĩa là bạn cần trở thành một người làm nghiệp vụ kinh doanh. Nó có nghĩa là bạn cần hiểu những dòng code bạn viết ra để làm gì, và làm cách nào công ty/người sử dụng lao động được hưởng lợi từ nó.

Điều tệ nhất một lập trình viên chuyên nghiệp có thể làm là hạnh phúc vùi mình trong ngôi mộ công nghệ khi xung quanh anh/cô ta công việc kinh doanh sụp đổ và bùng cháy. _Việc_ của bạn là giữ cho doanh nghiệp phát triển.

Vậy nên, lập trình viên chuyên nghiệp dành thời gian để tìm hiểu về nghiệp vụ. Trò chuyện với người dùng về phần mềm mà họ đang sử dụng. Trò chuyện với quản lý để hiểu được mục tiêu ngắn hạn và dài hạn của team.

Tóm lại, họ quan tâm đến con tàu mà họ đang chèo lái.

Lần duy nhất tôi bị sa thải khỏi công việc lập trình vào năm 1976. Lúc đó tôi đang làm việc tại Outboard Marine Corp. Tôi có nhiệm vụ viết một hệ thống tự động hóa sử dụng IBM System/7s để giám sát hàng chục máy đúc nhôm.

Về lý thuyết, đây là một công việc đầy thử thách và thú vị. Kiến trúc của System/7 rất hấp dẫn, và bản thân hệ thống tự động hóa của nhà máy cũng rất thú vị.

Chúng tôi cũng có một team rất tốt. Trưởng nhóm, John, có năng lực và cầu tiến. Hai thành viên khác trong team cũng rất vui vẻ và đắc lực. Chúng tôi có một phòng thí nghiệm dành riêng cho dự án và tất cả làm việc trong phòng thí nghiệm đó. Đối tác kinh doanh cũng tham gia và làm việc ở đó với chúng tôi. Quản lý của chúng tôi, Ralph, người có năng lực, tập trung và có trách nhiệm.

Mọi thứ lẽ ra phải tuyệt vời. Vấn đề là ở tôi. Tôi hoàn toàn đủ tâm huyết với dự án, với công nghệ đang sử dụng, nhưng ở tuổi 24, tôi đơn giản là không quan tâm đến doanh nghiệp hoặc cấu trúc chính trị nội bộ của nó.

Tôi mắc lỗi ngay ngày đầu tiên. Tôi xuất hiện mà không đeo cà vạt. Tôi đã đeo trong buổi phỏng vấn, và tôi cũng thấy những thành viên khác đeo cà vạt, nhưng tôi không thể quen với điều đó. Vậy nên, vào ngày đầu tiên của tôi, Ralph đến gặp tôi và nói rõ rằng: "Ở đây chúng tôi đeo cà vạt."

Tôi không thể nói cho bạn biết tôi khó chịu đến mức nào. Nó thực sự làm tôi thấy phiền. Tôi đeo cà vạt hằng ngày, và tôi ghét nó. Nhưng tại sao? Tôi biết tôi đang ở đâu. Tôi biết những quy tắc đã được thông qua. Tại sao tôi lại khó chịu như vậy? Bởi vì tôi là một đứa trẻ ích kỷ và tự ái.

Tôi thường xuyên không đi làm đúng giờ. Và tôi nghĩ nó không quan trọng. Rút cục, tôi đang _làm tốt_ công việc. Và đó là sự thật, tôi đã làm rất tốt việc viết các chương trình của mình. Tôi dễ dàng trở thành lập trình viên có kỹ thuật giỏi nhất trong nhóm. Tôi có thể viết code nhanh hơn và tốt hơn những người khác. Tôi có thể chuẩn đoán và giải quyết vấn đề nhanh hơn. Tôi biết tôi có giá trị. Vì vậy, thời gian và ngày tháng không quan trọng với tôi.
