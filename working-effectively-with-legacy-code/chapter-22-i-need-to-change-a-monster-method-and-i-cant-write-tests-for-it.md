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
