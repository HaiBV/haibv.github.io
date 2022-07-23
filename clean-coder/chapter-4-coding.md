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
