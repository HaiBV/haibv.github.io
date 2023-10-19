---
layout: default
---

# Chương 5 Công cụ

Bạn cần những công cụ gì khi làm việc với code kế thừa? Bạn cần một trình soạn thảo (hoặc IDE) và hệ thống dựng của mình, nhưng bạn cũng cần một framework kiểm thử. Nếu ngôn ngữ của bạn có các công cụ tái cấu trúc, chúng cũng có thể rất hữu ích.

Trong chương này, tôi mô tả một số công cụ hiện có và vai trò của chúng khi bạn làm việc với code kế thừa.

## Công cụ tái cấu trúc tự động

Tái cấu trúc bằng tay cũng ổn, nhưng khi bạn có một công cụ thực hiện một số công việc tái cấu trúc cho mình, bạn thực sự sẽ tiết kiệm được nhiều thời gian. Vào những năm 1990, Bill Opdyke bắt đầu nghiên cứu công cụ tái cấu trúc C++ như một phần luận văn của ông về tái cấu trúc. Mặc dù nó không được thương mại hóa nhưng theo tôi biết, tác phẩm của anh đã truyền cảm hứng cho nhiều nỗ lực sau này với các ngôn ngữ khác. Một trong những điều quan trọng nhất là trình duyệt tái cấu trúc Smalltalk được phát triển bởi John Brant và Don Roberts tại Đại học Illinois. Trình duyệt tái cấu trúc Smalltalk hỗ trợ một số lượng rất lớn các phép tái cấu trúc và đã đóng vai trò là một ví dụ hiện đại về công nghệ tái cấu trúc tự động trong một thời gian dài. Kể từ đó, đã có nhiều nỗ lực nhằm bổ sung hỗ trợ tái cấu trúc cho nhiều ngôn ngữ khác nhau để được sử dụng rộng rãi hơn. Tại thời điểm viết bài này, có nhiều công cụ tái cấu trúc với Java; hầu hết đều được tích hợp vào IDE, nhưng một số thì không. Ngoài ra còn có các công cụ tái cấu trúc cho Delphi và một số công cụ tương đối mới cho C++. Các công cụ tái cấu trúc C# đang được phát triển tích cực tại thời điểm viết bài này.

Với tất cả những công cụ này, có vẻ như việc tái cấu trúc sẽ dễ dàng hơn nhiều. Đó là, trong một số môi trường. Thật không may, sự hỗ trợ tái cấu trúc trong nhiều công cụ này lại khác nhau. Hãy nhớ lại tái cấu trúc là gì. Đây là định nghĩa của Martin Fowler từ _Tái cấu trúc: Cải thiện thiết kế code hiện có_ (AddisonWesley 1999):

> **tái cấu trúc** (n.). Một sự thay đổi được thực hiện đối với cấu trúc bên trong của phần mềm để giúp dễ hiểu hơn và sửa đổi ít tốn kém hơn mà không thay đổi hành vi hiện có của nó.

Một thay đổi chỉ được tính là tái cấu trúc khi nó không thay đổi hành vi. Các công cụ tái cấu trúc sẽ xác minh rằng một thay đổi không làm thay đổi hành vi và nhiều công cụ trong số đó đã làm như vậy. Đây là quy tắc cơ bản trong trình duyệt tái cấu trúc Smalltalk, công việc của Bill Opdyke và nhiều công cụ tái cấu trúc Java thời kỳ đầu. Tuy nhiên, ở bên ngoài, một số công cụ không thực sự kiểm tra - và nếu chúng không kiểm tra, bạn có thể gây ra các lỗi tinh vi khi tái cấu trúc.

Việc lựa chọn công cụ tái cấu trúc của bạn một cách cẩn thận là điều đáng quan tâm. Tìm hiểu những gì các nhà phát triển công cụ nói về sự an toàn của công cụ của họ. Chạy kiểm thử của riêng bạn. Khi tôi gặp một công cụ tái cấu trúc mới, tôi thường tiến hành kiểm tra độ chính xác một chút. Khi bạn cố gắng trích xuất một phương thức và đặt cho nó tên của một phương thức đã tồn tại trong lớp đó, nó có gắn cờ đó là một lỗi không? Điều gì sẽ xảy ra nếu đó là tên của một phương thức trong lớp cơ sở—công cụ có phát hiện được điều đó không? Nếu không, bạn có thể ghi đè nhầm một phương thức và phá hỏng code.

Trong cuốn sách này, tôi thảo luận về cách làm việc khi có và không có công cụ hỗ trợ tái cấu trúc tự động. Trong các ví dụ, tôi đề cập đến việc liệu tôi có giả sử có sẵn một công cụ tái cấu trúc hay không.

Trong mọi trường hợp, tôi giả định rằng các hoạt động tái cấu trúc do công cụ cung cấp sẽ duy trì hành vi. Nếu bạn phát hiện ra rằng những thứ do công cụ của bạn cung cấp không duy trì hành vi, thì đừng sử dụng tính năng tái cấu trúc tự động. Hãy làm theo lời khuyên dành cho những trường hợp bạn không có công cụ tái cấu trúc — sẽ an toàn hơn.
