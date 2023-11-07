---
layout: default
---

# Chương 23, Làm thế nào để biết rằng tôi không làm phá vỡ bất cứ thứ gì?

Code là một loại vật liệu xây dựng kỳ lạ. Hầu hết các vật liệu mà bạn có thể dùng để làm đồ vật, chẳng hạn như kim loại, gỗ và nhựa, đều bị hao mòn. Chúng bị hỏng khi được sử dụng qua thời gian. Code thì lại khác nhau. Kể cả bạn cứ để mặc nó, nó cũng không bao giờ bị hỏng. Họa chăng là có vài tia năng lượng làm mất một bit trong ổ cứng của bạn, cách duy nhất khiến nó bị lỗi là có ai đó chỉnh sửa. Chạy đi chạy lại một cỗ máy bằng kim loại, đến cuối cùng nó cũng hỏng. Chạy đi chạy lại cùng một đoạn code, và, tốt, nó cứ chạy đi chạy lại.

Điều này đặt một gánh nặng lớn lên chúng ta với tư cách là lập trình viên. Chúng ta không chỉ là tác nhân chính gây ra lỗi trong phần mềm mà còn khá dễ để gây ra điều đó. Làm thế nào để dễ dàng thay đổi code? Về mặt cơ học, khá đơn giản. Bất kỳ ai cũng có thể mở trình soạn thảo văn bản và phun ra những thứ vô nghĩa và phức tạp. Nhập một bài thơ. Một số trong số chúng sẽ biên dịch (hãy truy cập www.ioccc.org và xem cuộc thi Obfuscate C để biết chi tiết). Bỏ qua tính hài hước, thật đáng ngạc nhiên khi việc phá vỡ phần mềm lại dễ dàng như thế. Bạn đã bao giờ lần theo một lỗi bí ẩn rồi phát hiện ra có một ký tự đi lạc nào đó bạn vô tình nhập vào? Một số ký tự đã được nhập khi bìa sách rơi xuống lúc bạn chuyển nó qua bàn phím của mình? Code là vật liệu khá dễ vỡ.

Trong chương này, chúng ta sẽ thảo luận về nhiều cách khác nhau để giảm thiểu rủi ro khi chỉnh sửa. Một số trong số chúng là máy móc và một số là tâm lý (ouch!), nhưng việc tập trung vào chúng là rất quan trọng, đặc biệt là khi chúng ta phá bỏ sự phụ thuộc trong code kế thừa để thực hiện các kiểm thử.

## Chỉnh sửa siêu nhận thức

Điều chúng ta thực sự làm khi chỉnh sửa code là gì? Chúng ta đang cố gắng đạt được điều gì? Chúng ta thường có những mục tiêu lớn. Chúng ta muốn thêm một tính năng hoặc sửa lỗi. Thật tuyệt khi biết những mục tiêu đó là gì, nhưng làm cách nào để biến chúng thành hành động?

Khi ngồi trước bàn phím, chúng ta có thể phân loại tất cả tổ hợp phím được thực hiện thành hai loại. Có thể thay đổi hành vi của phần mềm hoặc không. Nhập văn bản trong một bình luận? Điều đó không thay đổi hành vi. Nhập văn bản trong một chuỗi ký tự? Điều đó thì có, hầu như mọi lúc. Nếu chuỗi ký tự nằm trong đoạn code không bao giờ được gọi, thì hành vi sẽ không thay đổi. Tổ hợp phím mà bạn thực hiện sau đó kết thúc một cuộc gọi phương thức sử dụng chuỗi ký tự đó, vậy thì, điều đó sẽ thay đổi hành vi. Vì vậy, về mặt kỹ thuật, việc giữ phím cách khi định dạng code là tái cấu trúc rất vi mô. Đôi khi gõ code cũng là tái cấu trúc. Việc thay đổi số trong biểu thức được sử dụng trong code của bạn không phải là tái cấu trúc; đó là _thay đổi về chức năng_ và điều quan trọng là phải biết điều đó khi bạn thay đổi.

Đây là cốt lõi của lập trình, biết chính xác tác dụng của mỗi lần nhấn phím. Điều này không có nghĩa là bạn phải thông suốt mọi thứ, nhưng bất cứ điều gì giúp chúng ta biết - thực sự biết - cách chúng ta đang tác động đến phần mềm khi chúng ta nhập đều có thể giúp giảm lỗi. _Phát triển dựa trên thử nghiệm (TDD)_ (88) rất hiệu quả theo cách này. Khi bạn có thể đưa code của mình vào bộ kiểm thử khai thác và chạy kiểm thử đối với code đó trong vòng chưa đầy một giây, bạn có thể chạy kiểm thử bất cứ khi nào bạn cần với tốc độ cực nhanh và thực sự biết tác động của thay đổi là gì.

> Nếu nó vẫn chưa ra mắt vào thời điểm cuốn sách này được phát hành, tôi nghi ngờ rằng ai đó sẽ sớm phát triển một IDE cho phép bạn chỉ định một tập hợp các kiểm thử sẽ chạy ở mỗi lần nhấn phím. Đó sẽ là một cách đáng kinh ngạc để đóng vòng phản hồi.
>
> Điều đó phải xảy ra. Không thể tránh khỏi. Đã có những IDE kiểm tra cú pháp trên mỗi lần nhấn phím và thay đổi màu mã khi có lỗi. Kích hoạt kiểm thử khi chỉnh sửa là bước tiếp theo.

Các kiểm thử thúc đẩy chỉnh sửa siêu nhận thức. Lập trình cặp cũng vậy. Chỉnh sửa siêu nhận thức nghe có vẻ mệt mỏi? Vâng, quá nhiều của bất cứ điều gì là mệt mỏi. Điều quan trọng là nó không gây khó chịu. Chỉnh sửa siêu nhận thức là trạng thái dòng chảy, trạng thái mà bạn có thể ngắt kết nối với thế giới bên ngoài và chỉ làm việc với code. Nó thực sự có thể rất mới mẻ. Cá nhân tôi cảm thấy mệt mỏi hơn nhiều khi không nhận được bất kỳ phản hồi nào. Lúc đó, tôi sợ rằng mình đang phá hỏng code mà không biết. Tôi đang đấu tranh để duy trì tất cả trạng thái này trong đầu, ghi nhớ những gì tôi đã thay đổi và những gì tôi chưa thay đổi, và suy nghĩ về cách tôi có thể thuyết phục bản thân sau này rằng tôi đã thực sự làm được những gì mình đặt ra làm.

## Mục tiêu chỉnh sửa duy nhất

Tôi không nghĩ rằng ấn tượng đầu tiên của mọi người về ngành công nghiệp máy tính là giống nhau, nhưng khi lần đầu tiên tôi nghĩ đến việc trở thành một lập trình viên, tôi đã thực sự bị thu hút bởi những câu chuyện về các lập trình viên siêu thông minh, những chàng trai và cô gái có thể giữ trạng thái của toàn bộ hệ thống trong đầu, viết code chính xác một cách nhanh chóng và ngay lập tức biết được thay đổi này là đúng hay sai. Đúng là mọi người rất khác nhau về khả năng ghi nhớ một lượng lớn chi tiết phức tạp trong đầu. Tôi có thể làm điều đó, ở một mức độ nào đó. Tôi đã từng biết đến nhiều phần mơ hồ của ngôn ngữ lập trình C++, và tại một thời điểm nào đó, tôi đã nhớ rất rõ các chi tiết của siêu mô hình UML trước khi tôi nhận ra rằng việc trở thành một lập trình viên với cùng với biết nhiều về các chi tiết của UML thực sự vô nghĩa và hơi buồn.

Sự thật là có nhiều loại hình "thông minh" khác nhau. Nhớ được nhiều trạng thái hệ thống trong đầu có thể hữu ích, nhưng nó không thực sự giúp chúng ta đưa ra quyết định tốt hơn. Tại thời điểm này trong sự nghiệp của mình, tôi nghĩ mình là một lập trình viên giỏi hơn nhiều so với trước đây, mặc dù tôi biết ít hơn về các chi tiết của từng ngôn ngữ mà tôi làm việc. Phán đoán là một kỹ năng lập trình quan trọng và chúng ta có thể gặp rắc rối khi chúng ta cố gắng hành động như những lập trình viên siêu thông minh.

Đã ban giờ bạn gặp sự việc sau? Bạn bắt đầu làm một việc, và sau đó bạn nghĩ, "Hừm, có lẽ mình nên dọn dẹp cái này." Vì vậy, bạn dừng lại để cấu trúc lại một chút, nhưng bạn bắt đầu nghĩ xem code thực sự sẽ trông như thế nào, rồi bạn tạm dừng. Tính năng mà bạn đang làm vẫn cần được hoàn thiện, vì vậy bạn quay lại vị trí ban đầu nơi bạn đang chỉnh sửa code. Bạn quyết định rằng bạn cần gọi một phương thức, sau đó bạn nhảy đến vị trí của phương thức đó, nhưng bạn phát hiện ra rằng phương thức đó sẽ cần thực hiện một việc khác, vì vậy bạn bắt đầu thay đổi nó trong khi thay đổi ban đầu của bạn đang chờ được xử lý và (nín thở) đối tác trong cặp của bạn ở bên cạnh bạn hét lên "Đúng, đúng, đúng! Khắc phục điều đó và sau đó chúng tôi sẽ làm điều này." Bạn cảm thấy mình giống như một con ngựa đua đang chạy trên đường đua và đối tác của bạn không thực sự giúp ích được gì. Anh ấy đang cưỡi bạn như một tay đua ngựa hoặc tệ hơn là một con bạc trên khán đài.

Chà, đó là cách nó diễn ra ở một số nhóm. Một cặp có một chương trình thú vị, nhưng 3 quý cuối năm chỉ dùng để sửa tất cả code mà họ đã phá vỡ trong quý trước. Nghe có vẻ kinh khủng, phải không? Nhưng, không, đôi khi nó rất vui. Bạn và đối tác của mình có thể bước ra khỏi cỗ máy như những anh hùng. Bạn đã gặp con thú trong hang ổ của nó và giết nó. Bạn là nhất.

Nó có đáng không? Hãy xem xét một góc nhìn khác về điều này.

Bạn cần thực hiện thay đổi với một phương thức. Bạn đã có lớp đó trong bộ kiểm thử khai thác và bạn bắt đầu thực hiện thay đổi. Nhưng sau đó bạn nghĩ, "Này, mình cần thay đổi phương thức khác ở đây," bạn dừng lại và chuyển qua nó. Nó trông có vẻ lộn xộn, vì vậy bạn bắt đầu định dạng lại một hoặc hai dòng để xem chuyện gì đang xảy ra. Đối tác của bạn nhìn bạn và nói, "Bạn đang làm gì vậy?" Bạn nói, "Ồ, tôi đang kiểm tra xem liệu chúng ta có phải thay đổi phương thức X hay không." Đối tác của bạn nói, "Này, hãy làm từng việc một." Đối tác của bạn viết tên của phương thức X trên một tờ giấy đặt cạnh máy tính và bạn quay lại hoàn thành việc chỉnh sửa. Bạn chạy các kiểm thử của mình và nhận thấy rằng tất cả chúng đều vượt qua. Sau đó, bạn đi qua và nhìn vào phương thức khác. Chắc chắn, bạn phải thay đổi nó. Bạn bắt đầu viết một kiểm thử khác. Sau khi lập trình thêm một chút, bạn chạy thử nghiệm và bắt đầu tích hợp. Bạn và đối tác của bạn nhìn sang phía bên kia của bàn. Ở đó bạn thấy hai lập trình viên khác. Một người la lên "Đúng, đúng, đúng! Khắc phục điều đó và sau đó chúng tôi sẽ làm điều này." Họ đã làm việc với nhiệm vụ đó trong nhiều giờ và trông khá mệt mỏi. Nếu lịch sử là bất kỳ hướng dẫn nào, họ sẽ không tích hợp được và mất thêm vài giờ để làm việc cùng nhau.

Tôi có một câu thần chú nhỏ mà tôi lặp đi lặp lại với chính mình khi làm việc: "Lập trình là nghệ thuật làm từng việc một". Khi tôi ghép cặp, tôi luôn yêu cầu đối tác của mình thử thách tôi về điều đó, hỏi tôi "Bạn đang làm gì vậy?" Nếu tôi trả lời nhiều hơn một điều, chúng tôi chọn một điều. Tôi làm như vậy cho đối tác của tôi. Thành thật mà nói, nó chỉ nhanh hơn. Khi bạn đang lập trình, khá dễ dàng để loại bỏ một đoạn quá lớn tại một thời điểm. Nếu bạn làm như vậy, bạn sẽ kết thúc việc cố gắng và chỉ thử mọi thứ để làm cho mọi thứ hoạt động hơn là làm việc rất có chủ ý và thực sự biết code của bạn làm gì.

## Bảo toàn bản gốc

Khi chúng ta chỉnh sửa code, có nhiều cách khiến chúng ta mắc lỗi. Chúng ta có thể viết sai chính tả, có thể sử dụng sai kiểu dữ liệu, có thể sử dụng biến này nhưng lại nghĩ là biến khác - danh sách này dài vô tận. Tái cấu trúc đặc biệt dễ bị lỗi. Thường thì nó liên quan đến chỉnh sửa xâm lấn. Chúng ta sao chép mọi thứ xung quanh và tạo các lớp và phương thức mới; quy mô lớn hơn nhiều so với việc chỉ thêm một dòng code mới.

Nói chung, cách để xử lý tình huống này là viết các kiểm thử. Khi chúng ta có các kiểm thử tại chỗ, chúng ta có thể phát hiện ra nhiều lỗi mắc phải khi thay đổi code. Thật không may, trong nhiều hệ thống, chúng ta phải cấu trúc lại một chút chỉ để làm cho hệ thống đủ khả năng để kiểm thử, sau đó tiếp tục tái cấu trúc lại. Những lần tái cấu trúc ban đầu này (các kỹ thuật phá bỏ sự phụ thuộc trong danh mục ở Chương 25) được thực hiện mà không cần kiểm thử và chúng phải được thực hiện đặc biệt thận trọng.

Khi bắt đầu sử dụng những kỹ thuật này, chúng ta rất dễ bị cám dỗ và muốn làm thật nhiều việc. Khi cần trích xuất toàn bộ nội dung của một phương thức, thay vì chỉ sao chép và dán các đối số khi khai báo, chúng ta lại thực hiện các công việc dọn dẹp khác. Ví dụ: khi phải trích xuất nội dung của một phương thức và làm cho nó tĩnh (_Expose Static Method (345)_), như sau:

```java
public void process(List orders,
	int dailyTarget,
	double interestRate,
	int compensationPercent) {
		...
		// complicated code here
		...
}
```

Tôi đã trích xuất nó như thế này, tạo ra một vài lớp trợ giúp.

```java
public void process(List orders,
	int dailyTarget,
	double interestRate,
	int compensationPercent) {
		processOrders(new OrderBatch(orders),
		new CompensationTarget(dailyTarget,
			interestRate * 100,
			compensationPercent));
}
```

Đó là một ý định tốt. Tôi muốn làm cho thiết kế hệ thống tốt hơn khi tôi phá vỡ các phụ thuộc, nhưng nó hoạt động không tốt lắm. Cuối cùng, tôi mắc phải những sai lầm ngớ ngẩn và không có kiểm thử nào để phát hiện ra chúng, chúng thường được phát hiện muộn hơn rất nhiều so với cần thiết.

Khi bạn phá vỡ các phụ thuộc để kiểm thử, bạn cần phải thật cẩn thận. Một điều tôi hay làm là _Bảo toàn bản gốc_ bất cứ khi nào có thể. Khi bạn cần tránh thay đổi bản gốc hoàn toàn, bạn có thể cắt/sao chép và dán toàn bộ bản gốc của phương thức từ nơi này sang nơi khác và giảm thiểu mọi khả năng xảy ra lỗi.

Trong ví dụ trước, cuối cùng code sẽ như thế này:

```java
public void process(List orders,
	int dailyTarget,
	double interestRate,
	int compensationPercent) {
		processOrders(orders, dailyTarget, interestRate,
			compensationPercent);
}

private static void processOrders(List orders,
	int dailyTarget,
	double interestRate,
	int compensationPercent) {
		...
}
```

Việc chỉnh sửa tham số mà rất dễ dàng. Về cơ bản, chỉ có một vài bước có như sau:

1. Tôi cắt/sao chép toàn bộ danh sách tham số:
```java
List orders,
int dailyTarget,
double interestRate,
int compensationPercent
```
2. Sau đó, tôi khai báo phương thức mới:
```java
private void processOrders() {
}
```
3. Tôi dán danh sách tham số vào phần khai báo phương thức mới:
```java
private void processOrders(List orders,
	int dailyTarget,
	double interestRate,
	int compensationPercent) {
}
```
4. Sau đó tôi lệnh gọi sang phương thức mới:
```java
processOrders();
```
5. Tôi dán danh sách tham số vào lệnh gọi:
```java
processOrders(List orders,
	int dailyTarget,
	double interestRate,
	int compensationPercent);
```
6. Cuối cùng, tôi bỏ kiểu dữ liệu đi, để lại tên của các tham số:
```java
processOrders(orders,
	dailyTarget,
	interestRate,
	compensationPercent);
```

Khi bạn làm đi làm lại những động tác này, chúng sẽ trở nên tự động và bạn có thể cảm thấy tự tin hơn với những thay đổi của mình. Bạn có thể tập trung vào các vấn đề khác có thể gây ra lỗi khi bạn phá vỡ phụ thuộc. Chẳng hạn, phương thức mới của bạn có ẩn một phương thức có bản gốc của lớp cơ sở không?

Có số ứng dụng khác của _Bảo toàn bản gốc_. Bạn có thể dùng để khai báo phương thức mới. Bạn cũng có thể tạo một tập hợp các phương thức thể hiện cho tất cả các đối số của một phương thức khi bạn đang thực hiện phương pháp tái cấu trúc _Chia nhỏ phương thức đối tượng_. Xem _Chia nhỏ phương thức đối tượng (330)_ để biết chi tiết.

## Tận dụng trình biên dịch

Mục đích chính của trình biên dịch là dịch code nguồn sang một số dạng khác, nhưng trong các ngôn ngữ có kiểu dữ liệu tĩnh, bạn có thể làm được nhiều hơn thế. Bạn có thể tận dụng tính năng kiểm tra kiểu dữ liệu và sử dụng để xác định những thay đổi bạn cần thực hiện. Tôi gọi cách làm này là _tận dụng trình biên dịch_. Đây là một ví dụ về cách thực hiện.

Với ngôn ngữ lập trình C++, tôi có một số biến toàn cục như sau

```Cpp
double domestic_exchange_rate;
double foreign_exchange_rate;
```

Một nhóm phương thức trong cùng tệp sử dụng các biến đó, nhưng tôi muốn tìm một số cách để thay đổi chúng khi kiểm thử nên tôi sử dụng kỹ thuật _Đóng gói tham chiếu toàn cục (339)_ cho phần danh mục.

Để làm điều này, tôi viết một lớp xung quanh các khai báo và khai báo một biến của lớp đó.

```Cpp
class Exchange
{
public:
	double domestic_exchange_rate;
	double foreign_exchange_rate;
};

Exchange exchange;
```

Bây giờ tôi biên dịch để tìm tất cả những nơi mà trình biên dịch không thể tìm thấy `local_exchange_rate` và `foreign_exchange_rate`, đồng thời thay đổi để chúng được truy cập từ đối tượng `exchange` ở trên. Dưới đây là trước và sau của một trong những thay đổi đó:

```Cpp
total = domestic_exchange_rate * instrument_shares;
```

trở thành:

```Cpp
total = exchange.domestic_exchange_rate * instrument_shares;
```

Điều cốt lõi của kỹ thuật này là bạn để trình biên dịch giúp bạn tìm tới những thay đổi cần thực hiện. Điều này không có nghĩa là bạn ngừng suy nghĩ về những gì cần thay đổi; nó chỉ có nghĩa là bạn để trình biên dịch thực hiện công việc chân tay cho bạn, trong một số trường hợp. Quan trọng là phải biết trình biên dịch sẽ tìm cái gì và không tìm cái gì để chúng ta không bị ru ngủ trong niềm tin sai lầm.

_Tận dụng Trình biên dịch_ gồm hai bước:
1. Thay đổi khai báo gây lỗi biên dịch
2. Điều hướng đến những lỗi đó và thực hiện thay đổi

Bạn có thể tận dụng trình biên dịch để thực hiện các thay đổi cấu trúc cho chương trình của mình, như chúng tôi đã làm trong ví dụ _Đóng gói tham chiếu toàn cục (339)_. Bạn cũng có thể sử dụng nó với thay đổi kiểu ban đầu. Một trường hợp phổ biến là thay đổi kiểu khai báo biến từ lớp thành giao diện (interface) và sử dụng các lỗi để xác định phương thức nào cần có trên giao diện.

Tận dụng trình biên dịch không phải lúc nào cũng mang tính thực tế. Nếu quá trình dựng mất nhiều thời gian, thì thực tế hơn là tìm kiếm những nơi bạn cần thực hiện thay đổi. Xem _Chương 7, Mất nhiều thời gian để tạo ra sự thay đổi_, để biết cách vượt qua vấn đề đó. Nhưng khi bạn có thể làm được, _Tận dụng Trình biên dịch_ là một cách hữu ích. Nhưng hãy cẩn thận; bạn có thể gây ra các lỗi tinh vi nếu bạn thực hiện nó một cách mù quáng.

Tính năng của ngôn ngữ mang lại cho chúng ta nhiều khả năng mắc lỗi nhất khi chúng ta dựa vào là tính kế thừa. Đây là một ví dụ:

Chúng ta có một phương thức tên `getX()` trong một lớp Java:

```java
public int getX() {
	return x;
}
```


Chúng ta muốn tìm tất cả các vị trí xuất hiện của nó nên sẽ đưa nó vào nhận xét:

```java
/*
public int getX() {
	return x;
} */
```

Bây giờ hãy biên dịch lại.

Đoán xem? Chúng ta không nhận được bất kỳ lỗi nào. Điều này có nghĩa là `getX()` là một phương thức không được sử dụng? Không hẳn. Nếu `getX()` được khai báo là một phương thức cụ thể trong một lớp cha, thì việc đưa `getX` vào nhận xét trong lớp hiện tại chỉ ảnh hưởng đến phương thức trong lớp cha được sử dụng. Một tình huống tương tự có thể xảy ra với các biến và kế thừa.

_Tận dụng Trình biên dịch_ là một kỹ thuật mạnh mẽ, nhưng bạn phải biết giới hạn của nó là gì; nếu không, bạn có thể sẽ mắc phải một số sai lầm nghiêm trọng.

### Lập trình theo cặp

Có thể bạn đã từng được nghe về _Lập trình theo cặp_. Nếu bạn đang sử dụng quy trình Extreme Programming (XP) thì có lẽ bạn đang sử dụng nó. Tốt. Đó là một cách rất tốt để nâng cao chất lượng và phổ biến kiến thức trong nhóm.

Nếu bạn chưa từng lập trình theo cặp, tôi khuyên bạn nên thử nó. Đặc biệt là khi sử dụng các kỹ thuật phá bỏ sự phụ thuộc mà tôi đã mô tả trong cuốn sách này.

Rất dễ mắc lỗi và không biết rằng mình đã làm hỏng phần mềm. Một cặp mắt thứ hai chắc chắn sẽ có ích. Hãy đối mặt với nó, làm việc với code kế thừa giống như ca phẫu thuật và các bác sĩ không bao giờ phẫu thuật một mình.

Để có thêm thông tin về lập trình theo cặp, hãy xem _Pair Programming Illuminated_ bởi Laurie Williams và Robert Kessler (Addison-Wesley 2002) và truy cập www.pairprogramming.com.
