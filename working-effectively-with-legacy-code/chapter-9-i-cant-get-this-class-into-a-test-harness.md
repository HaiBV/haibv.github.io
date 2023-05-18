---
layout: default
---

# Chương 9, Tôi không thể đưa lớp này vào kiểm thử khai thác

Đây là trường hợp khó. Nếu việc khởi tạo một lớp trong kiểm thử khai thác luôn dễ dàng, thì cuốn sách này sẽ ngắn hơn rất nhiều. Thật không may, nó thường khó thực hiện.

Dưới đây là bốn vấn đề phổ biến nhất mà chúng ta thường gặp phải:

1. Các đối tượng của lớp không thể tạo ra một cách dễ dàng.

2. Kiểm thử khai thác sẽ không dễ dàng xây dựng với lớp đó bên trong.

3. Hàm khởi tạo mà chúng ta cần sử dụng có tác dụng phụ xấu.

4. Công việc quan trọng xảy ra trong hàm khởi tạo và chúng ta cần cảm nhận được điều đó.

Trong chương này, chúng ta sẽ đi qua một loạt các ví dụ làm nổi bật những vấn đề này bằng các ngôn ngữ khác nhau. Có nhiều hơn một cách để giải quyết từng vấn đề này. Tuy nhiên, đọc qua các ví dụ này là một cách tuyệt vời để làm quen với kho kỹ thuật phá vỡ sự phụ thuộc và học cách đánh đổi chúng cũng như áp dụng chúng trong các tình huống cụ thể.

## Trường hợp tham số khó chịu

Khi tôi cần thực hiện thay đổi trong một hệ thống kế thừa, tôi thường bắt đầu với tinh thần lạc quan phấn chấn. Tôi không biết tại sao lại như vậy. Tôi cố gắng trở thành một người thực tế nhất có thể, nhưng sự lạc quan luôn ở đó. "Này," tôi nói với chính mình (hoặc một đối tác), "điều này nghe có vẻ dễ dàng. Chúng ta chỉ cần làm _Floogle flumoux_ một chút là xong." Tất cả nghe có vẻ dễ dàng qua lời nói cho đến khi gặp lớp _Floogle_ (bất kể đó là gì) và xem xét nó một chút. "Được rồi, vậy là chúng ta cần thêm một phương thức ở đây và thay đổi các phương thức khác, và tất nhiên chúng ta sẽ cần đưa nó vào một kiểm thử khai thác." Lúc này, tôi bắt đầu nghi ngờ một chút. "Trời, có vẻ như hàm tạo đơn giản nhất trong lớp này chấp nhận ba tham số. Nhưng," tôi nói một cách lạc quan, "có lẽ sẽ không quá khó để xây dựng nó."

Hãy cùng xem một ví dụ và xem liệu sự lạc quan của tôi sẽ phù hợp hay chỉ là một cơ chế phòng thủ.

Trong code của hệ thống thanh toán, chúng ta có một lớp Java chưa được kiểm thử tên là `CreditValidator`.

```java
public class CreditValidator
{
	public CreditValidator(RGHConnection connection, CreditMaster master, String validatorID) {
		...
	}
	Certificate validateCustomer(Customer customer)
				throws InvalidCredit {
		...
	}
	...
}
```

Một trong rất nhiều trách nhiệm của lớp này là cho chúng ta biết khách hàng có tín dụng hợp lệ hay không. Nếu có, chúng ta sẽ nhận lại một chứng chỉ cho biết họ có bao nhiêu tín dụng. Nếu không, sẽ trả về một ngoại lệ.

Nhiệm vụ của chúng ta, nếu lựa chọn chấp nhận nó, là thêm một phương thức mới vào lớp này. Phương thức này sẽ được đặt tên là `getValidationPercent` và nhiệm vụ của nó là cho chúng ta biết tỷ lệ phần trăm các lệnh gọi `validateCustomer` thành công mà chúng ta đã thực hiện trong suốt vòng đời của `validator`.

Chúng ta sẽ bắt đầu như thế nào?

Khi chúng ta cần tạo một đối tượng trong kiểm thửu khai thác, cách tiếp cận tốt nhất thường là cố gắng thực hiện nó. Chúng ta có thể thực hiện nhiều phân tích để tìm ra lý do tại sao nó dễ hoặc không dễ hoặc khó, nhưng thật dễ dàng để tạo một lớp kiểm thử JUnit, nhập code này vào và biên dịch:

```java
public void testCreate() {
	CreditValidator validator = new CreditValidator();
}
```

> Cách tốt nhất để xem liệu bạn có gặp khó khăn khi khởi tạo một lớp trong kiểm thử khai thác hay không là thử. Viết một trường hợp kiểm thử và cố gắng tạo một đối tượng trong đó. Trình biên dịch sẽ cho bạn biết bạn cần gì để nó thực sự hoạt động.

Kiểm thử này là một kiểm thử xây dựng. Các kiểm thử xây dựng trông hơi kỳ lạ. Khi tôi viết nó, tôi thường không đưa ra lời khẳng định nào trong đó. Tôi chỉ cố gắng tạo đối tượng. Sau đó, khi cuối cùng tôi có thể xây dựng một đối tượng trong kiểm thử khai thác, tôi thường loại bỏ nó hoặc đổi tên để có thể sử dụng kiểm thử thứ gì đó quan trọng hơn.

Quay lại ví dụ trên:

Chúng ta chưa thêm bất kỳ đối số nào vào hàm khởi tạo, vì vậy trình biên dịch sẽ phàn nàn. Nó cho chúng ta biết rằng không có hàm khởi tạo mặc định nào cho `CreditValidator`. Tìm kiếm trong code, chúng ta phát hiện ra rằng cần `RGHConnection`, `CreditMaster` và `password`. Mỗi lớp này chỉ có một hàm khởi tạo. Nó trông giống như thế này:

```java
public class RGHConnection
{
	public RGHConnection(int port, String Name, string passwd)
			throws IOException {
		...
	}
}
public class CreditMaster
{
	public CreditMaster(String filename, boolean isLocal) {
		...
	}
}
```

Khi một `RGHConnection` được khởi tạo, nó sẽ kết nối với máy chủ. Kết nối đó sẽ nhận tất cả các báo cáo cần thiết để xác thực tín dụng của khách hàng.

Lớp khác, `CreditMaster`, cung cấp cho chúng ta một số thông tin chính sách mà chúng ta sử dụng trong các quyết định tín dụng của mình. Khi khởi tạo, `CreditMaster` tải thông tin từ tệp và giữ thông tin đó trong bộ nhớ.

Vậy thì, có vẻ khá dễ dàng để đưa lớp này vào kiểm thử khai thác, phải không? Không nhanh thế đâu. Chúng ta có thể viết kiểm thử, nhưng liệu chúng ta có thể chung sống với nó không?

```java
public void testCreate() throws Exception {
	RGHConnection connection = new RGHConnection(DEFAULT_PORT, "admin", "rii8ii9s");
	CreditMaster master = new CreditMaster("crm2.mas", true);
	CreditValidator validator = new CreditValidator(connection, master, "a");
}
```

Hóa ra việc thiết lập `RGHConnections` tới máy chủ trong kiểm thử không phải là một ý kiến hay. Quá trình này mất nhiều thời gian và không phải lúc nào máy chủ cũng hoạt động. Mặt khác, `CreditMaster` không thực sự là một vấn đề. Khi chúng ta khởi tạo một `CreditMaster`, nó sẽ tải tệp của nó rất nhanh chóng. Ngoài ra, tệp ở chế độ chỉ đọc, vì vậy chúng ta không phải lo lắng về việc các kiểm thử sẽ làm hỏng tệp.

Điều thực sự cản trở chúng ta tạo trình xác thực là `RGHConnection`. Đó là một _tham số khó chịu_. Nếu chúng ta có thể tạo một số loại đối tượng `RGHConnection` giả mạo và làm cho `CreditValidator` tin rằng nó đang nói chuyện với một đối tượng thực, thì chúng ta có thể tránh được tất cả các loại sự vấn đề kết nối. Hãy cùng xem các phương thức mà `RGHConnection` cung cấp (xem Hình 9.1).

Có vẻ như `RGHConnection` có một tập hợp các phương thứ xử lý cơ chế hình thành kết nối: `connect`, `disconnect` và `retry`, cũng như các phương thức dành riêng cho nghiệp vụ cụ thể hơn như `RFDIReportFor` và `ACTIOReportFor`. Khi chúng ta viết phương thức mới của mình trên `CreditValidator`, chúng ta sẽ phải gọi `RFDIReportFor` để lấy tất cả thông tin chúng ta cần. Thông thường, tất cả thông tin đó đến từ máy chủ, nhưng vì muốn tránh sử dụng kết nối thực, chúng ta sẽ phải tự tìm cách cung cấp thông tin đó.


Trong trường hợp này, cách tốt nhất để tạo một đối tượng giả mạo là sử dụng _Trích xuất giao diện (362)_ với lớp `RGHConnection`. Nếu bạn có một công cụ hỗ trợ tái cấu trúc, rất có thể nó sẽ hỗ trợ _Trích xuất giao diện_. Nếu bạn không có công cụ hỗ trợ _Trích xuất giao diện_, hãy nhớ rằng nó đủ dễ để tự thực hiện.

![9.1](images/9/9-1.png)
Hình 9.1 `RGHConnection`.
