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

Chúng tôi mất nguyên 1 ngày. Anh ấy mô tả một tính năng và tôi phát triển nó khi anh ấy quan sát. Thời gian cho 1 vòng lặp là năm phút hoặc ít hơn, vì vậy không có lý do gì để anh ta đứng dậy và làm bất cứ điều gì khác. Anh ấy yêu cầu tôi làm X và trong vòng năm phút, tôi đã làm được X.

Thường thì anh ấy vẽ những gì mình muốn trên một tờ giấy nháp. Một số điều anh ấy muốn khó thực hiện được trong ED-402, vì vậy tôi đề xuất một cách khác. Cuối cùng chúng tôi đưa ra thống nhất và tôi thực hiện chức năng đó.

Nhưng khi chúng tôi chạy thử, có thể anh ấy sẽ thay đổi quyết định. Anh ấy nói đại loại như: “Vâng, điều đó có vẻ không giống với chu trình mà tôi nghĩ tới. Hãy thử một cách khác."

Thời gian trôi qua, chúng tôi mày mò, chọc ngoáy và thúc đẩy ứng dụng đó thành hình. Chúng tôi đã thử cái này, rồi cái khác, rồi lại cái khác. Tôi thấy rất rõ ràng rằng _anh ấy_ là nhà điêu khắc, còn tôi là công cụ đang được sử dụng.

Cuối cùng, anh ấy đã nhận được ứng dụng mà mình cần nhưng không biết làm thế nào để bắt đầu xây dựng ứng dụng tiếp theo cho chính mình. Mặt khác, tôi đã học được một bài học mạnh mẽ về cách khách hàng thực sự khám phá những gì họ cần. Tôi biết được rằng tầm nhìn của họ về các tính năng thường không tồn tại khi tiếp xúc thực tế với máy tính.

### Chính xác quá sớm

Cả khách hàng và lập trình viên đều dễ bị cám dỗ bởi cái bẫy của chính xác quá sớm. Khách hàng muốn biết chính xác những gì họ sẽ nhận được trước khi họ ủy quyền cho một dự án. Các lập trình viên muốn biết chính xác những gì họ phải cung cấp trước khi họ ước lượng dự án. Cả hai bên đều muốn có một độ chính xác không thể đạt được và thường sẵn sàng lãng phí cả một gia tài để cố gắng đạt được nó.

#### Nguyên tắc bất định

Vấn đề là mọi thứ xuất hiện trên giấy tờ khác sẽ với lúc hệ thống làm việc. Khi khách hàng thực sự thấy những gì họ chỉ định đang chạy trong một hệ thống, họ nhận ra rằng đó hoàn toàn không phải là những gì họ muốn. Khi họ thấy yêu cầu thực sự đang chạy, họ lại có ý tưởng tốt hơn về những gì họ thực sự muốn — và đó thường không phải là những gì họ đang thấy.

Nó được gọi là hiệu ứng người quan sát, hay nguyên tắc bất định. Khi bạn đưa ra một tính năng cho khách hàng, nó cung cấp cho họ nhiều thông tin hơn so với trước đây và thông tin mới đó sẽ ảnh hưởng đến cách họ nhìn nhận toàn bộ hệ thống.

Cuối cùng, bạn đưa ra các yêu cầu của mình càng chính xác thì chúng càng trở nên ít liên quan hơn khi hệ thống được triển khai.

#### Ước lượng lo lắng

Các lập trình viên cũng có thể mắc vào cái bẫy chính xác. Họ biết rằng họ phải ước lượng hệ thống và thường nghĩ rằng điều này đòi hỏi sự chính xác. Không đúng.

Thứ nhất, ngay cả khi có được thông tin hoàn hảo, ước lượng của bạn vẫn sẽ có một phương sai lớn. Thứ hai, nguyên tắc bất định gây khó khăn cho tính chính xác. Các yêu cầu sẽ thay đổi và làm mâu thuẫn tính chính xác đó.

Các lập trình viên chuyên nghiệp hiểu rằng các ước lượng có thể và nên được thực hiện dựa trên các yêu cầu có độ chính xác thấp và phải xác định rằng ước lượng là ước lượng. Để củng cố điều này, các lập trình viên chuyên nghiệp luôn đưa sai số vào ước lượng của mình để khách hàng hiểu được sự không chắc chắn. (Xem Chương 10, “Ước lượng.”)

#### Sự mơ hồ muộn màng

Giải pháp cho chính xác quá sớm là trì hoãn độ chính xác càng lâu càng tốt. Các lập trình viên chuyên nghiệp không đưa ra yêu cầu cho đến khi họ chuẩn bị phát triển nó. Tuy nhiên, điều đó có thể dẫn đến một tật xấu khác: sự mơ hồ muộn màng.

Thường thì các bên liên quan sẽ có mâu thuẫn. Khi đó, họ thấy việc sửa tài liệu dễ dàng hơn là giải quyết vấn đề bất đồng. Họ sẽ tìm ra cách diễn đạt yêu cầu mà tất cả họ đồng ý, nhưng không thực sự giải quyết tranh chấp. Tôi từng nghe Tom DeMarco nói, "Tài liệu yêu cầu không rõ ràng thể hiện mâu thuẫn của khách hàng."

Tất nhiên, tranh cãi hoặc bất đồng không tạo ra sự mơ hồ. Đôi khi các bên liên quan cho rằng người đọc biết họ muốn nói gì.

Nó có thể hoàn toàn rõ ràng với họ trong ngữ cảnh của họ, nhưng có ý nghĩa hoàn toàn khác đối với lập trình viên khi đọc. Loại mơ hồ về ngữ cảnh này có thể xảy ra khi khách hàng và lập trình viên nói chuyện trực tiếp với nhau.

Sam (khách hàng): "OK, bây giờ các tệp nhật ký (log files) cần được sao lưu"

Paula: "OK, bao lâu một lần?"

Sam: "Hàng ngày"

Paula: "Được. Và chúng ta sẽ lưu chúng ở đâu?"

Sam: "Ý cô là sao?"

Paula: "Anh có muốn tôi lưu chúng ra một thư mục con riêng?"

Sam: "Đúng rối, rất tốt"

Paula: "Chúng ta sẽ đặt tên thư mục là gì?"

Sam: "'backup' thì sao nhỉ?"

Paula: "Chắc rồi, ổn thôi. Vậy là chúng ta sẽ ghi tệp nhật ký vào thư mục backup mỗi ngày. Sẽ thực hiện vào lúc nào?"

Sam: "Hàng ngày"

Paula: "Không, ý tôi là thời điểm nào trong này anh muốn nó được sao lưu?"

Sam: "Lúc nào cũng được."

Paula: "Buổi chiều?"

Sam: "Không, hãy tránh thời gian giao dịch ra. Nửa đêm sẽ tốt hơn."

Paula: "OK, vậy thì nửa đêm"

Sam: "Tuyệt, cảm ơn!"

Paula: "Rất hân hạnh"

Sau đó, Paula đang nói với đồng đội của cô ấy là Peter về nhiệm vụ.

Paula: "OK, chúng ta cần sao chép tệp nhật ký vào thư mục con có tên 'backup' mỗi tối vào lúc nửa đêm."

Peter: "OK, chúng ta sẽ đặt tên tệp là gì?"

Paula: "Nên đặt là log.backup"

Peter: "Xong ngay"

Ở một văn phòng khác, Sam nói chuyện điện thoại với khách hàng của mình.

Sam: "Đúng, đúng, các tệp nhật ký sẽ được sao lưu."

Carl: "Được, điều quan trọng là chúng ta sẽ không bao giờ mất bất kỳ tệp nhật ký nào. Chúng tôi cần xem lại tất cả các tệp nhật ký đó, vài tháng hoặc thậm chí vài năm sau, bất cứ khi nào có sự cố, sự kiện hoặc tranh chấp."

Sam: "Đừng lo, tôi vừa nói chuyện với Paula. Cô ấy sẽ lưu tệp nhật ký vào một thư mục có tên là backup, sao lưu mỗi đêm lúc nửa đêm."

Carl: "Được rồi, nghe hay đấy."

Tôi chắc là bạn đã phát hiện ra sự mơ hồ ở đây. Khách hàng mong muốn tất cả các tệp nhật ký được lưu lại và Paula nghĩ rằng họ chỉ muốn lưu tệp nhật ký ngày hôm trước. Khi khách hàng tìm kiếm các bản sao lưu tệp nhật ký tháng trước, họ sẽ chỉ tìm thấy tệp của ngày hôm trước.

Trong trường hợp này, cả Paula và Sam phạm sai lầm. Các lập trình viên chuyên nghiệp (và khách hàng) có trách nhiệm đảm bảo loại bỏ tất cả mơ hồ khỏi các yêu cầu.

Việc này rất _khó_ và tôi chỉ biết một cách để thực hiện.
