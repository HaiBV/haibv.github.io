---
layout: default
---

# Chương 16 Tôi không hiểu code đủ rõ để thay đổi nó

Bước vào những dòng code không quen thuộc, đặc biệt là code kế thừa, có thể đáng sợ. Theo thời gian, một vài người trở nên tương đối miễn dịch với sự sợ hãi. Họ phát triển sự tự tin khi đối đầu và tiêu diệt quái vật trong code hết lần này đến lần khác, nhưng rất khó để trở nên không sợ hãi. Tất cả chúng ta thỉnh thoảng gặp phải những con quái vật không thể tiêu diệt được. Nếu bạn tập trung vào nó trước khi bắt đầu xem code, sẽ khiến nó trở nên tồi tệ hơn. Bạn không bao giờ biết liệu một sự thay đổi sẽ trở nên đơn giản hay sẽ phải vò đầu cả tuần và khiến bạn nguyền rủa hệ thống, hoàn cảnh của mình và gần như mọi thứ xung quanh bạn. Nếu chúng ta hiểu mọi thứ cần biết để thực hiện các thay đổi của mình, mọi thứ sẽ suôn sẻ hơn. Làm thế nào chúng ta có thể có được sự hiểu biết đó?

Đây là một trường hợp điển hình. Bạn tìm hiểu về một tính năng mà bạn cần thêm vào hệ thống. Bạn ngồi xuống và bắt đầu tìm hiểu code. Đôi khi bạn có thể tìm ra mọi thứ mình cần biết một cách nhanh chóng, nhưng với code kế thừa, có thể mất nhiều thời gian hơn. Trong phần lớn thời gian, bạn lập một danh sách trong đầu về những việc bạn phải làm, đánh đổi cách tiếp cận này với cách tiếp cận khác. Đến một thời điểm nào đó, bạn cảm thấy mình có tiến độ và cảm thấy đủ tự tin để bắt đầu. Trong những trường hợp khác, bạn có thể bắt đầu chóng mặt vì tất cả những thứ mà bạn đang cố gắng tiếp thu. Việc đọc code của bạn dường như không giúp ích gì và bạn bắt đầu làm việc chỉ với những gì bạn biết, và hy vọng điều tốt nhất.

Có nhiều cách khác nhau để có được sự hiểu biết, nhưng rất nhiều người không sử dụng chúng vì họ bị cuốn vào việc cố gắng hiểu code theo cách tức thì nhất mà họ có thể. Cuối cùng, việc dành thời gian để cố gắng hiểu một thứ khó hiểu có vẻ không hiệu quả. Nếu chúng ta có thể hiểu rất nhanh, chúng ta thực sự có thể bắt đầu kiếm được tiền. Điều đó nghe có vẻ ngớ ngẩn? Tôi cũng vậy, nhưng mọi người thường hành động theo cách đó—và thật không may vì chúng ta có thể làm một số việc đơn giản, công nghệ thấp để bắt đầu công việc trên một nền tảng vững chắc hơn.

## Ghi chú/Phác thảo

Khi việc đọc code trở nên khó hiểu, bạn nên bắt đầu vẽ tranh và ghi chú. Viết tên của thứ quan trọng cuối cùng bạn vừa nhìn thấy, và sau đó viết tên của thứ tiếp theo. Nếu bạn thấy mối quan hệ giữa chúng, hãy vẽ một đường thẳng. Những bản phác thảo này không nhất thiết phải là sơ đồ UML đầy đủ hoặc đồ thị gọi hàm sử dụng một số ký hiệu đặc biệt—mặc dù, nếu mọi thứ trở nên khó hiểu hơn, bạn có thể muốn sắp xếp suy nghĩ của mình trang trọng hơn hoặc gọn gàng hơn. Phác thảo mọi thứ thường giúp chúng ta nhìn mọi thứ theo một cách khác. Đó cũng là một cách tuyệt vời để duy trì trạng thái tinh thần của chúng ta khi đang cố gắng hiểu điều gì đó đặc biệt phức tạp.

Hình 16.1 là bản dựng lại của phác thảo mà tôi cùng với một lập trình viên khác vẽ vào ngày hôm trước khi chúng tôi tìm hiểu code. Chúng tôi đã vẽ nó ở mặt sau của một bản ghi nhớ (tên trong bản phác thảo đã được thay đổi để bảo vệ những người vô tội).

Bản phác thảo lúc đó (như trong ảnh) không dễ hiểu lắm, nhưng nó vẫn ổn với cuộc trò chuyện của chúng tôi. Chúng tôi đã học được thêm một chút và bắt đầu tiếp cận công việc của mình.

Không phải tất cả mọi người làm điều này sao? Đúng thế, có và không. Ít người sử dụng nó thường xuyên. Tôi nghi ngờ lý do thực sự là vì không có bất kỳ hướng dẫn nào cho cách này và thật cám dỗ khi nghĩ rằng mỗi khi đặt bút viết, chúng ta nên viết một đoạn code hoặc sử dụng cú pháp UML. UML cũng tốt, nhưng các đốm màu, đường kẻ và hình dạng cũng vậy,chúng giống nhau ở chỗ bất kỳ ai không có mặt ở đó khi chúng tôi vẽ chúng cũng không thể hiểu được. Độ chính xác không cần phải quá cao. Đó chỉ là một công cụ giúp cuộc trò chuyện trở nên dễ dàng hơn và giúp chúng ta ghi nhớ các khái niệm đang được thảo luận và học hỏi.

![16.1](images/16-1.png)

Điều thực sự tuyệt vời của việc phác thảo các thành phần của thiết kế khi bạn đang cố gắng hiểu hệ thống là chúng không chính thống và dễ lan tỏa. Nếu bạn thấy kỹ thuật này hữu ích, bạn không cần phải thúc đẩy nhóm của mình biến nó thành một phần trong quy trình của nhóm. Tất cả những gì bạn phải làm là: Chờ cho đến khi bạn đang làm việc với một người đang cố gắng hiểu đoạn code bất kỳ, sau đó phác thảo về những gì bạn đang xem khi cố gắng giải thích nó. Nếu đối tác của bạn cũng thực sự tham gia vào việc học phần đó của hệ thống, họ sẽ xem bản phác thảo và trao đổi thêm với bạn.

Khi bạn bắt đầu thực hiện các bản phác thảo cục bộ của một hệ thống, bạn sẽ muốn dành thời gian để tìm hiểu bức tranh toàn cảnh. Hãy xem _Chương 17, Ứng dụng của tôi không có cấu trúc_, để biết một tập hợp các kỹ thuật giúp dễ hiểu hơn và hướng tới một cơ sở code lớn.

## Danh sách đánh dấu

Phác thảo không phải là thứ duy nhất hỗ trợ việc tìm hiểu. Một kỹ thuật khác mà tôi thường sử dụng là _danh sách đánh dấu_. Nó đặc biệt hữu ích với các phương thức vô cùng dài. Ý tưởng rất đơn giản và hầu như ai cũng đã sử dụng nó lúc này hay lúc khác, nhưng thành thật mà nói, tôi nghĩ nó chưa được đánh giá đúng mức.

Cách đánh dấu một danh sách phụ thuộc vào những gì bạn muốn hiểu. Bước đầu tiên là in code mà bạn muốn làm việc. Sau đó, bạn sử dụng danh sách đánh dấu để thực hiện bất kỳ hoạt động nào dưới đây.

### Phân tách trách nhiệm

Nếu bạn muốn phân tách các trách nhiệm, sử dụng một dấu để nhóm chúng với nhau. Nếu một số thứ thuộc về nhau, hãy đặt một ký hiệu đặc biệt bên cạnh chúng để bạn có thể xác định chúng. Sử dụng nhiều màu, nếu bạn có thể.

### Hiểu cấu trúc phương thức

Nếu bạn muốn hiểu một phương thức lớn, hãy sắp xếp các khối. Thông thường việc thụt lề trong các phương thức dài có thể khiến chúng không thể đọc được. Bạn có thể sắp xếp chúng bằng cách vẽ các đường từ đầu khối đến cuối hoặc ghi chú phần cuối của khối bằng phần mở đầu của vòng lặp hoặc điều kiện bắt đầu chúng.

Cách dễ nhất để sắp xếp các khối là từ trong ra ngoài. Ví dụ: khi bạn đang làm việc với một trong các ngôn ngữ thuộc họ C, chỉ cần bắt đầu đọc từ đầu danh sách qua mỗi dấu ngoặc nhọn mở cho đến khi bạn gặp được dấu ngoặc nhọn đóng đầu tiên. Đánh dấu nó, sau đó quay lại và đánh dấu đoạn mở tương ứng. Tiếp tục đọc cho đến khi bạn đến dấu ngoặc nhọn tiếp theo và làm điều tương tự. Quay lại cho đến khi bạn thấy dấu ngoặc nhọn mở phù hợp với nó.

### Trích xuất phương thức

Nếu bạn muốn chia nhỏ một phương thức lớn, hãy khoanh vùng code bạn muốn trích xuất. Chú thích nó với số lượng khớp nối của nó (xem _Chương 22, Tôi Cần Thay đổi một Phương thức "Quái vật" và Tôi Không thể Viết Kiểm thử cho Nó_)

### Hiểu tác động của sự thay đổi

Nếu bạn muốn hiểu được tác động của các thay đổi sắp thực hiện, thay vì tạo một bản _phác thảo hiệu ứng_ (155), hãy đánh dấu các dòng code mà bạn sẽ thay đổi. Sau đó, đánh dấu các biến có thể thay đổi giá trị do sự thay đổi đó và mọi lệnh gọi phương thức có thể bị ảnh hưởng. Tiếp theo, hãy đánh dấu bên các biến và phương thức bị ảnh hưởng bởi những thứ bạn vừa đánh dấu. Làm điều này nhiều lần nếu bạn cần để xem hiệu ứng lan truyền từ thay đổi như thế nào. Khi bạn làm điều này, bạn sẽ hiểu rõ hơn về những gì bạn phải kiểm thử.

## Tái cấu trúc từ đầu

Một trong những kỹ thuật tốt nhất để học code là tái cấu trúc. Chỉ cần bắt đầu ở đâu đó, di chuyển mọi thứ qua lại và làm cho code rõ ràng hơn. Vấn đề duy nhất là, nếu bạn không có kiểm thử, đây có thể là một việc khá nguy hiểm. Làm sao bạn biết rằng mình không làm sai bất cứ điều gì khi bạn thực hiện tất cả quá trình tái cấu trúc này để hiểu code? Thực tế là bạn có thể làm việc đó theo cách mà bạn không cần quan tâm - và điều đó khá dễ thực hiện. Lấy code từ hệ thống kiểm soát phiên bản. Hãy bỏ qua việc viết kiểm thử. Trích xuất các phương thức, di chuyển các biến, tái cấu trúc nó theo bất kỳ cách nào bạn muốn để hiểu rõ hơn về nó. Sau đó chỉ cần vứt đoạn code đó đi. Điều này được gọi là _tái cấu trúc từ đầu_.

Lần đầu tiên tôi đề cập cách này với người tôi đang làm việc cùng, anh ấy nghĩ rằng điều đó thật lãng phí, nhưng chúng tôi đã học được một lượng đáng kinh ngạc về đoạn code mà chúng tôi đang tìm hiểu chỉ trong nửa giờ di chuyển mọi thứ qua lại. Cuối cùng, anh ta đã bị thuyết phục hoàn toàn.

_Tái cấu trúc từ đầu_ là cách tuyệt vời để tìm hiểu những điều cơ bản và thực sự nắm được cách thức hoạt động của một đoạn code, nhưng có một số rủi ro. Rủi ro đầu tiên là khi chúng ta mắc phải một số sai lầm nghiêm trọng khi tái cấu trúc, khiến chúng ta nghĩ rằng hệ thống đang làm điều gì đó mà thực ra không phải như vậy. Khi điều đó xảy ra, chúng ta có một cái nhìn sai lệch về hệ thống và nó có thể gây ra một số trở ngại sau này khi chúng ta bắt đầu thực sự tái cấu trúc. Rủi ro thứ hai là sự liên kết. Chúng ta có thể quá gắn bó với một cách viết code đến mức chúng ta bắt đầu nghĩ về chúng mọi lúc. Điều đó nghe có vẻ không tệ lắm, nhưng nó có thể gây ra khó khăn. Có nhiều lý do khiến chúng ta có thể không kết thúc với cùng một kết quả khi tái cấu trúc. Chúng ta có thể thấy một cách tốt hơn để cấu trúc code sau này. Code của chúng ta có thể thay đổi từ bây giờ đến lúc đó và chúng ta có thể có những hiểu biết khác nhau. Nếu chúng ta quá gắn bó với điểm cuối của quá trình _tái cấu trúc từ đầu_, chúng ta có thể sẽ bỏ lỡ những hiểu biết sâu sắc đó.

_Tái cấu trúc từ đầu_ là một cách hay để thuyết phục bản thân rằng bạn hiểu những điều quan trọng nhất về code và bản thân điều đó có thể giúp công việc trở nên dễ dàng hơn. Bạn cảm thấy tự tin một cách hợp lý rằng không có điều gì đáng sợ đằng sau mọi ngóc ngách - hoặc, nếu có, ít nhất bạn sẽ có một số thông báo trước khi gặp phải.

## Xóa code không sử dụng

Nếu code bạn đang xem khó hiểu và bạn có thể xác định một số đoạn code không được sử dụng, hãy xóa chúng đi. Nó không giúp ích bất cứ điều gì ngoài việc cản trở bạn.

Đôi khi mọi người cảm thấy rằng xóa code là lãng phí. Xét cho cùng, ai đó đã dành thời gian viết đoạn code đó - có thể nó sẽ được sử dụng trong tương lai. Chà, đó là mục đích của hệ thống kiểm soát phiên bản. Code đó sẽ có trong các phiên bản trước đó. Bạn luôn có thể tìm kiếm nếu bạn quyết định rằng bạn cần nó.
