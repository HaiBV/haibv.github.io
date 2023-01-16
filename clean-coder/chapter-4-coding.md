---
layout: default
---

# Chương 4 Coding

Ở cuốn sách trước của mình, tôi đã đã viết rất nhiều về cấu trúc và bản chất của _Clean Code_. Chương này sẽ thảo luận về _hành động_ coding và bối cảnh xung quanh hành động đó.

Khi tôi 18 tuổi, tôi có thể đánh máy khá tốt, nhưng tôi vẫn phải nhìn xuống bàn phím, tôi không thể gõ mù được. Vậy nên vào một buổi tối, tôi dành vài giờ đồng hồ bên chiếc IBM 029, gõ lại một chương trình tôi đã từng viết mà không nhìn xuống bàn phím. Tôi kiểm tra từng thẻ sau khi gõ xong và loại bỏ những thẻ bị gõ sai.

Ban đầu tôi mắc khá nhiều lỗi. Đến cuối buổi tối hôm đó, tôi đã có thể đánh máy lại toàn bộ, gần như hoàn hảo. Tôi nhận ra, trong suốt đêm đó, điều cần thiết cho việc đánh máy mù là sự tự tin. Các ngón tay tôi biết vị trí của các phím, tôi chỉ cần tự tin rằng mình không mắc lỗi. Một trong những điều giúp tôi tự tin đó là khả năng cảm nhận được khi nào mình mắc lỗi. Đến cuối buổi tối đó, nếu tôi mắc lỗi, tôi sẽ biết điều đó gần như ngay lập tức và chỉ cần rút thẻ ra mà không cần kiểm tra.

Có thể cảm nhận được lỗi thực sự quan trọng. Không chỉ trong việc đánh máy, mà còn trong mọi thứ. Có cảm-giác-lỗi (error-sense) có nghĩa là bạn nhanh chóng nhận được phản hồi và học hỏi từ lỗi của mình nhanh hơn. Tôi đã nghiên cứu và nắm vững một số quy luật từ tối hôm đó. Tôi nhận thấy rằng trong mỗi trường hợp, chìa khóa để thành thạo là sự tự tin và cảm-giác-lỗi.

Chương này mô tả bộ quy tắc và nguyên tắc viết code của riêng tôi. Những quy tắc và nguyên tắc này không phải về code của tôi; mà là về hành vi, tâm trạng và thái độ của tôi trong khi viết code. Chúng mô tả bối cảnh tinh thần, đạo đức và cảm xúc của riêng tôi khi viết code. Đây là nguồn gốc của sự tự tin và cảm-giác-lỗi của tôi.

Bạn có thể sẽ không đồng ý với tất cả những gì tôi nói dưới đây. Xét cho cùng, đây là công cụ mang đậm chất cá nhân. Trên thực tế, bạn có thể cực lực phản đối với một số quy tắc và nguyên tắc của tôi. Không sao cả - chúng không nhằm mục đích trở thành sự thật tuyệt đối cho bất kỳ ai khác ngoài tôi. Với tôi, chúng là một cách tiếp cận để trở thành một lập trình viên chuyên nghiệp.

Có lẽ, bằng cách nghiên cứu và suy ngẫm về quy trình lập trình cá nhân của tôi, bạn có thể học được điều gì đó từ tôi.

## Sự chuẩn bị sẵn sàng

Coding là một hoạt động trí tuệ đầy thử thách và mệt mỏi. Nó đòi hỏi một mức độ tập trung cao độ mà ít ngành nào yêu cầu. Lý do là vì việc viết code đòi hỏi bạn phải kết hợp nhiều yếu tố cạnh tranh nhau trong cùng một lúc.

1. Đầu tiên, code của bạn phải hoạt động. Bạn phải hiểu được vấn đề mà bạn đang giải quyết và hiểu cách giải quyết nó. Bạn phải đảm bảo rằng code bạn viết ra là đại diện trung thực cho giải pháp đó. Bạn phải quản lý mọi chi tiết của giải pháp đó trong khi vẫn nhất quán trong ngôn ngữ, nền tảng, kiến trúc và tất cả các điểm chung của hệ thống hiện tại.

2. Code của bạn phải giải quyết được vấn đề khách hàng đặt ra cho bạn. Thông thường, các yêu cầu của khách hàng không thực sự giải quyết được vấn đề của họ. Bạn cần xem xét điều này và thương lượng với khách hàng để đảm bảo nhu cầu thực sự của họ được đáp ứng.

3. Code của bạn phải phù hợp với hệ thống hiện có. Nó không được làm hệ thống khó phát triển hơn, dễ đổ vỡ hơn và mờ hồ hơn. Các phụ thuộc phải được quản lý tốt. Tóm lại, code của bạn cần phải tuân theo các nguyên tắc kỹ thuật vững chắc.

4. Code của bạn phải dễ đọc với những lập trình viên khác. Không chỉ là viết những ghi chú hay. Thay vào đó, nó đòi hỏi bạn phải viết code theo cách mà chính nó sẽ tiết lộ ý định của bạn. Điều này là khó thực hiện. Thật vậy, đây có thể là điều khó khăn nhất mà một lập trình viên có thể thành thạo.

Rất khó để đảm bảo được tất cả yếu tố trên. Rất khó để duy trì sự tập trung cần thiết trong thời gian dài. Thêm vào đó là những vấn đề và phiền nhiễu khi làm việc trong một nhóm, trong một tổ chức, và những mối quan tâm của cuộc sống hàng ngày. Điều mấu chốt là khả năng bị mất tập trung rất cao.

Khi bạn không thể hoàn toàn tập trung cao độ, code bạn viết sẽ bị sai. Sẽ có lỗi xảy ra. Cấu trúc không chính xác. Nó sẽ mơ hồ và phức tạp. Và sẽ không giải quyết được các vấn đề thực sự của khách hàng. Tóm lại, nó sẽ phải làm lại hoặc hoàn thành lại. Làm việc mất tập trung sẽ gây nên lãng phí.

Nếu bạn mệt mỏi hoặc mất tập trung, _đừng code_. Bạn sẽ chỉ làm lại những gì bạn đã làm. Thay vào đó, hãy tìm cách loại bỏ những phiền nhiễu và ổn định tâm trí.

### Code lúc 3h sáng

Những dòng code tệ nhất mà tôi từng viết là vào lúc 3h sáng. Đó là năm 1988, khi tôi đang làm việc cho một công ty khởi nghiệp trong ngành viễn thông có tên Clear Communications. Chúng tôi đã dành rất nhiều thời gian để xây dựng công ty. Chúng tôi, tất nhiên, đều mơ trở nên giàu có.

Vào một buổi tối rất muộn - hay đúng hơn là sáng sớm, để giải quyết vấn đề về thời gian - tôi viết một đoạn code gửi một tin nhắn đến chính nó thông qua hệ thống điều phối sự kiện (chúng tôi gọi là "gửi thư"). Đây là một giải pháp _sai lầm_, nhưng vào lúc 3h sáng, nó trông khá bảnh. Thực tế là, sau 18h ngồi viết code (chưa kể 60-70 giờ trong tuần), đó là _tất cả_ những gì tôi có thể nghĩ đến.

Tôi nhớ rằng mình đã cảm thấy tự hào về bản thân ra sao sau khi làm việc nhiều giờ. Tôi nhớ cái cảm giác _tận tâm_ lúc đó. Tôi nhớ mình đã nghĩ làm việc đến 3h sáng là việc các chuyên gia nghiêm túc nên làm. Thật ngây thơ làm sao!

Đoạn code đó quay lại "cắn trả" tôi hết lần này đến lần khác. Cấu trúc được thiết kế sai lầm khiến những người sử dụng nó phải liên tục khắc phục. Nó gây ra tất cả các loại lỗi thời gian và vòng lặp phản hồi kỳ lạ. Chúng ta sẽ đi vào vòng lặp vô hạn khi một tin nhắn khiến một tin nhắn khác được gửi, sau đó là vô hạn các tin nhắn khác. Chúng tôi không bao giờ có thời gian để viết lại "cục nhọt" này (vì chúng tôi nghĩ vậy) nhưng chúng tôi luôn có thời gian để thêm một "cục nhọt" khác hoặc bản vá để khắc phục nó. Chúng ngày càng lớn dần, xung quanh đoạn code lúc 3h sáng đó ngày càng nhiều thứ kèm theo và tác dụng phụ. Nhiều năm sau, nó đã trở thành trò đùa của cả team. Bất cứ khi nào tôi mệt mỏi hoặc thất vọng, họ sẽ nói: "Coi chừng! Bob sắp gửi thư cho chính mình".

Bài học của câu chuyện trên là: Đừng viết code khi bạn mệt mỏi. Tận tâm và chuyên nghiệp thể hiện ở tính kỷ luật hơn là số giờ làm việc. Đảm bảo giấc ngủ, sức khỏe và lối sống của bạn được điều chỉnh phù hợp để bạn có thể thực hiện _tốt_ 8 tiếng làm việc mỗi ngày.

## Code khi đang lo nghĩ

Bạn đã bao giờ tranh cãi nảy lửa với vợ/chồng hoặc bạn bè, và sau đó cố gắng viết code? Bạn có nhận thấy rằng đang có một suy nghĩ ngầm trong tâm trí bạn đang cố gắng giải quyết, hoặc ít nhất là nghĩ lại cuộc tranh cãi đó? Đôi khi bạn cảm thấy căng thẳng bởi suy nghĩ ngầm đó vang lên trong đầu hoặc quặn lên trong bụng bạn. Nó có thể khiến bạn cảm thấy lo lắng, giống như khi bạn uống quá nhiều cà phê hoặc coca ăn kiêng. Điều đó gây ra sự xao nhãng.

Khi tôi lo nghĩ về cuộc tranh cãi với vợ, cơn khủng hoảng khách hàng hoặc con cái ốm đau, tôi không thể duy trì sự tập trung. Sự tập trung của tôi bị dao động. Tôi thấy mình dán mắt vào màn hình và ngón tay trên bàn phím, không làm gì cả. Câm lặng. Tê liệt. Tâm trí tôi lúc đó đang giải quyết vấn đề cách đó cả triệu dặm thay vì thực sự giải quyết vấn đề viết code trước mặt mình.

Đôi khi tôi buộc bản thân phải _suy nghĩ_ về code. Tôi ép bản thân viết được một hai dòng. Tôi tự thúc đẩy mình vượt qua một hai kiểm thử. Nhưng tôi không thể tiếp tục. Hiển nhiên tôi lại thấy thấy mình rơi vào trạng thái vô cảm, sững sờ, không nhìn thấy gì qua đôi mắt đang mở của mình, trong nội tâm trào lên nỗi lo lắng.

Tôi học được rằng đó không phải thời điểm thích hợp để viết code. Bất kỳ những gì tôi viết đều trở thành giấy lộn. Vì vậy, thay vì viết code, tôi cần giải quyết nỗi lo trước.

Tất nhiên, có rất nhiều mối lo không đơn giản để có thể giải quyết được trong một hai giờ. Hơn nữa, các nhà tuyển dụng của chúng ta khó có khả năng chấp nhận nhân viên không làm việc trong thời gian dài và dành thời gian giải quyết những vấn đề cá nhân. Bí quyết là tìm hiểu cách loại bỏ những suy nghĩ ngầm hoặc ít nhất là giảm mức độ ưu tiên của chúng để không bị phân tâm liên tục.

Tôi giải quyết việc đó bằng cách phân chia thời gian của mình. Thay vì ép bản phân viết code trong khi lo nghĩ đeo bám, tôi sẽ dành ra một khoảng thời gian hợp lý, khoảng một giờ, để giải quyết vấn đề gây ra nỗi lo đó. Nếu con tôi bị ốm, tôi sẽ gọi điện về nhà và kiểm tra. Nếu tôi cãi nhau với vợ, tôi sẽ gọi cho cô ấy và nói rõ mọi vấn đề. Nếu tôi gặp vấn đề về tiền bạc, tôi sẽ dành thời gian suy nghĩ về cách giải quyết các vấn đề tài chính. Tôi biết mình không có khả năng giải quyết dứt điểm vấn đề trong khoảng 1 giờ đó, nhưng rất có thể sẽ làm tôi giảm bớt lo lắng và dập tắt những ý nghĩ ngầm trong đầu.

Thời gian lý tưởng nhất dành cho các vấn đề cá nhân là ngoài giờ làm việc. Sẽ thật đang tiếc nếu dành một giờ tại văn phòng để xử lý việc cá nhân. Lập trình viên chuyên nghiệp phân bổ thời gian ngoài giờ của họ để đảm bảo thời gian ở văn phòng hiệu quả nhất có thể. Điều đó có nghĩa là bạn nên dành thời gian ngoài giờ để để giải quyết những lo lắng cá nhân của mình để chúng không theo bạn lên văn phòng.

Mặt khác, nếu bạn đang ở văn phòng nhưng vẫn có những ý nghĩ ngầm làm ảnh hưởng đến năng suất của bạn, thì tốt hơn bạn nên dành một giờ để làm yên chúng hơn là ép buộc bản thân viết những dòng code mà về sau bạn phải vứt bỏ (hoặc tệ hơn, là sống với chúng).

## "Dòng chảy" (Flow)

Đã có rất nhiều bài viết nói về trạng thái siêu năng suất với tên "dòng chảy (flow)". Một số lập trình viên gọi nó là "the Zone". Dù được gọi là gì, bạn có thể sẽ cảm thấy quen thuộc. Đó là trạng thái tập trung ý thức cao độ, tầm-nhìn-đường-hầm mà các lập trình viên có thể đạt được khi họ viết code. Ở trạng thái này, họ thấy _năng suất_. Ở trạng thái này, họ cảm thấy _không thể sai lầm_. Và vì vậy, họ mong muốn đạt được trạng thái đó, và thường đo lường giá trị bản thân bằng khoảng thời gian họ có thể đạt được trạng thái đó.

Dưới đây là một gợi ý nhỏ từ một người đã từng ở đó và quay lại: "Tránh xa the Zone". Trạng thái ý thức này không thực sự siêu năng suất và chắc chắn cũng có thể mắc sai lầm. Đó thực sự chỉ là một trạng thái thiền định nhẹ nhàng, trong đó một số năng lực lý trí nhất định bị giảm bớt để tạo ra cảm giác về tốc độ.

Để tôi mô tả cho bạn rõ hơn. Bạn _sẽ_ viết nhiều code hơn trong the Zone. Nếu bạn đang luyện tập TDD, bạn sẽ thực hiện vòng lặp đỏ/xanh/tái cấu trúc nhanh hơn. Và bạn sẽ _cảm thấy_ hưng phần nhẹ hoặc cảm giác được chinh phục. Vấn đề là bạn sẽ đánh mất cái nhìn toàn cảnh khi ở trong the Zone, vì vậy bạn có thể sẽ đưa ra những quyết định mà sau này bạn sẽ phải quay lại và đảo ngược chúng. Code được viết trong the Zone có thể nhiều hơn, nhưng bạn sẽ quay lại thăm nó nhiều hơn.

Giờ đây, khi tôi cảm thấy mình đang rơi vào the Zone, tôi sẽ đi bộ vài phút. Tôi giải tỏa đầu óc bằng cách trả lời một vài email hoặc xem một số dòng tweet. Nếu gần đến trưa, tôi sẽ nghỉ ăn trưa. Nếu tôi đang làm việc trong một đội/nhóm, tôi sẽ tìm một người để ghép cặp.

Một trong những lợi ích lớn của lập trình theo cặp là hầu như cả 2 không thể rơi vào trong the Zone. The Zone là một trạng thái đơn độc, trong khi việc ghép nối đòi hỏi giao tiếp liên tục và cường độ cao. Thức tế là, một trong những phàn nàn mà tôi thường nghe về việc ghép nối là nó ngăn chặn sự xuất hiện của the Zone. Tốt! The Zone _không phải_ là nơi bạn nên rơi vào.

Chà, điều đó không _hoàn toàn_ đúng. Có những lúc the Zone chính xác là thứ bạn muốn. Khi bạn đang _luyện tập_. Nhưng chúng ta sẽ nói về điều đó trong một chương khác.

### Âm nhạc

Khi còn làm ở Teradyne, những năm cuối thập kỷ 70, tôi có một phòng riêng. Tôi làm ở vị trí quản trị hệ thống với những chiếc PDP 11/60, và vì vậy tôi là một trong số ít lập trình viên có thiết bị đầu cuối riêng. Đó là chiếc VT100 chạy ở tốc độ 9600 baud và kết nối với chiếc PDP 11 bằng 80 feet cáp RS232 kéo từ phòng máy tính, qua trần nhà đến phòng tôi.

Tôi có một hệ thống âm thanh nổi trong phòng mình. Đó là một bàn xoay, âm ly, và loa sàn cũ. Tôi có một bộ sưu tập đĩa đáng kể, bao gồm Led Zeppelin, Pink Floyd, và ... Chà, bạn biết rồi đấy.

Tôi bật dàn âm thanh đó, sau đó viết code. Tôi tưởng nó giúp tôi tập trung. Nhưng tôi đã nhầm.

Một ngày nọ, tôi quay lại một mô-dun mà tôi chỉnh sửa trong lúc nghe đoạn mở đầu của bài _The Wall_. Các bình luận trong đoạn code đó chứa lời bài hát và các chú thích biên tập về máy bay ném bom bổ nhào và những đứa trẻ đang khóc.

Điều đó thực sự là một cú sốc với tôi. Là một người đọc code, thay vì biết được vấn đề mà code đang cố gắng giải quyết, tôi lại phải tìm hiểu bộ sưu tập âm nhạc của tác giả (là tôi).

Tôi nhận ra rằng tôi code không tốt lắm khi nghe nhạc. Âm nhạc không giúp tôi tập trung. Thực tế là, hành động nghe nhạc dường như tiêu tốn một số tài nguyên quan trọng trong tâm trí tôi, những thứ cần để viết code rõ ràng và có thiết kế tốt.

Có thể điều đó không đúng với bạn. Có thể âm nhạc _giúp_ bạn viết code. Tôi biết rất nhiều người viết code khi đeo tai nghe. Tôi chấp nhận rằng âm nhạc có thể giúp ích cho họ, nhưng tôi nghi ngờ rằng điều thực sự đang xảy ra là âm nhạc đang giúp họ tiến vào the Zone.

### Sự sao nhãng

Hãy hình dung bản thân bạn khi đang viết code tại máy cá nhân. Bạn phản ứng thế nào khi ai đó hỏi bạn một câu hỏi? Bạn có xua tay không? Bạn có trừng mắt không? Ngôn ngữ cơ thể của bạn có bảo họ biến đi vì bạn bận không? Tóm lại, bạn có thô lỗ không?

Hoặc, bạn có dừng việc đang làm và lịch sự giúp đỡ ai đó khi đang gặp khó khăn? Bạn có đối xử với họ như cách họ đối xử với bạn khi bạn gặp khó khăn?

Phản ứng thô lỗ thường bắt nguồn từ the Zone. Bạn có thể cảm thấy bực bội khi bị kéo ra khỏi the Zone, hoặc bị ngăn cản khi tiến vào the Zone. Dù bằng cách nào, sự thô lỗ thường bắt nguồn từ mối quan hệ của bạn với the Zone.

Tuy nhiên, đôi khi không phải lỗi của the Zone, đơn giản là bạn đang cố gắng hiểu một vấn đề phức tạp yêu cầu phải tập trung. Có một vài giải pháp cho điều này.

Ghép cặp có thể là cách hữu ích để đối phó với sự xao nhãng. Đối tác của bạn có thể nắm được trạng thái của vấn đề trong khi bạn nhận một cuộc điện thoại hoặc một câu hỏi từ đồng nghiệp. Khi bạn quay lại, họ sẽ giúp bạn nhanh chóng dựng lại trạng thái tinh thần trước khi bị xao nhãng của bạn.

TDD cũng là một trợ thủ đắc lực. Nếu bạn có một kiểm thử không đạt, kiểm thử đó sẽ cho bạn biết trạng thái hiện tại đang ở đâu. Bạn có thể quay lại sau khi bị xao nhãng và tiếp tục vượt qua kiểm thử đó.

Cuối cùng, _tất nhiên là sẽ có những xao nhãng_ khiến bạn mất tập trung và mất thời gian. Khi chúng xảy ra, hãy nhớ rằng lần sau, bạn có thể là người cần phải ngắt lời người khác. Vì vậy, thái độ của người chuyên nghiệp là sẵn sàng giúp đỡ.

## Write's Block

Đôi khi code không tự đến với chúng ta. Việc này xảy ra với tôi và những người khác. Bạn ngồi trước máy tính cá nhân nhưng không làm được gì cả.

Thường thì bạn sẽ tìm công việc khác để làm. Bạn sẽ đọc email. Bạn sẽ đọc tweets. Bạn sẽ đọc sách, xem lịch trình, hoặc đọc tài liệu. Bạn tham gia các cuộc họp. Bạn bắt đầu trò chuyện với những người khác. Bạn làm _bất cứ điều gì_ để không phải đối mặt với máy tính và cảm nhận sự bất lực khi viết code.

Nguyên nhân nào gây nên tình trạng tắc nghẽn như vậy? Chúng ta đã nói về rất nhiều nguyên nhân khác nhau. Với tôi, còn một nguyên nhân quan trọng nữa là giấc ngủ. Nếu tôi không ngủ đủ giấc, tôi đơn giản không thể viết code. Ngoài ra còn lo lắng, sợ hãi, và trầm cảm.

Kỳ lạ hơn nữa là có một giải pháp rất đơn giản. Nó hoạt động hầu như mọi lúc. Việc này rất dễ thực hiện và nó có thể cung cấp cho bạn động lực để viết được nhiều hơn.

Giải pháp là: Tìm một đối tác ghép cặp.

Cách này hoạt động tốt một cách kỳ lạ. Ngay khi bạn ngồi cạnh người khác, những vấn đề cản trở bạn sẽ biến mất. Có một sự thay đổi _sinh lý_ diễn ra khi bạn làm việc cùng với một ai đó. Tôi không biết nó là gì, nhưng chắc chắn tôi có thể cảm nhận được. Có một số loại thay đổi hóa học trong não hoặc cơ thể tôi giúp tôi vượt qua sự tắc nghẽn và giúp tôi tiếp tục làm việc.

Đây không phải là giải pháp hoàn hảo. Đôi khi sự thay đổi chỉ kéo dài 1 hoặc 2 giờ, sau đó là kiệt sức nghiêm trọng đến mức tôi phải bỏ lại đồng nghiệp của mình và tìm một khoảng trống để phục hồi. Đôi khi, ngay cả khi ngồi với ai đó, tôi cũng không thể làm gì hơn là đồng ý với những gì người đó làm. Nhưng đối với tôi, phản ứng của việc ghép đôi thường là sự phục hồi động lực bản thân.

### Đầu vào sáng tạo

Còn một số cách khác để ngăn chặn sự tắc nghẽn. Tôi đã học được cách đây rất lâu rằng đầu ra sáng tạo phụ thuộc vào đầu vào sáng tạo.

Tôi đọc rất nhiều, và tôi đọc tất cả các thể loại tài liệu. Tôi đọc về phần mềm, chính trị, sinh học, thiên văn học, vật lý, hóa học, vô thần học, và hơn thế nữa. Tuy nhiên, tôi thấy rằng điều thúc đẩy sự sáng tạo đầu ra tốt nhất chính là khoa học viễn tưởng.

Với bạn, có thể là một thể loại khác. Có thể là một cuốn tiểu thuyết bí ẩn tuyệt vời, hoặc thơ, hoặc thậm chí là tiểu thuyết lãng mạn. Tôi nghĩ vấn để thực sự là sự sáng tạo sẽ nuôi dưỡng sáng tạo. Ngoài ra còn có một yếu tố nữa là chủ nghĩa thoát ly. Những giờ tôi dành ra để thoát khỏi những vấn đề thường ngày của mình, đồng thời được kích thích tích cực bởi những ý tưởng đầy thách thức và sáng tạo, dẫn đến một áp lực gần như không thể cưỡng lại để tự mình tạo ra thứ gì đó.

Không phải tất cả các hình thức đầu vào sáng tạo nào cũng phù hợp với tôi. Xem TV thường không giúp tôi sáng tạo. Đi xem phim thì tốt hơn nhưng chỉ một chút. Nghe nhạc không giúp tôi viết code, nhưng giúp tôi tạo bản thuyết trình, bài phát biểu và video. Trong tất cả các hình thức đầu vào sáng tạo, không có gì phù hợp với tôi hơn là một vở opera hay trong một không gian cổ kính.

## Debuging (Gỡ lỗi)

Một trong những phiên gỡ lỗi tồi tệ nhất đối với sự nghiệp của tôi được thực hiện vào năm 1972. Các thiết bị đầu cuối kết nối với hệ thống kế toàn của Teamsters thường bị đóng băng 1 hoặc 2 lần mỗi ngày. Không có cách nào tự tái hiện được lỗi này. Lỗi không xảy ra trên bất kỳ thiết bị đầu cuối hoặc ứng dụng cụ thể nào. Không cần biết người dùng đã làm gì trước khi bị đóng băng. Một phút trước thiết bị đầu cuối còn hoạt động tốt, và ngay sau đó nó bị đóng băng, trong vô vọng.

Phải mất vài tuần để chuẩn đoán được vấn đề. Trong khi đó, Teamsters càng ngày càng khó chịu. Mỗi khi có sự cố, người ở thiết bị đầu cuối gặp tình trạng đóng băng sẽ phải dừng làm việc và đợi đến khi tất cả những người khác trong hệ thống hoàn thành công việc hiện tại. Sau đó họ gọi cho chúng tôi để khởi động lại hệ thống. Đó là một cơn ác mộng.

Đầu tiên, chúng tôi mất vài tuần chỉ để tập hợp dữ liệu qua việc phỏng vấn những người đã từng gặp phải tình trạng trên. Dựa theo thời điểm đóng băng, chúng tôi hỏi những việc họ đang làm, và những việc họ đã làm trước đó. Chúng tôi hỏi cả những người khác nếu họ nhận thấy bất kỳ điều gì lạ thường ở thiết bị đầu cuối _của họ_ lúc hệ thống bị đóng băng. Tất cả được thực hiện qua điện thoại vì hệ thống được đặt ở trung tâm thành phố Chicago, tại một cánh đồng ngô cách nơi chúng tôi làm việc 30 dặm về phía bắc.

Chúng tôi không có log, không bộ đếm, không trình gỡ lỗi. Quyền hạn duy nhất của chúng tôi với phần bên trong hệ thống là đèn và công tắc bật tắt trên bảng điều khiển phía trước. Chúng tôi có thể dừng máy tính, và sau đó xem xét từng từ trong bộ nhớ tại thời điểm đó. Nhưng không thể lâu hơn 5 phút vì Teamsters cần hệ thống hoạt động trở lại.

Chúng tôi dành một vài ngày tiếp theo viết một chương trình giám sát thời gian thực đơn giản có thể chạy từ ASR-33, đóng vai trò bảng điều khiển. Với nó, chúng tôi có thể "chọc ngoáy" (peak and poke) vào bộ nhớ khi hệ thống đang chạy. Chúng tôi thêm log để đưa những thông điệp lên teletype vào những thời điểm quan trọng. Chúng tôi tạo ra các bộ đếm trong bộ nhớ để đếm các sự kiện và ghi nhớ lịch sử các trạng thái có thể kiểm tra được. Và tất nhiên, tất cả những việc này phải được viết từ đầu lúc hệ thống khởi động và kiểm tra vào buổi tối khi hệ thống không được sử dụng.

Các thiết bị đầu cuối đã có thể điều khiển được gián đoạn. Các ký tự được gửi đến thiết bị đầu cuối được giữ trong các bộ đệm tròn. Mỗi khi một cổng nối tiếp gửi đi xong một ký tự, một trình ngắt sẽ kích hoạt và ký tự tiếp theo trong bộ đệm tròn sẽ sẵn sàng để gửi đi.

Chúng tôi cuối cùng cũng phát hiện ra lý do thiết bị đầu cuối bị đóng băng, đó là khi 3 biến quản lý bộ đệm tròn mất sự đồng bộ. Chúng tôi không biết tại sao nó lại xảy ra, nhưng ít nhất là có manh mối. Ở đâu đó trong 5 KSLOC của mã giám sát có lỗi xử lý sai một trong những con trỏ.

Phát hiện mới này cho phép chúng tôi có thể giải phóng thiết bị đầu cuối chủ động hơn! Chúng tôi có thể chèn các giá trị mặc định vào 3 biến đó bằng chương trình giám sát, sau đó các thiết bị đầu cuối sẽ có thể chạy lại một cách kỳ diệu. Cuối cùng, chúng tôi đã viết một bản hack nhỏ kiểm tra tất cả các bộ đếm xem khi nào chúng bị lệch và sửa lại. Lúc đầu chúng tôi kích hoạt bản hack đó bằng cách nhấn vào một công tắc đặc biệt trên bảng điều khiển, thực hiện bất kỳ khi nào Teamsters gọi báo lỗi hệ thống. Sau đó, chúng tôi chạy chương trình sửa chữa mỗi giây 1 lần.

Khoảng hơn một tháng sau, hiện tượng đóng băng hệ thống đã không còn nữa, theo những gì mà Teamster phản hồi. Đôi khi một trong các thiết bị đầu cuối của họ sẽ đóng băng trong nửa giây hoặc lâu hơn, nhưng với tốc độ cơ bản là 30 ký tự trên giây, dường như không ai nhận ra.

Nhưng tại sao bộ đếm lại bị lệch? Tôi quyết tâm tìm hiểu điều đó với nhiệt huyết của tuổi 19

Trình giám sát được viết bởi Richard, đã nghỉ để đi học đại học. Chúng tôi không ai nắm được code trong đó vì Richard chiếm hữu chúng khá kỹ. Code đó của _anh ta_, và chúng thôi không được phép biết về nó. Nhưng giờ Richard đã nghỉ, vì vậy tôi lấy ra danh sách dày hàng inch và bắt đầu xem từng trang một.

Các hàng đợi tròn trong hệ thống chỉ là cấu trúc dữ liệu FIFO, tức là hàng đợi (queue). Ứng dụng đẩy các ký tự vào một đầu của hàng đợi cho đến khi đầy. Các đầu ngắt lấy ra các ký tự ở đầu kia của hàng đợi khi máy in sẵn sàng cho chúng. Khi hàng đợi trống, máy in sẽ dừng. Lỗi của chúng tôi là khiến ứng dụng nghĩ hàng đợi đã đầy, nhưng lại khiến các đầu ngắt nghĩ hàng đợi đang trống.

Các đầu ngắt chạy trong một "luồng (thread)" khác với phần còn lại. Vì vậy các biến và bộ đếm được kiểm soát bởi cả đầu ngắt và phần còn lại phải được bảo vệ để tránh tình trạng cập nhật đồng thời. Trong trường hợp của chúng tôi, khi có một thao tác nào đó với 3 biến này, các thao tác khác với chúng phải dừng lại. Vào thời điểm tôi nghiên cứu đống code đó, tôi biết rằng tôi phải tìm kiếm một chỗ nào đó chỉnh sửa những biến đó nhưng không vô hiệu hoá bộ ngắt trước.

Ngày nay, tất nhiên, chúng ta có rất nhiều công cụ mạnh mẽ để tìm tất cả các vị trí mà biến này được sử dụng. Trong vài giây, chúng ta sẽ biết được mọi dòng code có thể đụng vào biến đó. Trong vòng vài phút, chúng tôi sẽ biết được vị trí code không vô hiệu hoá bộ ngắt. Nhưng lúc đó là năm 1972, và tôi không có bất kỳ công cụ nào như vậy. Những gì tôi có chỉ là đôi mắt của mình.

Tôi nghiền ngẫm từng trang code, tìm kiếm các biến cần tìm. Không may là, các biến đó sử dụng ở _khắp mọi nơi_. Gần như tất cả mọi trang đều chạm vào chúng theo cách này hay cách khác. Rất nhiều trong số các tham chiều đó không vô hiệu hoá bộ ngắt vì chúng là các tham chiếu chỉ đọc giá trị, nên chúng vô hại. Vấn đề là, để biết một tham chiếu có phải chỉ đọc hay không thì nhất định phải hiểu được logic của đoạn code chứa nó. Bất cứ khi nào một biến được đọc, nó có thể được cập nhật và lưu lại sau đó. Và nếu điều đó xảy ra trong khi bộ ngắt đang bật, các biến đó có thể gây lỗi.

Tôi mất nhiều ngày nghiên cứu căng thẳng, nhưng cuối cùng đã tìm ra nó. Nơi đó, giữa một rừng code, có một nơi mà một trong 3 biến được cập nhật trong khi các bộ ngắt đang bật.

Sau khi tính toán một chút. Thời gian của lỗ hổng vào khoảng 2ms. Có một tá thiết bị đầu cuối chạy ở tốc độ 30 cps, vì vậy cứ sau 3ms hoặc lâu hơn có thể đóng băng một lần. Với kích thước của trình giám sát và tốc độ CPU, chúng tôi dự kiến xử lý lỗi này trong vòng 1 hoặc 2 lần một ngày. Trúng phóc!

Tôi đã khắc phục lỗi đó, tất nhiên rồi, nhưng không bao giờ có đủ can đảm để tắt tính năng tự động kiểm tra và sửa lại bộ đếm. Cho đến hôm nay, tôi không tin là không có một lỗ hổng khác.

### Thời gian gỡ lỗi

Vì một vài lý do nào đó mà các lập trình viên phần mềm không coi thời gian gỡ lỗi là thời gian viết code. Họ coi thời gian gỡ lỗi như tiếng gọi của tự nhiên, một điều gì đó hiển nhiên phải thực hiện. Nhưng thời gian gỡ lỗi cũng tốn kém với doanh nghiệp như thời gian viết code, và do đó bất cứ điều gì làm giảm hoặc loại bỏ thời gian gỡ lỗi đều hữu ích.

Ngày nay, thời gian gỡ lỗi của tôi ít hơn nhiều so với cách đây 10 năm. Tôi chưa đo chính xác sự khác biệt, nhưng tôi tin nó ít hơn khoảng 10 lần. Sử dụng TDD giúp tôi giảm thời gian gỡ lỗi triệt để, chúng ta sẽ thảo luận về nó trong một chương khác.

Dù bạn áp dụng TDD hay một cách khác có hiệu quả tương đương, thì với tư cách một chuyên gia, bạn phải giảm thời gian gỡ lỗi của mình xuống gần đến 0 nhất có thể. Rõ ràng 0 là mục tiêu tiệm cận, nhưng dù sao thì vẫn là mục tiêu.

Các bác sỹ không muốn mở lại cơ thể bệnh nhân để sửa lại điều họ đã làm sai. Các luận sư không thích mở lại phiên tòa mà họ thất bại. Một bác sỹ và luật sư làm việc đó quá thường xuyên sẽ không được coi là chuyên nghiệp. Tương tự, tạo ra nhiều lỗi là biểu hiện của một lập trình viên phần mềm thiếu chuyên nghiệp.

## Nhịp độ của bản thân

Phát triển phần mềm là một cuộc đua Marathon, không phải đua nước rút. Bạn không thể chiến thắng cuộc đua bằng cách cố gắng chạy nhanh nhất có thể ngay từ đầu. Bạn giành chiến thắng bằng cách bảo toàn tài nguyên của mình và điều chỉnh nhịp độ bản thân. Một vận động viên marathon chăm sóc cơ thể của mình cả trước và trong cuộc đua. Các lập trình viên chuyên nghiệp cũng chăm sóc như vậy để bảo tồn năng lượng và sự sáng tạo của mình.

### Biết khi nào nên dừng lại

Không về nhà cho đến khi giải quyết được vấn đề? Tất nhiên bạn có thể, và có lẽ bạn nên như vậy! Sáng tạo và thông minh là những trạng thái thoáng qua của tâm trí. Khi bạn mệt mỏi, chúng biến mất. Nếu bạn cố gắng ép bộ não đang tê liệt sau hàng giờ hoạt động lúc đêm khuya để giải quyết vấn đề, bạn sẽ chỉ khiến bản thân mệt mỏi hơn và giảm khả năng tắm hoặc ô tô có thể giúp bạn giải quyết vấn đề.

Khi bạn bế tắc, mệt mỏi, hãy cho bản thân thư giãn một lúc. Cung cấp cho tiềm thức sáng tạo của bạn một ý niệm về vấn đề. Bạn sẽ hoàn thành được nhiều việc hơn trong thời gian ngắn hơn và ít nỗ lực hơn nếu bạn dùng khả năng của bạn thật cẩn thận. Đồng bộ bản thân và đội nhóm của bạn. Tìm hiểu các mô hình sáng tạo và thông minh của bạn, tận dụng chúng hay vì làm việc chống lại chúng.

### Trở về nhà

Một nơi mà tôi đã giải quyết được một số vấn đề là ở trên xe khi đang về nhà. Lái xe đòi hỏi rất nhiều nguồn lực trí óc không sáng tạo. Bạn phải dành đôi mắt, đôi tay và một phần trí óc của mình cho nó. Do đó, bạn phải thoát ra khỏi những rắc rối trong công việc. Có điều gì đó về sự thảnh thơi cho phép tâm trí của bạn tìm kiếm các giải pháp theo một cách khác và sáng tạo hơn.

### Tắm

Tôi giải quyết được vô số vấn đề trong phòng tắm. Có lẽ những tia nước vào buổi sáng đã đánh thức tôi và giúp tôi xem lại tất cả các giải pháp mà bộ não của tôi đã nghĩ ra khi tôi đang ngủ.

Khi bạn đang giải quyết một vấn đề, đôi khi bạn đến gần nó đến mức bạn không thể nhìn thấy tất cả các lực chọn. Bạn bỏ lỡ những giải pháp tốt hơn bởi vì phần sáng tạo trong tâm trí bạn bị đè nén bởi cường độ tập trung của bạn. Đôi khi cách tốt nhất để giải quyết vấn đề là về nhà, ăn tối, xem TV, đi ngủ và sáng hôm sau thức dậy đi tắm.

## Chậm deadline

Bạn _sẽ_ bị chậm. Nó xảy ra với tất cả chúng ta. Nó xảy đến với những người tận tâm nhất. Đôi khi chúng ta thổi phồng ước lượng của mình và cuối cùng bị chậm.

Bí quyết quản lý việc bị chậm deadline là phát hiện sớm và minh bạch. Trường hợp xấu nhất xảy ra khi bạn tiếp tục nói với mọi người, thậm chí đến cuối cùng, rằng bạn sẽ hoàn thành đúng hạn - và sau đó khiến họ thất vọng. _Đừng_ làm như vậy. Thay vào đó, thường xuyên đo lường tiến độ của bạn so với mục tiêu và đưa ra 3 hạn chót dựa trên thực tế: trường hợp lạc quan nhất, trường hợp thực tế và trường hợp xấu nhất. Hãy trung thực nhất có thể về cả 3 hạn chót đó. _Đừng mang hi vọng vào ước lượng của bạn!_ Trình bày tất cả 3 hạn chót cho nhóm của bạn và các bên liên quan. Cập nhật con số đó hằng ngày.

### Hy vọng

Điều gì sẽ xảy ra nếu những số cho thấy bạn sẽ chậm deadline? Lấy ví dụ, giả sử 10 ngày nữa sẽ có triển lãm thương mai và chúng tôi cần có sản phẩm của mình ở đó. Nhưng cũng giả sửa rằng ước tính 3 hạn chót của bạn cho tính năng đang thực hiện là 8/12/20

_Đừng hy vọng bạn có thể hoàn thành tất cả trong 10 ngày!_ Hy vọng là thứ giết chết dự án. Hy vọng phá hủy lịch trình và hủy hoại danh tiếng. Hy vọng sẽ khiến bạn gặp rắc rối sâu sắc. Nếu triển lãm thương mại diễn ra trong 10 ngày và ước tính thực tế của bạn là 12 ngày, bạn sẽ không kịp để dự triển lãm. Đảm bảo rằng đội của bạn và các bên liên quan hiểu tình hình và không bỏ cuộc cho đến khi có kế hoạch dự phòng. Đừng để bất kỳ ai khác có hy vọng.

### Vội vàng

Sẽ ra sao nếu quản lý của bạn yêu cầu bạn cố gắng hoàn thành đúng hạn? Điều gì xảy ra nếu quản lý của bạn khăng khăng rằng bạn phải làm "mọi việc cần phải làm"? _Giữ nguyên ước lượng của bạn!_ Ước tính ban đầu của bạn chính xác hơn bất kỳ thay đổi nào bạn thực hiện trong khi sếp đối đầu với bạn. Nói với sếp rằng bạn đã cân nhắc các lựa chọn (vì bạn có) và cách duy nhất để cải thiện lịch trình là giảm khối lượng công việc. _Đừng để bị sự vội vàng cám dỗ_

Buồn thay cho những lập trình viên kém cỏi, người phải chịu áp lực và đồng ý cố gắng hoàn thành đúng hạn. Họ sẽ bắt đầu sử dụng đường tắt và làm thêm giờ với hy vọng trong vô vọng sẽ tạo ra một điều kỳ diệu. Đây là một công thức cho thảm họa bởi vì nó mang lại cho bạn, nhóm của bạn và các bên liên quan hy vọng sai lầm. Nó khiến mọi người tránh đối mặt với vấn đề và trì hoãn các quyết định khó khăn khi cần thiết.

Vội vàng không phải là cách. Bạn không thể viết code nhanh hơn. Bạn không thể bắt mình giải quyết vấn đề nhanh hơn. Nếu bạn cố gắng, bạn sẽ chỉ làm chậm bản thân và tạo ra một mớ hỗn độn khiến những người khác cũng phải chậm lại.

Vì vậy, bạn cần phải tước đi hi vọng của sếp, nhóm và các bên liên quan bằng câu trả lời của bạn.

### Làm thêm giờ

Bây giờ sếp của bạn nói "Nếu bạn làm thêm 2h một ngày thì sao? Nếu bạn làm thêm vào thứ 7 thì sao? Thôi nào, phải có cách nào đó để có đủ thời gian hoàn thành tính năng đúng hạn."

Làm thêm giờ có thể có tác dụng, và đôi khi là cần thiết. Đôi khi bạn ra một ngày bằng cách làm 10 tiếng vào những ngày khác và thêm một hoặc 2 ngày thứ 7. Nhưng điều này rất rủi ro. Bạn không có khả năng hoàn thành thêm 20% công việc bằng cách làm thêm 20% giờ. Hơn nữa, làm thêm giờ chắc chắn sẽ không thành công nếu nó kéo dài hơn 2 hoặc 3 tuần.

Vì vậy, bạn không nên đồng ý làm thêm giờ trừ khi (1) bạn có đủ khả năng cá nhân để đáp ứng công việc, (2) trong khoảng thời gian ngắn, chỉ trong 2 tuần hoặc ít hơn, (3) _sếp của bạn có kế hoạch dự phòng_ trong trường hợp nỗ lực làm thêm không thành công

Tiêu chí cuối cùng đó là thứ sẽ phá vỡ thỏa thuận. Nếu sếp bạn không thể nói rõ cho bạn biết ông ấy sẽ làm gì nếu nỗ lực làm thêm giờ không thành công, thì bạn không nên đồng ý làm thêm giờ.

### Bàn giao sai

Trong tất cả các hành vi thiếu chuyên nghiệp mà một lập trình viên có thể mắc phải, có lẽ điều tồi tệ nhất là nói rằng bạn đã hoàn thành trong khi bạn chưa làm. Đôi khi đây chỉ là một lời nói dối công khai, chỉ riêng điều đó đã đủ tệ. Nhưng hơn hết là một sự lươn lẹo khi khi chúng ta cố gắng hợp lý hóa một định nghĩa mới về "đã hoàn thành”. Chúng ta tự thuyết phục mình rằng mình đã làm đủ và chuyển sang nhiệm vụ tiếp theo. Chúng ta hợp lý hóa rằng bất kỳ công việc nào còn sót lại có thể được giải quyết sau khi chúng ta có nhiều thời gian hơn.

Đây là một thói quen dễ lây. Nếu một lập trình viên làm điều đó, những người khác sẽ thấy và làm theo. Thậm chí có người sẽ mở rộng định nghĩa "đã hoàn thành" ra hơn nữa, và định nghĩa mới lại sẽ được áp dụng. Tôi đã thấy điều này bị đẩy đến mức cực đoan khủng khiếp. Một trong những khách hàng của tôi thực sự đã định nghĩa "hoàn thành" chỉ là "đăng ký". Code thậm chí không cần phải biên dịch. Rất dễ dàng được "hoàn thành" nếu không có việc gì phải làm!

Khi một đội rơi vào cái bẫy này, các quản lý thấy rằng mọi thứ đang diễn ra tốt đẹp. Tất cả các báo cáo trạng thái cho thấy mọi người đều đang đúng lịch trình. Giống nhu những người mù đang đi dã ngoại trên đường ray: Không ai nhìn thấy đoàn tàu chở hàng mang tên công việc dở dang đang đè nặng họ cho đến khi quá muộn.

### Định nghĩa "Hoàn Thành"

Bạn tránh được vấn đề trên bằng cách tạo ra một định nghĩa độc lập về "đã hoàn thành". Cách tốt nhất để làm điều này là yêu cầu BA và tester tạo ra các kiểm thử chấp nhận tự động (automated acceptance test), và bạn phải vượt qua chúng trước khi được coi là hoàn thành. Những kiểm thử này phải được viết bằng ngôn ngữ kiểm thử như FitNesse, Selenium, RobotFX, Cucumber, v.v. Các kiểm thử phải được các bên liên quan hiểu được và phải được thực hiện thường xuyên.

## Giúp đỡ

Lập trình là khó. Bạn càng trẻ, bạn càng ít tin vào điều này. Rốt cuộc, đó chỉ là một loạt các câu lệnh if và while. Nhưng khi bạn đã có kinh nghiệm, bạn bắt đầu nhận ra rằng cách bạn kết hợp các câu lệnh if và while là cực kỳ quan trọng. Không thể chỉ tập hợp chúng lại với nhau và hy vọng điều tốt nhất xảy ra. Thay vào đó, cần phải cẩn thận phân vùng hệ thống thành các đơn vị nhỏ dễ hiểu và càng ít liên quan đến nhau càng tốt — và điều đó thật khó.

Lập trình rất khó, trên thực tế, nó mức vượt qua khả năng của một người để làm tốt. Bất kể bạn có kỹ năng như thế nào, bạn chắc chắn sẽ được hưởng lợi từ những suy nghĩ và ý tưởng của một lập trình viên khác.

### Trợ giúp người khác

Do đó, các lập trình viên có trách nhiệm sẵn sàng trợ giúp lẫn nhau. Nếu bạn tự cô lập mình và từ chối yêu cầu của người khác, bạn đang vi phạm đạo đức nghề nghiệp. Công việc của bạn không quá quan trọng đến mức không thể cho dành ra một chút thời gian của mình để giúp đỡ người khác. Thật vậy, là một chuyên gia, bạn vinh dự được cung cấp sự trợ giúp đó bất cứ khi nào cần thiết.

Điều này không có nghĩa là bạn không có thời gian cho riêng mình. Tất nhiên là có. Nhưng cần phải công bằng và lịch sự về nó. Ví dụ, bạn có thể cho mọi người biết rằng trong khoảng thời gian từ 10 giờ sáng đến trưa bạn không muốn bị làm phiền, nhưng từ 1 giờ chiều đến 3 giờ chiều thì không vấn đề.

Bạn cũng nên để ý đến tình trạng của đồng đội. Nếu thấy ai đó có vẻ đang gặp khó khăn, hãy đề nghị trợ giúp. Bạn có thể sẽ khá ngạc nhiên về hiệu quả sâu sắc mà sự trợ giúp đó có thể mang lại. Không phải bạn thông minh hơn người khác quá nhiều, mà chỉ là quan điểm mới mẻ có thể là chất xúc tác sâu sắc để giải quyết vấn đề.

Khi bạn giúp ai đó, hãy ngồi xuống và viết code cùng nhau. Lên kế hoạch dành khoảng một giờ hoặc hơn. Có thể mất ít thời gian hơn, nhưng bạn không muốn tỏ ra vội vàng. Hãy cam kết với nhiệm vụ và nỗ lực hết mình. Sau đó bạn có thể sẽ học được nhiều hơn những gì bạn đã cho đi.

### Được trợ giúp

Khi ai đó đề nghị trợ giúp bạn, hãy trân trọng điều đó. Hãy chấp nhận nó một cách biết ơn và thật sự hết mình. Không bảo vệ phần sân của bạn. Đừng đẩy sự trợ giúp ra xa vì bạn đang ở dưới họng súng. Dành ra 30 phút hoặc lâu hơn. Nếu đến thời điểm đó mà điều đó không thực sự hỗ trợ bạn nhiều như kỳ vọng thì hãy lịch sự xin lỗi và kết thúc bằng lời cảm ơn. Hãy nhớ rằng, cũng như bạn có vinh dự được đề nghị trợ giúp, bạn cũng có vinh dự được chấp nhận trợ giúp.

Học cách yêu cầu trợ giúp. Khi bạn gặp khó khăn, bối rối hoặc không thể giải quyết được vấn đề nào đó, hãy nhờ ai đó giúp. Nếu bạn đang ngồi trong phòng cùng team, bạn có thể chỉ cần ngồi tại chỗ và nói, "Tôi cần một số trợ giúp." Nếu không, hãy sử dụng yammer, twitter hoặc email, hoặc điện thoại trên bàn làm việc của bạn. Gọi trợ giúp. Một lần nữa, đây là vấn đề đạo đức nghề nghiệp. Thật không chuyên nghiệp nếu vẫn bị mắc kẹt khi có thể dễ dàng tiếp cận sự trợ giúp.

Bây giờ, bạn có thể mong đợi tôi sẽ bật lên một bản hợp ca của _Kumbaya_ trong khi những chú thỏ mờ ảo nhảy lên lưng kỳ lân và tất cả chúng ta đều vui vẻ bay qua cầu vồng của hy vọng và thay đổi. Không, không hoàn toàn. Bạn thấy đấy, các lập trình viên _có xu hướng_ kiêu ngạo, hướng nội và tự thu mình. Chúng ta không tham gia vào lĩnh vực này vì chúng ta thích mọi người. Hầu hết chúng ta làm lập trình bởi vì chúng ta thích tập trung sâu vào những điều vụn vặt vô trùng, tung hứng nhiều khái niệm cùng một lúc và nói chung chứng minh cho bản thân rằng chúng ta có bộ não có kích thước của một hành tinh, trong khi không phải tương tác với những phức tạp lộn xộn của người khác.

Đúng, đó là một khuôn mẫu. Đúng, đó là sự tổng quát hóa với nhiều trường hợp ngoại lệ. Nhưng thực tế là các lập trình viên không có xu hướng trở thành cộng tác viên. Tuy nhiên, sự hợp tác là rất quan trọng để lập trình hiệu quả. Do đó, với nhiều người trong chúng ta, cộng tác không phải là một bản năng, nên cần có những kỷ luật thúc đẩy chúng ta phải cộng tác.

### Cố vấn

Tôi có cả một chương về chủ đề này ở phần sau của cuốn sách. Còn bây giờ, tôi chỉ xin tóm tắt một cách đơn giản như sau: việc đào tạo các lập trình viên ít kinh nghiệm hơn là trách nhiệm của những người có nhiều kinh nghiệm. Các khóa đào tạo không giúp quá nhiều. Sách cũng vậy. Không gì có thể đưa một lập trình viên phần mềm trẻ tuổi đạt được hiệu suất cao nhanh hơn khả năng tự thúc đẩy bản thân và sự cố vấn hiệu quả của các tiền bối. Vì vậy, một lần nữa, vấn đề đạo đức nghề nghiệp đối với các lập trình viên cấp cao là dành thời gian để dẫn dắt các lập trình viên trẻ dưới sự chỉ bảo của mình và kèm cặp họ. Đồng thời, những lập trình viên trẻ tuổi chuyên nghiệp có nhiệm vụ là phải tìm kiếm sự cố vấn hiệu quả từ các tiền bối của họ.
