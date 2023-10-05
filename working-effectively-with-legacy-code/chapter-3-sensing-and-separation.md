---
layout: default
---

# Chương 3 Hiểu biết và tách biệt

Lý tưởng nhất là khi chúng ta không phải làm bất cứ điều gì đặc biệt đối với một lớp để bắt đầu làm việc với nó. Trong một hệ thống lý tưởng, chúng ta có thể khởi tạo các đối tượng thuộc bất kỳ lớp nào trong kiểm thử khai thác và khiến chúng hoạt động. Chúng ta có thể khởi tạo các đối tượng, viết kiểm thử cho chúng và sau đó chuyển sang những thứ khác. Nếu mọi việc dễ dàng như vậy thì sẽ chẳng có gì để viết về nó, nhưng thật không may, chúng thường khó. Sự phụ thuộc giữa các lớp có thể gây khó khăn cho việc kiểm thử các cụm đối tượng cụ thể. Chúng ta có thể muốn tạo một đối tượng của một lớp và đặt các câu hỏi cho nó, nhưng để tạo ra nó, chúng ta cần các đối tượng của một lớp khác và những đối tượng đó cần các đối tượng của một lớp khác, v.v. Cuối cùng, bạn kết thúc với gần như toàn bộ hệ thống. Trong một số ngôn ngữ, đây không phải là vấn đề lớn. Ở những nơi khác, đáng chú ý nhất là C++, chỉ riêng thời gian liên kết có thể khiến việc quay vòng nhanh chóng gần như không thể xảy ra nếu bạn không phá bỏ sự phụ thuộc.

Trong các hệ thống không được phát triển đồng thời với các kiểm thử đơn vị, chúng ta thường phải phá bỏ các phần phụ thuộc để đưa các lớp vào kiểm thử khai thác, nhưng đó không phải là lý do duy nhất để phá bỏ phụ thuộc. Đôi khi lớp chúng ta muốn kiểm thử có ảnh hưởng đến các lớp khác và các kiểm thử của chúng ta cần biết về chúng. Đôi khi chúng ta có thể cảm nhận được những tác động đó thông qua giao diện của lớp khác. Vào những lúc khác, chúng ta không thể. Lựa chọn duy nhất mà chúng ta có là mạo danh lớp khác để có thể trực tiếp cảm nhận được tác động.

Nói chung, khi chúng tôi muốn thực hiện các kiểm thử, có hai lý do để phá bỏ sự phụ thuộc: cảm biến và tách biệt.

1. Cảm biến — Chúng ta phá bỏ các phần phụ thuộc để nhận biết khi không thể truy cập các giá trị mà code của chúng ta tính toán.
2. Tách biệt — Chúng ta phá bỏ các phần phụ thuộc để phân tách khi thậm chí không thể lấy một đoạn code vào bộ kiểm thử khai thác để chạy.

Đây là một ví dụ. Chúng tôi có một lớp có tên NetworkBridge trong ứng dụng quản lý mạng:

```java
public class NetworkBridge
{
	public NetworkBridge(EndPoint [] endpoints) {
		...
	}
	public void formRouting(String sourceID, String destID) {
		...
	}
	...
}
```

`NetworkBridge` nhận tham số là một mảng `Endpoints` và quản lý cấu hình của chúng bằng cách sử dụng một số phần cứng cục bộ. Người dùng của `NetworkBridge` có thể sử dụng các phương thức của nó để định tuyến lưu lượng truy cập từ `Endpoint` này đến `Endpoint` khác. `NetworkBridge` thực hiện công việc này bằng cách thay đổi cài đặt trên lớp `EndPoint`. Mỗi đối tượng của lớp `EndPoint` sẽ mở một socket và giao tiếp qua mạng tới một thiết bị cụ thể.

Đó là mô tả ngắn gọn về những gì `NetworkBridge` thực hiện. Chúng ta có thể đi vào chi tiết hơn, nhưng từ góc độ kiểm thử, rõ ràng đã có một số vấn đề. Nếu chúng ta muốn viết kiểm thử cho `NetworkBridge` thì phải làm như thế nào? Lớp này rất có thể thực hiện một số lệnh gọi tới phần cứng thực khi nó được khởi tạo. Chúng ta có cần có sẵn phần cứng để tạo một đối tượng của lớp không? Tệ hơn nữa, làm sao chúng ta biết được `Bridge` đang làm gì với phần cứng hoặc `Endpoint` đó? Theo quan điểm của chúng tôi, lớp này là một hộp kín.

Điều này có thể không quá tệ. Có lẽ chúng ta có thể viết một số code để đánh hơi các gói tin trên mạng. Có lẽ chúng ta có thể lấy một số phần cứng để `NetworkBridge` giao tiếp để ít nhất nó không bị treo khi chúng ta cố gắng tạo một đối tượng của nó. Có lẽ chúng ta có thể thiết lập hệ thống dây điện để có thể có một cụm điểm cuối cục bộ và sử dụng chúng khi kiểm thử. Những giải pháp đó có thể hiệu quả, nhưng chúng tốn rất nhiều công sức. Logic mà chúng ta muốn thay đổi trong `NetworkBridge` có thể không cần bất kỳ thứ nào trong số đó; chỉ là chúng ta không thể nắm bắt được nó. Chúng ta không thể chạy một đối tượng của lớp đó và thử trực tiếp để xem nó hoạt động như thế nào.

Ví dụ này minh họa cả vấn đề cảm nhận và tách biệt. Chúng ta không thể cảm nhận được tác động của các lệnh gọi đến các phương thức trên lớp này và chúng ta không thể chạy nó tách biệt với phần còn lại của ứng dụng.

Vấn đề nào khó khăn hơn? Cảm nhận hay tách biệt? Không có câu trả lời rõ ràng. Thông thường, chúng ta cần cả hai và cả hai đều là lý do khiến chúng ta phá bỏ sự phụ thuộc. Tuy nhiên, có một điều rõ ràng: Có nhiều cách để phân tách phần mềm. Trên thực tế, có cả một danh mục các kỹ thuật đó ở phía sau cuốn sách này về chủ đề đó, nhưng có một kỹ thuật chiếm ưu thế về cảm nhận.

## Đối tượng giả lập

Một trong những vấn đề lớn mà chúng ta gặp phải khi làm việc với code kế thừa là sự phụ thuộc. Nếu chúng ta muốn tự mình thực thi một đoạn code và xem nó làm gì, chúng ta thường phải loại bỏ sự phụ thuộc vào đoạn code khác. Nhưng nó hiếm khi đơn giản như vậy. Thông thường, đoạn code khác đó là nơi duy nhất chúng ta có thể dễ dàng cảm nhận được tác động của hành động của mình. Nếu chúng ta có thể đặt một số code khác vào vị trí của nó và kiểm thử nó, chúng ta có thể viết các kiểm thử của mình. Trong hướng đối tượng, những đoạn code khác này thường được gọi là _đối tượng giả_.
