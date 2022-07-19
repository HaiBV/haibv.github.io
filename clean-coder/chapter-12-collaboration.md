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

Mọi thứ lẽ ra phải tuyệt vời. Vấn đề là ở tôi. Tôi hoàn toàn đủ tâm huyết với dự án, với công nghệ đang sử dụng, nhưng ở tuổi 24, tôi đơn giản là không quan tâm đến doanh nghiệp hoặc cấu trúc chính sách nội bộ của nó.

Tôi mắc lỗi ngay ngày đầu tiên. Tôi xuất hiện mà không đeo cà vạt. Tôi đã đeo trong buổi phỏng vấn, và tôi cũng thấy những thành viên khác đeo cà vạt, nhưng tôi không thể quen với điều đó. Vậy nên, vào ngày đầu tiên của tôi, Ralph đến gặp tôi và nói rõ rằng: "Ở đây chúng tôi đeo cà vạt."

Tôi không thể nói cho bạn biết tôi khó chịu đến mức nào. Nó thực sự làm tôi thấy phiền. Tôi đeo cà vạt hằng ngày, và tôi ghét nó. Nhưng tại sao? Tôi biết tôi đang ở đâu. Tôi biết những quy tắc đã được thông qua. Tại sao tôi lại khó chịu như vậy? Bởi vì tôi là một đứa trẻ ích kỷ và tự ái.

Tôi thường xuyên không đi làm đúng giờ. Và tôi nghĩ nó không quan trọng. Rút cục, tôi đang _làm tốt_ công việc. Và đó là sự thật, tôi đã làm rất tốt việc viết các chương trình của mình. Tôi dễ dàng trở thành lập trình viên có kỹ thuật giỏi nhất trong nhóm. Tôi có thể viết code nhanh hơn và tốt hơn những người khác. Tôi có thể chuẩn đoán và giải quyết vấn đề nhanh hơn. Tôi _biết_ tôi có giá trị. Vì vậy, thời gian và ngày tháng không quan trọng với tôi.

Quyết định sa thải tôi được đưa ra vào ngày tôi không đến đúng giờ cho một cột mốc quan trọng. Rõ ràng là John đã nói với chúng tôi rằng anh ta cần bản demo những chức năng hoạt động vào thứ 2 tuần sau. Chắc chắn là tôi biết điều đó, nhưng đơn giản là ngày tháng không quan trọng với tôi.

Chúng tôi đang trong giai đoạn phát triển tích cực. Hệ thống không ở trạng thái đưa vào sử dụng. Không có lý do gì để hệ thống chạy khi không có ai ở phòng thí nghiệm. Tôi phải là người cuối cùng rời khỏi đó vào thứ 6, và rõ ràng là tôi đã để hệ thống ở trạng thái không hoạt động. Thực tế thứ 2 là ngày quan trọng không hề lưu lại trong não của tôi.

Tôi đến muộn 1h vào thứ 2, và thấy mọi người đang ủ rũ tụ tập quanh hệ thống đang không hoạt động. John hỏi tôi: "Tại sao hôm nay hệ thống không hoạt động, Bob?" Tôi trả lời: "Tôi không biết". Và tôi ngồi xuống để debug nó. Tôi vẫn không nhờ gì về bản demo ngày thứ 2, nhưng với ngôn ngữ cơ thể thì mọi người đều biết rằng có điều gì đó không ổn. Sau đó, John đến và nói nhỏ với tôi: "Điều gì sẽ xảy ra nếu Stenberg quyết định đến thăm?" và bỏ đi trong sự chán ghét.

Stenberg là phó giám đốc phụ trách mảng tự động hóa. Bây giờ gọi là CIO (Giám đốc thông tin - Chief Information Officer). Câu hỏi không có ý nghĩa gì với tôi cả. "Thì sao chứ?" Tôi nghĩ. "Hệ thống chưa đưa vào sử dụng, có vấn đề gì to tát đâu?"

Tôi nhận bức thư cảnh cáo đầu tiên ngay ngày hôm đó. Yêu cầu tôi phải thay đổi thái độ làm việc ngay lập tức hoặc "thôi việc sớm". Tôi thức sự hốt hoảng!

Tôi dành thời gian xem xét lại hành động của mình và bắt đầu nhận ra những gì mình đã làm sai. Tôi nói chuyện với John và Ralph về điều đó. Tôi quyết tâm thay đổi bản thân và công việc của mình.

Và tôi đã làm được! Tôi không đi làm muộn nữa. Tôi bắt đầu chú ý đến chính sách nội bộ. Tôi bắt đầu hiểu tại sao John lại lo lắng về Stenberg. TÔi nhận ra tình huống tồi tệ mà tôi đã đưa anh ta vào khi hệ thống không hoạt động vào thứ Hai.

Nhưng đã quá trễ. Mọi thứ đã an bài. Tôi nhận được thư cảnh cáo thứ 2 một tháng sau đó cho một lỗi nhỏ tôi mắc phải. Thời điểm đó, tôi lẽ ra phải nhận ra rằng những lá thư chỉ là vấn đề hình thức và quyết định chấm dứt hợp đồng với tôi đã được đưa ra. Nhưng tôi vấn quyết tâm giải cứu tình hình. Vì vậy, tôi đã làm việc chăm chỉ hơn nữa.

Tôi bị cho nghỉ việc vài tuần sau đó.

Ngày hôm đó, tôi trở về nhà nói với người vợ 22 tuổi đang mang thai của mình rằng tôi đã bị sa thải. Đó là trải nghiệm tôi không bao giờ muốn lặp lại.

## Lập trình viên với lập trình viên

Các lập trình viên thường gặp khó khăn khi làm việc cùng với nhau. Điều này dẫn đến một số vấn đề thực sự tệ.

### Cá nhân sở hữu code

Một trong những dấu hiệu tồi tệ nhất của một team rối loạn là khi mỗi lập trình viên xây dựng một bức tường xung quanh code của mình và từ chối để các lập trình viên khác động vào nó. Tôi đã gặp những team nơi mà các lập trình viên thậm chí còn không cho xem mã của nhau. Đây là công thức dẫn đến thảm họa.

Trong một lần tư vấn cho một công ty chế tạo máy in cao cấp. Những chiếc máy đó có nhiều thành phần khác nhau như là bộ nạp, máy in, xếp chồng, kim bấm, máy cắt .v.v. Những thiết bị này có giá trị thị trường khác nhau. Bộ nạp giấy quan trọng hơn bộ xếp giấy và không có gì quan trọng hơn máy in.

Mỗi lập trình viên sẽ làm việc trên thiết bị của mình. Một người sẽ viết code cho bộ nạp, một người khác sẽ viết code cho kim bấm. Mỗi người trong số họ giữ công nghệ của riêng mình và ngăn không có bất kỳ ai khác chạm vào code của họ. Mức độ quan trọng của thiết bị gây nên những ảnh hưởng trực tiếp đến lập trình viên. Lập trình viên làm việc với máy in là không thể thay thế.

Đây là một thảm họa công nghê. Với tư cách là một nhà tư vấn, tôi có thể thấy có một sự trùng lặp lớn trong code và giao diện giữa các mô đun hoàn toàn bị lệch. Nhưng tôi không có lý lẽ nào để thuyết phục các lập trình viên (hoặc doanh nghiệp) thay đổi cách làm của họ. Rốt cuộc, đánh giá lương của họ gắn liền với tầm quan trọng của các thiết bị mà họ đang nắm giữ.

### Sở hữu tập thể

Tốt hơn hết là bạn nên phá bỏ mọi bức tường về quyền sở hữu code và để toàn bộ team sở hữu tất cả code. Tôi thích các team trong đó bất kỳ thành viên nào cũng có thể kiểm tra bất kỳ mô-đun nào và thực hiện bất kỳ thay đổi nào mà họ cho là phù hợp. Tôi muốn _team_ sở hữu code, không phải cá nhân.

Lập trình viên chuyên nghiệp không ngăn cản người khác làm việc với code của mình. Họ không dựng những bức tường về quyền sở hữu xung quanh code. Thay vào đó, họ làm việc với nhau về trên toàn hệ thống nhiều nhất có thể. Họ học hỏi lẫn nhau bằng cách làm việc với nhau trên các thành phần khác nhau của hệ thống.

### Ghép đôi (Pair-programing)

Nhiều lập trình viên không thích ý tưởng lập trình đôi (pair-programming). Tôi lại thấy khá kỳ lạ vì hầu hết các lập trình viên sẽ ghép đôi trong những trường hợp khẩn cấp. Tại sao? Bởi vì nó rõ ràng là cách hiệu quả nhất để giải quyết vấn đề. Nó sử dụng câu ngạn ngữ cũ: Hai cái đầu thì tốt hơn một cái. Nhưng nếu ghép đôi là cách hiệu quả nhất để giải quyết vấn đề trong trường hợp khẩn cấp, thì tại sao nó không phải là cách hiệu quả nhất để giải quyết vấn đề lúc bình thường?

Tôi sẽ không trích dẫn các nghiên cứu cho bạn, mặc dù có một số nghiên cứ có thể đưa ra làm trích dẫn. Tôi sẽ không kể cho bạn nghe bất kỳ giai thoại nào, dù cho tôi có thể kể ra một số. Tôi thậm chí sẽ không nói cho bạn biết bạn nên ghép đôi bao nhiêu. Tất cả những gì tôi sẽ nói với bạn là _các chuyên gia sẽ ghép đôi_. Tại sao ư? Bởi vì chí ít với một số vấn đề, đó là cách hiệu quả nhất để giải quyết chúng. Nhưng đó không phải là lý do duy nhất.

Các chuyên gia ghép đôi bởi vì đó là cách tốt nhất để chia sẻ kiến thức với nhau. Các chuyên gia không tạo ra những kho kiến thức. Thay vào đó, họ học những phần khác nhau của hệ thống và hoạt động kinh doanh và sau đó ghép lại với nhau. Họ nhận ra rằng mặc dù mọi cả thành viên trong team có vị trí khác nhau, nhưng họ có thể thay đổi sang vị trí khác nếu cần thiết.

Các chuyên gia ghép đôi bởi vì đó là cách tốt nhất để kiểm duyệt code. Không có hệ thống nào chứa code chưa được kiểm duyệt bởi các lập trình viên khác. Có rất nhiều cách để thực hiện kiểm duyệt code; hầu hết chúng đều kém hiệu quả kinh khủng. Cách hiệu quả nhất để kiểm duyệt mã là cùng nhau viết ra nó.

## Cerebellums

Tôi đang trên chuyến tàu đến Chicago vào một buổi sáng năm 2000, giữa thời kỳ đỉnh cao của bong bóng dot com. Khi tôi ra khỏi tàu, bước xuống sân ga, tôi bị tấn công bởi một bảng quảng cáo lớn treo trên cửa thoát hiểm. Tấm biển thông báo đợt tuyển dụng lập trình viên của một công ty phần mềm nổi tiếng. Trên đó viết: "Giao lưu tiểu não với những người suất sắc nhất (Come rub cerebellums with the best)"

Tôi ngay lập tức bị ấn tưởng bởi một biển hiểu có cấp độ ngờ nghệch đến vậy. Những người làm quảng cáo kém cỏi này đang cố gắng thu hút một nhóm lập trình viên có kỹ thuật cao, thông minh và hiểu biết. Đây là những kiểu người đặc biệt không bị ngốc. Các nhà quảng cáo đang cố gắng gợi lên hình ảnh chia sẻ kiến thức với những người thông minh khác. Không may là, họ đề cập một phần của não bộ, tiểu não, nơi có chức năng kiểm soát cơ năng, không phải trí thông minh. Vì vậy, chính những người mà họ đang cố gắng thu hút đã chế nhạo lỗi ngớ ngẩn đó.

Nhưng tôi bị thu hút với tấm biển đó bởi một thứ khác. Nó làm tôi liên tưởng đến một nhóm người đang cố gắng giao lưu tiểu não với nhau. Vì tiểu não nằm ở phía sau của bộ nào, nên cách tốt nhất để giao lưu chúng là quay lưng lại với nhau. Tôi tưởng tượng đến một team của các lập trình viên trong một căn phòng nhỏ, mỗi người ngồi vào một góc quay lưng vào nhau, nhìn chằm chằm vào màn hình trong khi đeo tai nghe. Đó là cách bạn giao lưu tiểu não. Đó không phải là một team.

Các chuyên gia làm việc _cùng nhau_. Các bạn không thể làm việc cùng nhau khi ngồi trong góc với tai nghe. Vì vậy, tôi muốn các bạn ngồi xung quanh những dãy bàn và _đối diện_ với nhau. Tôi muốn các bạn có thể cảm nhận được nỗi sợ của nhau. Tôi muốn các bạn có thể nghe được những lời lẩm bẩm bực bội của ai đó. Tôi muốn những giao tiếp tình cờ, bằng cả lời nói và ngôn ngữ cơ thể. Tôi muốn các bạn giao tiếp như một khối thống nhất.

Có thể bạn tin rằng bạn làm việc tốt hơn khi làm một mình. Điều đó có thể đúng, nhưng không có nghĩa là cả team làm việc tốt hơn khi bạn làm một mình. Và, trên thực tế, có rất ít khả năng bạn làm việc tốt hơn khi làm một mình.

Có những lúc làm việc một mình là hợp lý. Có những lúc bạn cần xem xét một vấn đề một cách sâu và rộng hơn. Có những lúc công việc quá nhỏ nhặt để một người nữa làm cùng bạn, rất lãng phí thời gian. Nhưng, nói chung, tốt hơn hết là cộng tác chặt chẽ với người khác và kết hợp với họ trong phần lớn thời gian.
