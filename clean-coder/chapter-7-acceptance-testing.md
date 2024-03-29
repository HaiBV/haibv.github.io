---
layout: default
---

# Chương 7 Kiểm thử chấp nhận (Acceptance Testing)

![cover](images/7-cover.png)

Vai trò của lập trình viên chuyên nghiệp bao gồm vai trò giao tiếp cùng với vai trò phát triển. Hãy nhớ rằng với các lập trình viên, dữ liệu sai sẽ cho ra quyết định sai, vì vậy các lập trình viên chuyên nghiệp hãy cẩn thận để đảm bảo rằng giao tiếp của họ với các thành viên khác trong nhóm cũng như doanh nghiệp, phải chính xác và lành mạnh.

## Giao tiếp để làm rõ yêu cầu

Một trong những vấn đề giao tiếp phổ biến nhất giữa lập trình viên và doanh nghiệp là các yêu cầu. Doanh nghiệp nêu những gì họ tin rằng mình cần, và sau đó các lập trình viên xây dựng những gì họ tin rằng doanh nghiệp đã mô tả. Ít nhất đó là cách nó cần phải hoạt động. Trong thực tế, việc truyền đạt các yêu cầu là vô cùng khó khăn và quá trình này có rất nhiều lỗi.

Năm 1979, khi đang làm việc tại Teradyne, tôi nhận được yêu cầu từ Tom, giám đốc bộ phận lắp đặt và dịch vụ hiện trường. Anh ấy yêu cầu tôi chỉ cho anh ấy cách sử dụng trình soạn thảo văn bản ED-402 để tạo một hệ thống thông báo sự cố đơn giản.

ED-402 là một trình soạn thảo độc quyền được viết cho máy tính M365, bản sao PDP-8 của Teradyne. Là một trình soạn thảo văn bản rất mạnh mẽ. Nó có một ngôn ngữ kịch bản cài sẵn giúp chúng tôi sử dụng với tất cả các loại ứng dụng văn bản đơn giản.

Tom không phải là một lập trình viên. Nhưng ứng dụng trong đầu anh ấy có vẻ đơn giản, nên anh ấy nghĩ tôi có thể nhanh chóng dạy cho anh ấy để sau đó anh ấy có thể tự viết ra ứng dụng của mình. Với sự ngây thơ của mình, tôi đã nghĩ điều tương tự. Rốt cuộc, ngôn ngữ kịch bản chỉ là một ngôn ngữ macro cho các lệnh chỉnh sửa, với các cấu trúc lặp và điều kiện rất thô sơ.

Vì vậy, chúng tôi đã cùng ngồi với nhau, tôi hỏi anh ấy muốn ứng dụng của mình sẽ làm được gì. Anh ấy bắt đầu với màn hình nhập liệu ban đầu. Tôi đã chỉ cho anh ấy cách tạo một tệp văn bản chứa các câu lệnh script và cách nhập biểu diễn tượng trưng của các lệnh chỉnh sửa vào script đó. Nhưng khi tôi nhìn vào mắt anh ấy, không có phản ứng gì cả. Lời giải thích của tôi đơn giản chẳng có ý nghĩa gì đối với anh ta.

Đây là lần đầu tiên tôi gặp trường hợp này. Đối với tôi, đó là một điều đơn giản để biểu diễn các lệnh của trình soạn thảo một cách tượng trưng. Ví dụ, để biểu diễn lệnh control-B (lệnh đặt con trỏ ở đầu dòng hiện tại), bạn chỉ cần nhập ^ B vào tệp script. Nhưng điều này không có ý nghĩa gì đối với Tom. Anh ấy không thể thực hiện bước nhảy vọt từ việc chỉnh sửa tập tin sang chỉnh sửa một tập tin sẽ chỉnh sửa một tập tin khác.

Tom không ngốc. Tôi chắc anh ấy đã nhận ra rằng điều này sẽ mất nhiều thời gian hơn anh ấy nghĩ lúc đầu và anh ấy không muốn đầu tư thời gian cũng như năng lượng tinh thần cần thiết để học một thứ gì đó quá phức tạp như sử dụng một trình soạn thảo để ra lệnh cho một trình soạn thảo khác.

Vì vậy, từng chút một, tôi thấy mình phát triển ứng dụng này trong khi anh ấy ngồi đó và xem. Trong vòng hai mươi phút đầu tiên, rõ ràng là sự tập trung của anh ấy đã thay đổi từ việc học cách tự làm điều đó sang việc đảm bảo rằng những gì _tôi_ làm là những gì _anh ấy_ muốn.

Chúng tôi mất nguyên 1 ngày. Anh ấy mô tả một tính năng và tôi phát triển nó trong khi anh ấy quan sát. Thời gian cho 1 vòng lặp là năm phút hoặc ít hơn, vì vậy không có lý do gì để anh ta đứng dậy và làm bất cứ điều gì khác. Anh ấy yêu cầu tôi làm X và trong vòng năm phút, tôi đã làm được X.

Thường thì anh ấy sẽ vẽ những gì mình muốn trên một tờ giấy nháp. Một số điều anh ấy muốn khó có thể thực hiện được trong ED-402, vì vậy tôi đề xuất một cách khác. Cuối cùng chúng tôi đưa ra thống nhất và tôi thực hiện chức năng đó.

Nhưng khi chúng tôi chạy thử, anh ấy có thể sẽ thay đổi quyết định. Anh ấy nói đại loại như: "Đúng thế, điều đó có vẻ không giống với chương trình mà tôi nghĩ tới. Hãy thử một cách khác."

Thời gian trôi qua, chúng tôi mày mò, chọc ngoáy và thúc đẩy ứng dụng đó thành hình. Chúng tôi đã thử cái này, rồi cái khác, rồi lại cái khác. Tôi thấy rất rõ ràng rằng _anh ấy_ là nhà điêu khắc, còn tôi là công cụ đang được sử dụng.

Cuối cùng, anh ấy đã nhận được ứng dụng mà mình cần nhưng không biết làm thế nào để bắt đầu xây dựng ứng dụng tiếp theo cho chính mình. Mặt khác, tôi đã học được một bài học mạnh mẽ về cách khách hàng thực sự khám phá những gì họ cần. Tôi biết được rằng tầm nhìn của họ về các tính năng thường không tồn tại lâu sau khi được tiếp xúc thực tế với máy tính.

### Chính xác quá sớm

Cả khách hàng và lập trình viên đều dễ bị cám dỗ bởi cái bẫy của chính xác quá sớm. Khách hàng muốn biết chính xác những gì họ sẽ nhận được trước khi họ ủy quyền cho một dự án. Các lập trình viên muốn biết chính xác những gì họ phải cung cấp trước khi họ ước lượng dự án. Cả hai bên đều muốn có một độ chính xác không thể đạt được và thường sẵn sàng lãng phí cả một gia tài để cố gắng đạt được nó.

#### Nguyên tắc bất định

Vấn đề là mọi thứ xuất hiện trên tài liệu sẽ khác với lúc hệ thống làm việc. Khi khách hàng thực sự thấy những gì họ mô tả đang chạy trong hệ thống, họ nhận ra rằng đó hoàn toàn không phải là những gì họ muốn. Khi họ thấy yêu cầu thực sự đang chạy, họ lại có ý tưởng tốt hơn về những gì họ thực sự muốn — và đó thường không phải là những gì họ đang thấy.

Nó được gọi là hiệu ứng người quan sát, hay nguyên tắc bất định. Khi bạn đưa ra một tính năng cho khách hàng, nó cung cấp cho họ nhiều thông tin hơn so với trước đây và thông tin mới đó sẽ ảnh hưởng đến cách họ nhìn nhận toàn bộ hệ thống.

Tóm lại, bạn đưa ra các yêu cầu của mình càng chính xác thì chúng càng trở nên ít liên quan hơn khi hệ thống được triển khai.

#### Ước lượng lo lắng

Các lập trình viên cũng có thể mắc vào cái bẫy chính xác. Họ biết rằng họ phải ước lượng hệ thống và thường nghĩ rằng điều này đòi hỏi sự chính xác. Không đúng.

Thứ nhất, ngay cả khi có được thông tin hoàn hảo, ước lượng của bạn vẫn sẽ có một phương sai lớn. Thứ hai, nguyên tắc bất định ở trên khiến ước lượng kém chính xác đi nhiều lần. Các yêu cầu _sẽ_ thay đổi và làm ảnh hưởng đến tính chính xác đó.

Các lập trình viên chuyên nghiệp hiểu rằng các ước lượng có thể và nên được thực hiện dựa trên các yêu cầu có độ chính xác thấp và phải xác định rằng ước lượng _là ước lượng_. Để củng cố điều này, các lập trình viên chuyên nghiệp luôn đưa sai số vào ước lượng của mình để khách hàng hiểu được sự không chắc chắn. (Xem Chương 10, "Ước lượng.")

#### Sự mơ hồ muộn màng

Giải pháp cho chính xác quá sớm là trì hoãn độ chính xác càng lâu càng tốt. Các lập trình viên chuyên nghiệp không đưa ra yêu cầu cho đến khi họ chuẩn bị phát triển nó. Tuy nhiên, điều đó có thể dẫn đến một thói xấu khác: sự mơ hồ muộn màng.

Thường thì các bên liên quan sẽ có mâu thuẫn. Khi đó, họ thấy việc sửa câu chữ trong tài liệu dễ dàng hơn là giải quyết vấn đề bất đồng. Họ sẽ tìm ra cách diễn đạt yêu cầu mà tất cả họ đồng ý, nhưng không thực sự giải quyết tranh chấp. Tôi từng nghe Tom DeMarco nói, "Tài liệu yêu cầu không rõ ràng thể hiện mâu thuẫn của khách hàng."

Tất nhiên, tranh cãi hoặc bất đồng không tạo ra sự mơ hồ. Đôi khi các bên liên quan cho rằng người đọc biết họ muốn nói gì.

Nó có thể hoàn toàn rõ ràng với họ trong ngữ cảnh của họ, nhưng có ý nghĩa hoàn toàn khác đối với lập trình viên khi đọc. Loại mơ hồ về ngữ cảnh này có thể xảy ra ngay cả khi khách hàng và lập trình viên nói chuyện trực tiếp với nhau.

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

Paula: "OK, chúng ta cần sao lưu tệp nhật ký vào thư mục con có tên 'backup' mỗi tối vào lúc nửa đêm."

Peter: "OK, chúng ta sẽ đặt tên tệp là gì?"

Paula: "Nên đặt là log.backup"

Peter: "Xong ngay"

Ở một văn phòng khác, Sam nói chuyện điện thoại với khách hàng của mình.

Sam: "Đúng, đúng, các tệp nhật ký sẽ được sao lưu."

Carl: "Được, điều thiết yếu là chúng ta sẽ không bao giờ mất bất kỳ tệp nhật ký nào. Chúng tôi cần xem lại tất cả các tệp nhật ký đó, vài tháng hoặc thậm chí vài năm sau, bất cứ khi nào có sự cố, sự kiện hoặc tranh chấp."

Sam: "Đừng lo, tôi vừa nói chuyện với Paula. Cô ấy sẽ lưu tệp nhật ký vào một thư mục có tên là backup, sao lưu mỗi đêm lúc nửa đêm."

Carl: "Được rồi, nghe hay đấy."

Tôi chắc là bạn đã phát hiện ra sự mơ hồ ở đây. Khách hàng mong muốn tất cả các tệp nhật ký được lưu lại và Paula nghĩ rằng họ chỉ muốn lưu tệp nhật ký ngày hôm trước. Khi khách hàng tìm kiếm các bản sao lưu tệp nhật ký tháng trước, họ sẽ chỉ tìm thấy tệp của ngày hôm trước.

Trong trường hợp này, cả Paula và Sam phạm sai lầm. Các lập trình viên chuyên nghiệp (và khách hàng) có trách nhiệm đảm bảo loại bỏ tất cả mơ hồ khỏi các yêu cầu.

Việc này rất _khó_ và tôi chỉ biết một cách để thực hiện.

## Kiểm thử chấp nhận

Thuật ngữ _kiểm thử chấp nhận_ đang bị quá tải và sử dụng quá mức. Một số người cho rằng đây là những kiểm thử mà người dùng thực hiện trước khi họ chấp nhận phiên bản mới. Những người khác cho rằng đây là các kiểm thử của QA. Trong chương này, chúng ta sẽ định nghĩa kiểm thử chấp nhận là các kiểm thử được viết bởi sự hợp tác của khách hàng và lập trình viên để _xác định khi nào một yêu cầu được hoàn thành_.

### Định nghĩa của "hoàn thành" (DoD)

Một trong những mơ hồ phổ biến nhất mà chúng ta phải đối mặt với tư cách lập trình viên là sự mơ hồ của "hoàn thành". Khi một lập trình viên nói rằng anh ta đã hoàn thành một nhiệm vụ, điều đó có nghĩa là gì? Điều đó có nghĩa là tính năng đó đã sẵn sàng triển khai với 100% tự tin không? Hay nó đã sẵn sàng cho QA? Hoặc nó được viết xong và mới được chạy một lần nhưng chưa thực sự kiểm thử nó.

Tôi đã làm việc với các nhóm có định nghĩa khác nhau cho các từ "hoàn thành (done)" và "đầy đủ (complete)". Một nhóm khác sử dụng các từ như "hoàn thành (done)" và "đã hoàn thành (done-done)".

Các lập trình viên chuyên nghiệp có một định nghĩa duy nhất về hoàn thành: Hoàn thành nghĩa là _hoàn thành_. Hoàn thành nghĩa là tất cả code được viết, tất cả các bài kiểm thử đều vượt qua, QA và khách hàng đã chấp nhận. Hoàn thành.

Nhưng làm thế nào bạn có thể đạt được mức độ hoàn thành này mà vẫn có tiến độ nhanh chóng lặp đi lặp lại? Bạn tạo một tập hợp các kiểm thử tự động mà khi vượt qua chúng sẽ đáp ứng tất cả các tiêu chí trên! Khi các kiểm thử chấp nhận cho tính năng được vượt qua, nghĩa là bạn đã hoàn thành.

Các lập trình viên chuyên nghiệp định hướng xác định yêu cầu thành các kiểm thử chấp nhận tự động. Họ làm việc với các bên liên quan và QA để đảm bảo rằng các kiểm thử tự động này là đặc điểm kỹ thuật hoàn chỉnh về việc hoàn thành.

Sam (khách hàng): "OK, bây giờ các tệp nhật ký (log files) cần được sao lưu"

Paula: "OK, bao lâu một lần?"

Sam: "Hàng ngày"

Paula: "Được. Và chúng ta sẽ lưu chúng ở đâu?"

Sam: "Ý cô là sao?"

Paula: "Anh có muốn tôi lưu chúng ra một thư mục con riêng?"

Sam: "Đúng rối, rất tốt"

Paula: "Chúng ta sẽ đặt tên thư mục là gì?"

Sam: "`backup` thì sao nhỉ?"

Tom (tester): "Đợi đã, tên `backup` chung chung quá. Anh thực sự muốn lưu những gì trong thư mục này."

Sam: "`The backups`"

Tom: "Sao lưu của cái gì?"

Sam: "Những tệp nhật ký"

Paula: "Nhưng chỉ có duy nhất 1 tệp"

Sam: "Không, có nhiều. Mỗi ngày 1 tệp"

Tom: "Ý anh là có 1 tệp nhật ký hoạt động, và nhiều tệp nhật ký sao lưu?"

Sam: "Tất nhiên"

Paula: "Ồ! Tôi tưởng anh chỉ muốn một tệp sao lưu tạm thời"

Sam: "Không, khách hàng muốn giữ chúng mãi mãi."

Paula: "Cái này mới với tôi nha. OK, thật tốt là chúng ta làm rõ được nó"

Tom: "Vậy tên của thư mục con sẽ cho chúng ta biết những gì bên trong."

Sam: "Nó chứa tất cả các nhật ký cũ không hoạt động."

Tom: "Vậy hãy đặt là `old_inactive_logs`"

Sam: "Tuyệt vời"

Tom: "Vậy khi nào thư mục này được tạo?"

Sam: "Sao cơ?"

Paula: "Chúng ta nên tạo thư mục khi hệ thống khởi động, chỉ khi thư mục chưa tồn tại."

Tom: "Được rồi, đây là kiểm thử đầu tiên của chúng ta. Tôi sẽ khởi động hệ thống và xem thư mục `old_inactive_logs` đã được tạo chưa. Sau đó, tôi sẽ thêm một tệp vào thư mục đó. Sau đó, tôi sẽ tắt và khởi động lại, đồng thời đảm bảo rằng cả thư mục và tệp vẫn ở đó."

Paula: "Như vậy sẽ mất nhiều thời gian. Hệ thống khởi động hiện tại hết 20 giây và sẽ lâu hơn. Bên cạnh đó, tôi thực sự không muốn phải dựng toàn bộ hệ thống mỗi khi chạy các bài kiểm tra chấp nhận."

Tom: "Cô có đề nghị gì không?"

Paula: "Chúng tôi sẽ tạo một lớp `SystemStarter`. Chương trình chính sẽ tải phần khởi động này với một nhóm các đối tượng `StartupCommand`, sẽ tuân theo mẫu `Command`. Sau đó, trong quá trình khởi động hệ thống, `SystemStarter` sẽ chỉ cho tất cả các đối tượng `StartupCommand` chạy. Một trong các dẫn xuất `StartupCommand` đó sẽ tạo thư mục `old_inactive_logs` khi nó chưa tồn tại."

Tom: "Ồ, được thôi, tất cả những gì tôi cần kiểm tra là dẫn xuất `StartupCommand` đó. Tôi có thể viết một bài kiểm tra `FitNesse` đơn giản cho điều đó."

Tom viết lên bảng

"Phần đầu tiên sẽ như thế này"

`xác định câu lệnh LogFileDirectoryStartupCommand`

`xác định thư mục old_inactive_logs không tồn tại`

`sau khi lệnh được chạy`

`thư mục old_inactive_logs được khởi tạo`

`và thư mục phải rỗng`

"Tiếp theo sẽ như thế này"

`xác định câu lệnh LogFileDirectoryStartupCommand`

`xác định thư mục old_inactive_logs tồn tại`

`và nó chứa tệp tin x`

`sau khi câu lệnh chạy`

`thư mục old_inactive_logs vẫn tồn tại`

`và nó vẫn chứa tập tin x`

Paula: "Chính xác, nó sẽ đảm bảo được yêu cầu đưa ra"

Sam: "Chà, tất cả có thực sự cần thiết không?"

Paula: "Sam, phần nào không đủ quan trọng?"

Sam: "Ý tôi là có quá nhiều việc phải làm với các kiểm thử này"

Tom: "Đúng vậy, nhưng không nhiều hơn việc làm kế hoạch kiểm thử thủ công. Và thực hiện lặp đi lặp lại kiểm thử thủ công còn nhiều việc hơn."

### Kết nối

Mục đích của kiểm thử chấp nhận là kết nối, rõ ràng và chính xác. Bằng cách thống nhất qua kiểm thử chấp nhận, các lập trình viên, khách hàng và tester đều nắm được toàn bộ hành vi hệ thống. Để đạt được sự rõ ràng này là trách nhiệm của tất cả các bên. Các lập trình viên chuyên nghiệp sẽ nhận lấy trách nhiệm làm việc với các khách hàng và tester để đảm bảo rằng tất cả các bên đều biết những gì sắp được xây dựng.

### Tự động hóa

Tất cả các kiểm thử chấp nhận phải _luôn luôn_ được tự động hóa. Có thể có kiểm thử thủ công ở đâu đó trong khi phát triển phần mềm, nhưng _những_ loại kiểm thử này không bao giờ nên là thủ công. Lý do rất đơn giản: chi phí.

Trong hình 7-1. Bàn tay mà bạn thấy trong ảnh thuộc về quản lý đội QA của một công ty Internet lớn. Tài liệu anh ta đang giữ là _mục lục_ cho kế hoạch kiểm thử _thủ công_. Anh ta có một đội quân kiểm thử thủ công ở các địa điểm khác nhau để thực hiện kế hoạch này sáu tuần một lần. Chi phí cho mỗi lần khoảng hơn một triệu đô la. Anh ấy đang cho tôi xem khi vừa trở về sau một cuộc họp, ở đó quản lý của anh ấy đã nói rằng họ cần cắt giảm ngân sách cho việc kiểm thử xuống 50%. Câu hỏi của anh ấy với tôi là, "Tôi sẽ bỏ đi 50% kiểm thử nào trong số này?"

![7-1](images/7-1.png)

Nói hơi thô thiển thì đây hẳn là một thảm họa. Chi phí cho kiểm thử thủ công lớn đến mức họ đã quyết định hy sinh nó và chấp nhận với thực tế rằng _họ sẽ không biết một nửa sản phẩm của mình có hoạt động hay không!_

Các lập trình viên chuyên nghiệp không để xảy ra tình trạng này. Chi phí cho việc tự động hóa các bài kiểm thử chấp nhận là quá nhỏ so với chi phí thực hiện kiểm thử thủ công nên việc viết các kịch bản cho con người thực hiện hoàn toàn không có có lợi về mặt kinh tế. Các lập trình viên chuyên nghiệp chịu trách nhiệm về phần của họ trong việc đảm bảo rằng các kiểm thử chấp nhận được tự động hóa.

Có nhiều công cụ mã nguồn mở và thương mại tạo điều kiện thuận lợi cho việc tự động hóa kiểm thử chấp nhận.FitNesse, Cucumber, cuke4duke, robot framework và Selenium, tôi chỉ đề cập một số ở đây. Tất cả các công cụ này cho phép bạn chỉ định các bài kiểm thử tự động trong một biểu mẫu mà những người không phải lập trình viên có thể đọc, hiểu và thậm chí là tự tạo được.

### Công việc thêm vào

Quan điểm của Sam về khối lượng công việc là điều dễ hiểu. _Cần_ rất nhiều công việc thêm vào để viết các kiểm thử chấp nhận như vậy. Nhưng với Hình 7-1, chúng ta có thể thấy rằng nó không thực sự là thêm việc chút nào. Viết các kiểm thử này chỉ đơn giản là công việc làm rõ hệ thống. Làm rõ với mức độ chi tiết này là cách duy nhất mà chúng tôi, với tư cách là lập trình viên, có thể biết “đã hoàn thành” nghĩa là gì. Làm rõ ở mức độ chi tiết này là cách duy nhất mà khách hàng có thể đảm bảo rằng hệ thống mà họ đang trả tiền thực sự làm được những gì họ cần. Và làm rõ ở mức độ chi tiết này là cách duy nhất để tự động hóa thành công các kiểm thử. Vì vậy, đừng xem những kiểm thử này là thêm việc. Hãy xem chúng như những người tiết kiệm thời gian và tiền bạc. Những bài kiểm tra này sẽ ngăn bạn phát triển sai hệ thống và cho phép bạn _biết_ khi nào bạn hoàn thành.

### Ai viết kiểm thử chấp nhận, và khi nào?

Trong trường hợp lý tưởng, khách hàng và QA sẽ hợp tác để viết ra các kiểm thử này và lập trình viên sẽ xem xét chúng để đảm bảo tính nhất quán. Trong thực tế, khách hàng hiếm khi có thời gian hoặc khuynh hướng đi sâu vào mức độ chi tiết cần thiết. Vì vậy, họ thường giao trách nhiệm cho BA, QA hoặc thậm chí là lập trình viên. Nếu lập trình viên phải viết các kiểm thử này, thì hãy chắc chắn rằng lập trình viên viết kiểm thử sẽ không trực tiếp triển khai chính tính năng đó.

Thông thường, BA sẽ xác định các "happy path" của kiểm thử, bởi vì các kiểm thử đó mô tả các tính năng có giá trị kinh doanh. QA thường viết các kiểm thử "unhappy path", các điều kiện biên, ngoại lệ và trường hợp phức tạp. Điều này là do công việc của QA là lường trước những sai sót có thể xảy ra.

Theo nguyên tắc "chính xác muộn", các kiểm thử chấp nhận phải được viết càng muộn càng tốt, thường là vài ngày trước khi tính năng được triển khai. Trong các dự án theo mô hình Agile, các kiểm thử được viết _sau khi_ các tính năng đã được chọn cho Phân đoạn (Iteration) hoặc Sprint tiếp theo.

Một vài kiểm thử chấp nhận đầu tiên sẽ sẵn sàng vào ngày đầu tiên của Phân đoạn. Chúng sẽ được viết liên tục, mỗi ngày một ít và tất cả sẽ sẵn sàng khi đến giai đoạn giữa của Phân đoạn. Nếu tất cả các kiểm thử chấp nhận chưa sẵn sàng vào thời điểm đó, thì phải cần thêm lập trình viên tham gia để hoàn thành chúng. Nếu điều này xảy ra thường xuyên, thì nên thêm nhiều BA và / hoặc QA vào nhóm.

### Vai trò của lập trình viên

Công việc triển khai một tính năng bắt đầu khi các kiểm thử chấp nhận cho tính năng đó đã sẵn sàng. Các lập trình viên chạy các kiểm thử chấp nhận cho tính năng mới và xem chúng thất bại như thế nào. Sau đó, họ làm việc để kết nối kiểm thử chấp nhận với hệ thống và sau đó bắt đầu vượt qua chúng bằng cách triển khai tính năng mong muốn.

Paula: "Peter, giúp tôi một chút được không?"

Peter: "Chắc rồi, Paula, có chuyện gì vậy?"

Paula: "Đây là một kiểm thử chấp nhận. Nó đang thất bại"

`xác định câu lệnh LogFileDirectoryStartupCommand`

`xác định thư mục old_inactive_logs không tồn tại`

`sau khi lệnh được chạy`

`thư mục old_inactive_logs được khởi tạo`

`và thư mục phải rỗng`

Peter: "Đúng vậy, tất cả đều đang đỏ. Chưa có gì được thực hiện. Hãy để tôi viết tác vụ đầu tiên."

`|scenario|given the command _|cmd|`

`|create command|@cmd|`

Paula: "Chúng ta đã có lệnh thực thi `createCommand` chưa?

Peter: "Rồi, nó ở trong `CommandUtilitiesFixture` tôi mới viết tuần trước"

Paula: "OK, chạy lại kiểm thử nào"

Peter: (chạy kiểm thử) "Tuyệt, dòng đầu tiên đã chuyển xanh, hãy tiếp tục với dòng tiếp theo"

Đừng bận tâm quá nhiều về `Scenarios` và `Fixtures` ở trên. Đó chỉ là một tác vụ bạn phải viết để kết nối các kiểm thử với hệ thống đang được kiểm tra.

Nói tóm lại thì tất cả các công cụ đều cung cấp một số cách để sử dụng đối sánh mẫu có thể nhận biết và phân tích cú pháp các câu lệnh của kiểm thử, sau đó gọi các hàm cung cấp dữ liệu trong kiểm thử vào hệ thống đang được kiểm tra. Công sức bỏ ra khá nhỏ, `Scenarios` và `Fixtures` có thể được sử dụng lại qua nhiều kiểm thử khác nhau.

Điều mấu chốt của tất cả những điều này là lập trình viên có nhiệm vụ phải kết nối các kiểm thử chấp nhận với hệ thống và sau đó vượt qua chúng.

### Thương lượng kiểm thử và tích cực thụ động (Passive-Aggression)

Người viết kiểm thử là con người nên hoàn toàn có thể mắc sai lầm. Đôi khi các kiểm thử có vẻ khó hiểu khi bạn bắt đầu phát triển chức năng. Chúng có thể quá phức tạp. Hoặc có thể kỳ lạ. Chúng có thể chứa những giả định ngớ ngẩn. Thậm chí có thể sai. Điều này rất khó chịu nếu bạn là lập trình viên phải vượt qua kiểm thử đó.

Là một lập trình viên chuyên nghiệp, nhiệm vụ của bạn là thương lượng với người viết kiểm thử để có những kiểm thử tốt hơn. Điều bạn _không bao giờ_ nên làm là chọn phương án tích cực-thụ động và tự nói với bản thân, "Chà, đó là những gì mà kiểm thử muốn, vậy đó là những điều tôi sẽ làm".

Hãy nhớ rằng, với tư cách là một chuyên gia, nhiệm vụ của bạn là giúp nhóm của bạn tạo ra những phần mềm tốt nhất có thể. Điều đó có nghĩa là mọi người cần đề phòng những sai sót và sơ suất, đồng thời làm việc cùng nhau để sửa chúng.

Paula: "Tom, kiểm thử này không đúng lắm"

`đảm bảo quá trình xử lý hoàn thành trong 2 giây`

Tom: "Nó có vẻ ổn với tôi. Yêu cầu của chúng tôi là người dùng không đợi quá 2 giây. Vấn đề ở đây là gì?"

Paula: "Vấn đề là chúng ta chỉ có thể đảm bảo điều đó một cách tương đối"

Tom: "Hả? Nghe lạ vậy. Yêu cầu là 2 giây"

Paula: "Phải, và chúng ta có thể đạt được 99.5%"

Tom: "Paula, đó không phải yêu cầu"

Paula: "Nhưng nó là thực tế. Tôi không thể đảm bảo được tất cả các trường hợp."

Tom: "Sam sẽ không đồng ý đâu"

Paula: "Không, thực ra tôi đã nói với anh ta về việc này. Sam đồng ý miễn là trải nghiệp người dùng thông thường từ 2 giây trở xuống"

Tom: "OK, vậy làm cách nào với kiểm thử này? Không thể xác định quá trình _thường_ kết thúc sau 2 giây"

Paula: "Có thể bằng cách thống kế"

Tom: "Ý bạn là tôi phải chạy 1000 lần và đảm bảo rằng không quá năm lần dài hơn hai giây? Nghe khá vô lý"

Paula: "Không, như thế này thì sao?"

`thực hiện 15 tác vụ và cộng dồn thời gian.`

`đảm bảo rằng điểm số Z trong 2 giây ít nhất là 2.57`

Tom: "Whoa, điểm số Z là gì?"

Paula: "Chỉ số thống kê. Đây là ví dụ"

`thực hiện 15 tác vụ và cộng dồn thời gian.`

`đảm bảo 99.5% lượt chạy mất ít hơn 2 giây`

Tom: "Được, dễ đọc hơn rồi, đại loại vậy, nhưng tôi có thể tin tưởng vào bài toàn đằng sau không?"

Paula: "Tôi sẽ đảm bảo hiển thị tất cả các phép tính trung gian trong báo cáo kiểm thử để anh có thể kiểm tra phép toán nếu anh có bất kỳ nghi ngờ nào"

Tom: "OK, hoàn toàn đồng ý."

### Kiểm thử chấp nhận và Kiểm thử đơn vị

Kiểm thử chấp nhận không phải là kiểm thử _đơn vị_. Kiểm thử đơn vị viết _bởi_ lập trình viên _cho_ lập trình viên. Chúng là các tài liệu thiết kế chính thức mô tả cấu trúc và hành vi cấp thấp nhất của code. Đối tượng là các lập trình viên, không phải khách hàng.

Các kiểm thử chấp nhận được viết _bởi_ khách hàng _cho_ khách hàng (ngay cả khi bạn, nhà phát triển, đang phải viết chúng). Chúng là các tài liệu yêu cầu chính thức chỉ rõ cách hệ thống sẽ hoạt động theo quan điểm của khách hàng. Đối tượng là các khách hàng _và_ các lập trình viên.

Bạn có thể bị hấp dẫn khi cố gắng loại bỏ sự "thêm việc" bằng cách giả định rằng hai loại kiểm thử là dư thừa. Mặc dù đúng là các kiểm thử đơn vị và kiểm thử chấp nhận thường kiểm tra những thứ giống nhau, nhưng chúng không hề thừa chút nào.

Đầu tiên, mặc dù chúng có thể kiểm tra những thứ giống nhau, nhưng chúng làm như vậy thông qua các cơ chế và cách làm khác nhau. Các kiểm thử đơn vị đào sâu vào phần lõi của hệ thống, thực hiện các lệnh gọi đến các phương thức trong các lớp cụ thể. Kiểm thử chấp nhận kiểm tra hệ thống xa hơn thế, ở cấp độ API hoặc thậm chí là cấp độ giao diện người dùng. Vì vậy, các cách thực thi của các kiểm thử này rất khác nhau.

Nhưng lý do thực sự mà các kiểm thử này không thừa là chức năng chính của chúng _không phải là kiểm tra_. Thực tế, chúng là kiểm thử ngẫu nhiên. Kiểm thử đơn vị và kiểm thử chấp nhận có tác dụng quan trọng hơn là làm tài liệu, sau mới đến kiểm tra. Mục đích chính của chúng là ghi lại thiết kế, cấu trúc và hành vi của hệ thống một cách chính thống. Thực tế là chúng tự động xác minh thiết kế, cấu trúc và hành vi mà chúng chỉ định là cực kỳ hữu ích, nhưng đặc điểm kỹ thuật mới là mục đích thực sự của chúng.

### Giao diện người dùng (GUIs) và những biến thể khác

Thật khó để xác định GUI trước. Có thể làm được, nhưng hiếm khi được làm tốt. Nguyên nhân là thẩm mỹ mang tính chủ quan nên dễ thay đổi. Mọi người muốn _thử_ với GUI. Họ muốn nhào nặn và thao túng chúng. Họ muốn thử các phông chữ, màu sắc, bố cục trang và quy trình làm việc khác nhau. GUI liên tục thay đổi.

Điều này làm cho việc viết kiểm thử chấp nhận cho GUI trở nên khó khăn. Bí quyết là thiết kế hệ thống để bạn có thể coi GUI như thể nó là một API hơn là một tập hợp các nút, thanh trượt, lưới và menu. Điều này nghe có vẻ lạ, nhưng đó thực sự là một thiết kế tốt.

Có một nguyên tắc thiết kế được gọi là Nguyên tắc Trách nhiệm Đơn lẻ (Single Responsibility Principle - SRP). Nguyên tắc này nói rằng bạn nên tách riêng những thứ thay đổi vì lý do khác nhau ra và nhóm những thứ thay đổi vì lý do giống nhau lại với nhau. GUI cũng không ngoại lệ.

Bố cục, định dạng và quy trình làm việc của GUI sẽ thay đổi vì lý do thẩm mỹ và hiệu quả, nhưng khả năng cơ bản của GUI sẽ vẫn như cũ bất chấp những thay đổi này. Do đó, khi viết kiểm thử chấp nhận cho GUI, bạn cần tận dụng lợi thế của các phần tóm tắt cơ bản không thay đổi thường xuyên.

Ví dụ, có thể có nhiều nút trên một trang. Thay vì tạo các kiểm thử ấn vào các nút đó dựa trên vị trí của chúng trên trang, bạn có thể ấn vào chúng dựa trên tên của chúng. Tốt hơn, có thể chúng đều có một ID duy nhất mà bạn có thể sử dụng. Sẽ tốt hơn nhiều nếu bạn viết kiểm thử chọn nút có ID là `ok_button` hơn là chọn nút ở cột 3 hàng 4 trong lưới điều khiển.

### Kiểm thử qua giao diện phù hợp

Viết kiểm thử gọi các tính năng cơ bản của hệ thống thông qua một API thực sẽ tốt hơn nhiều khi thông qua GUI. API này cũng phải được GUI sử dụng. Điều này không có gì mới. Các chuyên gia thiết kế đã nói với chúng tôi trong nhiều thập kỷ rằng cần tách GUI ra khỏi các quy tắc nghiệp vụ.

Kiểm thử thông qua GUI luôn có vấn đề trừ khi bạn _chỉ_ đang kiểm tra GUI. Nguyên nhân là do GUI có thể sẽ thay đổi, khiến các kiểm thử trở nên rất mong manh. Khi mỗi thay đổi về GUI phá vỡ khoảng 1000 kiểm thử, bạn sẽ phải lựa chọn giữa viết lại kiểm thử hoặc ngừng thay đổi GUI. Cả hai đều không phải là lựa chọn tốt. Vì vậy, hãy viết các kiểm thử quy tắc nghiệp vụ của bạn đi qua một API ngay bên dưới GUI.

Một số kiểm thử chấp nhận chỉ định hành vi của chính GUI. Các kiểm thử này phải thông qua GUI. Tuy nhiên, các kiểm thử này không kiểm tra các quy tắc nghiệp vụ và do đó không yêu cầu các quy tắc nghiệp vụ phải được kết nối với GUI. Do đó, bạn nên tách riêng GUI và các quy tắc nghiệp vụ ra, sau đó thay thế các quy tắc nghiệp vụ bằng các quy tắc sơ khai trong khi kiểm thử GUI.

Giữ các thử nghiệm GUI ít nhất có thể. Chúng rất mỏng manh, bởi vì GUI dễ bay hơi. Bạn càng có nhiều thử nghiệm GUI thì khả năng bạn giữ chúng càng ít.

### CI (Continuous Integration)

Đảm bảo rằng tất cả kiểm thử đơn vị và kiểm thử chấp nhận được chạy nhiều lần mỗi ngày trong một hệ thống CI. Hệ thống này phải được kích hoạt bởi hệ thống kiểm soát mã nguồn của bạn. Mỗi khi ai đó commit một mô-đun, hệ thống CI sẽ khởi động một bản dựng, và sau đó chạy tất cả các kiểm thử trong hệ thống. Kết quả của lần chạy đó phải được gửi qua email cho mọi người trong nhóm.

#### Dừng chạy

Điều rất quan trọng là giữ cho các kiểm thử CI chạy mọi lúc. Chúng không bao giờ nên thất bại. Nếu chúng thất bại, thì cả nhóm nên dừng việc họ đang làm và tập trung vào việc vượt qua các bài kiểm tra bị hỏng một lần nữa. Một bản dựng bị hỏng trong hệ thống CI nên được xem như một trường hợp khẩn cấp, một sự kiện “dừng chạy ép”.

Tôi đã tham khảo ý kiến cho các team không thực hiện nghiêm túc các kiểm thử hỏng. Họ "quá bận" để sửa các kiểm thử bị hỏng nên họ đã đặt chúng sang một bên, hứa sẽ sửa chúng sau. Trong một trường hợp, nhóm thực sự đã đưa các kiểm thử bị hỏng ra khỏi bản dựng vì thật bất tiện khi thấy chúng thất bại. Sau đó, sau khi phát hành cho khách hàng, họ nhận ra rằng họ đã quên đưa những kiểm thử đó trở lại bản dựng. Họ biết được điều này bởi vì một khách hàng tức giận gọi điện cho họ và báo cáo lỗi.

## Kết luận

Giao tiếp càng chi tiết càng khó. Điều này đặc biệt đúng đối với lập trình viên và bên liên quan khi đang trao đổi về chi tiết của một ứng dụng. Quá dễ dàng để mỗi bên xua tay và _giả định_ rằng bên kia đã hiểu. Thông thường, cả hai bên đều đồng ý rằng họ hiểu và rời đi với những ý kiến hoàn toàn khác nhau.

Cách duy nhất tôi biết để loại bỏ lỗi giao tiếp giữa lập trình viên và bên liên quan là viết kiểm thử chấp nhận tự động. Những kiểm thử phải chính thống như cách chúng thực hiện. Chúng phải hoàn toàn rõ ràng và đồng bộ với ứng dụng. Chúng là tài liệu yêu cầu hoàn hảo.
