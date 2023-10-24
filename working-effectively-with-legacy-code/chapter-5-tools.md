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

### JUnit

Trong JUnit, bạn viết kiểm thử bằng cách phân lớp con có tên `TestCase`.

```java
import junit.framework.*;

public class FormulaTest extends TestCase {
  public void testEmpty() {
    assertEquals(0, new Formula("").value());
  }

  public void testDigit() {
    assertEquals(1, new Formula("1").value());
  }
}
```

Mỗi phương thức trong lớp kiểm thử xác định một kiểm thử nếu nó có tên ở dạng này: `void testXXX()`, trong đó `XXX` là tên bạn muốn đặt cho kiểm thử. Mỗi phương thức kiểm thử có thể chứa code và xác nhận kỳ vọng. Trong phương thức `testEmpty` trước đó, có code để tạo một đối tượng `Formula` mới và gọi phương thức `value` của nó. Ngoài ra còn có code xác nhận kỳ vọng để kiểm tra xem giá trị đó có bằng 0 hay không. Nếu đúng như vậy thì kiểm thử đã đạt. Nếu không, kiểm thử sẽ thất bại.

Tóm lại, đây là những gì xảy ra khi bạn chạy kiểm thử bằng JUnit. Trình chạy kiểm thử JUnit tải một lớp kiểm thử giống như lớp được hiển thị ở trên, sau đó nó sử dụng sự phản chiếu để tìm tất cả các phương thức kiểm thử. Những gì nó làm tiếp theo khá lén lút. Nó tạo ra một đối tượng hoàn toàn riêng biệt cho từng phương thức kiểm thử. Theo như đoạn code ở trên, nó tạo ra hai đối tượng: một đối tượng có công việc duy nhất là chạy phương thức `testEmpty` và một đối tượng có công việc duy nhất là chạy đối tượng `testDigit`. Nếu bạn đang thắc mắc các lớp của đối tượng là gì thì trong cả hai trường hợp đều giống nhau: `FormulaTest`. Mỗi đối tượng được cấu hình để chạy chính xác một trong các phương thức kiểm thử của `FormulaTest`. Điều quan trọng là chúng ta có một đối tượng hoàn toàn riêng biệt cho mỗi phương thức. Không có cách nào chúng có thể ảnh hưởng lẫn nhau. Đây là một ví dụ.

```java
public class EmployeeTest extends TestCase {
  private Employee employee;

  protected void `setUp`() {
    employee = new Employee("Fred", 0, 10);
    TDate cardDate = new TDate(10, 10, 2000);
    employee.addTimeCard(new TimeCard(cardDate,40));
  }

  public void testOvertime() {
    TDate newCardDate = new TDate(11, 10, 2000);
    employee.addTimeCard(new TimeCard(newCardDate, 50));
    assertTrue(employee.hasOvertimeFor(newCardDate));
  }

  public void testNormalPay() {
    assertEquals(400, employee.getPay());
  }
}
```

Trong lớp `EmployeeTest`, chúng ta có một phương thức đặc biệt tên là `setUp`. Phương thức `setUp` được khai báo trong `TestCase` và được chạy trong từng đối tượng kiểm thử trước khi chạy phương thức kiểm thử. Phương thức `setUp` cho phép chúng ta tạo một tập hợp các đối tượng mà chúng ta sẽ sử dụng trong kiểm thử. Tập hợp các đối tượng đó được tạo theo cách tương tự trước mỗi lần thực hiện kiểm thử. Với đối tượng chạy `testNormalPay`, một `employee` được tạo trong `setUp` được kiểm tra xem liệu `employee` đó có tính lương chính xác cho một thẻ chấm công được thêm vào trong `setUp` hay không. Với đối tượng chạy `testOvertime`, một `employee` được tạo trong `setUp` cho đối tượng đó sẽ nhận được một thẻ chấm công bổ sung và có một bước kiểm tra để xác minh rằng thẻ chấm công thứ hai có kích hoạt điều kiện làm thêm giờ hay không. Phương thức `setUp` được gọi cho từng đối tượng của lớp `EmployeeTest` và mỗi đối tượng đó có một tập hợp đối tượng riêng được tạo thông qua `setUp`. Nếu bạn cần làm bất cứ điều gì đặc biệt sau khi quá trình kiểm thử kết thúc, bạn có thể ghi đè một phương thức khác có tên là `TearsDown`, được xác định trong `TestCase`. Nó chạy theo phương thức kiểm thử cho từng đối tượng.

Khi bạn nhìn thấy `xUnit` lần đầu tiên, nó chắc chắn sẽ trông hơi lạ. Tại sao các lớp trường hợp kiểm thử lại có `setUp` và `TearsDown`? Tại sao chúng ta không thể tạo các đối tượng chúng ta cần trong hàm tạo? Vâng, chúng ta có thể, nhưng hãy nhớ những gì người chạy kiểm thử làm với các lớp trường hợp kiểm thử. Nó đi đến từng lớp trường hợp kiểm thử và tạo một tập hợp các đối tượng, một đối tượng cho mỗi phương thức kiểm thử. Đó là một tập hợp lớn các đối tượng, nhưng cũng không tệ lắm nếu những đối tượng đó chưa phân bổ những gì chúng cần. Bằng cách đặt code vào `setUp` để tạo ra những gì chúng ta cần ngay khi cần, chúng ta đã tiết kiệm được khá nhiều tài nguyên. Ngoài ra, bằng cách trì hoãn quá trình thiết lập, chúng ta cũng có thể chạy nó vào bất kỳ thời điểm mà chúng ta có thể phát hiện và báo cáo bất kỳ sự cố nào có thể xảy ra trong quá trình thiết lập.

### CppUnitLite

Khi tôi bắt đầu tiếp xúc với CppUnit, tôi cố gắng giữ nó càng giống JUnit càng tốt. Tôi nghĩ rằng sẽ dễ dàng hơn đối với những người đã từng làm việc kiến trúc xUnit từ trước, vì vậy có vẻ như đây là điều tốt hơn nên làm. Gần như ngay lập tức, tôi gặp phải một loạt vấn đề khó hoặc không thể triển khai rõ ràng trong C++ vì sự khác biệt trong các tính năng của C++ và Java. Vấn đề chính là sự thiếu phản ánh của C++. Trong Java, bạn có thể giữ tham chiếu đến các phương thức của lớp dẫn xuất, tìm các phương thức trong thời gian chạy, v.v. Trong C++, bạn phải viết code để đăng ký phương thức bạn muốn truy cập khi chạy. Kết quả là CppUnit trở nên khó sử dụng và khó hiểu hơn một chút. Bạn phải viết bộ hàm của riêng mình trên một lớp kiểm thử để bộ chạy kiểm thử có thể chạy các đối tượng cho các phương thức riêng lẻ.

```cpp
Test *EmployeeTest::suite()
{
	TestSuite *suite = new TestSuite;
	suite.addTest(new TestCaller<EmployeeTest>("testNormalPay", testNormalPay));
	suite.addTest(new TestCaller<EmployeeTest>("testOvertime", testOvertime));
	return suite;
}
```

Không cần phải nói, điều này khá tẻ nhạt. Thật khó để duy trì các kiểm thử viết theo đà khi bạn phải khai báo các phương thức kiểm thử trong tiêu đề lớp, xác định chúng trong tệp nguồn và đăng ký chúng trong một bộ phương thức. Có thể sử dụng nhiều kế hoạch vĩ mô khác nhau để vượt qua những vấn đề này, nhưng tôi chọn bắt đầu lại. Tôi đã kết thúc với một sơ đồ trong đó ai đó có thể viết kiểm thử chỉ bằng cách viết tệp nguồn này:

```cpp
#include "testharness.h"
#include "employee.h"
#include <memory>

using namespace std;

TEST(testNormalPay,Employee)
{
	auto_ptr<Employee> employee(new Employee("Fred", 0, 10));
	LONGS_EQUALS(400, employee->getPay());
}
```

Kiểm thử này sử dụng macro có tên `LONGS_EQUAL` để so sánh hai số nguyên dài để tìm sự bằng nhau. Nó hoạt động giống như cách mà `assertEquals` thực hiện trong JUnit, nhưng nó được điều chỉnh trong thời gian dài.

Macro `TEST` thực hiện một số điều khó chịu đằng sau. Nó tạo một lớp con của lớp kiểm thử và đặt tên cho nó bằng cách dán hai đối số lại với nhau (tên của kiểm thử và tên của lớp đang được kiểm thử). Sau đó, nó tạo một phiên bản của lớp con đó được cấu hình để chạy code trong dấu ngoặc nhọn. Phiên bản này là `static`; khi chương trình tải, nó sẽ tự thêm vào danh sách `static` các đối tượng kiểm thử. Sau đó, người chạy thử có thể trích xuất danh sách và chạy từng kiểm thử.

Sau khi viết framework nhỏ này, tôi quyết định không phát hành nó vì code trong macro không quá rõ ràng và tôi dành nhiều thời gian để thuyết phục mọi người viết code rõ ràng hơn. Một người bạn của tôi, Mike Hill, đã gặp phải một số vấn đề tương tự trước khi chúng tôi gặp nhau và tạo ra một framework kiểm thử dành riêng cho Microsoft có tên là TestKit để xử lý việc đăng ký theo cách tương tự. Được Mike khuyến khích, tôi bắt đầu giảm số lượng các tính năng phát hành muộn của C++ được sử dụng trong framework nhỏ của mình và sau đó tôi phát hành nó. (Những vấn đề đó từng là vấn đề lớn trong CppUnit. Gần như ngày nào tôi cũng nhận được e-mail từ những người không thể sử dụng mẫu hoặc thư viện chuẩn hoặc những người có ngoại lệ với trình biên dịch C++ của họ.)

Cả CppUnit và CppUnitLite đều phù hợp cho kiểm thử khai thác. Các kiểm thử được viết bằng CppUnitLite ngắn gọn hơn một chút, vì vậy tôi sử dụng nó cho các ví dụ về C++ trong cuốn sách này.

### NUnit

NUnit là một khung thử nghiệm cho các ngôn ngữ .NET. Bạn có thể viết bài kiểm tra mã C#, mã VB.NET hoặc bất kỳ ngôn ngữ nào khác chạy trên nền tảng .NET. NUnit hoạt động rất gần với JUnit. Sự khác biệt đáng kể là nó sử dụng các thuộc tính để đánh dấu các phương pháp kiểm tra và các lớp kiểm tra. Cú pháp của các thuộc tính phụ thuộc vào ngôn ngữ .NET mà các bài kiểm tra được viết.

Đây là bài kiểm tra NUnit được viết bằng VB.NET:

```cpp
Imports NUnit.Framework

<TestFixture()> Public Class LogOnTest
  Inherits Assertion
  <Test()> Public Sub TestRunValid()
  Dim display As New MockDisplay()
  Dim reader As New MockATMReader()
  Dim logon As New LogOn(display, reader)
  logon.Run()
  AssertEquals("Please Enter Card", display.LastDisplayedText)
  AssertEquals("MainMenu",logon.GetNextTransaction().GetType.Name)
  End Sub
End Class
```

`<TestFixture()>` và `<Test()>` lần lượt là các thuộc tính đánh dấu `LogonTest` là lớp kiểm thử và `TestRunValid` là phương thức kiểm thử

### Frameworks xUnit khác

Có nhiều cổng xUnit sang nhiều ngôn ngữ và nền tảng khác nhau. Nói chung, chúng hỗ trợ đặc tả, nhóm và chạy kiểm thử đơn vị. Nếu bạn cần tìm cổng xUnit cho nền tảng hoặc ngôn ngữ của mình, hãy truy cập www.xprogramming.com và xem phần Tải xuống. Trang web này được điều hành bởi Ron Jeffries và trên thực tế nó là kho lưu trữ cho tất cả các cổng xUnit.


