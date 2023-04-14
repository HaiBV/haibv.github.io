---
layout: default
---

# Chương 11, Tôi Cần Thực Hiện Thay Đổi. Tôi nên kiểm thử những phương thức nào?

Chúng ta cần thực hiện một số thay đổi và chúng ta cần viết các _kiểm thử đặc tính_ (186) để xác định các hành vi đã có. Chúng ta nên viết chúng ở đâu? Câu trả lời đơn giản nhất là viết kiểm thử cho từng phương thức mà chúng ta thay đổi. Nhưng vậy đã đủ chưa? Có thể, nếu code đơn giản và dễ hiểu, nhưng trong code kế thừa, thường thì không có gì là chắc chắn cả. Một thay đổi ở một nơi có thể ảnh hưởng đến hành vi ở một nơi khác; trừ khi chúng ta có một kiểm thử tại chỗ đó, chúng ta có thể không bao giờ biết được.

Khi tôi cần thực hiện thay đổi trong code kế thừa đặc biệt rắc rối, tôi thường dành thời gian cố gắng tìm ra nơi tôi nên viết các kiểm thử của mình. Điều này liên quan đến việc suy nghĩ về sự thay đổi mà tôi sẽ thực hiện, xem nó sẽ ảnh hưởng đến điều gì, và những thứ bị ảnh hưởng sẽ ảnh hưởng đến điều gì, v.v. Kiểu lý luận này không có gì mới; mọi người đã làm điều đó kể từ buổi bình minh của thời đại máy tính.

Các lập trình viên ngồi xuống và suy luận về các chương trình của họ vì nhiều lý do. Điều buồn cười là, chúng ta không nói nhiều về nó. Chúng ta giả định rằng mọi người đều biết cách làm và điều đó "là một phần của lập trình viên." Thật không may, điều đó không giúp ích gì nhiều cho chúng ta khi phải đối mặt với những đoạn code rắc rối khủng khiếp, vượt xa khả năng suy luận dễ dàng của chúng ta về nó. Chúng ta biết rằng chúng ta nên tái cấu trúc lại nó để làm cho nó dễ hiểu hơn, nhưng sau đó lại xảy ra vấn đề với việc kiểm thử lại. Nếu chúng ta không có các kiểm thử, làm sao chúng tôi biết rằng chúng ta đang tái cấu trúc chính xác?

Tôi đã viết các kỹ thuật trong chương này để thu hẹp khoảng cách. Thường thì chúng ta phải suy luận về các hiệu ứng theo những cách khác thường để tìm ra nơi tốt nhất để kiểm thử.
