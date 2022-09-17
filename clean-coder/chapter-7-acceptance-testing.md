---
layout: default
---

# Chương 7 Kiểm thử chấp nhận (Acceptance Testing)

Vai trò của lập trình viên chuyên nghiệp là vai trò truyền thông cũng như vai trò phát triển. Hãy nhớ rằng với các lập trình viên, dữ liệu sai sẽ cho ra quyết định sai, vì vậy các lập trình viên chuyên nghiệp hãy cẩn thận để đảm bảo rằng giao tiếp của họ với các thành viên khác trong nhóm và khách hàng, phải chính xác và lành mạnh.

## Yêu cầu trong giao tiếp

Một trong những vấn đề giao tiếp phổ biến nhất giữa lập trình viên và khách hàng là các yêu cầu. Khách hàng nêu những gì họ tin rằng họ cần, và sau đó các lập trình viên xây dựng những gì họ tin rằng khách hàng đã mô tả. Ít nhất đó là cách nó phải hoạt động. Trong thực tế, việc truyền đạt các yêu cầu là vô cùng khó khăn và quá trình này có rất nhiều lỗi.

Năm 1979, khi đang làm việc tại Teradyne, tôi có một yêu cầu từ Tom, giám đốc bộ phận lắp đặt và dịch vụ hiện trường. Anh ấy yêu cầu tôi chỉ cho anh ấy cách sử dụng trình soạn thảo văn bản ED-402 để tạo một hệ thống thông báo sự cố đơn giản.

ED-402 là một trình soạn thảo độc quyền được viết cho máy tính M365, là bản sao PDP-8 của Teradyne. Là một trình soạn thảo văn bản rất mạnh mẽ. Nó có một ngôn ngữ kịch bản cài sẵn mà chúng tôi sử dụng cho tất cả các loại ứng dụng văn bản đơn giản.

Tom không phải là một lập trình viên. Nhưng ứng dụng trong đầu anh ấy rất đơn giản, nên anh ấy nghĩ tôi có thể nhanh chóng dạy cho anh ấy và sau đó anh ấy có thể tự viết ra ứng dụng của mình. Với sự ngây thơ của mình, tôi đã nghĩ điều tương tự. Rốt cuộc, ngôn ngữ kịch bản chỉ là một ngôn ngữ macro cho các lệnh chỉnh sửa, với các cấu trúc lặp và quyết định rất thô sơ.
