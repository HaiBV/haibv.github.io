---
layout: default
---

# Chương 8 Chiến lược kiểm thử

Lập trình viên chuyên nghiệp kiểm tra code của họ. Nhưng kiểm thử không chỉ đơn giản là viết một vài kiểm thử đơn vị hoặc kiểm thử chấp nhận. Viết những kiểm thử này là một điều tốt, nhưng nó vẫn chưa đủ. Điều mà mọi nhóm lập trình chuyên nghiệp cần là một chiến lược kiểm thử tốt.

Năm 1989, tôi đang làm việc tại Rational với bản phát hành đầu tiên của Rose. Mỗi tháng hoặc lâu hơn, sẽ có một ngày là ngày "Săn lỗi" do quản lý QA của chúng tôi đặt ra. Tất cả mọi người trong nhóm, từ lập trình viên đến quản lý, thư ký đến quản trị viên cơ sở dữ liệu, sẽ ngồi lại với Rose và cố gắng làm cho nó lỗi. Giải thưởng đã được trao cho nhiều loại lỗi khác nhau. Người phát hiện ra lỗi có thể giành được một bữa tối cho hai người. Người tìm ra nhiều lỗi nhất có thể giành được một kỳ nghỉ cuối tuần ở Monterrey.

## QA sẽ không tìm thấy gì

Tôi đã nói điều này rồi và tôi sẽ nhắc lại. Mặc dù thực tế công ty của bạn có thể có một nhóm QA riêng để kiểm tra phần mềm, nhưng để QA không tìm thấy gì sai phải là mục tiêu của nhóm phát triển.

Tất nhiên, mục tiêu này thường không có khả năng đạt được liên tục. Rốt cuộc, khi một nhóm người thông minh vô cùng quyết tâm tìm ra tất cả các nếp nhăn và khuyết điểm trong một sản phẩm, họ có khả năng sẽ tìm thấy một số. Tuy nhiên, mỗi khi QA tìm thấy thứ gì đó, nhóm phát triển sẽ phản ứng kinh hoàng. Họ nên tự hỏi bản thân xem nó đã xảy ra như thế nào và thực hiện các bước để ngăn chặn nó trong tương lai.

### QA là một phần của team

Chương trước có thể cho thấy QA và lập trình viên có mâu thuẫn với nhau, mối quan hệ của họ dường như đối nghịch. Tôi không có ý đó. Thay vào đó, QA và lập trình viên nên làm việc cùng nhau để đảm bảo chất lượng của hệ thống. Vai trò tốt nhất đối của QA trong nhóm là người chỉ định và đặc tả hệ thống.

#### QA là người chỉ định

Vai trò của QA là làm việc với khách hàng để tạo ra các kiểm thử chấp nhận tự động, thành tài liệu yêu cầu và đặc điểm kỹ thuật thực sự cho hệ thống. Qua mỗi iteration họ thu thập yêu cầu từ khách hàng và chuyển chúng thành các kiểm thử, mô tả cho các lập trình viên cách hệ thống sẽ hoạt động (Xem Chương 7, “Kiểm thử chấp nhận”). Nói chung, khách hàng viết các kiểm thử happy path, trong khi QA viết các kiểm thử phức tạp, điều kiện biên, và unhappy path.

#### QA là người đặc tả

Vai trò khác của QA là sử dụng kỷ luật của kiểm thử khám phá để mô tả hành vi thực sự của hệ thống đang chạy và báo cáo lại hành vi đó cho lập trình viên và khách hàng. Trong vai trò này, QA _không_ giải thích các yêu cầu. Thay vào đó, họ đang xác định các hành vi thực tế của hệ thống.

## Tháp kiểm thử tự động

Các lập trình viên chuyên nghiệp sử dụng TDD để tạo kiểm thử đơn vị. Các nhóm phát triển chuyên nghiệp sử dụng các kiểm thử chấp nhận để xác định rõ hệ thống và CI để ngăn chặn lặp lại lỗi. Nhưng những kiểm thử này chỉ là một phần của câu chuyện. Ngoài kiểm thử đơn vị và kiểm thử chấp nhận, chúng ta cũng cần các bài kiểm thử cấp cao hơn để đảm bảo rằng QA sẽ không tìm lỗi nào. Hình 8-1 cho thấy Kim tự tháp kiểm thử tự động (Test Automation Pyramid), mô tả về các loại kiểm thử mà một tổ chức phát triển chuyên nghiệp cần.

### Unit Tests

Ở tầng dưới cùng của kim tự tháp là unit test. Các kiểm thử này được viết bởi các lập trình viên, dành cho các lập trình viên, bằng ngôn ngữ lập trình của hệ thống. Mục đích của các kiểm thử này là xác định rõ hệ thống ở mức thấp nhất. Các lập trình viên viết các kiểm thử này trước khi viết code sản phẩm như một cách để xác định rõ những gì họ sắp viết. Chúng được thực thi như một phần của CI để đảm bảo rằng ý định của lập trình viên được duy trì.

Trong thực tế, unit test có mức độ bao phủ càng gần 100% càng tốt. Nhìn chung cần lớn hơn 90. Và nó phải _thực sự_ phủ thay vì chỉ vượt qua kiểm thử sai của code mà không xác nhận hành vi của nó.

### Kiểm thử thành phần

Đây là một số kiểm thử chấp nhận được đề cập trong chương trước. Nói chung chúng được viết dựa trên các thành phần riêng lẻ của hệ thống. Các thành phần của hệ thống đóng gói các quy tắc nghiệp vụ, vì vậy các kiểm thử cho các thành phần đó là các kiểm thử chấp nhận cho các quy tắc nghiệp vụ đó.

Như được mô tả trong Hình 8-2, kiểm thử thành phần bao bọc một thành phần. Nó truyền dữ liệu vào thành phần và thu thập dữ liệu đầu ra từ nó. Nó kiểm tra xem đầu ra có khớp với đầu vào hay không. Bất kỳ thành phần hệ thống nào khác được tách ra khỏi kiểm thử bằng cách sử dụng các kỹ thuật mô phỏng và nhân đôi kiểm thử thích hợp.
