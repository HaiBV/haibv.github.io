---
layout: default
---

# Chương 17 Ứng dụng của tôi không có kiến trúc

Các ứng dụng tồn tại quá lâu có xu hướng trở nên lộn xộn. Họ có thể đã bắt đầu với một kiến trúc được-cân-nhắc-kỹ-lưỡng, nhưng qua nhiều năm, dưới áp lực về tiến độ, họ có thể đi đến giai đoạn không một ai thực sự hiểu được toàn bộ cấu trúc. Người ta có thể làm việc nhiều năm trong một dự án và không biết các tính năng mới sẽ đi đến đâu; họ chỉ biết những đoạn hack đã được đặt trong hệ thống gần đây. Khi họ thêm các tính năng mới, họ sẽ chuyển đến “điểm hack” vì đó là nơi mà họ hiểu rõ nhất.

Không có biện pháp nào có thể khắc phục dễ dàng tình trạng này và mức độ khẩn cấp của mỗi tình huống rất khác nhau. Trong một số trường hợp, các lập trình viên như đụng phải một bức tường. Rất khó để thêm tính năng mới và điều đó khiến toàn bộ tổ chức rơi vào khủng hoảng. Mọi người được giao nhiệm vụ tìm hiểu xem liệu giữa thiết kế lại hoặc viết lại hệ thống thì cách nào sẽ tốt hơn. Trong các tổ chức khác, hệ thống hoạt động khập khiễng trong nhiều năm. Vâng, phải mất nhiều thời gian hơn mức cần thiết để thêm tính năng mới, nhưng đó chỉ được coi là cái giá của việc kinh doanh. Không ai biết nó có thể tốt hơn bao nhiêu hoặc mất bao nhiêu tiền vì cấu trúc kém.

Khi các nhóm không nhận thức được kiến trúc của họ, nó có xu hướng xuống cấp. Điều gì cản trở sự nhận thức này?

- Hệ thống có thể phức tạp đến mức phải mất nhiều thời gian để có được bức tranh toàn cảnh.
- Hệ thống có thể phức tạp đến mức không có bức tranh toàn cảnh.
- Nhóm đang ở trong một chế độ phản ứng gấp gáp, giải quyết hết trường hợp khẩn cấp này đến trường hợp khẩn cấp khác đến mức họ đánh mất tầm nhìn tổng thể.

Thông thường, nhiều tổ chức sử dụng vai trò kiến trúc sư hệ thống để giải quyết những vấn đề này. Họ thường được giao nhiệm vụ dựng lên bức tranh toàn cảnh và đưa ra các quyết định giúp bảo tồn nó cho cả nhóm. Cách làm này có thể hoạt động, nhưng có một cảnh báo khá rõ ràng. Kiến trúc sư hệ thống phải ở trong nhóm đó, làm việc với các thành viên hàng ngày, nếu không code sẽ rẽ sang hướng khác so với bức tranh toàn cảnh. Điều này có thể xảy ra theo hai hướng: Ai đó có thể đang làm một việc không phù hợp trong code hoặc bản thân bức tranh toàn cảnh có thể cần phải được sửa đổi. Trong một số tình huống tồi tệ nhất mà tôi gặp phải với các nhóm, kiến trúc sư hệ thống có cái nhìn hoàn toàn khác về hệ thống so với các lập trình viên. Điều này thường xảy ra khi kiến trúc sư hệ thống có các trách nhiệm khác và không thể trực tiếp làm việc với code hoặc không trao đổi với các thành viên còn lại của nhóm đủ thường xuyên để thực sự biết những gì đang diễn ra. Kết quả là, việc trao đổi thông tin bị phá vỡ trong toàn bộ tổ chức.

Có một sự thật phũ phàng là kiến trúc hệ thống quá quan trọng để giao cho một số ít người. Có một kiến trúc sư hệ thống cũng tốt, nhưng việc cốt lõi để giữ cho một kiến trúc nguyên vẹn là đảm bảo mọi người trong nhóm biết nó là gì và tất cả đều có trách nhiệm với nó. Mọi người làm việc với code nên biết kiến trúc của nó và những người khác có thể hưởng lợi từ những gì họ học được. Khi mọi người làm việc với cùng một nhóm ý tưởng, trí thông minh hệ thống tổng thể của nhóm sẽ được khuếch đại. Giả sử, nếu bạn có một nhóm gồm 20 người và chỉ có 3 người biết chi tiết về kiến trúc hệ thống, thì 3 người đó phải làm rất nhiều việc để giữ cho 17 người còn lại đi đúng hướng hoặc 17 người còn lại mắc sai lầm do không quen với bức tranh toàn cảnh.

Làm thế nào chúng ta có được bức tranh toàn cảnh về một hệ thống lớn? Có rất nhiều cách để làm điều này. Cuốn sách _Các mẫu mô hình tái cấu trúc hướng đối tượng (Object-Oriented Reengineering Patterns)_, của Serge Demeyer, Stephane Ducasse, và Oscar M. Nierstrasz (Nhà xuất bản Morgan Kaufmann, 2002), chứa một danh sách các kỹ thuật chỉ để giải quyết vấn đề này. Ở đây tôi cũng mô tả một số kỹ thuật khác mạnh mẽ không kém. Nếu bạn thực hành chúng thường xuyên trong một nhóm, chúng sẽ giúp duy trì mối quan tâm về kiến trúc trong nhóm - và đó có lẽ là điều quan trọng nhất bạn có thể làm để bảo tồn kiến trúc. Thật khó để chú ý đến điều gì đó mà bạn không nghĩ đến thường xuyên.

## Kể câu chuyện về hệ thống

Khi làm việc theo nhóm, tôi thường sử dụng một kỹ thuật mà tôi gọi là “kể câu chuyện về hệ thống”. Để làm tốt, bạn cần ít nhất hai người. Một người bắt đầu bằng cách hỏi người kia, “Cấu trúc của hệ thống là gì?” Sau đó, người kia cố gắng giải thích kiến trúc của hệ thống chỉ bằng một vài khái niệm, có thể chỉ là hai hoặc ba khái niệm. Nếu bạn là người giải thích, bạn phải giả vờ rằng người kia không biết gì về hệ thống. Chỉ trong một vài câu, bạn phải giải thích các phần của thiết kế là gì và chúng tương tác với nhau như thế nào. Sau đó, bạn nên nói rõ những gì bạn cảm thấy là thiết yếu nhất của hệ thống. Tiếp theo, bạn chọn những điều quan trọng nhất tiếp theo. Bạn tiếp tục cho đến khi trình bày mọi thứ quan trọng về thiết kế lõi của hệ thống.

Khi bạn bắt đầu làm việc này, bạn sẽ nhận thấy một cảm giác kỳ lạ. Để thực sự truyền đạt kiến trúc hệ thống một cách ngắn gọn, trước hết bạn phải đơn giản hóa chúng. Bạn có thể nói, “Cổng lấy các bộ quy tắc từ cơ sở dữ liệu đang hoạt động,” nhưng khi bạn nói vậy, một phần trong bạn có thể hét lên, “Không! Cổng lấy các bộ quy tắc từ cơ sở dữ liệu đang hoạt động, nhưng nó cũng lấy chúng từ bộ đang hoạt động hiện tại.” Khi bạn nói điều đơn giản hơn, có vẻ như bạn đang nói dối; bạn chỉ không kể toàn bộ câu chuyện. Nhưng bạn đang kể một câu chuyện đơn giản hơn mô tả một kiến trúc dễ-hiểu-hơn. Chẳng hạn, tại sao cổng phải lấy các bộ quy tắc từ nhiều nơi? Sẽ không đơn giản hơn nếu nó được thống nhất?

Tính thực dụng thường giữ lại mọi thứ thay vì khiến chúng trở nên đơn giản, nhưng việc trình bày rõ ràng quan điểm đơn giản cũng có giá trị không nhỏ. Ít nhất, nó giúp mọi người hiểu điều gì là lý tưởng và điều gì là thiết thực. Điều quan trọng khác về kỹ thuật này là nó thực sự buộc bạn phải suy nghĩ về điều gì là quan trọng trong hệ thống. Những điều quan trọng nhất để giao tiếp là gì?

Các nhóm chỉ lạc lối khi hệ thống đang làm việc là một bí ẩn đối với họ. Theo một cách kỳ quặc, việc có một câu chuyện đơn giản về cách thức hoạt động của một hệ thống đóng vai trò như một lộ trình, một cách giúp bạn hiểu rõ hơn khi tìm kiếm những vị trí phù hợp để thêm các tính năng. Nó cũng có thể làm cho một hệ thống bớt đáng sợ hơn rất nhiều.

Trong nhóm của bạn, hãy thường xuyên kể câu chuyện về hệ thống, qua đó bạn chia sẻ quan điểm. Kể nó theo những cách khác nhau. Đánh giá xem khái niệm này có quan trọng hơn khái niệm khác hay không. Khi xem xét các thay đổi đối với hệ thống, bạn sẽ nhận thấy rằng một số thay đổi phù hợp hơn với câu chuyện. Qua đó, họ làm cho câu chuyện ngắn gọn ít giống lời nói dối hơn. Nếu bạn phải chọn giữa hai cách để làm một việc gì đó, thì câu chuyện có thể là một cách hay để xem cách nào sẽ dẫn đến một hệ thống dễ hiểu hơn.

Dưới đây là một ví dụ về cách kể chuyện này trong thực tế. Đây là một phiên thảo luận về JUnit. Nó giả định rằng bạn biết một chút về kiến trúc của JUnit. Nếu không, hãy dành một chút thời gian để xem mã nguồn của JUnit. Bạn có thể tải xuống từ www.junit.org

> ###### Kiến trúc của JUnit là gì?
> JUnit có hai lớp chính. Lớp đầu tiên gọi là `Test` và lớp còn lại gọi là `TestResult`. Người dùng tạo kiểm thử và chạy chúng, truyền vào một `TestResult`. Khi một kiểm thử không vượt qua, nó sẽ báo cho `TestResult` về điều đó. Sau đó, mọi người có thể hỏi `TestResult` về tất cả các lỗi đã xảy ra.
>
> Hãy liệt kê các đơn giản hóa:
> 1. Có nhiều lớp khác trong JUnit. Tôi đang nói rằng `Test` và `TestResult` chỉ là chính bởi vì tôi nghĩ vậy. Đối với tôi, tương tác của chúng là tương tác cốt lõi trong hệ thống. Những người khác cũng có thể có cách nhìn khác về kiến trúc hệ thống.
> 2. Người dùng không tạo đối tượng kiểm thử. Các đối tượng kiểm thử được tạo từ các lớp trường hợp kiểm thử thông qua tương phản.
> 3. Kiểm thử không phải là một lớp; mà là một giao diện. Các kiểm thử chạy trong `JUnit` thường được viết trong các lớp con của lớp có tên `TestCase`, lớp này thực thi lớp `Test`.
> 4. Mọi người thường không hỏi `TestResults` về lỗi khi chạy kiểm thử. `TestResults` có một trình lắng nghe, nó được thông báo bất cứ khi nào `TestResult` nhận được thông tin từ một kiểm thử.
> 5. Báo cáo kiểm thử không chỉ có lỗi: Chúng báo cáo số lần chạy kiểm thử và số lỗi. (Lỗi là sự cố xảy ra trong quá trình kiểm thử mà không được kiểm tra rõ ràng. Chạy lỗi là kiểm tra không thành công.)
>
> Những đơn giản hóa này có cung cấp cho chúng ta bất kỳ thông tin chi tiết nào về cách JUnit có thể đơn giản hơn không? Một chút. Một số framework kiểm thử `xUnit` đơn giản hơn biến `Test` thành một lớp và loại bỏ hoàn toàn `TestCase`. Các framework khác hợp nhất các lỗi và chạy lỗi để chúng được báo cáo theo cùng một cách
>
> Quay trở lại câu chuyện của chúng ta
> _Đó đã là tất cả chưa?_
>
> Chưa. Các kiểm thử có thể được nhóm thành các đối tượng được gọi là bộ (suites). Chúng ta có thể chạy một bộ kiểm thử với kết quả giống như một kiểm thử đơn lẻ. Tất cả các kiểm thử bên trong nó đều chạy và cho biết kết quả kiểm thử khi chúng không thành công.
>
> Chúng ta có những đơn giản hóa nào ở đây?
> 1. `TestSuites` làm được nhiều việc hơn là chỉ nhóm và chạy một tập hợp các kiểm thử. Chúng cũng tạo các thực thể của các lớp có nguồn gốc từ `TestCase` thông qua tương phản.
> 2. Có một cách đơn giản hóa khác, phần còn lại của đơn giản hóa đầu tiên. Các kiểm thử không thực sự tự chạy. Chúng tự chuyển đến lớp `TestResult`, đến lượt nó, gọi lại phương thức thực hiện kiểm thử trên chính kiểm thử đó. Việc qua lại này diễn ra ở mức độ khá thấp. Nghĩ một cách đơn giản sẽ thuật tiện hơn. Nó hơi dối trá, nhưng nó thực sự là cách `JUnit` đã từng sử dụng khi nó đơn giản hơn một chút.
> Đó là tất cả?
> Không. Trên thực tế, `Test` là một giao diện. Có một lớp gọi là `TestCase` thực thi `Test`. Người dùng phân lớp `TestCase` và sau đó viết các bài kiểm tra của họ dưới dạng các phương thức void công khai bắt đầu bằng từ kiểm tra trong lớp con của họ. Lớp `TestSuite` sử dụng tương phản để xây dựng một nhóm các bài kiểm tra có thể chạy trong một lần gọi phương thức chạy của `TestSuite`.
