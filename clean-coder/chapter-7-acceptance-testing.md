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

Vì vậy, chúng tôi đã cùng ngồi với nhau, tôi hỏi anh ấy muốn ứng dụng của mình sẽ làm được gì. Anh ấy bắt đầu với màn hình nhập liệu ban đầu. Tôi đã chỉ cho anh ấy cách tạo một tệp văn bản chứa các câu lệnh script và cách nhập biểu diễn tượng trưng của các lệnh chỉnh sửa vào script đó. Nhưng khi tôi nhìn vào mắt anh ấy, không có phản ứng gì cả. Lời giải thích của tôi đơn giản chẳng có ý nghĩa gì đối với anh ta.

Đây là lần đầu tiên tôi gặp trường hợp này. Đối với tôi, đó là một điều đơn giản để biểu diễn các lệnh của trình soạn thảo một cách tượng trưng. Ví dụ, để biểu diễn lệnh control-B (lệnh đặt con trỏ ở đầu dòng hiện tại), bạn chỉ cần nhập ^ B vào tệp script. Nhưng điều này không có ý nghĩa gì đối với Tom. Anh ấy không thể thực hiện bước nhảy vọt từ việc chỉnh sửa tệp sang chỉnh sửa tệp đã chỉnh sửa tệp.

Tom không ngốc. Tôi nghĩ rằng anh ấy chỉ đơn giản nhận ra rằng điều này sẽ mất nhiều thời gian hơn anh ấy nghĩ lúc đầu và anh ấy không muốn đầu tư thời gian và năng lượng tinh thần cần thiết để học một thứ gì đó quá phức tạp như sử dụng một biên tập viên để chỉ huy một biên tập viên.

Vì vậy, từng chút một tôi thấy mình phát triển ứng dụng này trong khi anh ấy ngồi đó và xem. Trong vòng hai mươi phút đầu tiên, rõ ràng là sự tập trung của anh ấy đã thay đổi từ việc học cách tự làm điều đó sang việc đảm bảo rằng những gì tôi làm là những gì anh ấy muốn.
