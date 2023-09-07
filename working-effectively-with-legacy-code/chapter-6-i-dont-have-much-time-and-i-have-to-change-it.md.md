---
layout: default
---

# Chương 6, Tôi không có nhiều thời gian và Tôi phải thay đổi nó

Hãy đối mặt với sự thật: Cuốn sách bạn đang đọc mô tả những công việc phát sinh — công việc mà bạn có thể không làm ngay bây giờ đồng thời có thể khiến bạn mất nhiều thời gian hơn khi muốn thực hiện một số thay đổi trong code của mình. Bạn có thể tự hỏi liệu có đáng để làm những việc này ngay bây giờ hay không.

Sự thật là, công việc bạn làm để phá vỡ phụ thuộc và viết kiểm thử cho các thay đổi của mình sẽ mất thêm thời gian, nhưng trong hầu hết các trường hợp, cuối cùng bạn sẽ tiết kiệm được thời gian — và rất nhiều sự thất vọng. Khi nào? Vâng, nó phụ thuộc vào dự án. Trong một số trường hợp, bạn có thể viết kiểm thử cho đoạn code mà bạn cần thay đổi và mất hai giờ cho việc đó. Thay đổi bạn thực hiện sau đó có thể chỉ mất 15 phút. Khi nhìn lại, bạn có thể nói: "Tôi vừa lãng phí hai giờ – điều đó có đáng không?" Cũng còn tùy. Bạn không biết công việc đó có thể mất bao lâu nếu bạn không viết kiểm thử. Bạn cũng không biết bạn sẽ mất bao nhiêu thời gian để gỡ lỗi nếu mắc lỗi, bạn có thể tiết kiệm được thời gian nếu có các kiểm thử tại chỗ. Tôi không chỉ nói về lượng thời gian bạn sẽ tiết kiệm được nếu các kiểm thử phát hiện ra lỗi, mà còn về lượng thời gian kiểm tra giúp bạn tiết kiệm được khi bạn đang cố gắng tìm ra lỗi. Với các kiểm thử xung quanh code, việc giải quyết các vấn đề về chức năng thường dễ dàng hơn.

Hãy giả sử trường hợp xấu nhất. Thay đổi rất đơn giản nhưng dù sao thì phần code xung quanh thay đổi đã được kiểm thử; chúng ta thực hiện tất cả các thay đổi một cách chính xác. Các kiểm thử có đáng giá không? Chúng ta không biết khi nào sẽ quay lại vùng code đó và thực hiện một thay đổi khác. Trong trường hợp tốt nhất, bạn quay lại ở lần tiếp theo và bắt đầu thu lại khoản đầu tư của mình một cách nhanh chóng. Trong trường hợp xấu nhất, phải mất nhiều năm mới có người quay lại và sửa đổi đoạn code đó. Tuy nhiên, rất có thể chúng ta sẽ đọc nó định kỳ, chỉ để tìm hiểu xem liệu có cần thực hiện thay đổi ở đó hay ở nơi nào khác nữa hay không. Sẽ dễ hiểu hơn nếu lớp nhỏ hơn và có kiểm thử đơn vị? Rất có thể là như vậy. Nhưng đây chỉ là trường hợp xấu nhất. Nó xảy ra thường xuyên như thế nào? Thông thường, thay đổi cụm trong hệ thống.

Nếu bạn thay đổi nó ngay hôm nay, rất có thể bạn sẽ sớm có một sự thay đổi ở gần đó.

Khi làm việc với các nhóm, tôi thường bắt đầu bằng việc yêu cầu họ tham gia một thử nghiệm. Đối với mỗi vòng làm việc, chúng tôi cố gắng không thực hiện thay đổi với code không được phủ bởi kiểm thử. Nếu có ai nghĩ rằng họ không thể viết được kiểm thử, họ phải triệu tập một cuộc họp nhanh để hỏi nhóm xem liệu có thể viết kiểm thử hay không. Những vòng lặp đầu thật khủng khiếp. Mọi người cảm thấy họ không thể hoàn thành được công việc họ cần. Nhưng dần dần, họ bắt đầu khám phá ra rằng họ những đoạn code đang được cải thiện tốt hơn. Những thay đổi của họ ngày càng trở nên dễ dàng hơn và trong thâm tâm họ biết rằng đây là điều cần thiết để tiến về phía trước theo cách tốt hơn. Cần có thời gian để một nhóm vượt qua khó khăn đó, nhưng nếu có một điều mà tôi có thể làm ngay lập tức cho mọi đội trên thế giới, thì đó là mang đến cho họ trải nghiệm được chia sẻ, trải nghiệm mà bạn có thể nhìn thấy trên khuôn mặt của họ: "Anh bạn, chúng ta sẽ không lặp lại chuyện đó nữa."

Nếu bạn chưa có trải nghiệm đó, bạn cần phải có.

Cuối cùng, điều này sẽ giúp công việc của bạn diễn ra nhanh hơn và điều đó quan trọng ở hầu hết mọi tổ chức phát triển. Nhưng thành thật mà nói, với tư cách là một lập trình viên, tôi rất vui vì nó khiến công việc bớt bực bội hơn nhiều.

Khi bạn vượt qua được khó khăn, cuộc sống không hoàn toàn màu hồng nhưng sẽ tốt đẹp hơn. Khi bạn biết giá trị của kiểm thử và cảm nhận được sự khác biệt, điều duy nhất bạn phải đối mặt là quyết định lạnh lùng, hám lợi về những việc cần làm trong từng trường hợp cụ thể.

> Sự việc xảy ra ở đâu đó mỗi ngày
>
> Sếp của bạn bước vào và nói: “Khách hàng đang yêu cầu tính năng này. Chúng ta có thể hoàn thành nó vào hôm nay được không?”
> "Tôi không biết."
> Bạn nhìn xung quanh. Có kiểm thử ở đó không? KHÔNG.
> Bạn hỏi, "Anh cần nó đến mức nào?"
> Bạn biết rằng bạn có thể thực hiện các thay đổi nội tuyến ở tất cả 10 chỗ và việc này có thể xong trước 5:00. Đây là trường hợp khẩn cấp phải không? Chúng ta sẽ sửa lỗi này vào ngày mai phải không?
> Hãy nhớ rằng, code là ngôi nhà của bạn và bạn phải sống với đó.

Điều khó nhất khi cố gắng quyết định có nên viết kiểm thử khi bạn đang bị áp lực hay không là thực tế bạn có thể không biết sẽ mất bao lâu để thêm tính năng này. Trong code kế thừa, thật khó để đưa ra những ước tính có ý nghĩa. Có một số kỹ thuật có thể giúp ích. Hãy xem _Chương 16, Tôi không hiểu code đủ rõ để thay đổi nó_ để biết chi tiết. Khi bạn thực sự không biết sẽ mất bao lâu để thêm một tính năng và bạn nghi ngờ rằng nó sẽ dài hơn khoảng thời gian bạn có, bạn nên hack tính năng đó theo cách nhanh nhất có thể. Sau đó, nếu có đủ thời gian, bạn có thể quay lại và thực hiện một số kiểm thử và tái cấu trúc. Phần khó thực sự là quay lại và thực hiện việc kiểm thử và tái cấu trúc đó. Trước khi vượt qua khó khăn, mọi người thường né tránh công việc đó. Nó có thể là một vấn đề về tinh thần. Hãy xem _Chương 24, Chúng ta cảm thấy choáng ngợp. Có vẻ mọi thứ sẽ không thể cải thiện được_ để có một số cách mang tính xây dựng giúp tiến về phía trước.

Cho đến giờ, những gì tôi mô tả có vẻ như là một vấn đề thực sự nan giải: Trả tiền ngay hoặc trả nhiều hơn về sau. Hoặc viết kiểm thử khi bạn thực hiện các thay đổi của mình hoặc sống với thực tế là nó sẽ trở nên khó khăn hơn theo thời gian. Nó có thể khó khăn hơn, nhưng đôi khi thì không.

Nếu bạn phải thực hiện thay đổi đối với một lớp ngay bây giờ, hãy thử khởi tạo lớp đó trong một bộ kiểm thử khai thác. Nếu bạn không thể, trước tiên hãy xem _Chương 9, Tôi không thể đưa lớp này vào kiểm thử khai thác_ hoặc _Chương 10, Tôi không thể chạy được phương thức này trong kiểm thử khai thác_. Đưa code đang được thay đổi vào kiểm thử khai thác có thể dễ dàng hơn bạn nghĩ. Nếu bạn xem xét các phần đó và quyết định rằng bạn thực sự không đủ khả năng để phá vỡ các phụ thuộc và viết các kiểm thử ngay bây giờ, hãy xem xét kỹ lại những thay đổi bạn cần thực hiện. Bạn có thể tạo chúng bằng cách viết code mới không? Trong nhiều trường hợp, bạn có thể. Phần còn lại của chương này bao gồm mô tả về một số kỹ thuật mà chúng ta có thể sử dụng để thực hiện việc này.

Đọc về những kỹ thuật này và cân nhắc chúng, nhưng nhớ rằng chúng phải được dùng cẩn thận. Khi sử dụng chúng, bạn đang thêm code đã được kiểm thử vào hệ thống của mình, nhưng phần code sử dụng nó có thể không được kiểm thử. Vì vậy hãy sử dụng thận trọng.

## Ươm mầm phương thức

Khi bạn cần thêm một tính năng vào hệ thống và nó có thể được xây dựng hoàn toàn dưới dạng code mới, hãy viết một phương thức mới. Gọi nó từ những nơi cần có chức năng mới. Bạn có thể không dễ dàng kiểm thử các điểm gọi đó, nhưng ít nhất, bạn có thể viết kiểm thử cho code mới. Đây là một ví dụ.

```java
public class TransactionGate
{
	public void postEntries(List entries) {
		for (Iterator it = entries.iterator(); it.hasNext(); ) {
			Entry entry = (Entry)it.next();
			entry.postDate();}
			transactionBundle.getListManager().add(entries);
		}
	...
}
```

Chúng ta cần thêm code để xác minh rằng không có `entries` mới nào đã tồn tại trong `TransactionBundle` trước khi đăng `date` của chúng và thêm chúng. Nhìn vào code, có vẻ như điều này phải xảy ra ở đầu phương thức, trước vòng lặp. Nhưng trên thực tế, nó có thể xảy ra bên trong vòng lặp. Chúng ta có thể thay đổi thành thế này:

```java
public class TransactionGate
{
	public void postEntries(List entries) {
		List entriesToAdd = new LinkedList();
		for (Iterator it = entries.iterator(); it.hasNext(); ) {
			Entry entry = (Entry)it.next();
			if (!transactionBundle.getListManager().hasEntry(entry) {
				entry.postDate();
				entriesToAdd.add(entry);
			}
		}
		transactionBundle.getListManager().add(entriesToAdd);
	}
	...
}
```

Đây có vẻ như là một thay đổi đơn giản nhưng lại khá xâm lấn. Làm thế nào để biết chúng ta đã làm đúng? Không có bất kỳ sự tách biệt nào giữa code mới vừa thêm và code cũ. Tệ hơn, chúng ta đang làm cho đoạn code trở nên khó đọc hơn một chút. Chúng ta đang kết hợp hai hoạt động ở đây: đăng `date` và phát hiện `entry` trùng lặp. Phương thức này khá nhỏ nhưng đã kém rõ ràng hơn một chút và chúng ta cũng đã sử dụng một biến tạm thời. Tính tạm thời không nhất thiết là xấu, nhưng đôi khi chúng thu hút code mới. Nếu thay đổi tiếp theo mà chúng ta phải thực hiện liên quan đến việc xử lý tất cả các `entry` không trùng lặp trước khi chúng được thêm vào, thì chỉ có một vị trí trong code tồn tại một biến như thế: ngay trong phương thức này. Sẽ rất hấp dẫn nếu chỉ đặt code đó vào phương thức. Chúng ta có thể làm điều này theo cách khác không?

Có. Chúng ta có thể coi việc loại bỏ `entry` trùng lặp là một thao tác hoàn toàn riêng biệt. Chúng ta có thể sử dụng _phương pháp phát triển dựa trên thử nghiệm - TDD (88)_ để tạo một phương thức mới có tên là `UniqueEntries`:

```java
public class TransactionGate
{
	...
	List uniqueEntries(List entries) {
		List result = new ArrayList();
		for (Iterator it = entries.iterator(); it.hasNext(); ) {
			Entry entry = (Entry)it.next();
			if (!transactionBundle.getListManager().hasEntry(entry) {
				result.add(entry);
			}
		}
		return result;
	}
	...
}
```

Sẽ rất dễ dàng để viết kiểm thử cho phương thức này. Khi có nó, chúng ta có thể quay lại code gốc và thêm lệnh gọi.

```java
public class TransactionGate
{
	...
	public void postEntries(List entries) {
		List entriesToAdd = uniqueEntries(entries);
		for (Iterator it = entriesToAdd.iterator(); it.hasNext(); ) {
			Entry entry = (Entry)it.next();
			entry.postDate();
		}
		transactionBundle.getListManager().add(entriesToAdd);
	}
	...
}
```

Chúng ta vẫn còn một biến tạm thời mới ở đây, nhưng code đã bớt lộn xộn hơn nhiều. Nếu cần thêm nhiều code hoạt động với các `entry` không trùng lặp, chúng ta cũng có thể tạo một phương thức riêng và gọi nó từ đây. Nếu có thêm code cần làm việc với chúng, chúng ta có thể tạo mới một lớp và chuyển tất cả các phương thức mới đó sang lớp đó. Hiệu quả thực sự là chúng ta sẽ giữ phương thức này ở mức nhỏ và cuối cùng thu được các phương thức ngắn hơn, dễ hiểu hơn về tổng thể.

Đó là một ví dụ về Phương thức Ươm Mầm. Dưới đây là các bước bạn thực sự thực hiện:
1. Xác định vị trí bạn cần thay đổi code của mình.
2. Nếu thay đổi có thể được hình thành dưới dạng một chuỗi các câu lệnh ở một vị trí trong một phương thức, hãy viết ra lệnh gọi một phương thức mới sẽ thực hiện công việc liên quan và sau đó nhận xét nó. (Tôi thích làm điều này trước khi viết phương thức để tôi có thể hiểu được lệnh gọi phương thức sẽ trông như thế nào trong ngữ cảnh đó.)
3. Xác định những biến cục bộ cần từ phương thức nguồn và biến chúng thành tham số cho phương thức mới
4. Xác định xem phương thức vừa tạo có cần trả về giá trị cho phương thức nguồn hay không. Nếu có, hãy thay đổi lệnh gọi để giá trị trả về của nó được gán cho một biến.
5. Phát triển phương thức ươm mầm bằng _phương pháp phát triển dựa trên thử nghiệm - TDD (88)_.
6. Xóa comment trong phương thức nguồn để kích hoạt lời gọi.

Tôi khuyên bạn nên sử dụng _Phương thức Ươm Mầm_ bất cứ khi nào bạn thấy code đang thêm là một phần công việc riêng biệt hoặc bạn chưa thể thực hiện các kiểm thử xung quanh một phương thức. Tốt hơn là thêm code nội tuyến.

Đôi khi, khi bạn muốn sử dụng _Phương thức Ươm Mầm_, sự phụ thuộc trong lớp của bạn tệ đến mức không thể tạo một phiên bản của nó mà không giả mạo nhiều đối số hàm khởi tạo. Có một cách khác là sử dụng _Truyền Null (111)_. Khi cách đó không hiệu quả, hãy cân nhắc việc biến mầm thành một phương thức tĩnh công khai. Bạn có thể phải chuyển các biến thực thể của lớp nguồn làm đối số, nhưng nó sẽ cho phép bạn thực hiện thay đổi của mình. Việc tạo một hàm tĩnh cho mục đích này có vẻ kỳ lạ nhưng nó có thể hữu ích trong code kế thừa. Tôi có xu hướng xem các phương thức tĩnh trên các lớp như một khu vực tổ chức. Thông thường, sau khi bạn có một số số liệu thống kê và bạn nhận thấy rằng chúng có chung một số biến, bạn có thể thấy rằng bạn có thể tạo một lớp mới và chuyển các số liệu thống kê sang lớp mới làm phương thức phiên bản. Khi chúng thực sự xứng đáng trở thành phương thức phiên bản trên lớp hiện tại, chúng có thể được chuyển trở lại lớp khi cuối cùng bạn đã kiểm thử được nó.

### Ưu điểm và nhược điểm

_Ươm mầm phương thức_ có một số ưu điểm và nhược điểm. Trước tiên hãy xét những nhược điểm. Nhược điểm của _Ươm mầm phương thức_ là gì? Thứ nhất, khi sử dụng nó, về cơ bản là khẳng định bạn đang từ bỏ phương thức nguồn và lớp của nó vào lúc này. Bạn sẽ không kiểm thử nó và sẽ không làm cho nó tốt hơn — bạn chỉ thêm một số chức năng mới vào một phương thức mới. Từ bỏ phương thức hoặc lớp đôi khi là một lựa chọn thực tế, nhưng điều đó vẫn khá đáng buồn. Nó khiến code của bạn trong tình trạng nửa vời. Phương thức nguồn có thể chứa nhiều code phức tạp và mầm của phương thức mới. Đôi khi không rõ tại sao chỉ có công việc này diễn ra ở một nơi khác, nó khiến phương thức nguồn ở trạng thái kỳ lạ. Nhưng ít nhất điều đó cũng chỉ ra một số công việc phát sinh mà bạn có thể làm khi kiểm thử lớp nguồn sau này.

Mặc dù có nhược điểm, nhưng vẫn một số ưu điểm nổi bật. Khi bạn sử dụng _Ươm mầm phương thức_, bạn tách biệt rõ ràng code mới khỏi code cũ. Ngay cả khi bạn không thể kiểm thử code cũ ngay lập tức, ít nhất bạn cũng có thể xem các thay đổi của mình một cách riêng biệt và có giao diện rõ ràng giữa code mới và code cũ. Bạn thấy tất cả các biến bị ảnh hưởng và điều này có thể dễ dàng xác định xem code có đúng ngữ cảnh hay không.

## Ươm mầm lớp

_Ươm mầm phương thức_ là một kỹ thuật mạnh mẽ, nhưng trong một số tình huống phụ thuộc phức tạp, nó không đủ mạnh.

Hãy xem xét trường hợp bạn phải thực hiện các thay đổi đối với một lớp, nhưng không có cách nào để bạn có thể tạo đối tượng của lớp đó trong bộ kiểm thử khai thác trong khoảng thời gian hợp lý, vì vậy không có cách nào để ươm mầm phương thức và viết kiểm thử cho nó trên lớp đó. Có thể bạn có một tập hợp lớn các phần phụ thuộc mang tính sáng tạo, những thứ khiến việc khởi tạo lớp của bạn trở nên khó khăn. Hoặc bạn có thể có nhiều phụ thuộc ẩn. Để loại bỏ chúng, bạn cần thực hiện nhiều thao tác tái cấu trúc xâm lấn để tách chúng ra đủ tốt để biên dịch lớp trong kiểm thử khai thác.

Trong những trường hợp này, bạn có thể tạo một lớp khác để lưu giữ các thay đổi của mình và sử dụng nó từ lớp nguồn. Hãy xem xét một ví dụ đơn giản.

Đây là một phương thức cổ xưa trên lớp C++ có tên là `QuarterlyReportGenerator`:

```cpp
std::string QuarterlyReportGenerator::generate()
{
	std::vector<Result> results = database.queryResults(beginDate, endDate);
	std::string pageText;

	pageText += "<html><head><title>""Quarterly Report""</title></head><body><table>";

	if (results.size() != 0) {
		for (std::vector<Result>::iterator it = results.begin(); it != results.end(); ++it) {
			pageText += "<tr>";
			pageText += "<td>" + it->department + "</td>";
			pageText += "<td>" + it->manager + "</td>";
			char buffer [128];
			sprintf(buffer, "<td>$%d</td>", it->netProfit / 100);
			pageText += std::string(buffer);
			sprintf(buffer, "<td>$%d</td>", it->operatingExpense / 100);
			pageText += std::string(buffer);
			pageText += "</tr>";
		}
	} else {
		pageText += "No results for this period";
	}
	pageText += "</table>";
	pageText += "</body>";
	pageText += "</html>";

	return pageText;
}
```

Giả sử thay đổi mà chúng ta cần thực hiện là thêm hàng tiêu đề cho bảng HTML mà nó đang tạo. Hàng tiêu đề sẽ như thế này:

```html
"<tr><td>Department</td><td>Manager</td><td>Profit</td><td>Expenses</td></tr>"
```

Hơn nữa, hãy giả sử rằng đây là một lớp lớn và sẽ mất khoảng một ngày để lớp đó được đưa vào kiểm thử khai thác và đây là thời điểm mà chúng ta không đủ khả năng làm điều đó ngay bây giờ.

Chúng ta có thể hình thành sự thay đổi dưới dạng một lớp nhỏ có tên là `QuarterlyReportTableHeaderProducer` và phát triển nó bằng cách sử dụng _phương pháp phát triển dựa trên thử nghiệm (88)_

```cpp
using namespace std;

class QuarterlyReportTableHeaderProducer
{
public:
	string makeHeader();
};

string QuarterlyReportTableProducer::makeHeader()
{
	return "<tr><td>Department</td><td>Manager</td>"
		"<td>Profit</td><td>Expenses</td>";
}
```

Khi có nó, chúng ta tạo một thực thể và gọi nó trực tiếp trong `QuarterlyReportGenerator::generate()`:

```cpp
...
QuarterlyReportTableHeaderProducer producer;
pageText += producer.makeHeader();
...
```

Tôi chắc chắn rằng tại thời điểm này bạn đang nhìn vào phần trên và nói, "Anh đang đùa phải không. Thật nực cười khi tạo ra một lớp cho sự thay đổi này! Đó chỉ là một lớp nhỏ không mang lại bất kỳ lợi ích nào trong thiết kế. Nó giới thiệu một khái niệm hoàn toàn mới chỉ và làm lộn xộn code." Vâng, tại thời điểm này, điều đó là đúng. Lý do duy nhất chúng ta làm điều đó là để thoát khỏi tình trạng phụ thuộc tồi tệ, nhưng chúng ta hãy xem xét kỹ hơn.

Điều gì sẽ xảy ra nếu chúng ta đặt tên cho lớp là `QuarterlyReportTableHeaderGenerator` và đặt cho nó một giao diện?

```cpp
class QuarterlyReportTableHeaderGenerator
{
public:
	string generate();
};
```

Bây giờ lớp là một phần của khái niệm mà chúng ta đã quen thuộc. `QuarterlyReportTableHeaderGenerator` là một trình tạo, giống như `QuarterlyReportGenerator`. Cả hai đều có phương thức `generate()` trả về chuỗi. Chúng ta có thể ghi lại điểm chung đó trong code bằng cách tạo một lớp giao diện và để cả hai kế thừa từ nó:

```cpp
class HTMLGenerator
{
public:
	virtual ~HTMLGenerator() = 0;
	virtual string generate() = 0;
};

class QuarterlyReportTableHeaderGenerator : public HTMLGenerator
{
public:
	...
	virtual string generate();
	...
};
class QuarterlyReportGenerator : public HTMLGenerator
{
public:
	...
	virtual string generate();
	...
};
```

Khi chúng ta thực hiện nhiều công việc hơn, chúng ta có thể kiểm thử `QuarterlyReportGenerator` và thay đổi cách triển khai của nó để nó thực hiện hầu hết công việc bằng cách sử dụng các lớp `generator`.

Trong trường hợp này, chúng ta có thể nhanh chóng xếp lớp vào tập hợp các khái niệm mà chúng ta đã có trong ứng dụng. Trong nhiều trường hợp khác, chúng ta không thể làm được nhưng điều đó không có nghĩa là chúng ta nên chần chừ. Một số lớp mọc lên không bao giờ thể hiện các khái niệm chính trong ứng dụng. Thay vào đó, chúng trở thành những cái mới. Bạn có thể tạo ra một lớp và nghĩ rằng nó không có ý nghĩa gì đối với thiết kế của bạn cho đến khi bạn làm điều gì đó tương tự ở một nơi khác và nhận thấy sự tương đồng. Đôi khi, bạn có thể loại bỏ code trùng lặp trong các lớp mới và thường bạn phải đổi tên chúng, nhưng đừng mong đợi tất cả điều đó xảy ra cùng một lúc.

Cách bạn nhìn nhận một lớp học mới khi bạn tạo nó lần đầu tiên và cách bạn nhìn nhận nó sau một vài tháng thường khác nhau đáng kể. Việc bạn có lớp mới kỳ lạ này trong hệ thống của mình khiến bạn phải suy nghĩ rất nhiều. Khi cần thực hiện một thay đổi gần với nó, bạn có thể bắt đầu suy nghĩ xem liệu sự thay đổi đó có phải là một phần của khái niệm mới hay liệu khái niệm đó có cần thay đổi một chút hay không. Đây là một phần của quá trình thiết kế đang diễn ra.

Về cơ bản có hai trường hợp dẫn chúng ta đến _Ươm mầm lớp_. Trường hợp thứ nhất, những thay đổi của bạn sẽ dẫn đến việc thêm một trách nhiệm hoàn toàn mới vào một trong các lớp của mình. Ví dụ: trong phần mềm khai thuế, một số khoản khấu trừ nhất định có thể không thực hiện được vào những thời điểm nhất định trong năm. Bạn có thể xem cách thêm kiểm tra ngày vào lớp `TaxCalculator`, nhưng việc kiểm tra đó nằm ngoài trách nhiệm chính của `TaxCalculator`: tính thuế? Có lẽ nó nên ở một lớp mới. Trường hợp còn lại là trường hợp mà chúng ta lấy ví dụ ở đầu chương này. Chúng ta có một số chức năng nhỏ mà có thể đưa vào lớp hiện có, nhưng không thể đưa lớp đó vào kiểm thử khai thác. Nếu ít nhất có thể biên dịch chúng để khai thác, chúng ta có thể thử sử dụng _Ươm mầm phương thức_, nhưng thậm chị đôi khi chúng ta không may mắn như vậy.

Điều cần nhận thấy ở cả hai trường hợp này là mặc dù động lực là khác nhau nhưng khi nhìn vào kết quả, thực sự giữa chúng không có ranh giới rõ ràng. Liệu một phần chức năng có đủ mạnh để trở thành một trách nhiệm mới hay không là một lời kêu gọi phán xét. Hơn nữa, vì code thay đổi theo thời gian nên quyết định tạo ra một lớp thường có vẻ tốt hơn khi nhìn lại.

Dưới đây là các bước cho _Ươm mầm lớp_:

1. Xác định nơi bạn cần thay đổi code của mình.
2. Nếu sự thay đổi có thể được hình thành dưới dạng một chuỗi câu lệnh ở một vị trí trong một phương thức, hãy nghĩ ra một cái tên hay cho lớp mới sẽ thực hiện công việc này. Tiếp theo, viết code tạo một đối tượng của lớp mới ở vị trí đó và gọi phương thức sẽ thực hiện công việc bạn cần làm; sau đó comment những dòng mới lại.
3. Xác định những biến cục bộ bạn cần từ phương thức nguồn và đặt chúng làm đối số cho hàm tạo của lớp.
4. Xác định xem lớp mầm có cần trả về giá trị cho phương thức nguồn hay không. Nếu code, hãy cung cấp một phương thức trong lớp sẽ cung cấp các giá trị trả về và thêm lệnh gọi vào phương thức nguồn để nhận các giá trị đó.
5. Phát triển kiểm thử lớp mầm trước (xem _phần phát triển dựa trên thử nghiệm (88)_)
6. Xóa comment trong phương thức nguồn để cho phép tạo và gọi đối tượng.

### Ưu điểm và nhược điểm

Ưu điểm chính của _Ươm mầm lớp_ là nó cho phép bạn tiếp tục công việc của mình với sự tự tin hơn những gì bạn có thể có nếu bạn thực hiện những thay đổi mang tính xâm lấn. Trong C++, _Ươm mầm lớp_ có thêm lợi thế là bạn không phải sửa đổi bất kỳ tệp `header` hiện có nào để thực hiện thay đổi. Bạn chỉ cần đưa `header` của lớp mới vào tệp triển khai cho lớp nguồn. Ngoài ra, việc bạn thêm một tệp `header` mới vào dự án của mình là một điều tốt. Theo thời gian, bạn sẽ đưa các khai báo vào tệp `header` mới mà lẽ ra có thể nằm trong `header` của lớp nguồn. Điều này làm giảm tải biên dịch trên lớp nguồn. Ít nhất bạn sẽ biết rằng bạn không làm cho tình huống xấu trở nên tồi tệ hơn. Một thời gian sau, bạn có thể truy cập lại lớp nguồn và kiểm thử nó.

Nhược điểm chính của _Ươm mầm lớp_ là sự phức tạp về mặt khái niệm. Khi các lập trình viên tìm hiểu code base mới, họ sẽ phát triển cảm giác về cách các lớp chính hoạt động với nhau. Khi bạn sử dụng _Ươm mầm lớp_, bạn rút ruột các phần trừu tượng và thực hiện phần lớn công việc trong các lớp khác. Đôi khi, đây là điều hoàn toàn đúng đắn. Vào những lúc khác, bạn di chuyển về phía nó chỉ vì lưng bạn dựa vào tường. Những thứ lý tưởng nhất có thể tồn tại trong lớp đó sẽ trở thành mầm non chỉ để tạo ra sự thay đổi an toàn.
