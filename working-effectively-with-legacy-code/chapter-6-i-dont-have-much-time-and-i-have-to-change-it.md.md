---
layout: default
---

# Chương 6, Tôi không có nhiều thời gian và Tôi phải thay đổi nó

Hãy đối mặt với sự thật: Cuốn sách bạn đang đọc mô tả những công việc phát sinh — công việc mà bạn có thể không làm ngay bây giờ đồng thời có thể khiến bạn mất nhiều thời gian hơn khi muốn thực hiện một số thay đổi trong code của mình. Bạn có thể tự hỏi liệu có đáng để làm những việc này ngay bây giờ hay không.

Sự thật là, công việc bạn làm để phá vỡ phụ thuộc và viết kiểm thử cho các thay đổi của mình sẽ mất thêm thời gian, nhưng trong hầu hết các trường hợp, cuối cùng bạn sẽ tiết kiệm được thời gian — và rất nhiều sự thất vọng. Khi nào? Vâng, nó phụ thuộc vào dự án. Trong một số trường hợp, bạn có thể viết kiểm thử cho đoạn code mà bạn cần thay đổi và mất hai giờ cho việc đó. Thay đổi bạn thực hiện sau đó có thể chỉ mất 15 phút. Khi nhìn lại, bạn có thể nói: "Tôi vừa lãng phí hai giờ – điều đó có đáng không?" Cũng còn tùy. Bạn không biết công việc đó có thể mất bao lâu nếu bạn không viết kiểm thử. Bạn cũng không biết bạn sẽ mất bao nhiêu thời gian để gỡ lỗi nếu mắc lỗi, bạn có thể tiết kiệm được thời gian nếu có các kiểm thử tại chỗ. Tôi không chỉ nói về lượng thời gian bạn sẽ tiết kiệm được nếu các kiểm thử phát hiện ra lỗi, mà còn về lượng thời gian kiểm tra giúp bạn tiết kiệm được khi bạn đang cố gắng tìm ra lỗi. Với các kiểm thử xung quanh code, việc giải quyết các vấn đề về chức năng thường dễ dàng hơn.

Hãy giả sử trường hợp xấu nhất. Thay đổi rất đơn giản nhưng dù sao thì phần code xung quanh thay đổi đã được kiểm thử; chúng ta thực hiện tất cả các thay đổi một cách chính xác. Các kiểm thử có đáng giá không? Chúng ta không biết khi nào sẽ quay lại vùng code đó và thực hiện một thay đổi khác. Trong trường hợp tốt nhất, bạn quay lại ở lần tiếp theo và bắt đầu thu lại khoản đầu tư của mình một cách nhanh chóng. Trong trường hợp xấu nhất, phải mất nhiều năm mới có người quay lại và sửa đổi đoạn code đó. Tuy nhiên, rất có thể chúng ta sẽ đọc nó định kỳ, chỉ để tìm hiểu xem liệu có cần thực hiện thay đổi ở đó hay ở nơi nào khác nữa hay không. Sẽ dễ hiểu hơn nếu lớp nhỏ hơn và có kiểm thử đơn vị? Rất có thể là như vậy. Nhưng đây chỉ là trường hợp xấu nhất. Nó xảy ra thường xuyên như thế nào? Thông thường, thay đổi cụm trong hệ thống.

Nếu bạn thay đổi nó ngay hôm nay, rất có thể bạn sẽ sớm có một sự thay đổi ở gần đó.

Khi làm việc với các nhóm, tôi thường bắt đầu bằng việc yêu cầu họ tham gia một thử nghiệm. Đối với mỗi vòng làm việc, chúng tôi cố gắng không thực hiện thay đổi với code không được phủ bởi kiểm thử. Nếu có ai nghĩ rằng họ không thể viết được kiểm thử, họ phải triệu tập một cuộc họp nhanh để hỏi nhóm xem liệu có thể viết kiểm thử hay không. Những vòng lặp đầu thật khủng khiếp. Mọi người cảm thấy họ không thể hoàn thành được công việc họ cần. Nhưng dần dần, họ bắt đầu khám phá ra rằng họ những đoạn code đang được cải thiện tốt hơn. Những thay đổi của họ ngày càng trở nên dễ dàng hơn và trong thâm tâm họ biết rằng đây là điều cần thiết để tiến về phía trước theo cách tốt hơn. Cần có thời gian để một nhóm vượt qua khó khăn đó, nhưng nếu có một điều mà tôi có thể làm ngay lập tức cho mọi đội trên thế giới, thì đó là mang đến cho họ trải nghiệm được chia sẻ, trải nghiệm mà bạn có thể nhìn thấy trên khuôn mặt của họ: "Anh bạn, chúng ta sẽ không lặp lại chuyện đó nữa."

Nếu bạn chưa có trải nghiệm đó, bạn cần phải có.

Cuối cùng, điều này sẽ giúp công việc của bạn diễn ra nhanh hơn và điều đó quan trọng ở hầu hết mọi tổ chức phát triển. Nhưng thành thật mà nói, với tư cách là một lập trình viên, tôi rất vui vì nó khiến công việc bớt bực bội hơn nhiều.

Khi bạn vượt qua được khó khăn, cuộc sống không hoàn toàn màu hồng nhưng sẽ tốt đẹp hơn. Khi bạn biết giá trị của kiểm thử và cảm nhận được sự khác biệt, điều duy nhất bạn phải đối mặt là quyết định lạnh lùng, hám lợi về những việc cần làm trong từng trường hợp cụ thể.

> Sự việc xảy ra ở đâu đó mỗi ngày
>
> Sếp của bạn bước vào và nói: “Khách hàng đang yêu cầu tính năng này. Chúng ta có thể hoàn thành nó vào hôm nay được không?”
> "Tôi không biết."
> Bạn nhìn xung quanh. Có kiểm thử ở đó không? KHÔNG.
> Bạn hỏi, "Anh cần nó đến mức nào?"
> Bạn biết rằng bạn có thể thực hiện các thay đổi nội tuyến ở tất cả 10 chỗ và việc này có thể xong trước 5:00. Đây là trường hợp khẩn cấp phải không? Chúng ta sẽ sửa lỗi này vào ngày mai phải không?
> Hãy nhớ rằng, code là ngôi nhà của bạn và bạn phải sống với đó.

Điều khó nhất khi cố gắng quyết định có nên viết kiểm thử khi bạn đang bị áp lực hay không là thực tế bạn có thể không biết sẽ mất bao lâu để thêm tính năng này. Trong code kế thừa, thật khó để đưa ra những ước tính có ý nghĩa. Có một số kỹ thuật có thể giúp ích. Hãy xem _Chương 16, Tôi không hiểu code đủ rõ để thay đổi nó_ để biết chi tiết. Khi bạn thực sự không biết sẽ mất bao lâu để thêm một tính năng và bạn nghi ngờ rằng nó sẽ dài hơn khoảng thời gian bạn có, bạn nên hack tính năng đó theo cách nhanh nhất có thể. Sau đó, nếu có đủ thời gian, bạn có thể quay lại và thực hiện một số kiểm thử và tái cấu trúc. Phần khó thực sự là quay lại và thực hiện việc kiểm thử và tái cấu trúc đó. Trước khi vượt qua khó khăn, mọi người thường né tránh công việc đó. Nó có thể là một vấn đề về tinh thần. Hãy xem _Chương 24, Chúng ta cảm thấy choáng ngợp. Có vẻ mọi thứ sẽ không thể cải thiện được_ để có một số cách mang tính xây dựng giúp tiến về phía trước.
