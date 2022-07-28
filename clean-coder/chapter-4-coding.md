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
