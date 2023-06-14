---
layout: default
---

# Chương 10, Tôi không thể chạy được phương thức này trong kiểm thử khai thác

Việc đặt kiểm thử tại vị trí thực hiện các thay đổi đôi khi là cả một vấn đề. Nếu bạn có thể khởi tạo lớp của mình một cách riêng biệt trong kiểm thử khai thác, hãy coi mình là người may mắn. Rất nhiều người không thể làm điều đó. Nếu bạn gặp khó khăn, hãy xem _Chương 9, Tôi không thể đưa lớp này vào kiểm thử khai thác_

Khởi tạo lớp thường chỉ là phần đầu của cuộc chiến. Phần thứ hai là viết kiểm thử cho các phương thức chúng ta cần thay đổi. Đôi khi chúng ta không cần khởi tạo lớp để làm điều đó. Nếu phương thức không sử dụng nhiều dữ liệu với thực thể, chúng ta có thể sử dụng _Công khai Phương thức tĩnh (345)_ để có quyền truy cập vào code. Nếu phương thức khá dài và khó xử lý, chúng ta có thể sử dụng _Chia nhỏ Đối tượng Phương thức (330)_ để chuyển code sang một lớp khác có thể khởi tạo dễ dàng hơn.

May mắn thay, trong hầu hết các trường hợp, khối lượng công việc mà chúng ta phải làm để viết các kiểm thử cho các phương thức không quá nhiều. Dưới đây là một số vấn đề mà chúng ta có thể gặp phải.

- Phương thức này có thể không truy cập được để kiểm thử. Nó có thể là riêng tư hoặc có một số vấn đề về khả năng truy cập khác.
- Có thể khó gọi phương thức vì khó khởi tạo các tham số cần để gọi nó.
- Phương thức này có thể có các tác dụng phụ xấu (sửa đổi cơ sở dữ liệu, phóng tên lửa hành trình, v.v.), do đó không thể chạy kiểm thử.
- Chúng ta có thể cần hiểu rõ một số đối tượng mà phương thức sử dụng.

Phần còn lại của chương này bao gồm một tập hợp các tình huống chỉ ra những cách khác nhau để vượt qua chúng và một số sự đánh đổi liên quan.

## Trường hợp của phương thức ẩn

Chúng ta cần thay đổi một phương thức trong một lớp, nhưng đó là một phương thức riêng tư. Chúng ta nên làm gì?

Câu hỏi đầu tiên đặt ra là liệu có thể kiểm thử nó thông qua một phương thức công khai hay không. Nếu có thể, đó là một điều đáng làm. Nó giúp chúng ta tránh khỏi rắc rối khi cố truy cập một phương thức riêng tư. Ngoài ra còn có một lợi ích khác, nếu kiểm thử thông qua các phương thức công khai, chúng ta đảm bảo phương thức đó đã được kiểm thử khi sử dụng nó. Điều này có thể giúp chúng ta thu hẹp công việc một chút. Trong code kế thừa, thường có các phương thức có chất lượng rất đáng ngờ nằm đâu đó trong các lớp. Khối lượng công việc cho những tác vụ tái cấu trúc phải thực hiện - để khiến một phương thức riêng tư trở nên hữu dụng - có thể khá lớn. Mặc dù thật tuyệt khi có các phương thức chung hữu ích cho nhiều lời gọi, nhưng thực tế là mỗi phương thức phải đủ chức năng để hỗ trợ lời gọi sử dụng nó và đủ rõ ràng để hiểu và dễ thay đổi. Nếu chúng ta kiểm thử một phương thức riêng tư thông qua các phương thức công khai sử dụng nó, thì không có nhiều nguy cơ khiến nó trở nên quá chung chung. Nếu phương thức cần được công khai vào một ngày nào đó, người dùng đầu tiên bên ngoài lớp nên viết các trường hợp kiểm thử giải thích chính xác chức năng của phương thức và cách lời gọi có thể sử dụng phương thức đó một cách chính xác.

Tất cả đều ổn, nhưng trong một số trường hợp, chúng ta chỉ muốn viết một trường hợp kiểm thử cho một phương thức riêng tư, một phương thức mà lời gọi của nó được chôn sâu trong một lớp. Chúng ta muốn có phản hồi cụ thể và các kiểm thử giải thích được cách sử dụng phương thức — hoặc, giả sử, việc kiểm thử nó thông qua các phương thức công khai trên lớp là một điều khó khăn.

Vì vậy, làm thế nào để chúng ta viết kiểm thử cho một phương thức riêng tư? Đây là một trong những câu hỏi liên quan đến kiểm thử phổ biến nhất. May mắn thay, có một câu trả lời rất trực tiếp cho câu hỏi này: Nếu chúng ta cần kiểm thử một phương thức riêng tư, chúng ta nên công khai nó. Nếu biến nó trở thành công khai gây phiền hà, thì trong hầu hết mọi trường hợp, có nghĩa là lớp đó đang làm quá nhiều và chúng ta cần phải sửa nó. Hãy xem xét các trường hợp sau. Tại sao việc công khai một phương thức riêng tư lại gây phiền hà? Dưới đây là một số lý do:

1. Phương thức chỉ là một tiện ích; không phải là thứ khách hàng quan tâm.
2. Nếu khách hàng sử dụng phương thức này, chúng có thể ảnh hưởng xấu đến kết quả từ các phương thức khác trong lớp.

Lý do đầu tiên không quá nghiêm trọng. Có thể chấp nhận bổ sung một phương thức công khai trong giao diện của một lớp, mặc dù chúng ta nên cố gắng tìm hiểu xem liệu việc đặt phương thức đó trong một lớp khác có tốt hơn không. Lý do thứ hai nghiêm trọng hơn một chút, nhưng may mắn thay có một biện pháp khắc phục: Các phương thức riêng tư có thể được chuyển sang một lớp mới. Chúng có thể công khai trên lớp đó và lớp của chúng ta có thể tạo một thực thể bên trong của nó. Điều đó làm cho các phương thức có thể kiểm thử được và giúp thiết kế tốt hơn.

Vâng, tôi biết lời khuyên này nghe có vẻ gay gắt, nhưng nó có những tác động rất tích cực. Sự thực là: Thiết kế tốt là thiết kế có thể kiểm thử được và ngược lại thiết kế không thể kiểm thử được là thiết kế kém. Câu trả lời trong những trường hợp này là bắt đầu sử dụng các kỹ thuật trong _Chương 20, Lớp này quá lớn và tôi không muốn nó lớn hơn nữa_. Tuy nhiên, khi không có nhiều kiểm thử, chúng ta có thể phải làm việc cẩn thận và thực hiện một số việc khác cho đến khi có thể phá vỡ mọi thứ.

Hãy xem cách vượt qua vấn đề này trong một trường hợp thực tế. Đây là một phần khai báo lớp trong C++:

```cpp
class CCAImage
{
private:
	void setSnapRegion(int x, int y, int dx, int dy);
	...
public:
	void snap();
	...
};
```

Lớp `CCAImage` được sử dụng để chụp ảnh trong hệ thống bảo mật. Nếu bạn thắc mắc tại sao một lớp hình ảnh lại sử dụng để chụp ảnh, thì hãy nhớ rằng đây là code kế thừa. Lớp này có phương thức `snap()` sử dụng API C cấp thấp để điều khiển máy ảnh và "chụp" ảnh, nhưng đây là một loại ảnh rất đặc biệt. Một lệnh gọi `snap()` duy nhất có thể dẫn đến vài hành động khác nhau của máy ảnh, mỗi hành động sẽ chụp một bức ảnh và đặt nó vào một phần khác nhau của bộ đệm hình ảnh được giữ trong lớp. Logic sử dụng để quyết định vị trí đặt của mỗi bức ảnh là linh động. Nó phụ thuộc vào chuyển động của đối tượng, thứ chúng ta đang chụp ảnh. Tùy thuộc vào cách đối tượng di chuyển, phương thức `snap()` có thể thực hiện một số lệnh gọi lặp lại tới `setSnapRegion` để xác định vị trí ảnh hiện tại đặt trong bộ đệm. Không may là API cho máy ảnh đã thay đổi, vì vậy chúng tôi cần thực hiện thay đổi đối với `setSnapRegion`. Chúng ta nên làm gì?

Một điều chúng ta có thể thực hiện là công khai nó. Thật không may, việc này có thể gây ra một số hậu quả rất tiêu cực. Lớp `CCAImage` giữ một số biến xác định vị trí hiện tại của vùng chụp. Nếu ở đâu đó bên ngoài phương thức `snap()` trong code sản phẩm gọi `setSnapRegion`, có thể gây ra sự cố nghiêm trọng với hệ thống theo dõi của máy ảnh.

Vâng, đó là vấn đề. Trước khi chúng ta xem xét một số giải pháp, hãy nói về cách chúng ta vướng vào mớ hỗn độn này. Lý do thực sự khiến chúng ta không thể kiểm thử tốt lớp `CCAImage` là nó có quá nhiều trách nhiệm. Lý tưởng nhất là chia nó thành các lớp nhỏ hơn bằng cách sử dụng các kỹ thuật được đề cập trong Chương 20, nhưng chúng ta phải cân nhắc cẩn thận liệu chúng ta có muốn thực hiện quá nhiều tái cấu trúc ngay bây giờ hay không. Sẽ thật tuyệt nếu có thể thực hiện điều đó, nhưng liệu chúng ta có thể làm được hay không còn phụ thuộc vào thời điểm hiện tại của chu kỳ phát hành, chúng ta có bao nhiêu thời gian và tất cả các rủi ro liên quan.

Nếu hiện tại chúng ta không đủ khả năng để phân tách trách nhiệm, liệu có thể viết kiểm thử cho phương thức chúng ta đang thay đổi không? May mắn thay, có thể. Đây là cách chúng ta có thể làm điều đó.

Bước đầu tiên là thay đổi `setSnapRegion` từ riêng tư sang được bảo vệ (protected).

```cpp
class CCAImage
{
protected:
	void setSnapRegion(int x, int y, int dx, int dy);
	...
public:
	void snap();
	...
};
```

Tiếp theo, chúng ta tạo lớp con của `CCAImage` để truy cập vào phương thức đó:

```cpp
class TestingCCAImage : public CCAImage
{
public:
	void setSnapRegion(int x, int y, int dx, int dy)
	{
		// call the setSnapRegion of the superclass
		CCAImage::setSnapRegion(x, y, dx, dy);
	}
};
```

Trong hầu hết trình biên dịch C++ hiện đại, chúng ta có thể sử dụng khai báo `using` trong lớp con kiểm thử để thực hiện ủy nhiệm tự động:

```cpp
class TestingCCAImage : public CCAImage
{
public:
	// Expose all CCAImage implementations of setSnapRegion
	// as part of my public interface. Delegate all calls to CCAImage.
	using CCAImage::setSnapRegion;
}
```

Sau khi hoàn thành, chúng ta có thể gọi `setSnapRegion` trên `CCAImage` trong kiểm thử, mặc dù chỉ là gián tiếp. Nhưng đây có phải là một ý tưởng tốt? Trước đó, chúng ta không muốn công khai phương thức này, nhưng chúng ta đang làm điều gì đó tương tự. Chúng ta đang làm cho nó được bảo vệ và làm cho phương thức này dễ tiếp cận hơn.

Thành thật mà nói, tôi không ngại làm điều này. Đối với tôi, có được các kiểm thử tại chỗ là sự trao đổi công bằng. Đúng, thay đổi này khiến chúng tôi vi phạm tính đóng gói. Khi chúng ta suy luận về cách hoạt động của code, chúng ta phải xem xét rằng `setSnapRegion` có thể được gọi trong các lớp con ngay bây giờ, nhưng điều đó tương đối nhỏ. Có lẽ phần nhỏ đó sẽ đủ để khiến chúng ta thực hiện tái cấu trúc toàn bộ vào lần tới khi chúng ta tiếp tục chạm vào lớp. Chúng ta có thể tách các trách nhiệm trong `CCAImage` thành các lớp khác nhau và làm cho chúng có thể kiểm thử được.

> ##### Subverting Access Protection
> Trong nhiều ngôn ngữ OO mới hơn C++, chúng ta có thể sử dụng sự phản chiếu và các quyền đặc biệt để truy cập các biến riêng tư trong thời gian chạy. Mặc dù điều đó có thể hữu ích, nhưng nó thực sự là một trò gian lận. Nó rất hữu ích khi phá vỡ các phụ thuộc, nhưng sẽ rất khó chịu nếu để kiểm thử truy cập các biến riêng tư mà ko có sự kiểm soát. Kiểu hoạt động ngầm này thực sự ngăn cản một nhóm nhận thấy code đang trở nên tồi tệ như thế nào. Nghe có vẻ khó khăn, nhưng nỗi đau mà chúng tôi cảm thấy khi làm việc trong một cơ sở code kế thừa có thể là một động lực đáng kinh ngạc để thay đổi. Chúng ta có thể nhắm mắt bỏ qua bây giờ, nhưng trừ khi giải quyết được nguyên nhân gốc rễ, các lớp chịu trách nhiệm quá mức và sự phụ thuộc rối rắm, nếu không chúng ta chỉ đang trì hoãn trả giá. Khi mọi người phát hiện ra code trở nên quá tồi tệ, chi phí để làm cho nó tốt hơn sẽ trở nên quá lố bịch.
