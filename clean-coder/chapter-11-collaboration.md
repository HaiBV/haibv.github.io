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

