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
	public CreditValidator(RGHConnection connection,
				CreditMaster master,
				String validatorID) {
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

> Cách tốt nhất để xem liệu bạn có gặp khó khăn khi khởi tạo một lớp trong khai thác thử nghiệm hay không là thử thực hiện nó. Viết một trường hợp thử nghiệm và cố gắng tạo một đối tượng trong đó. Trình biên dịch sẽ cho bạn biết bạn cần gì để nó thực sự hoạt động.
