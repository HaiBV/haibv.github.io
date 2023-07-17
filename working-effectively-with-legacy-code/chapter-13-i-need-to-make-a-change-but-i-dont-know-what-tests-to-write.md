---
layout: default
---

# Chương 13, Tôi cần thực hiện thay đổi nhưng tôi không biết kiểm thử nào phải viết

Khi mọi người nói về kiểm thử, họ thường đề cập đến các kiểm thử sử dụng để tìm lỗi. Thường thì những kiểm thử này là kiểm thử thủ công. Viết các kiểm thử tự động để tìm lỗi trong code kế thừa thường không mang lại cảm giác hiệu quả bằng việc chạy thử code. Nếu bạn có một số cách để thực thi code kế thừa một cách thủ công, bạn thường có thể tìm ra lỗi rất nhanh. Nhược điểm là bạn phải làm đi làm lại công việc thủ công đó bất cứ khi nào bạn thay đổi code. Và, thành thật mà nói, mọi người không làm điều đó. Gần như mọi nhóm mà tôi từng làm việc phụ thuộc vào kiểm thử thủ công để tìm những thay đổi của họ đều đã bị tụt hậu rất xa. Sự tự tin của nhóm không phải là những gì nó có thể được.

Không, tìm lỗi trong code kế thừa thường không phải là vấn đề. Về mặt chiến lược, nó thực sự có thể là nỗ lực sai hướng. Thông thường tốt hơn là làm điều gì đó giúp nhóm của bạn bắt đầu viết code chính xác một cách nhất quán. Cách để giành chiến thắng là tập trung nỗ lực vào việc không đưa lỗi vào code ngay từ đầu.

Kiểm thử tự động là một công cụ rất quan trọng, nhưng không phải để tìm lỗi — ít nhất là không phải trực tiếp. Nói chung, các kiểm thử tự động nên chỉ định một mục tiêu mà chúng ta muốn hoàn thành hoặc cố gắng duy trì hành vi đã có. Trong dòng phát triển tự nhiên, các kiểm thử _chỉ định_ trở thành các kiểm thử _bảo tồn_. Bạn sẽ tìm thấy lỗi, nhưng thường không phải là lần đầu tiên chạy kiểm thử. Bạn tìm thấy lỗi trong các lần chạy sau khi bạn thay đổi hành vi mà bạn không mong đợi.

Điều này sẽ giúp chúng ta với code kế thừa ở đâu? Trong code kế thừa, chúng ta có thể không có bất kỳ kiểm thử nào đối với những thay đổi mà chúng ta cần thực hiện, vì vậy, không có cách nào để thực sự xác minh rằng chúng ta đang duy trì hành vi khi thực hiện thay đổi. Vì lý do này, cách tiếp cận tốt nhất có thể thực hiện khi cần thực hiện thay đổi là củng cố khu vực chúng ta muốn thay đổi bằng các kiểm thử để cung cấp một số loại mạng lưới an toàn. Chúng ta sẽ tìm thấy các lỗi trong quá trình thực hiện và sẽ phải xử lý chúng, nhưng trong hầu hết các code kế thừa, nếu coi việc tìm và sửa tất cả các lỗi là mục tiêu của mình thì chúng ta sẽ không bao giờ hoàn thành.

## Kiểm thử đặc tính

OK, vậy chúng ta cần các kiểm thử - chúng ta viết chúng như thế nào? Một cách để tiếp cận vấn đề này là tìm hiểu phần mềm phải làm gì và sau đó viết các kiểm thử dựa trên đó. Chúng ta có thể cố gắng tìm kiếm các tài liệu yêu cầu cũ và bản ghi nhớ dự án, sau đó ngồi xuống và bắt đầu viết kiểm thử. Chà, đó là một cách tiếp cận, nhưng không phải là cách tốt lắm. Trong gần như mọi hệ thống kế thừa, những gì hệ thống làm quan trọng hơn những gì nó phải làm. Nếu viết kiểm thử dựa trên giả định của chúng ta về những gì hệ thống phải làm, thì chúng ta sẽ quay lại tìm lỗi một lần nữa. Việc tìm lỗi rất quan trọng, nhưng mục tiêu của chúng ta ngay bây giờ là viết các kiểm thử tại chỗ để giúp chúng ta thực hiện các thay đổi một cách chắc chắn hơn.

Các kiểm thử mà chúng ta cần khi muốn duy trì hành vi là những gì tôi gọi là _kiểm thử đặc tính_. _Kiểm thử đặc tính_ là một kiểm thử đặc trưng cho hành vi thực tế của một đoạn code. Không có câu "Chà, nó nên làm cái này" hoặc "Tôi nghĩ nó làm cái kia." Các kiểm thử ghi lại hành vi thực tế hiện tại của hệ thống.

Đây là một thuật toán nhỏ để xác định kiểm thử đặc tính:
1. Sử dụng một đoạn code trong kiểm thử khai thác.
2. Viết một khẳng định mà bạn biết sẽ thất bại.
3. Hãy để thất bại cho bạn biết hành vi đó là gì.
4. Thay đổi kiểm thử để nó mong đợi hành vi mà code tạo ra.
5. Lặp lại.
Trong ví dụ sau, tôi khá chắc chắn rằng `PageGenerator` sẽ không tạo ra chuỗi “fred”:

```java
void testGenerator() {
  PageGenerator generator = new PageGenerator();
  assertEquals("fred", generator.generate());
}
```

Chạy kiểm thử của bạn vnó thất bại. Khi điều đó xảy ra, bạn đã tìm ra code thực sự làm gì trong điều đó. Chẳnđược khi quyết, nhìn nhận code trước, khi này` hướng được khởi tạo sẽ tạo ra một chuỗi trống khi phương thứLúc này, c tạo ta nó được gọi:

``
Time: 0ta
There was 1 failure:
1) testGenerator(PageGeneratorTest)
junivề t.framework.ComparisonFailure: biểu thị redlà:<>
  at PageGeneratorTest.testGenerator
    (PaaGene:9)
  at sun.này.invoke0
    (Native Method)
  at sun.reflect.NativeMethodAccessorImpl.invoke
    (NativeMethodAccessorImpl.java:39)
  at sun.reflect.DelegatingMethodAccessorImpl.invoke
    (DelegatingMethodAccessorImpl.java:25)
FAILURES!!!
Tests run: 1, Failures: 1, Errors: 0
```

Chúng ta có thể thay đổi để kiểm thử đó được vượt qua:

```java
void testGenerator() {
  PageGenerator generator = new PageGenerator();
  assertEquals("", generator.generate());
}
```

Về cơ bản, có điều gì đó kỳ lạ khi làm điều này nếu bạn biết những ý nghĩa quen thuộc của kiểm thử, là để kiểm tra. Nếu chúng ta chỉ đưa các giá trị mà phần mềm tạo ra vào các kiểm thử, liệu các kiểm thử của chúng ta có thực sự kiểm tra được điều gì không?

Nếu phần mềm có lỗi thì sao? Các giá trị mong đợi mà chúng ta đưa vào các kiểm thử của mình đơn giản là sai.

Vấn đề sẽ được giải quyết khi chúng ta nhìn nhận các kiểm thử này theo một hướng khác. Chúng không thực sự là những kiểm thử được viết như một tiêu chuẩn vàng mà phần mềm phải tuân theo. Lúc này, chúng ta không cố gắng tìm lỗi. Chúng ta đang cố gắng đưa vào một cơ chế để tìm lỗi về sau này, những lỗi biểu thị là sự khác biệt so với hành vi hiện tại của hệ thống. Khi chúng ta áp dụng quan điểm này, quan điểm về các kiểm thử này sẽ khác: Chúng không có bất kỳ thẩm quyền đạo đức nào; chúng chỉ ở đó ghi lại những phần hệ thống thực sự làm. Khi chúng ta có thể thấy những gì các thành phần thực hiện, chúng ta có thể sử dụng kiến thức đó cùng với kiến thức về những gì hệ thống phải làm để tạo ra những thay đổi. Thành thật mà nói, điều rất quan trọng là phải có kiến thức về những gì hệ thống thực sự làm ở một nơi nào đó. Chúng ta thường có thể tìm ra hành vi cần bổ sung bằng cách nói chuyện với người khác hoặc thực hiện một số tính toán, nhưng nếu không có các kiểm thử, không có cách nào khác để biết hệ thống thực sự làm gì ngoại trừ việc "chơi máy tính" trong tâm trí chúng ta, đọc code và cố gắng suy luận xem các giá trị sẽ như thế nào vào những thời điểm cụ thể. Một số người làm điều đó nhanh hơn những người khác, nhưng bất kể chúng ta có thể làm điều đó nhanh như thế nào, thì việc phải làm đi làm lại nhiều lần cũng khá tẻ nhạt và lãng phí.

> Kiểm thử đặc tính ghi lại hành vi thực tế của một đoạn code. Nếu chúng ta tìm thấy điều gì đó bất ngờ khi viết chúng, chúng ta dành công sức để làm rõ một số điều. Nó có thể là một lỗi. Điều đó không có nghĩa là chúng ta không đưa kiểm thử vào bộ kiểm thử của mình; thay vào đó, chúng ta nên đánh dấu nó là đáng ngờ và tìm hiểu tác động của việc sửa nó.

Ngoài những gì đã mô tả ở trên, còn rất nhiều điều để nói về kiểm thử đặc tính. Trong ví dụ về trình tạo trang, có vẻ như chúng ta đang nhận các giá trị kiểm thử một cách mù quáng bằng cách đưa các giá trị vào code và lấy lại giá trị trả về trong các xác nhận. Chúng ta có thể làm điều đó nếu chúng ta hiểu rõ về những gì code phải làm. Trong một số trường hợp, chẳng hạn như không làm gì với một đối tượng và sau đó xem phương thức của nó tạo ra cái gì, rất dễ nghĩ và đáng để mô tả, nhưng chúng ta sẽ làm gì tiếp theo? Tổng số kiểm thử mà chúng ta có thể áp dụng cho một thứ chẳng hạn như trình tạo trang là bao nhiêu? Nó là vô tận. Chúng ta có thể dành phần lớn cuộc đời mình để viết hết trường hợp này đến trường hợp khác cho lớp này. Khi nào chúng ta dừng lại? Có cách nào để biết trường hợp nào quan trọng hơn những trường hợp khác không?

Điều quan trọng cần nhận ra là ở đây chúng ta không viết kiểm thử hộp đen. Chúng ta được phép xem code mà chúng ta đang mô tả. Bản thân code này có thể cung cấp cho chúng ta ý tưởng về chức năng của nó và nếu chúng ta có thắc mắc, thì các kiểm thử là một nguồn thông tin lý tưởng để hỏi. Bước đầu tiên trong việc mô tả đặc điểm là bạn ở vào trạng thái tò mò về hành vi của code. Tại thời điểm đó, chúng ta chỉ viết các kiểm thử cho đến khi hài lòng và hiểu nó. Liệu có bao gồm mọi thứ trong code không? Có thể không. Nhưng sau đó chúng ta sẽ làm bước tiếp theo. Chúng ta nghĩ về những thay đổi muốn thực hiện trong code và cố gắng tìm hiểu xem liệu các kiểm thử đã viết có phát hiện ra bất kỳ vấn đề nào chúng ta có thể gây ra hay không. Nếu chúng không phát hiện ra điều gì, chúng ta sẽ bổ sung thêm các kiểm thử cho đến khi cảm thấy tự tin rằng chúng sẽ làm được. Nếu chúng ta không thể cảm nhận được sự tự tin đó, sẽ an toàn hơn nếu cân nhắc thay đổi phần mềm theo một cách khác. Có lẽ chúng ta có thể làm một phần của những gì chúng ta đã xem xét đầu tiên.

> Quy tắc sử dụng phương thức
> Trước khi bạn sử dụng một phương thức trong hệ thống kế thừa, hãy kiểm tra xem có kiểm thử nào cho phương thức đó không. Nếu không có, hãy viết chúng. Khi bạn làm điều này một cách nhất quán, bạn sử dụng các kiểm thử như một phương tiện giao tiếp. Mọi người có thể nhìn vào chúng và hiểu được những gì họ có thể và không thể mong đợi từ phương thức này. Bản thân hành động làm cho một lớp có thể kiểm thử được có xu hướng tăng chất lượng code. Mọi người có thể tìm ra những gì đang hoạt động và làm thế nào; họ có thể thay đổi nó, sửa lỗi và tiến về phía trước.

## Lớp đặc trưng

Chúng ta có một lớp, và chúng ta cần tìm thứ gì đó để kiểm thử. Chúng ta làm điều đó như thế nào? Điều đầu tiên cần làm là cố gắng tìm hiểu xem lớp đó làm gì ở cấp độ vĩ mô. Chúng ta có thể viết các kiểm thử cho điều đơn giản nhất có thể tưởng tượng mà lớp đang làm và sau đó để trí tò mò hướng dẫn chúng ta từ đó. Dưới đây là một số kinh nghiệm có thể có ích:

1. Tìm kiếm những phần logic rắc rối. Nếu bạn không hiểu một vùng code, hãy xem xét sử dụng một _biến số cảm biến (301)_ để đặc tả vùng đó. Sử dụng các biến cảm biến để đảm bảo bạn thực thi các vùng code cụ thể.
2. Khi phát hiện ra trách nhiệm của một lớp hoặc phương thức, hãy dừng lại để lập danh sách những điều có thể dẫn đến sai sót. Xem liệu bạn có thể xây dựng các kiểm thử kích hoạt chúng hay không.
3. Hãy suy nghĩ về các yếu tố đầu vào mà bạn đang cung cấp khi kiểm thử. Điều gì xảy ra với các giá trị cực đoan?
4. Có điều kiện nào luôn đúng trong suốt thời gian tồn tại của lớp không? Thông thường chúng được gọi là bất biến. Cố gắng viết các kiểm thử để xác minh chúng. Thường thì bạn có thể phải cấu trúc lại để khám phá những điều kiện này. Nếu bạn làm như vậy, việc tái cấu trúc thường dẫn đến cái nhìn sâu sắc mới về cách code nên như thế nào.

Các kiểm thử mà chúng ta viết để đặc tả code rất quan trọng. Chúng là tài liệu về hành vi thực tế của hệ thống. Giống như bất kỳ tài liệu nào bạn viết, bạn phải suy nghĩ xem điều gì là quan trọng đối với người đọc. Đặt mình vào vị trí của người đọc. Bạn muốn biết gì về lớp bạn đang làm việc nếu chưa từng gặp nó? Bạn muốn thông tin theo thứ tự nào? Khi bạn sử dụng các framework `xUnit`, các kiểm thử chỉ là các phương thức trong một tệp. Bạn có thể sắp xếp chúng theo thứ tự giúp mọi người dễ dàng tìm hiểu về code mà họ sử dụng. Bắt đầu với một số trường hợp đơn giản thể hiện mục đích chính của lớp, sau đó chuyển sang các trường hợp làm nổi bật các đặc điểm riêng của nó. Đảm bảo rằng bạn ghi lại những điều quan trọng mà bạn phát hiện ra dưới dạng kiểm thử. Khi bạn bắt đầu thực hiện các thay đổi của mình, bạn thường sẽ thấy rằng các kiểm thử bạn đã viết rất phù hợp với công việc bạn sắp làm. Cho dù chúng ta có ý thức hay không, sự thay đổi mà chúng ta đặt ra thường dẫn dắt trí tò mò của chúng ta.

> Khi bạn tìm thấy lỗi
> Khi bạn đặc tả code kế thừa, bạn sẽ tìm thấy một số lỗi trong toàn bộ quá trình. Tất cả các code kế thừa đều có lỗi, thường tỷ lệ thuận với mức độ hiểu biết về nó. Bạn nên làm gì khi tìm thấy một lỗi?
> Câu trả lời tùy thuộc vào tình hình hiện tại. Nếu hệ thống chưa bao giờ được triển khai, câu trả lời rất đơn giản: Bạn nên sửa lỗi. Nếu hệ thống đã được triển khai, bạn cần kiểm tra khả năng ai đó đang phụ thuộc vào hành vi đó, ngay cả khi bạn coi đó là lỗi. Thông thường, phải mất một chút phân tích để tìm ra cách sửa lỗi mà không gây ra hiệu ứng sóng lan truyền.
> Cách làm ưa thích của tôi là sửa lỗi ngay khi chúng được tìm thấy. Khi hành vi rõ ràng là có lỗi, nó cần được sửa chữa. Nếu bạn nghi ngờ rằng một số hành vi là sai, hãy đánh dấu hành vi đó trong code kiểm thử là đáng ngờ và sau đó báo cáo thêm. Tìm hiểu nhanh nhất có thể xem đó có phải là lỗi hay không và cách tốt nhất để đối phó với nó.

## Kiểm thử mục tiêu

Sau khi viết các kiểm thử để hiểu một phần code, chúng ta phải xem xét những thứ mà chúng ta muốn thay đổi và xem liệu các kiểm thử đó có thực sự bao phủ được chúng hay không. Đây là một ví dụ, một phương thức trên một lớp Java tính toán giá trị của nhiên liệu trong các thùng thuê:

```java
public class FuelShare
{
	private long cost = 0;
	private double corpBase = 12.0;
	private ZonedHawthorneLease lease;
	...
	public void addReading(int gallons, Date readingDate){
		if (lease.isMonthly()) {
			if (gallons < Lease.CORP_MIN)
				cost += corpBase;
			else
				cost += 1.2 * priceForGallons(gallons);
		}
		...
		lease.postReading(readingDate, gallons);
	}
	...
}
```

Chúng ta muốn thực hiện một thay đổi rất trực tiếp với lớp `FuelShare`. Chúng ta đã viết một số kiểm thử cho nó, vì vậy mọi thứ đã sẵn sàng. Đây là sự thay đổi: Chúng ta muốn trích xuất câu lệnh if cấp cao nhất sang một phương thức mới và sau đó chuyển phương thức đó sang lớp `ZonedHawthorneLease`. Biến `lease` trong code là một thực thể của lớp đó.

Chúng ta có thể tưởng tượng code sẽ trông như thế này sau khi được cấu trúc lại:

```java
public class FuelShare
{
	public void addReading(int gallons, Date readingDate){
		cost += lease.computeValue(gallons, priceForGallons(gallons));
		...
		lease.postReading(readingDate, gallons);
	}
	...
}

public class ZonedHawthorneLease extends Lease
{
	public long computeValue(int gallons, long totalPrice) {
		long cost = 0;
		if (lease.isMonthly()) {
			if (gallons < Lease.CORP_MIN)
				cost += corpBase;
			else
				cost += 1.2 * totalPrice;
		}
		return cost;
	}
	...
}
```

Chúng ta cần loại kiểm thử nào để đảm bảo rằng các phép tái cấu trúc này được thực hiện chính xác? Có một điều chắc chắn: Chúng ta biết rằng chúng ta sẽ không sửa đổi phần logic này:

```java
	if (gallons < Lease.CORP_MIN)
		cost += corpBase;
```				

Có một kiểm thử ở đây để xem cách giá trị được tính toán khi ở dưới giới hạn Lease.CORP_MIN rất tốt, nhưng điều đó không thực sự cần thiết. Mặt khác, câu lệnh else trong code ban đầu sẽ thay đổi:

```java
	else
		valueInCents += 1.2 * priceForGallons(gallons);
```

Khi được chuyển sang phương thức mới, nó sẽ trở thành thế này:

```java
	else
		valueInCents += 1.2 * totalPrice;
```

Đó là một thay đổi nhỏ, nhưng dù sao thì nó cũng là một thay đổi. Sẽ tốt hơn nếu chúng ta có thể đảm bảo rằng câu lệnh else được thực thi trong một các kiểm thử nào đó. Hãy xem lại phương thức ban đầu:

```java
public class FuelShare
{
	public void addReading(int gallons, Date readingDate){
		if (lease.isMonthly()) {
			if (gallons < CORP_MIN)
				cost += corpBase;
			else
				cost += 1.2 * priceForGallons(gallons);
		}
		...
		lease.postReading(readingDate, gallons);
	}
	...
}
```

Nếu chúng ta có thể cho `lease` trong `FuelShare` là hợp đồng hàng tháng (`isMonthly()`) và truyền vào `addReading` một số gallon lớn hơn `Lease.CORP_MIN`, thì chúng ta sẽ đi vào nhánh else:

```java
public void testValueForGallonsMoreThanCorpMin() {
	StandardLease lease = new StandardLease(Lease.MONTHLY);
	FuelShare share = new FuelShare(lease);

	share.addReading(FuelShare.CORP_MIN +1, new Date());
	assertEquals(12, share.getCost());
}
```

> Khi bạn viết kiểm thử cho một nhánh câu điều kiện, hãy tự hỏi liệu có cách nào khác để kiểm thử có thể vượt qua ngoài việc thực thi nhánh đó hay không. Nếu bạn không chắc chắn, hãy sử dụng một _biến số cảm biến (301)_ hoặc trình gỡ lỗi để tìm hiểu xem liệu kiểm thử có thành công hay không.

Một điều quan trọng cần tìm hiểu khi bạn đặc tả các nhánh như thế này là liệu đầu vào bạn truyền vào có hành vi đặc biệt nào có thể dẫn đến kiểm thử thành công trong khi nó phải thất bại hay không. Đây là một ví dụ. Giả sử rằng code được sử dụng `doubles` thay vì `ints` để đại diện cho tiền:

```java
public class FuelShare
{
	private double cost = 0.0;
	...
	public void addReading(int gallons, Date readingDate){
		if (lease.isMonthly()) {
			if (gallons < CORP_MIN)
				cost += corpBase;
			else
				cost += 1.2 * priceForGallons(gallons);
		}
		...
		lease.postReading(readingDate, gallons);
	}
	...
}
```

Ở đây chúng ta có thể gặp rắc rối nghiêm trọng. Và, không, tôi không đề cập đến thực tế là ứng dụng có thể bị rò rỉ giá trị xu bằng phân số khắp nơi do lỗi làm tròn dấu phẩy động. Trừ khi chúng ta chọn đầu vào tốt, nếu không chúng ta có thể mắc lỗi khi trích xuất một phương thức và không bao giờ biết điều đó. Một sai lầm có thể xảy ra nếu chúng ta trích xuất một phương thức và biến một trong các đối số của nó thành `int` thay vì `double`. Trong Java và nhiều ngôn ngữ khác, có một bộ chuyển đổi tự động từ `double` sang `ints`; thời gian chạy chỉ cắt bớt giá trị. Trừ khi chúng ta cẩn thận nghĩ ra các đầu vào sẽ buộc chúng ta nhìn thấy lỗi đó, nếu không nó sẽ bị bỏ qua.

Hãy xem một ví dụ. Điều gì sẽ ảnh hưởng đến code trước đó nếu giá trị của `Lease.CORP_MIN` là 10 và giá trị của `corpBase` là 12.0 khi chúng ta chạy kiểm thử này?

```java
public void testValue () {
	StandardLease lease = new StandardLease(Lease.MONTHLY);
	FuelShare share = new FuelShare(lease);

	share.addReading(1, new Date());
	assertEquals(12, share.getCost());
}
```

Bởi vì 1 nhỏ hơn 10, chúng ta chỉ cần thêm 12,0 vào giá trị ban đầu của `cost`, bằng 0. Khi kết thúc phép tính, giá trị của `cost` là 12,0. Điều đó hoàn toàn ổn, nhưng điều gì sẽ xảy ra nếu chúng ta trích xuất phương thức như thế này và khai báo giá trị của `cost` là `long` thay vì `double`?

```java
public class ZonedHawthorneLease
{
	public long computeValue(int gallons, long totalPrice) {
		long cost = 0;
		if (lease.isMonthly()) {
			if (gallons < CORP_MIN)
				cost += corpBase;
			else
				cost += 1.2 * totalPrice;
		}
		return cost;
	}
}
```

Kiểm thử mà chúng ta đã viết vẫn được thông qua, mặc dù chúng ta âm thầm cắt bớt giá trị `cost` khi trả về. Một chuyển đổi từ `double` sang `int` được thực hiện, nhưng nó không thực sự được thực hiện đầy đủ. Nó thực hiện điều tương tự nếu không có chuyển đổi, nếu chúng ta chỉ gán một `int` cho một `int`.

> Khi thực hiện tái cấu trúc, chúng ta thường phải kiểm tra hai điều: Hành vi còn tồn tại sau khi tái cấu trúc không và nó có được kết nối chính xác không?
> Nhiều kiểm thử đặc tính trông giống như kiểm thử "ngày nắng". Chúng không kiểm thử nhiều điều kiện đặc biệt; chúng chỉ xác minh rằng các hành vi cụ thể có mặt. Từ sự hiện diện của chúng, chúng ta có thể suy ra rằng các phép tái cấu trúc mà chúng ta đã thực hiện để di chuyển hoặc trích xuất code bảo toàn được hành vi.

Chúng ta có thể xử lý vấn đề này thế nào? Có một vài chiến lược chung. Một là tính toán thủ công các giá trị dự kiến cho một đoạn code. Tại mỗi lần chuyển đổi, chúng ta sẽ xem liệu có vấn đề về việc cắt ngắn hay không. Một kỹ thuật khác là sử dụng trình gỡ lỗi và thực hiện từng bước các tác vụ để có thể xem những chuyển đổi nào mà một nhóm đầu vào cụ thể kích hoạt. Kỹ thuật thứ ba là sử dụng các _biến số cảm biến (301)_ để xác minh rằng một đường dẫn cụ thể đang được bao phủ và các chuyển đổi được thực hiện.

> Các kiểm thử đặc tính có giá trị nhất sẽ thực hiện theo một đường dẫn cụ thể và thực hiện từng chuyển đổi dọc theo đường dẫn.

Còn có một lựa chọn thứ tư. Chúng ta chỉ cần đặc tả một đoạn code nhỏ hơn. Nếu chúng ta có một công cụ tái cấu trúc giúp trích xuất các phương thức một cách an toàn, thì chúng ta có thể chia nhỏ phương thức `computeValue` và viết các kiểm thử cho các phần của nó. Thật không may, không phải tất cả các ngôn ngữ đều có công cụ tái cấu trúc—và đôi khi, ngay cả những công cụ có sẵn cũng không trích xuất các phương thức theo cách bạn muốn.

> Công cụ tái cấu trúc Quirks
> Một công cụ tái cấu trúc tốt là vô giá, nhưng thường thì những người có những công cụ này phải dùng đến việc tái cấu trúc bằng tay. Đây là một trường hợp phổ biến. Chúng ta có một lớp `A` với một số code muốn trích xuất trong phương thức `b()` của nó:
> 
> ```
> public class A
> {
> 	int x = 1;
> 	public void b() {
> 		int y = 0;
> 		int c = x + y;
> 	}
> };
> ```
> 
> Nếu chúng ta muốn trích xuất biểu thức `x + y` trong phương thức `b` và tạo một phương thức gọi là `add`, ít nhất một công cụ trên thị trường sẽ trích xuất nó dưới dạng `add(y)` thay vì `add(x,y)`. Tại sao? Bởi vì `x` là một biến thể hiện và nó có sẵn cho bất kỳ phương thức nào chúng tôi trích xuất.