---
layout: default
---

# Chương 8 Chiến lược kiểm thử

Lập trình viên chuyên nghiệp kiểm tra code của họ. Nhưng kiểm thử không chỉ đơn giản là viết một vài kiểm thử đơn vị hoặc kiểm thử chấp nhận. Viết những kiểm thử này là một điều tốt, nhưng nó vẫn chưa đủ. Điều mà mọi nhóm lập trình chuyên nghiệp cần là một chiến lược kiểm thử tốt.

Năm 1989, tôi đang làm việc tại Rational với bản phát hành đầu tiên của Rose. Mỗi tháng hoặc lâu hơn, sẽ có một ngày là ngày "Săn lỗi" do quản lý QA của chúng tôi đặt ra. Tất cả mọi người trong nhóm, từ lập trình viên đến quản lý, thư ký đến quản trị viên cơ sở dữ liệu, sẽ ngồi lại với Rose và cố gắng làm cho nó lỗi. Giải thưởng đã được trao cho nhiều loại lỗi khác nhau. Người phát hiện ra lỗi có thể giành được một bữa tối cho hai người. Người tìm ra nhiều lỗi nhất có thể giành được một kỳ nghỉ cuối tuần ở Monterrey.

## QA sẽ không tìm thấy gì

Tôi đã nói điều này rồi và tôi sẽ nhắc lại. Mặc dù thực tế công ty của bạn có thể có một nhóm QA riêng để kiểm tra phần mềm, nhưng để QA không tìm thấy gì sai phải là mục tiêu của nhóm phát triển.

Tất nhiên, mục tiêu này thường không có khả năng đạt được liên tục. Rốt cuộc, khi một nhóm người thông minh vô cùng quyết tâm tìm ra tất cả các nếp nhăn và khuyết điểm trong một sản phẩm, họ có khả năng sẽ tìm thấy một số. Tuy nhiên, mỗi khi QA tìm thấy thứ gì đó, nhóm phát triển sẽ phản ứng kinh hoàng. Họ nên tự hỏi bản thân xem nó đã xảy ra như thế nào và thực hiện các bước để ngăn chặn nó trong tương lai.
