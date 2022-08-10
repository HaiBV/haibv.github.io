---
layout: default
---

# Chương 4 Coding

Ở cuốn sách trước của mình, tôi đã đã viết rất nhiều về cấu trúc và bản chất của _Clean Code_. Chương này sẽ thảo luận về _hành động_ coding và bối cảnh xung quanh hành động đó.

Khi tôi 18 tuổi, tôi có thể đánh máy khá tốt, nhưng tôi vẫn phải nhìn xuống bàn phím, tôi không thể gõ mù được. Vậy nên vào một buổi tối, tôi dành vài giờ đồng hồ bên bàn phím của chiếc IBM 029 tập đánh chữ mà không nhìn bàn phím, khi gõ lại một chương trình tôi đã từng viết. Tôi kiểm tra từng thẻ sau khi gõ xong và loại bỏ những thẻ bị gõ sai.

Ban đầu tôi mắc khá nhiều lỗi. Vào cuối buổi tối đó, tôi có thể đánh lại tất cả với mức độ gần như hoàn hảo. Tôi nhận ra, trong suốt đêm đó, điều cần thiết cho việc đánh máy mù là sự tự tin. Các ngón tay tôi biết vị trí của các phím, tôi chỉ cần tự tin rằng mình không mắc lỗi. Một trong những làm nên sự tự tin đó là tôi có thể cảm nhận được khi nào tôi mắc lỗi. Đến cuối buổi tối, nếu tôi mắc lỗi, tôi sẽ biết điều đó gần như ngay lập tức và chỉ cần rút thẻ ra mà không cần nhìn vào nó.

Có thể cảm nhận được khi mắc lỗi thực sự quan trọng. Không chỉ trong việc đánh máy, mà còn trong mọi thứ. Có cảm-giác-lỗi (error-sense) có nghĩa là bạn nhanh chóng nhận được phản hồi và học hỏi từ lỗi của mình nhanh hơn. Tôi đã nghiên cứu và nắm vững một số quy luật từ ngày hôm đó. Tôi nhận thấy rằng trong mỗi trường hợp, chìa khóa để thành thạo là sự tự tin và cảm-giác-lỗi.

Chương này mô tả bộ quy tắc và nguyên tắc viết code của cá nhân tôi. Những quy tắc và nguyên tắc này không phải về code của tôi; mà là về hành vi, tâm trạng và thái độ của tôi trong khi viết code. Chúng mô tả bối cảnh tinh thần, đạo đức và cảm xúc của riêng tôi khi viết code. Đây là nguồn gốc của sự tự tin và cảm-giác-lỗi của tôi.

Bạn có thể sẽ không đồng ý với tất cả những gì tôi nói dưới đây. Xét cho cùng, đây là công cụ mang đậm chất cá nhân. Trên thực tế, bạn có thể cực lực phản đối với một số quy tắc và nguyên tắc của tôi. Không sao cả - chúng không nhằm mục đích trở thành sự thật tuyệt đối cho bất kỳ ai khác ngoài tôi. Với tôi, chúng là một cách tiếp cận để trở thành một lập trình viên chuyên nghiệp.

Có lẽ, bằng cách nghiên cứu và suy ngẫm về quy trình lập trình cá nhân của tôi, bạn có thể học được điều gì đó từ tôi.

## Sự chuẩn bị sẵn sàng

Coding là một hoạt động trí tuệ đầy thử thách và mệt mỏi. Nó đòi hỏi một mức độ tập trung mà ít ngành nào yêu cầu. Lý do là vì việc viết code đòi hỏi bạn phải kết hợp nhiều yếu tố có tính cạnh tranh cùng một lúc.

1. Đầu tiên, code của bạn phải hoạt động. Bạn phải hiểu được vấn đề mà bạn đang giải quyết và hiểu cách giải quyết nó. Bạn phải đảm bảo rằng code bạn viết ra là đại diện trung thực cho giải pháp đó. Bạn phải quản lý mọi chi tiết của giải pháp đó trong khi vẫn nhất quán trong ngôn ngữ, nền tảng, kiến trúc và tất cả các điểm chung của hệ thống hiện tại.

2. Code của bạn phải giải quyết được vấn đề khách hàng đặt ra cho bạn. Thông thường, các yêu cầu của khách hàng không thực sự giải quyết được vấn đề của khách hàng. Bạn cần xem xét điều này và thương lượng với khách hàng để đảm bảo nhu cầu thực sự của khách hàng được đáp ứng.

3. Code của bạn phải phù hợp với hệ thống hiện có. Nó không được làm hệ thống khó phát triển hơn, dễ đổ vỡ hơn và mờ hồ hơn. Các phụ thuộc phải được quản lý tốt. Tóm lại, code của bạn cần phải tuân theo các nguyên tắc kỹ thuật vững chắc.

4. Code của bạn phải dễ đọc với những lập trình viên khác. Không chỉ là viết những ghi chú hay. Thay vào đó, nó đòi hỏi bạn phải viết code theo cách mà nó tiết lộ ý định của bạn. Điều này là khó thực hiện. Thật vậy, đây có thể là điều khó khăn nhất mà một lập trình viên có thể thành thạo.

Rất khó để đảm bảo được tất cả yếu tố trên. Rất khó để duy trì sự tập trung cần thiết trong thời gian dài. Thêm vào đó là những vấn đề và phiền nhiễu khi làm việc trong một nhóm, trong một tổ chức, và những mối quan tâm của cuộc sống hàng ngày. Điều mấu chốt là khả năng bị mất tập trung rất cao.

Khi bạn không thể tập trung hoàn toàn, code bạn viết sẽ bị sai. Sẽ có lỗi xảy ra. Cấu trúc không chính xác. Nó sẽ mơ hồ và phức tạp. Và sẽ không giải quyết được các vấn đề thực sự của khách hàng. Tóm lại, nó sẽ phải làm lại hoặc hoàn thành lại. Làm việc mất tập trung sẽ gây nên lãng phí.

Nếu bạn mệt mỏi hoặc mất tập trung, _đừng code_. Bạn sẽ chỉ làm lại những gì bạn đã làm. Thay vào đó, hãy tìm cách loại bỏ những phiền nhiễu và ổn định tâm trí.

## Code vào lúc 3h sáng

Tôi viết những dòng code tệ nhất vào lúc 3h sáng. Lúc đó là năm 1988, và tôi đang làm việc tại một start-up viễn thông có tên Clear Communications. Chúng tôi đã dành rất nhiều thời gian để xây dựng công ty. Chúng tôi, tất nhiên, đều mơ trở nên giàu có.

Vào một buổi tối rất muộn - hay đúng hơn là sáng sớm, để giải quyết vấn đề về thời gian - tôi viết một đoạn code gửi một tin nhắn đến chính nó thông qua hệ thống điều phối sự kiện (chúng tôi gọi là "gửi thư"). Đây là một giải pháp _sai lầm_, nhưng vào lúc 3h sáng, nó trông khá bảnh. Thật vậy, sau 18h ngồi viết code (chưa kể 60-70 giờ trong tuần), đó là _tất cả_ những gì tôi có thể nghĩ đến.

Tôi nhớ rằng mình đã cảm thấy tự hào về bản thân ra sao sau khi làm việc nhiều giờ. Tôi nhớ rằng mình thật tận tâm. Tôi nhớ rằng làm việc đến 3h sáng là việc các chuyên gia nghiêm túc nên làm. Thật ngây thơ làm sao!

Đoạn code đó quay lại cắn trả tôi hết lần này đến lần khác. Cấu trúc được thiết kế sai lầm khiến những người sử dụng phải liên tục khắc phục. Nó gây ra tất cả các loại lỗi thời gian và vòng lặp kỳ lạ. Chúng ta sẽ đi vào vòng lặp vô hạn khi một message khiến một message khác được gửi, sau đó là vô hạn thư khác. Chúng tôi không bao giờ có thời gian để viết lại "cục nhọt" này (vì chúng tôi nghĩ vậy) nhưng chúng tôi luôn có thời gian để thêm một "cục nhọt" khác hoặc bản vá để khắc phục nó. Chúng ngày càng lớn dần, xung quanh đoạn code lúc 3h sáng đó ngày càng nhiều thứ kèm theo và tác dụng phụ. Nhiều năm sau, nó đã trở thành trò đùa của cả team. Bất cứ khi nào tôi mệt mỏi hoặc thất vọng, họ sẽ nói: "Coi chừng! Bob sắp gửi thư cho chính mình".

Bài học của câu chuyện trên là: Đừng viết code khi bạn mệt mỏi. Tận tâm và chuyên nghiệp thể hiện ở tính kỷ luật hơn là số giờ làm việc. Đảm bảo giấc ngủ, sức khỏe và lối sống của bạn được điều phù hợp để bạn có thể thực hiện _tốt_ 8 tiếng làm việc mỗi ngày.

## Lo nghĩ khi code

Bạn đã bao giờ tranh cãi nảy lửa với vợ/chồng hoặc bạn bè, và sau đó cố gắng viết code? Bạn có nhận thấy rằng đang có một suy nghĩ ngầm trong tâm trí bạn đang cố gắng giải quyết, hoặc ít nhất là nghĩ lại cuộc tranh cãi đó? Đôi khi bạn cảm thấy căng thẳng bởi suy nghĩ ngầm đó trong đầu hoặc quặn lên trong bụng bạn. Nó có thể khiến bạn cảm thấy lo lắng, chẳng hạn như khi bạn uống quá nhiều cà phê hoặc coca ăn kiêng. Điều đó gây mất tập trung.

Khi tôi lo nghĩ về cuộc tranh cãi với vợ, cơn khủng hoảng khách hàng hoặc con cái ốm đau, tôi không thể duy trì sự tập trung. Sự tập trung của tôi bị dao động. Tôi thấy mình dán mắt vào màn hình và ngón tay trên bàn phím, không làm gì cả. Câm lặng. Tê liệt. Giải quyết vấn đề cách đó cả triệu dặm trong tâm trí thay vì thực sự giải quyết vấn đề viết code trước mặt mình.

Đôi khi tôi buộc bản thân phải _suy nghĩ_ về code. Tôi ép bản thân viết được một hai dòng. Tôi tự thúc đẩy mình vượt qua một hai kiểm thử. Nhưng tôi không thể tiếp tục. Hiển nhiên tôi lại thấy thấy mình rơi vào trạng thái vô cảm, sững sờ, không nhìn thấy gì qua đôi mắt đang mở của mình, trong nội tâm trào lên nỗi lo lắng.

Tôi học được rằng đây không phải thời điểm thích hợp để viết code. Bất kỳ những gì tôi viết đều trở thành giấy lộn. Vì vậy, thay vì viết code, tôi cần giải quyết nỗi lo trước.

Tất nhiên, có rất nhiều mối lo không đơn giản để giải quyết được trong một hai giờ. Hơn nữa, các nhà tuyển dụng của chúng ta có khả năng không chấp nhận nhân viên không có khả năng làm việc trong thời gian dài khi họ bận giải quyết những vấn đề cá nhân của mình. Bí quyết là tìm hiểu cách loại bỏ những ý nghĩ ngầm hoặc ít nhất là giảm mức độ ưu tiên của nó để không bị phân tâm liên tục.

Tôi làm điều này bằng cách phân chia thời gian của mình. Thay vì ép bản phân viết code trong lo nghĩ đeo bám, tôi sẽ dành ra một khoảng thời gian hợp lý, khoảng một giờ, để giải quyết vấn đề tạo ra nỗi lo đó. Nếu con tôi bị ốm, tôi sẽ gọi điện về nhà và kiểm tra. Nếu tôi cãi nhau với vợ, tôi sẽ gọi cho cô ấy và nói rõ mọi vấn đề. Nếu tôi gặp vấn đề về tiền bạc, tôi sẽ dành thời gian suy nghĩ về cách giải quyết các vấn đề tài chính. Tôi biết mình không có khả năng giải quyết dứt điểm vấn đề trong khoảng 1 giờ đó, nhưng rất có thể sẽ làm tôi giảm bớt lo lắng và dập tắt những ý nghĩ ngầm trong đầu.

Thời gian lý tưởng nhất dành cho các vấn đề cá nhân là ngoài giờ làm việc. Sẽ thật đang tiếc nếu dành một giờ tại văn phòng để xử lý việc cá nhân. Lập trình viên chuyên nghiệp phân bổ thời gian ngoài giờ của họ để đảm bảo thời gian ở văn phòng hiệu quả nhất có thể. Điều đó có nghĩa là bạn nên dành thời gian ngoài giờ để để giải quyết những lo lắng cá nhân của mình để chúng không theo bạn lên văn phòng.

Mặt khác, nếu bạn đang ở văn phòng nhưng vẫn có những ý nghĩ ngầm làm ảnh hưởng đến năng suất của bạn, thì tốt hơn bạn nên dành một giờ để làm yên chúng hơn là ép buộc bản thân viết những dòng code mà về sau bạn phải vứt bỏ (hoặc tệ hơn, là sống với chúng).

## "Dòng chảy" (Flow)

Nhiều bài viết nói về trạng thái siêu năng suất với tên "dòng chảy (flow)". Một số lập trình viên gọi nó là "the Zone". Dù nó được gọi là gì, bạn có thể sẽ cảm thấy quen thuộc với nó. Đó là trạng thái tập trung ý thức cao độ, tầm-nhìn-đường-hầm mà các lập trình viên có thể đạt được khi họ viết code. Ở trạng thái này, họ thấy hiệu quả. Ở trạng thái này, họ cảm thấy không thể sai lầm. Và vì vậy, họ mong muốn đạt được trạng thái đó, và thường đo lường giá trị bản thân bằng khoảng thời gian họ có thể đạt được trạng thái đó.

Dưới đây là một gợi ý nhỏ từ một người đã từng ở đó và quay lại: "Tránh xa the Zone". Trạng thái ý thức này không thực sự siêu năng suất và chắc chắn không mắc sai lầm. Đó thực sự chỉ là một trạng thái thiền định nhẹ nhàng, trong đó một số năng lực lý trí nhất định sẽ bị suy giảm theo hướng có cảm giác về tốc độ.

Để tôi mô tả cho bạn rõ hơn. Bạn _sẽ_ viết nhiều code hơn trong the Zone. Nếu bạn đang luyện tập TDD, bạn sẽ thực hiện vòng lặp đỏ/xanh/tái cấu trúc nhanh hơn. Và bạn sẽ _cảm thấy_ hưng phần nhẹ hoặc cảm giác muốn chinh phục. Vấn đề là bạn sẽ đánh mất cái nhìn toàn cảnh khi ở trong the Zone, vì vậy bạn có thể sẽ đưa ra những quyết định mà sau này bạn sẽ phải quay lại và đảo ngược chúng. Code được viết trong the Zone có thể nhiều hơn, nhưng bạn sẽ quay lại thăm nó nhiều hơn.

Hiện tại, khi tôi cảm thấy mình đang rơi vào the Zone, tôi sẽ đi bộ vài phút. Tôi giải tỏa đầu óc bằng cách trả lời một vài email hoặc xem một số dòng tweet. Nếu gần đến trưa, tôi sẽ nghỉ ăn trưa. Nếu tôi đang làm việc trong một team, tôi sẽ tìm một người để ghép cặp.

Một trong những lợi ích lớn của lập trình theo cặp là hầu như cả 2 không thể rơi vào trong the Zone. The Zone là một trạng thái đơn độc, trong khi việc ghép nối đòi hỏi giao tiếp liên tục và cường độ cao. Thức tế là, một trong những phàn nàn mà tôi thường nghe về việc ghép nối là nó ngăn chặn sự xuất hiện của the Zone. Tốt! The Zone không phải là nơi bạn nên rơi vào.

Chà, điều đó không hoàn toàn đúng. Có những lúc the Zone chính xác là thứ bạn muốn. Khi bạn đang _luyện tập_. Nhưng chúng ta sẽ nói về điều đó trong một chương khác.

## Âm nhạc

Vào những năm ở Teradyne, tôi có một phòng riêng. Tôi làm ở vị trí quản trị hệ thống với những chiếc PDP 11/60, và vì vậy tôi là một trong số ít lập trình viên có thiết bị đầu cuối riêng. Thiết bị đầu cuối đó là VT100 chạy ở tốc độ 9600 baud và kết nối với chiếu PDP 11 bằng 80 feet cáp RS232 kéo từ phòng máy tính, qua trần nhà đến phòng tôi.

Tôi có một hệ thống âm thanh nổi trong phòng mình. Đó là một bàn xoay, âm ly, và loa sàn cũ. Tôi có một bộ sưu tập đĩa đáng kể, bao gồm Led Zeppelin, Pink Floyd, và ... Chà, bạn biết rồi đấy.

Tôi sử dụng dàn âm thanh đó và sau đó viết code. Tôi tưởng nó đã giúp tôi tập trung. Nhưng tôi đã nhầm.

Một ngày nọ, tôi quay lại một mo-dun mà tôi chỉnh sửa trong lúc nghe đoạn mở đầu của bài _The Wall_. Các bình luận trong đoạn code đó chứa lời bài hát và các chú thích biên tập về máy bay ném bom bổ nhào và những đứa trẻ đang khóc.

Điều đó thực sự gây sock cho tôi. Là một người đọc code, thay vì tìm hiều về vấn đề mà code đang cố gắng giải quyết, tôi lại tìm hiểu về bộ sưu tập âm nhạc của tác giả (là tôi).

Tôi nhận ra rằng tôi code không tốt lắm khi nghe nhạc. Âm nhạc không giúp tôi tập trung. Thực tế là, hành động nghe nhạc dường như tiêu tốn một số tài nguyên quan trọng trong tâm trí tôi, những thứ cần để viết code rõ ràng và có thiết kế tốt.

Có thể điều đó không đúng với bạn. Có thể âm nhạc giúp bạn viết code. Tôi biết rất nhiều người viết code khi đeo tai nghe. Tôi chấp nhận rằng âm nhạc có thể giúp ích cho họ, nhưng tôi nghi ngờ rằng điều thực sự đang xảy ra là âm nhạc đang giúp họ tiến vào the Zone.

## Những gián đoạn

Hãy hình dung bản thân bạn khi đang viết code tại máy cá nhân. Bạn phản ứng thế nào khi ai đó hỏi bạn một câu hỏi? Bạn có xua tay không? Bạn có trừng mắt không? Ngôn ngữ cơ thể của bạn có bảo họ biến đi vì bạn bận không? Tóm lại, bạn có thô lỗ không?

Hoặc, bạn có dừng việc đang làm và lịch sự giúp đỡ ai đó đang gặp khó khăn? Bạn có đối xử với họ như bạn sẽ đối xử với bạn nêú bạn gặp khó khăn?

Phản ứng thô lỗ thường bắt nguồn từ the Zone. Bạn có thể bực bội khi bị kéo ra khỏi the Zone, hoặc do ai đó ngăn cản bạn đi vào the Zone. Dù bằng cách nào, sự thô lỗ thường xuất phát từ mối quan hệ của bạn với the Zone.

Tuy nhiên, đôi khi lại không phải là lỗi của the Zone, chỉ đơn giản là bạn đang cố gắng hiểu một vấn đề phức tạp yêu cầu phải tập trung. Có một vài giải pháp cho điều này.

Ghép cặp có thể là cách hữu ích để đối phó với sự gián đoạn. Đối tác của bạn có thể nắm được trạng thái của vấn đề trong khi bạn nhận một cuộc điện thoại hoặc một câu hỏi từ đồng nghiệp. Khi bạn quay lại, họ sẽ nhanh chón giúp bạn xây dựng lại trạng thái tinh thần của mình trước khi bị gián đoạn.

TDD cũng là một trợ giúp. Nếu bạn có kiểm thử không đạt, kiểm thử đó sẽ giữ được trạng thái của bạn đang ở đâu. Bạn có thể quay lại sau khi bị gián đoạn và tiếp tục vượt qua kiểm thử đó.

Cuối cùng, _tất nhiên là sẽ có những gián đoạn_ khiến bạn mất tập trung và mất thời gian. Khi chúng xảy ra, hãy nhớ rằng lần sau, bạn có thể là người cần phải ngắt lời người khác. Vì vậy, thái độ của người chuyên nghiệp là sẵn sàng giúp đỡ.
