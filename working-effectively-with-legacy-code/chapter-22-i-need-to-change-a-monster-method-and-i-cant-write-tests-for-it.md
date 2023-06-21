---
layout: default
---

# Chương 22 - Tôi Cần Thay đổi một Phương thức "Quái vật" và Tôi Không thể Viết Kiểm thử cho Nó

Một trong những điều khó khăn nhất khi làm việc với code kế thừa là xử lý các phương thức lớn. Trong nhiều trường hợp, bạn có thể tránh tái cấu trúc các phương thức lớn bằng cách sử dụng các kỹ thuật _Sprout Method (59)_ và _Sprout Class (63)_. Tuy nhiên, ngay cả khi bạn có thể tránh được nó, thì thật đáng tiếc khi bạn phải làm vậy. Các phương thức lớn là vũng lầy trong một cơ sở code. Bất cứ khi nào bạn phải thay đổi chúng, bạn phải quay lại và cố gắng hiểu lại chúng, sau đó bạn phải thực hiện các thay đổi của mình. Thường thì điều đó mất nhiều thời gian hơn cần thiết.

Phương thức lớn là một nỗi đau, nhưng phương thức "quái vật" còn tồi tệ hơn. Một phương thức "quái vật" là một phương thức quá dài và phức tạp đến mức bạn thực sự cảm thấy không thoải mái khi chạm vào nó. Các phương thức "quái vật" có thể dài hàng trăm hoặc hàng nghìn dòng, với vô số dấu vết rải rác khiến việc điều hướng thành gần như không thể. Khi bạn có những phương thức "quái vật", bạn có xu hướng muốn in chúng lên một vài thước giấy liên tục và đặt chúng ở hành lang để bạn cùng đồng nghiệp có thể cùng tìm hiểu chúng.

Một lần, tôi đang trên đường tham dự một cuộc họp, và khi đang đi bộ về phòng khách sạn, một người bạn của tôi nói: "Này, anh phải xem cái này." Anh ấy đi vào phòng, lôi máy tính xách tay ra và chỉ cho tôi một phương thức dài hơn một nghìn dòng. Bạn tôi biết tôi đang nghiên cứu về tái cấu trúc và nói, "Làm thế quái nào anh có thể tái cấu trúc thứ này?" Chúng tôi bắt đầu suy nghĩ về nó. Chúng tôi biết rằng kiểm thử là chìa khóa, nhưng bạn sẽ phải bắt đầu từ đâu với một phương thức lớn như vậy?

Chương này phác thảo những gì tôi đã học được kể từ đó.

## Các loại "quái vật"
Phương thức "quái vật" có nhiều loại. Không nhất thiết phải là các loại khác biệt rõ rệt. Các phương thức này giống như thú mỏ vịt — là sự kết hợp của nhiều loại.

### Phương thức gạch đầu dòng
Phương thức gạch đầu dòng là phương thức gần như không có dấu thụt đầu dòng. Nó chỉ là một chuỗi các đoạn code khiến bạn nghĩ về một danh sách có dấu đầu dòng. Có một số đoạn code trong các khối có thể được thụt vào, nhưng bản thân phương thức không có nhiều đoạn thụt đầu dòng. Khi bạn nhìn vào một phương thức gạch đầu dòng và nheo mắt lại, bạn sẽ thấy giống như Ví dụ 22.1.

Đây là dạng chung của phương thức gạch đầu dòng. Nếu bạn may mắn, ai đó sẽ đặt thêm dòng trống giữa các phần hoặc nhận xét để cho bạn thấy rằng họ làm điều gì đó khác biệt ở đây. Trong một thế giới lý tưởng, bạn có thể chỉ cần trích xuất từng phần thành cách phương thức khác nhau, nhưng thường thì chúng không dễ dàng tái cấu trúc theo cách đó. Khoảng cách giữa các phần cũng dễ gây nhầm lẫn vì các biến tạm thời thường được khai báo ở phần này và được sử dụng trong phần tiếp theo. Chia nhỏ phương thức thường không dễ dàng như chỉ cần sao chép và dán code. Mặc dù vậy, các phương thức gạch đầu dòng ít đáng sợ hơn một chút so với các phương thức khác, chủ yếu là do việc không có dấu thụt đầu dòng cho phép chúng ta giữ vững phương hướng của mình.

```java
void Reservation::extend(int additionalDays)
{
	int status = RIXInterface::checkAvailable(type, location, startingDate);

	int identCookie = -1;
	switch(status) {
		case NOT_AVAILABLE_UPGRADE_LUXURY:
			identCookie = RIXInterface::holdReservation(Luxury,location,startingDate,
			additionalDays +dditionalDays);
			break;
		case NOT_AVAILABLE_UPGRADE_SUV:
		{
			int theDays = additionalDays + additionalDays;
			if (RIXInterface::getOpCode(customerID) != 0)
			theDays++;
			identCookie = RIXInterface::holdReservation(SUV,location,startingDate, theDays);
		}
		break;
		case NOT_AVAILABLE_UPGRADE_VAN:
			identCookie = RIXInterface::holdReservation(Van,
			location,startingDate, additionalDays + additionalDays);
			break;
		case AVAILABLE:
		default:
			RIXInterface::holdReservation(type,location,startingDate);
			break;
	}

	if (identCookie != -1 && state == Initial) {
		RIXInterface::waitlistReservation(type,location,startingDate);
	}

	Customer c = res_db.getCustomer(customerID);

	if (c.vipProgramStatus == VIP_DIAMOND) {
		upgradeQuery = true;
	}

	if (!upgradeQuery)
		RIXInterface::extend(lastCookie, days + additionalDays);
	else {
		RIXInterface::waitlistReservation(type,location,startingDate);
		RIXInterface::extend(lastCookie, days + additionalDays +1);
	}
	...
}
```
Ví dụ 22.1 Phương thức gạch đầu dòng

### Phương thức hỗn loạn

Một phương thức hỗn loạn là một phương thức chỉ có một đoạn thụt đầu dòng lớn duy nhất. Trường hợp đơn giản nhất là một phương thức có một câu lệnh điều kiện lớn, như trong ví dụ 22.2.

```java
Reservation::Reservation(VehicleType type, int customerID, long startingDate, int days, XLocation l)
: type(type), customerID(customerID), startingDate(startingDate), days(days), lastCookie(-1),
state(Initial), tempTotal(0)
{
	location = l;
	upgradeQuery = false;

	if (!RIXInterface::available()) {
		RIXInterface::doEvents(100);
		PostLogMessage(0, 0, "delay on reservation creation");
		int holdCookie = -1;
		switch(status) {
			case NOT_AVAILABLE_UPGRADE_LUXURY:
				holdCookie = RIXInterface::holdReservation(Luxury,l,startingDate);
				if (holdCookie != -1) {
					holdCookie |= 9;
				}
				break;
			case NOT_AVAILABLE_UPGRADE_SUV:
				holdCookie = RIXInterface::holdReservation(SUV,l,startingDate);
				break;
			case NOT_AVAILABLE_UPGRADE_VAN:
				holdCookie = RIXInterface::holdReservation(Van,l,startingDate);
				break;
			case AVAILABLE:
			default:
				RIXInterface::holdReservation;
				state = Held;
				break;
		}
	}
	...
}
```
Ví dụ 22.2 Phương thức hỗn loạn đơn giản

Nhưng kiểu hỗn loạn trên gần giống như phương thức gạch đầu dòng. Những kiểu hỗn loạn đòi hỏi yêu cầu cao là những phương thức có dạng như trong Ví dụ 22.3.

Cách tốt nhất để biết liệu phương thức có hỗn loạn hay không là cố gắng sắp xếp các khối theo một phương thức dài. Nếu bạn bắt đầu cảm thấy chóng mặt, bạn đã gặp phải một phương thức hỗn loạn.

```java
Reservation::Reservation(VehicleType type, int customerID, long startingDate, int days, XLocation l)
: type(type), customerID(customerID), startingDate(startingDate), days(days), lastCookie(-1),
state(Initial), tempTotal(0)
{
	location = l;
	upgradeQuery = false;

	while(!RIXInterface::available()) {
		RIXInterface::doEvents(100);
		PostLogMessage(0, 0, "delay on reservation creation");
		int holdCookie = -1;
		switch(status) {
			case NOT_AVAILABLE_UPGRADE_LUXURY:
			holdCookie = RIXInterface::holdReservation(Luxury,l,startingDate);
			if (holdCookie != -1) {
				if (l == GIG && customerID == 45) {
					// Special #1222
					while (RIXInterface::notBusy()) {
						int code =
						RIXInterface::getOpCode(customerID);
						if (code == 1 || customerID > 0)) {
							PostLogMessage(1, 0, "QEX PID");
							for (int n = 0; n < 12; n++) {
								int total = 2000;
								if (state == Initial || state == Held)
								{
									total += getTotalByLocation(location);
									tempTotal = total;
									if (location == GIG && days > 2)
									{
										if (state == Held)
											total += 30;
									}
								}
								RIXInterface::serveIDCode(n, total);
							}
						} else {
							RIXInterface::serveCode(customerID);
						}
					}
				}
			}
			break;
				case NOT_AVAILABLE_UPGRADE_SUV:
				holdCookie =
				RIXInterface::holdReservation(SUV,l,startingDate);
				break;
			case NOT_AVAILABLE_UPGRADE_VAN:
				holdCookie =
				RIXInterface::holdReservation(Van,l,startingDate);
				break;
			case AVAILABLE:
			default:
				RIXInterface::holdReservation(type,l,startingDate);
				state = Held;
				break;
		}
	}
	...
}
```

Hầu hết các phương thức không hoàn toàn là gạch đầu dòng hoặc hỗn loạn, mà là một cái gì đó ở giữa. Nhiều phương thức hỗn loạn có các phần dấu đầu dòng dài ẩn sâu bên trong chúng, nhưng vì chúng được lồng vào nhau nên khó có thể viết kiểm thử xác định hành vi của chúng. Hỗn loạn đưa ra những thách thức riêng biệt.

Khi tái cấu trúc các phương thức dài, việc có hay không có công cụ tái cấu trúc sẽ tạo nên sự khác biệt. Gần như mọi công cụ tái cấu trúc đều hỗ trợ tái cấu trúc trích xuất phương thức vì có một lượng đòn bẩy đáng kinh ngạc trong sự hỗ trợ đó. Nếu một công cụ có thể trích xuất các phương thức cho bạn một cách an toàn, thì bạn không cần kiểm thử để xác minh việc trích xuất của mình. Công cụ này thực hiện phân tích cho bạn và tất cả những gì còn lại là học cách sử dụng các trích xuất để đưa một phương thức vào dạng phù hợp cho công việc tiếp theo.

Khi bạn không có hỗ trợ trích xuất phương thức, việc dọn dẹp các phương thức "quái vật" sẽ khó khăn hơn. Bạn thường phải thận trọng hơn vì công việc của bạn bị giới hạn bởi các kiểm thử mà bạn có thể đạt được.

## Xử lý Phương thức Quái vật với Hỗ trợ Tái cấu trúc Tự động

Khi bạn có một công cụ trích xuất các phương thức, bạn phải hiểu rõ những gì nó có thể và không thể. Hầu hết các công cụ tái cấu trúc ngày nay đều thực hiện các phương thức trích xuất đơn giản và một loạt các phép tái cấu trúc khác, nhưng chúng không xử lý tất cả các phép tái cấu trúc phụ trợ mà mọi người thường muốn thực hiện khi chia nhỏ các phương thức lớn. Chẳng hạn, chúng ta thường muốn sắp xếp lại các câu lệnh để nhóm chúng lại khi trích xuất. Không có công cụ hiện tại nào thực hiện phân tích cần thiết để xem liệu việc sắp xếp lại có thể được thực hiện một cách an toàn hay không. Đó là một nỗi hổ thẹn vì nó có thể là một nguồn lỗi.

Để sử dụng các công cụ tái cấu trúc một cách hiệu quả với các phương thức lớn, bạn nên thực hiện một loạt thay đổi chỉ với công cụ đó và tránh tất cả các chỉnh sửa khác đối với nguồn. Điều này có thể giống như tự hạn chế công cụ tái cấu trúc, nhưng nó mang lại cho bạn sự tách biệt rõ ràng giữa những thay đổi an toàn và những thay đổi không an toàn. Khi bạn tái cấu trúc như vậy, bạn nên tránh ngay cả những điều đơn giản, chẳng hạn như sắp xếp lại các câu lệnh và tách rời các biểu thức. Nếu công cụ của bạn hỗ trợ đổi tên biến, điều đó thật tuyệt, nhưng nếu không, hãy tạm dừng việc đó lại sau.

> Khi thực hiện tái cấu trúc tự động mà không có kiểm thử, hãy sử dụng riêng công cụ này. Sau một loạt các lần tái cấu trúc tự động, bạn thường có thể có được một số kiểm thử tại chỗ mà bạn có thể sử dụng để xác minh bất kỳ chỉnh sửa thủ công nào mà bạn thực hiện.


