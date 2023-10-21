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

>
> ##### Kiểm thử và tái cấu trúc tự động
>
> Khi bạn có một công cụ thực hiện việc tái cấu trúc cho mình, bạn sẽ dễ dàng tin rằng mình không cần phải viết kiểm thử cho code mà bạn sắp tái cấu trúc. Trong một số trường hợp, điều này đúng. Nếu công cụ của bạn thực hiện tái cấu trúc an toàn và bạn chuyển từ tái cấu trúc tự động này sang tái cấu trúc tự động khác mà không thực hiện bất kỳ chỉnh sửa nào khác, bạn có thể cho rằng các chỉnh sửa của mình không thay đổi hành vi. Tuy nhiên, điều này không phải lúc nào cũng đúng.
>
> Đây là một ví dụ:
>
> ```java
> public class A {
>   private int alpha = 0;
>   private int getValue() {
>     alpha++;
>     return 12;
>   }
>
>   public void doSomething() {
>     int v = getValue();
>     int total = 0;
>     for (int n = 0; n < 10; n++) {
>       total += v;
>     }
>   }
> }
> ```
>
> Trong ít nhất hai công cụ tái cấu trúc Java, chúng ta có thể sử dụng tái cấu trúc để loại bỏ biến `v` khỏi `doSomething`. Sau khi tái cấu trúc, đoạn code sẽ trông như thế này:
>
> ```java
> public class A {
>   private int alpha = 0;
>   private int getValue() {
>     alpha++;
>     return 12;
>   }
>   public void doSomething() {
>     int total = 0;
>     for (int n = 0; n < 10; n++) {
>       total += getValue();
>     }
>   }
> }
> ```
>
> Bạn đã thấy vấn đề chưa? Biến đã bị xóa nhưng bây giờ giá trị của `alpha` được tăng lên 10 lần thay vì 1. Thay đổi này rõ ràng không bảo toàn hành vi.
>
> Bạn nên kiểm thử code của mình trước khi bắt đầu sử dụng tính năng tái cấu trúc tự động. Bạn có thể thực hiện một số thao tác tái cấu trúc tự động mà không cần kiểm thử, nhưng bạn phải biết công cụ này đang kiểm thử cái gì và không kiểm thử cái gì. Khi tôi bắt đầu sử dụng một công cụ mới, điều đầu tiên tôi làm là hỗ trợ nó cho việc trích xuất các phương thức thông qua các bước của nó. Nếu tôi có thể tin tưởng nó đủ tốt để sử dụng nó mà không cần kiểm thử, tôi có thể đưa code về trạng thái dễ kiểm thử hơn nhiều.

## Đối tượng giả lập

Một trong những vấn đề lớn mà chúng ta gặp phải với code kế thừa là sự phụ thuộc. Nếu chúng ta muốn tự mình thực thi một đoạn code và xem nó làm gì, chúng ta thường phải loại bỏ sự phụ thuộc vào đoạn code khác. Nhưng điều đó hiếm khi đơn giản như vậy. Nếu loại bỏ đoạn code khác, chúng ta cần có thứ gì đó thay thế để cung cấp các giá trị phù hợp khi chúng ta đang kiểm thử để có thể thực thi đoạn code đó một cách triệt để. Trong code hướng đối tượng, chúng thường được gọi là đối tượng giả lập.

Một số thư viện đối tượng giả lập được cung cấp miễn phí. Trang web www.mockobjects.com là nơi tốt để tìm tài liệu tham khảo cho hầu hết chúng.

## Kiểm thử đơn vị khai thác

Các công cụ kiểm thử có lịch sử lâu dài và đa dạng. Không một năm nào trôi qua mà tôi không gặp bốn hoặc năm nhóm mua một số công cụ kiểm thử có giấy phép đắt đỏ nhưng cuối cùng lại không đáp ứng được với mức giá của nó. Công bằng mà nói đối với các nhà cung cấp công cụ, kiểm thử là một vấn đề khó khăn và mọi người thường bị quyến rũ bởi ý tưởng rằng họ có thể kiểm thử thông qua GUI hoặc giao diện web mà không cần phải thực hiện bất kỳ điều gì đặc biệt đối với ứng dụng của mình. Nó có thể thực hiện được, nhưng nó thường tốn nhiều công sức hơn mức mà bất kỳ ai trong nhóm sẵn sàng thừa nhận. Ngoài ra, giao diện người dùng thường không phải là nơi tốt nhất để viết kiểm thử. Giao diện người dùng thường không ổn định và khác quá xa so với chức năng đang được kiểm thử. Khi các kiểm thử dựa trên giao diện người dùng thất bại, có thể khó để tìm hiểu tại sao. Bất chấp điều đó, mọi người thường chi số tiền đáng kể để cố gắng thực hiện tất cả các kiểm thử của mình bằng những loại công cụ đó.

Các công cụ kiểm thử hiệu quả nhất mà tôi từng sử dụng đều miễn phí. Cái đầu tiên là framework kiểm thử xUnit. Ban đầu được viết bằng Smalltalk bởi Kent Beck và sau đó được Kent Beck và Erich Gamma chuyển sang Java, xUnit là một thiết kế nhỏ, mạnh mẽ dành cho framework kiểm thử đơn vị. Dưới đây là các tính năng chính của nó:

• Cho phép các lập trình viên viết kiểm thử bằng ngôn ngữ mà họ đang phát triển.
• Tất cả các kiểm thử đều chạy độc lập.
• Các kiểm thử có thể được nhóm thành các nhóm để có thể chạy đi chạy lại theo yêu cầu

Framework xUnit đã được chuyển sang hầu hết các ngôn ngữ chính và khá nhiều ngôn ngữ nhỏ, kỳ lạ khác.

Điều mang tính cách mạng nhất về thiết kế của xUnit là sự đơn giản và tập trung. Nó cho phép chúng ta viết kiểm thử mà không gặp rắc rối gì. Mặc dù ban đầu nó được thiết kế để kiểm thử đơn vị, nhưng bạn có thể sử dụng nó để viết các kiểm thử lớn hơn vì xUnit thực sự không quan tâm kiểm thử lớn hay nhỏ như thế nào. Nếu kiểm thử có thể được viết bằng ngôn ngữ bạn đang sử dụng thì xUnit có thể chạy nó.

Trong cuốn sách này, hầu hết các ví dụ đều bằng Java và C++. Trong Java, JUnit là bộ khai thác xUnit được ưa thích và giống hầu hết các xUnits khác. Trong C++, tôi thường sử dụng phần khai thác kiểm thử mà tôi đã viết có tên là CppUnitLite. Nó trông hơi khác một chút và tôi cũng mô tả nó trong chương này. Nhân tiện, tôi không coi thường tác giả gốc của CppUnit bằng cách sử dụng CppUnitLite. Tôi đã là anh chàng đó từ lâu và chỉ sau khi phát hành CppUnit, tôi mới phát hiện ra rằng nó có thể nhỏ hơn một chút, dễ sử dụng hơn và dễ mang theo hơn nếu nó sử dụng một số thành ngữ C và chỉ một tập hợp con đơn giản của ngôn ngữ C++.
