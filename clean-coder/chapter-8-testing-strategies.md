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

### Kiểm thử từng phần

Đây là một số kiểm thử chấp nhận được đề cập trong chương trước. Nói chung chúng được viết dựa trên các thành phần riêng lẻ của hệ thống. Các thành phần của hệ thống đóng gói các quy tắc nghiệp vụ, vì vậy các kiểm thử cho các thành phần đó là các kiểm thử chấp nhận cho các quy tắc nghiệp vụ đó.

Như được mô tả trong Hình 8-2, kiểm thử từng phần chỉ kiểm tra một thành phần. Nó truyền dữ liệu đầu vào vào thành phần và thu thập dữ liệu đầu ra. Nó kiểm tra xem đầu ra có khớp với đầu vào hay không. Bất kỳ thành phần hệ thống nào khác được tách ra khỏi kiểm thử bằng cách sử dụng các kỹ thuật mô phỏng và nhân đôi kiểm thử thích hợp.

Kiểm thử từng phần được viết bởi QA và nghiệp vụ với sự hỗ trợ từ team dev. Chúng được tạo ra trong các môi trường kiểm thử từng phần như FitNesse, JBehave hoặc Cucumber. (Các thành phần GUI được thử nghiệm với các môi trường thử nghiệm GUI như Selenium hoặc Watir.) Mục đích là bộ phận nghiệp vụ có thể đọc và diễn giải các kiểm thử này, ngay cả khi không phải là tác giả của chúng.

Kiểm thử từng phần phủ gần một nửa hệ thống. Chúng hướng nhiều hơn đến các tình huống happy path và các trường hợp phức tạp, biên và thay thế rõ ràng. Phần lớn các trường hợp un-happy path được phủ bởi unit test và vô nghĩa ở cấp độ kiểm thử từng phần.

### Kiểm thử tích hợp

Các kiểm thử này chỉ có ý nghĩa đối với các hệ thống lớn, có nhiều thành phần. Như trong Hình 8-3, các kiểm thử này tập hợp các thành phần lại thành các nhóm và kiểm tra xem chúng có giao tiếp tốt với nhau không. Các thành phần khác của hệ thống được tách rời như bình thường bằng các mô-đun và bộ đôi kiểm thử thích hợp.

Kiểm tra tích hợp là bài kiểm tra _vũ đạo_. Chúng không kiểm tra các quy tắc nghiệp vụ. Thay vào đó, chúng kiểm tra xem việc ghép các thành phần lại và xem chúng kết hợp với nhau tốt như thế nào. Chúng là các kiểm thử hệ thống _ống nước_ để đảm bảo rằng các bộ phận được kết nối đúng cách và có thể giao tiếp rõ ràng với nhau.

Kiểm thử tích hợp thường được viết bởi kiến trúc sư hệ thống hoặc thiết kế chính của hệ thống. Các kiểm thử này đảm bảo rằng cấu trúc và kiến trúc của hệ thống thực sự khỏe mạnh. Ở cấp độ này, chúng ta có thể thấy các kiểm thử hiệu suất và lưu lượng.

Kiểm thử tích hợp thường được viết bằng ngôn ngữ và môi trường giống như kiểm thử từng phần. Chúng thường không được thực thi như một phần của CI, vì sẽ có thời gian chạy lâu hơn. Thay vào đó, các kiểm thử này được chạy định kỳ (hàng đêm, hàng tuần, v.v.) lúc tác giả của chúng cho là cần thiết.

### Kiểm thử hệ thống

Đây là các kiểm thử tự động thực thi trên toàn bộ hệ thống đã tích hợp. Chúng là những kiểm thử tích hợp cuối cùng. Chúng không trực tiếp kiểm tra các quy tắc nghiệp vụ. Thay vào đó, chúng kiểm tra xem hệ thống đã được kết nối với nhau một cách chính xác và các bộ phận của nó tương thích với nhau theo kế hoạch. Chúng ta sẽ mong đợi các kiểm thử lưu lượng và hiệu suất trong phần này.

Các kiểm thử này được viết bởi các kiến trúc sư hệ thống và trưởng nhóm kỹ thuật. Thông thường, chúng được viết bằng ngôn ngữ và môi trường giống như kiểm thử tích hợp cho giao diện người dùng. Chúng được thực hiện tương đối không thường xuyên tùy thuộc vào thời lượng của chúng, nhưng càng thường xuyên thì càng tốt.

Kiểm thử hệ thống phủ khoảng 10% hệ thống. Do mục đích của chúng không phải là đảm bảo hành vi của hệ thống chính xác, mà là xây dựng hệ thống chính xác. Hành vi chính xác của code và các thành phần đã được xác định bằng các lớp kiểm thử bên dưới của kim tự tháp.

### Kiểm thử thủ công

Đây là nơi con người đặt tay lên bàn phím và dán mắt vào màn hình. Các kiểm thử này không tự động, _cũng không theo kịch bản nào_. Mục đích của kiểm thử này là khám phá hệ thống để tìm các hành vi không mong muốn, trong khi xác nhận các hành vi được mong đợi. Để đạt được mục tiêu đó, chúng ta cần bộ não của con người, với sự sáng tạo của con người, làm việc để điều tra và khám phá hệ thống. Việc tạo một kế hoạch kiểm thử bằng văn bản cho loại kiểm thử này sẽ làm mất đi mục đích đó.

Một số nhóm sẽ có chuyên gia thực hiện công việc này. Các nhóm khác sẽ chỉ cần đặt ra một hoặc hai ngày “săn lỗi” với càng nhiều người càng tốt, bao gồm cả quản lý, thư ký, lập trình viên, tester và người viết công nghệ, “đập” vào hệ thống để xem liệu có thể làm cho nó bị phá vỡ hay không.

Mục tiêu không phải là độ phủ. Chúng ta sẽ không kiểm chứng mọi quy tắc nghiệp vụ và mọi lộ trình thực thi bằng những thử nghiệm này. Thay vào đó, mục tiêu là đảm bảo hệ thống hoạt động tốt dưới sự vận hành của con người và tìm ra nhiều “điểm đặc biệt” một cách sáng tạo nhất có thể.

## Kết luận

TDD là một phương pháp mạnh mẽ, và Kiểm thử chấp nhận là cách có giá trị thể hiện và thực thi các yêu cầu. Nhưng chúng chỉ là một phần của chiến lược kiểm thử tổng thể. Để thực hiện tốt mục tiêu “QA sẽ không tìm thấy lỗi gì”, các nhóm phát triển cần làm việc song song với QA để tạo ra một hệ thống phân cấp gồm các bài kiểm thử đơn vị, thành phần, tích hợp, hệ thống và khám phá. Các kiểm thử này phải được chạy thường xuyên nhất có thể để cung cấp phản hồi sớm nhất và để đảm bảo rằng hệ thống vẫn liên tục trong sạch.
