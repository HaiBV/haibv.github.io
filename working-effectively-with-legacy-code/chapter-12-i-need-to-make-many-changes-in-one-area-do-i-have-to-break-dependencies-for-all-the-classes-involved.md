---
layout: default
---

# Chương 12, Tôi cần thực hiện nhiều thay đổi trong một khu vực. Tôi có phải phá vỡ các phụ thuộc của tất cả các lớp liên quan không?

Trong một số trường hợp, rất dễ dàng để bắt đầu viết kiểm thử cho một lớp. Nhưng với code kế thừa thì thường là khó hơn. Sự phụ thuộc có thể khá khó để phá vỡ. Khi bạn cam kết đưa các lớp vào kiểm thử khai thác để giúp công việc dễ dàng hơn, một trong những điều khó chịu nhất có thể gặp phải là những thay đổi rải rác. Bạn cần thêm một tính năng mới vào hệ thống và thấy rằng mình phải sửa ba hoặc bốn lớp có liên quan chặt chẽ với nhau. Mỗi lớp sẽ mất vài giờ để kiểm thử. Chắc chắn rằng, bạn biết đến cuối cùng code sẽ tốt hơn, nhưng bạn có thực sự phải phá vỡ tất cả những phụ thuộc đó một cách riêng lẻ không? Có thể không.

Thông thường, việc kiểm thử "lùi một cấp độ" sẽ đáng để tìm một nơi có thể viết các kiểm thử cho một số thay đổi cùng một lúc. Chúng ta có thể viết các kiểm thử tại một phương thức công khai duy nhất để thay đổi một số phương thức riêng tư hoặc chúng ta có thể viết các kiểm thử tại giao diện của một đối tượng để cộng tác với một số đối tượng mà nó nắm giữ. Khi làm điều này, chúng ta có thể kiểm thử những thay đổi đang thực hiện, nhưng cũng tạo cho mình một số "vỏ bọc" để tái cấu trúc nhiều hơn trong khu vực. Cấu trúc code bên dưới các kiểm thử có thể thay đổi hoàn toàn miễn là các kiểm thử xác định hành vi của chúng.

> Các kiểm thử cấp cao hơn có thể hữu ích trong việc tái cấu trúc. Mọi người thường thích chúng hơn các kiểm thử chi tiết ở mỗi lớp vì họ nghĩ rằng thay đổi khó hơn khi có nhiều kiểm thử nhỏ được viết trên một giao diện phải thay đổi. Trên thực tế, các thay đổi thường dễ dàng hơn bạn mong đợi vì bạn có thể thực hiện các thay đổi đối với các kiểm thử và sau đó thực hiện các thay đổi đối với code, di chuyển cấu trúc theo từng bước nhỏ an toàn.

> Mặc dù các kiểm thử cấp cao hơn là một công cụ quan trọng, nhưng chúng không nên thay thế cho các kiểm thử đơn vị. Thay vào đó, chúng nên là bước đầu tiên để thực hiện các kiểm thử đơn vị.

Làm cách nào để có được những “kiểm thử bao phủ này? Điều đầu tiên mà chúng ta phải tìm ra là nơi để viết chúng. Nếu bạn chưa xem, hãy xem _Chương 11, Tôi Cần Thực Hiện Thay Đổi. Tôi nên kiểm thử những phương thức nào?_ Chương đó mô tả _các bản phác thảo hiệu ứng_ (155), một công cụ mạnh mẽ mà bạn có thể sử dụng để tìm ra nơi viết kiểm thử. Trong chương này, tôi mô tả khái niệm về _điểm đánh chặn_ và chỉ ra cách tìm ra chúng. Tôi cũng mô tả loại điểm đánh chặn tốt nhất mà bạn có thể tìm thấy trong code, _điểm chèn ép_. Tôi chỉ cho bạn cách tìm chúng và cách chúng có thể giúp bạn khi bạn muốn viết kiểm thử để bao phủ code bạn sắp thay đổi.

## Điểm chặn

_Điểm chặn_ đơn giản là một điểm trong chương trình của bạn, nơi bạn có thể phát hiện tác động của một thay đổi cụ thể. Trong một số ứng dụng, việc tìm chúng khó khăn hơn so với những ứng dụng khác. Nếu bạn có một ứng dụng với các thành phần kết dính với nhau mà không có nhiều liên kết tự nhiên, thì việc tìm kiếm một _điểm chặn_ phù hợp có thể là một vấn đề khó. Thường thì nó đòi hỏi một số suy luận về tác động và phá vỡ rất nhiều sự phụ thuộc. Chúng ta bắt đầu như thế nào?

Cách tốt nhất để bắt đầu là xác định những nơi bạn cần thực hiện thay đổi và bắt đầu theo dõi các tác động bên ngoài từ những điểm thay đổi đó. Mỗi nơi mà bạn có thể phát hiện các hiệu ứng là một _điểm chặn_, nhưng đó có thể không phải là _điểm chặn_ tốt nhất. Bạn phải thực hiện các lần gọi phán đoán trong suốt quá trình.

### Trường hợp đơn giản

Tưởng tượng rằng chúng ta phải sửa đổi một lớp Java có tên là `Invoice`, để thay đổi cách tính chi phí. Phương pháp tính toán tất cả các chi phí cho `Invoice` gọi là `getValue`.

```Java
public class Invoice
{
	...
	public Money getValue() {
		Money total = itemsSum();
		if (billingDate.after(Date.yearEnd(openingDate))) {
			if (originator.getState().equals("FL") || originator.getState().equals("NY"))
				total.add(getLocalShipping());
			else
				total.add(getDefaultShipping());
		}
		else
			total.add(getSpanningShipping());

		total.add(getTax());
		return total;
	}
	...
}
```

Chúng ta cần thay đổi cách tính chi phí vận chuyển cho New York. Cơ quan lập pháp vừa thêm một loại thuế ảnh hưởng đến hoạt động vận chuyển của chúng ta ở đó, và thật không may, chúng ta phải chuyển chi phí cho người tiêu dùng. Trong quá trình này, chúng ta sẽ trích xuất logic tính chi phí vận chuyển vào một lớp mới có tên là `ShippingPricer`. Khi hoàn thành, code sẽ trông như thế này:

```Java
public class Invoice
{
	public Money getValue() {
		Money total = itemsSum();
		total.add(shippingPricer.getPrice());
		total.add(getTax());
		return total;
	}
}
```

Tất cả công việc được thực hiện trong `getValue` đều do `Shippingpricer` thực hiện. Chúng ta cũng sẽ phải thay đổi hàm tạo cho `Invoice` để tạo một `ShippingPricer` biết về ngày lập hóa đơn.

Để tìm các điểm chặn, chúng ta phải bắt đầu theo dõi các tác động chuyển tiếp từ các điểm thay đổi. Phương thức `getValue` sẽ có kết quả khác. Hóa ra là không có phương thức nào trong `Invoice` sử dụng `getValue`, nhưng `getValue` được sử dụng trong một lớp khác: Phương thức `makeStatement` của một lớp có tên `BillingStatement` sử dụng nó. Điều này được thể hiện trong Hình 12.1.
