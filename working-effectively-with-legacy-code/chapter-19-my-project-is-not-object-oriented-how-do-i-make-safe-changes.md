---
layout: default
---

# Chương 19 Dự án của tôi không hướng đối tượng. Làm cách nào để thực hiện an toàn các thay đổi?

Tiêu đề của chương này có chút châm biếm. Chúng ta có thể thực hiện các thay đổi an toàn bằng bất kỳ ngôn ngữ nào, nhưng một số ngôn ngữ khiến việc thay đổi trở nên dễ dàng hơn những ngôn ngữ khác. Mặc dù định hướng đối tượng đã lan rộng khá nhiều trong ngành nhưng vẫn có nhiều ngôn ngữ và cách lập trình khác. Có các ngôn ngữ dựa trên quy tắc, ngôn ngữ lập trình chức năng, ngôn ngữ lập trình dựa trên ràng buộc — danh sách vẫn còn dài. Nhưng trong số tất cả những ngôn ngữ này, không ngôn ngữ nào phổ biến bằng các ngôn ngữ thủ tục cũ đơn giản, chẳng hạn như C, COBOL, FORTRAN, Pascal và BASIC.

Ngôn ngữ thủ tục đặc biệt khó khăn trong môi trường kế thừa. Điều quan trọng là phải kiểm thử code trước khi sửa đổi nó, nhưng số việc bạn có thể làm để đưa kiểm thử đơn vị trong các ngôn ngữ thủ tục là khá ít. Thông thường, điều dễ dàng nhất có thể làm là suy nghĩ thật kỹ, vá lỗi hệ thống và hy vọng rằng những thay đổi của bạn là đúng.

Vấn đề khó khăn trong kiểm thử là một căn bệnh nặng trong code kế thừa thủ tục. Các ngôn ngữ thủ tục thường không có các đường nối mà các ngôn ngữ lập trình OO (và nhiều ngôn ngữ chức năng) có. Các lập trình viên hiểu biết có thể vượt qua điều này bằng cách quản lý các phần phụ thuộc của họ một cách cẩn thận (chẳng hạn, có rất nhiều chương trình tuyệt vời được viết bằng C), nhưng cũng dễ dàng kết thúc bằng một tiếng gầm gừ thực sự khó thay đổi dần dần và có thể kiểm chứng được.

Bởi vì việc phá vỡ các phần phụ thuộc trong code thủ tục là rất khó nên chiến lược tốt nhất thường là cố gắng kiểm thử một lượng lớn code trước khi thực hiện bất kỳ điều gì khác và sau đó sử dụng các kiểm thử đó để nhận một số phản hồi trong khi phát triển. Các kỹ thuật trong _Chương 12, Tôi cần thực hiện nhiều thay đổi trong một khu vực. Tôi có phải phá vỡ các phụ thuộc của tất cả các lớp liên quan không?_ có thể giúp được phần nào. Chúng áp dụng cho code thủ tục cũng như code hướng đối tượng. Nói tóm lại, bạn nên tìm _điểm chặn (180)_ và sau đó sử dụng _đường nối liên kết (36)_ để phá vỡ các phần phụ thuộc vừa đủ để đưa code vào trong kiểm thử khai thác. Nếu ngôn ngữ của bạn có bộ tiền xử lý macro, bạn cũng có thể sử dụng _đường nối tiền xử lý (33)_.

Đó là cách hành động tiêu chuẩn nhưng không phải là cách duy nhất. Trong phần còn lại của chương này, chúng ta xem xét các cách để phá vỡ sự phụ thuộc cục bộ trong các chương trình thủ tục, cách thực hiện các thay đổi có thể kiểm thử dễ dàng hơn và các cách tiếp tục khi chúng ta đang sử dụng ngôn ngữ có đường dẫn di chuyển sang OO.

## Trường hợp dễ dàng

Code thủ tục không phải lúc nào cũng là vấn đề. Đây là một ví dụ, một hàm C trong hệ điều hành Linux. Sẽ khó để viết kiểm thử cho chức năng này nếu chúng ta phải thực hiện một số thay đổi đối với nó?

```cpp
void set_writetime(struct buffer_head * buf, int flag)
{
	int newtime;

	if (buffer_dirty(buf)) {
		/* Move buffer to dirty list if jiffies is clear */
		newtime = jiffies + (flag ? bdf_prm.b_un.age_super : bdf_prm.b_un.age_buffer);
		if(!buf->b_flushtime || buf->b_flushtime > newtime)
			buf->b_flushtime = newtime;
	} else {
		buf->b_flushtime = 0;
	}
}
```

Để kiểm thử hàm này, chúng ta có thể đặt giá trị của biến `jiffies`, tạo `buffer_head`, chuyển nó vào hàm và sau đó kiểm tra giá trị của nó sau lệnh gọi. Trong nhiều chức năng, chúng ta không có may mắn như vậy. Đôi khi một hàm gọi một hàm lại gọi một hàm khác. Sau đó, nó gọi một thứ gì đó khó xử lý: một hàm thực sự thực hiện I/O ở đâu đó hoặc đến từ thư viện của nhà cung cấp nào đó. Chúng ta muốn kiểm thử chức năng của code, nhưng câu trả lời thường là "Nó làm được điều gì đó thú vị, nhưng chỉ có thứ gì đó bên ngoài chương trình mới biết về nó, chứ không phải bạn."

## Trường hợp khó

Đây là hàm C mà chúng ta muốn thay đổi. Sẽ thật tuyệt nếu chúng ta có thể thử nghiệm nó trước khi thực hiện thay đổi:

```cpp
#include "ksrlib.h"
int scan_packets(struct rnode_packet *packet, int flag)
{
	struct rnode_packet *current = packet;
	int scan_result, err = 0;

	while(current) {
		scan_result = loc_scan(current->body, flag);
		if(scan_result & INVALID_PORT) {
			ksr_notify(scan_result, current);
		}
		...
		current = current->next;
	}
	return err;
}
```

Đoạn code này gọi một hàm có tên `ksr_notify` có tác dụng phụ xấu. Nó gửi thông báo cho hệ thống của bên thứ ba và chúng ta muốn nó không làm điều đó khi đang kiểm thử.

Một cách để giải quyết vấn đề này là sử dụng _đường nối liên kết (36)_. Nếu muốn kiểm thử mà không có tác dụng của tất cả các hàm trong thư viện đó, chúng ta có thể tạo một thư viện chứa hàng giả: các hàm có cùng tên với các hàm ban đầu nhưng không thực sự làm những gì chúng dự định làm. Trong trường hợp này, chúng ta có thể viết phần nội dung cho `ksr_notify` trông như thế này:

```cpp
void ksr_notify(int scan_code, struct rnode_packet *packet)
{
}
```

Chúng ta có thể xây dựng nó trong thư viện và liên kết với nó. Hàm `scan_packets` sẽ hoạt động giống hệt nhau, ngoại trừ một điều: Nó sẽ không gửi thông báo. Nhưng điều đó cũng tốt nếu chúng ta muốn xác định hành vi khác trong hàm trước khi thay đổi nó.

Đó có phải là chiến lược chúng ta nên sử dụng? Còn tùy. Nếu có nhiều hàm trong thư viện `ksr` và chúng ta coi các lệnh gọi của chúng là ngoại vi đối với logic chính của hệ thống, thì đúng, sẽ hợp lý nếu tạo một thư viện giả mạo và liên kết với nó trong quá trình kiểm thử. Mặt khác, nếu chúng ta muốn cảm nhận thông qua các hàm đó hoặc muốn thay đổi một số giá trị mà chúng trả về, thì việc sử dụng các _đường nối liên kết (36)_ sẽ không tốt bằng; nó thực sự khá tẻ nhạt. Vì sự thay thế xảy ra tại thời điểm liên kết nên chúng ta chỉ có thể cung cấp một định nghĩa hàm cho mỗi tệp thực thi mà chúng ta xây dựng. Nếu muốn hàm `ksr_notify` giả hoạt động theo cách này trong kiểm thử này và theo cách khác trong thử nghiệm khác, chúng ta phải đặt code vào phần nội dung và thiết lập các điều kiện trong kiểm thử để buộc nó hoạt động theo một cách nhất định. Nói chung, việc này khá loại lộn xộn. Thật không may, nhiều ngôn ngữ thủ tục không cho chúng ta bất kỳ lựa chọn nào khác.

Trong C, có một giải pháp thay thế khác. C có một bộ tiền xử lý macro mà chúng ta có thể sử dụng để giúp viết kiểm thử đối với hàm `scan_packets` dễ dàng hơn. Đây là tệp chứa `scan_packets` sau khi chúng tôi thêm code kiểm thử:

```cpp
#include "ksrlib.h"

#ifdef TESTING
#define ksr_notify(code,packet)
#endif

int scan_packets(struct rnode_packet *packet, int flag)
{
	struct rnode_packet *current = packet;
	int scan_result, err = 0;

	while(current) {
		scan_result = loc_scan(current->body, flag);
		if(scan_result & INVALID_PORT) {
			ksr_notify(scan_result, current);
		}
		...
		current = current->next;
	}
	return err;
}

#ifdef TESTING
#include <assert.h>
int main () {
	struct rnode_packet packet;
	packet.body = ...
	...
	int err = scan_packets(&packet, DUP_SCAN);
	assert(err & INVALID_PORT);
	...
	return 0;
}
#endif
```

Trong đoạn code này, chúng ta định nghĩa một tiền xử lý, `TESTING`, xác định lệnh gọi `ksr_notify` không tồn tại khi chúng ta đang kiểm thử. Nó cũng cung cấp một sơ khai nhỏ chứa các kiểm thử.

Việc trộn code kiểm thử và code nguồn vào một tệp như thế này thực sự không phải là điều rõ ràng nhất mà chúng ta có thể làm. Thường thì nó khiến cho việc điều hướng code trở nên khó khăn hơn. Một cách khác là sử dụng tính năng bao tệp để code kiểm thử và code sản xuất nằm trong các tệp khác nhau:

```cpp
#include "ksrlib.h"

#include "scannertestdefs.h"

int scan_packets(struct rnode_packet *packet, int flag)
{
	struct rnode_packet *current = packet;
	int scan_result, err = 0;

	while(current) {
		scan_result = loc_scan(current->body, flag);
		if(scan_result & INVALID_PORT) {
			ksr_notify(scan_result, current);
		}
		...
		current = current->next;
	}
	return err;
}
#include "testscanner.tst"
```

Với thay đổi này, code trông khá giống với giao diện khi không có cơ sở hạ tầng kiểm thử. Điểm khác biệt duy nhất là chúng ta có câu lệnh `#include` ở cuối tệp. Nếu chúng ta khai báo tiếp các hàm mà chúng ta đang kiểm thử, chúng ta có thể di chuyển mọi thứ ở tệp bao gồm phía dưới lên tệp trên cùng.

Để chạy kiểm thử, chúng ta chỉ cần định nghĩa `TESTING` và tự xây dựng tệp này. Khi `TESTING` được định nghĩa, hàm `main()` trong `testcanner.tst` sẽ được biên dịch và liên kết thành một tệp thực thi để chạy thử nghiệm. Hàm `main()` chúng ta có trong tệp đó chỉ chạy các kiểm thử cho quy trình quét. Chúng ta có thể thiết lập mọi thứ để chạy các nhóm kiểm thử cùng lúc bằng cách xác định các chức năng kiểm thử riêng biệt cho từng kiểm thử của mình.

```cpp
#ifdef TESTING
#include <assert.h>
void test_port_invalid() {
	struct rnode_packet packet;
	packet.body = ...
	...
	int err = scan_packets(&packet, DUP_SCAN);
	assert(err & INVALID_PORT);
}

void test_body_not_corrupt() {
	...
}

void test_header() {
	...
}
#endif
```

Trong một tệp khác, chúng ta có thể gọi chúng từ main:

```cpp
int main() {
	test_port_invalid();
	test_body_not_corrupt();
	test_header();
	return 0;
}
```

Chúng ta có thể tiến xa hơn nữa bằng cách thêm các chức năng đăng ký giúp việc nhóm kiểm thử trở nên dễ dàng hơn. Xem các framework kiểm thử đơn vị C khác nhau có sẵn tại
`www.xprogramming.com` để có thêm chi tiết.

Mặc dù các bộ tiền xử lý macro dễ bị sử dụng sai mục đích nhưng chúng thực sự rất hữu ích trong bối cảnh này. Việc đưa vào tệp và thay thế macro có thể giúp chúng ta vượt qua các phần phụ thuộc trong code phức tạp nhất. Miễn là chúng ta hạn chế việc sử dụng macro tràn lan đối với code đang chạy kiểm thử, thì không cần phải quá lo lắng rằng chúng ta sẽ sử dụng sai macro theo những cách sẽ ảnh hưởng đến code sản xuất.

C là một trong số ít ngôn ngữ chính thống có bộ tiền xử lý macro. Nói chung, để phá vỡ sự phụ thuộc trong các ngôn ngữ thủ tục khác, chúng tôi phải sử dụng _đường nối liên kết (36)_ và cố gắng kiểm thử các vùng code lớn hơn.

## Thêm hành vi mới

Trong code kế thừa thủ tục, chúng ta thường có thiên hướng viết các hàm mới thay vì thêm code vào các hàm cũ. Ít nhất có thể viết kiểm thử cho các hàm mới mà chúng ta viết.

Làm cách nào để tránh tạo nên bẫy phụ thuộc trong code thủ tục? Một cách (được nêu trong _Chương 8 - Làm thế nào để tôi thêm một chức năng mới?_) là sử dụng _phát triển dựa trên thử nghiệm (88)_ (TDD). TDD hoạt động ở cả code hướng đối tượng và code thủ tục. Thông thường, công việc cố gắng xây dựng một kiểm thử cho từng đoạn code mà chúng ta đang nghĩ trước khi viết sẽ khiến thiết kế của nó được thay đổi theo hướng tốt hơn. Chúng ta tập trung vào việc viết các hàm thực hiện một số công việc tính toán và sau đó tích hợp chúng vào phần còn lại của ứng dụng.

Thông thường chúng ta phải suy nghĩ về những gì chúng ta sẽ viết theo một cách khác để thực hiện điều này. Đây là một ví dụ. Chúng ta cần viết một hàm gọi là `send_command`. Hàm `send_command` sẽ gửi ID, tên và chuỗi lệnh đến hệ thống khác thông qua hàm có tên `mart_key_send`. Code của hàm không quá tệ. Chúng ta có thể tưởng tượng rằng nó sẽ trông giống như thế này:

```cpp
void send_command(int id, char *name, char *command_string) {
	char *message, *header;
	if (id == KEY_TRUM) {
		message = ralloc(sizeof(int) + HEADER_LEN + ...
		...
	} else {
		...
	}
	sprintf(message, "%s%s%s", header, command_string, footer);
	mart_key_send(message);

	free(message);
}
```

Nhưng làm thế nào chúng ta có thể viết kiểm thử cho một hàm như vậy? Đặc biệt vì cách duy nhất để biết điều gì đang xảy ra là phải đến đúng nơi có lệnh gọi tới `mart_key_send`? Điều gì sẽ xảy ra nếu chúng ta thực hiện một cách tiếp cận hơi khác một chút?

Chúng ta có thể kiểm thử tất cả logic đó trước lệnh gọi `mart_key_send` nếu nó ở một hàm khác. Chúng ta có thể viết kiểm thử đầu tiên của mình như thế này:

```cpp
char *command = form_command(1, "Mike Ratledge", "56:78:cusp-:78");
assert(!strcmp("<-rsp-Mike  Ratledge><56:78:cusp-:78><-rspr>", command));
```

Sau đó, chúng ta có thể viết hàm `form_command`, hàm này trả về một lệnh:

```cpp
char *form_command(int id, char *name, char *command_string)
{
	char *message, *header;
	if (id == KEY_TRUM) {
		message = ralloc(sizeof(int) + HEADER_LEN + ...
		...
	} else {
		...
	}
	sprintf(message, "%s%s%s", header, command_string, footer);

	return message;
}
```

Khi có được điều đó, chúng ta có thể viết hàm send_command đơn giản mà chúng ta cần:

```cpp
void send_command(int id, char *name, char *command_string) {
	char *command = form_command(id, name, command_string);
	mart_key_send(command);

	free(message);
}
```

Trong nhiều trường hợp, kiểu cải cách này chính xác là những gì chúng ta cần để tiến về phía trước. Chúng ta đặt tất cả logic thuần túy vào một tập hợp hàm để giữ cho chúng không vướng vào vấn đề phụ thuộc. Khi làm điều này, chúng ta sẽ có được các hàm bao bọc nhỏ như `send_command`, các hàm này liên kết logic và các phần phụ thuộc của chúng ta. Nó không hoàn hảo nhưng có thể thực hiện được khi các phần phụ thuộc không quá phổ biến.

Trong các trường hợp khác, chúng ta cần viết các hàm sẽ có nhiều lệnh gọi bên ngoài. Không có nhiều tính toán trong các hàm này, nhưng trình tự lệnh gọi mà chúng thực hiện là rất quan trọng. Ví dụ: nếu chúng ta đang cố viết một hàm tính lãi cho một khoản vay, cách thực hiện đơn giản có thể trông giống như sau:

```cpp
void calculate_loan_interest(struct temper_loan *loan, int calc_type)
{
	...
	db_retrieve(loan->id);
	...
	db_retrieve(loan->lender_id);
	...
	db_update(loan->id, loan->record);
	...
	loan->interest = ...
}
```

Chúng ta phải làm gì trong trường hợp như thế này? Trong nhiều ngôn ngữ thủ tục, lựa chọn tốt nhất là bỏ qua việc viết kiểm thử trước và viết hàm tốt nhất có thể. Có lẽ chúng ta có thể kiểm thử xem nó có làm đúng ở cấp độ cao hơn hay không. Nhưng ở C, chúng ta có một lựa chọn khác. C hỗ trợ các con trỏ hàm và chúng ta có thể sử dụng chúng để đặt một đường nối khác vào đúng vị trí. Đây là cách thực hiện:

Chúng ta có thể tạo một cấu trúc chứa các con trỏ tới các hàm:

```cpp
struct database
{
	void (*retrieve)(struct record_id id);
	void (*update)(struct record_id id, struct record_set *record);
	...
};
```
Chúng ta có thể khởi tạo các con trỏ đó tới địa chỉ của các hàm truy cập cơ sở dữ liệu. Chúng ta có thể chuyển cấu trúc đó cho bất kỳ hàm mới nào mà chúng ta viết cần truy cập vào cơ sở dữ liệu. Trong code sản xuất, chúng được trỏ đến các hàm truy cập cơ sở dữ liệu thực. Chúng ta có thể yêu cầu con trỏ trỏ vào hàm giả khi chúng ta đang kiểm thử.

Với các trình biên dịch cũ hơn, chúng ta có thể phải sử dụng cú pháp con trỏ hàm kiểu cũ:

```cpp
extern struct database db;
(*db.update)(load->id, loan->record);
```
Nhưng với những hàm khác, chúng ta có thể gọi các hàm này theo phong cách hướng đối tượng rất tự nhiên:

```cpp
extern struct database db;
db.update(load->id, loan->record);
```

Kỹ thuật này không dành riêng cho C. Nó có thể được sử dụng trong hầu hết các ngôn ngữ hỗ trợ con trỏ hàm

## Tận dụng lợi thế của lập trình hướng đối tượng

Trong các ngôn ngữ hướng đối tượng, chúng ta có sẵn các _đường nối đối tượng (40)_. Chúng có một số đặc tính tốt như sau:
- Chúng rất dễ nhận thấy trong code.
- Chúng có thể được sử dụng để chia code thành các phần nhỏ hơn, dễ hiểu hơn.
- Chúng mang lại sự linh hoạt hơn. Các đường nối mà bạn sử dụng để kiểm thử có thể hữu ích khi bạn phải mở rộng ứng dụng của mình.

Thật không may, không phải tất cả ứng dụng đều có thể dễ dàng chuyển thành hướng đối tượng, nhưng trong một số trường hợp, việc này dễ dàng hơn nhiều so với các phần mềm khác. Nhiều ngôn ngữ thủ tục đã phát triển thành ngôn ngữ hướng đối tượng. Ngôn ngữ Visual Basic của Microsoft gần đây mới trở thành ngôn ngữ hướng đối tượng hoàn toàn, có các phần mở rộng OO cho COBOL và Fortran, đồng thời hầu hết các trình biên dịch C cũng cung cấp cho bạn khả năng biên dịch C++.

Khi ngôn ngữ của bạn cung cấp tùy chọn để chuyển thành hướng đối tượng, bạn có nhiều tùy chọn hơn. Bước đầu tiên thường là sử dụng _Encapsulate Global References (339)_ để lấy các phần bạn đang thay đổi khi kiểm thử. Chúng ta có thể sử dụng nó để thoát khỏi tình trạng phụ thuộc xấu gặp phải trong hàm `scan_packets` ở đầu chương. Hãy nhớ rằng vấn đề chúng ta gặp phải là với hàm `ksr_notify`: Chúng ta không muốn nó thực sự thông báo bất cứ khi nào chúng ta chạy kiểm thử.

```cpp
int scan_packets(struct rnode_packet *packet, int flag)
{
	struct rnode_packet *current = packet;
	int scan_result, err = 0;

	while(current) {
		scan_result = loc_scan(current->body, flag);
		if(scan_result & INVALID_PORT) {
			ksr_notify(scan_result, current);
		}
		...
		current = current->next;
	}
	return err;
}
```

Bước đầu tiên là biên dịch theo C++ thay vì theo C. Đây có thể là một thay đổi nhỏ hoặc lớn, tùy thuộc vào cách chúng ta xử lý nó. Chúng ta có thể cố gắng biên dịch lại toàn bộ dự án bằng C++ hoặc có thể thực hiện từng phần một, nhưng sẽ mất một chút thời gian.

Khi biên dịch bằng C++, chúng ta có thể bắt đầu bằng cách tìm phần khai báo của hàm `ksr_notify` và gói nó trong một lớp:

```cpp
class ResultNotifier
{
public:
	virtual void ksr_notify(int scan_result, struct rnode_packet *packet);
};
```

Chúng ta cũng có thể sử dụng một tệp nguồn mới cho lớp và đặt cài đặt mặc định ở đó:

```cpp
extern "C" void ksr_notify(int scan_result, struct rnode_packet *packet);
void ResultNotifier::ksr_notify(int scan_result, struct rnode_packet *packet)
{
	::ksr_notify(scan_result, packet);
}
```

Lưu ý rằng chúng ta sẽ không thay đổi tên của hàm hoặc giá trị trả về của nó. Chúng ta đang sử dụng _Bảo lưu kết quả trả về (312)_ để giảm thiểu mọi khả năng xảy ra lỗi.

Tiếp theo, chúng ta khai báo một biến toàn cục của `ResultNotifier` và đặt nó vào một tệp nguồn:

```cpp
ResultNotifier globalResultNotifier;
```

Bây giờ chúng ta có thể biên dịch lại và để các lỗi cho chúng ta biết phải thay đổi mọi thứ ở đâu. Vì chúng ta đã đặt phần khai báo `ksr_notify` trong một lớp nên trình biên dịch không còn thấy phần khai báo của nó ở phạm vi toàn cục nữa.

Đây là chức năng ban đầu:

```cpp
#include "ksrlib.h"
int scan_packets(struct rnode_packet *packet, int flag)
{
	struct rnode_packet *current = packet;
	int scan_result, err = 0;
	while(current) {
		scan_result = loc_scan(current->body, flag);
		if(scan_result & INVALID_PORT) {
			ksr_notify(scan_result, current);
		}
		...
		current = current->next;
	}
	return err;
}
```

Để biên dịch nó ngay bây giờ, chúng ta có thể sử dụng một khai báo bên ngoài để hiển thị đối tượng `GlobalResultNotifier` và mở đầu `ksr_notify` bằng tên của đối tượng:

```cpp
#include "ksrlib.h"

extern ResultNotifier globalResultNotifier;

int scan_packets(struct rnode_packet *packet, int flag)
{
	struct rnode_packet *current = packet;
	int scan_result, err = 0;

	while(current) {
		scan_result = loc_scan(current->body, flag);
		if(scan_result & INVALID_PORT) {
			globalResultNotifier.ksr_notify(scan_result, current);
		}
		...
		current = current->next;
	}
	return err;
}
```

Tại thời điểm này, code vẫn hoạt động theo như cũ. Phương thức `ksr_notify` trên `ResultNotifier` ủy quyền cho hàm `ksr_notify`. Điều đó có lợi gì cho chúng ta? Chà, hiện tại thì chưa. Bước tiếp theo là tìm cách thiết lập mọi thứ để có thể sử dụng đối tượng `ResultNotifier` này trong quá trình sản xuất và sử dụng một đối tượng khác khi chúng ta đang kiểm thử. Có nhiều cách để thực hiện việc này, nhưng một cách đưa chúng ta đi xa hơn theo hướng này là _Đóng gói lại các Tham chiếu Toàn cầu (339)_ và đặt `scan_packets` vào một lớp khác mà chúng ta có thể gọi là `Scanner`.

```cpp
class Scanner
{
public:
		int scan_packets(struct rnode_packet *packet, int flag);
};
```

Bây giờ chúng ta có thể áp dụng _Parameterize Constructor (379)_ và thay đổi lớp để nó sử dụng `ResultNotifier` mà chúng ta cung cấp:

```cpp
class Scanner
{
private:
		ResultNotifier& notifier;
public:
		Scanner();
		Scanner(ResultNotifier& notifier);
	int scan_packets(struct rnode_packet *packet, int flag);
};

// in the source file

Scanner::Scanner()
: notifier(globalResultNotifier)
{}

Scanner::Scanner(ResultNotifier& notifier)
: notifier(notifier)
{}
```

Khi thực hiện thay đổi này, chúng ta có thể tìm thấy những vị trí `scan_packets` đang được sử dụng, tạo một phiên bản của `Scanner` và sử dụng nó.

Những thay đổi này khá an toàn và khá máy móc. Chúng không phải là những ví dụ tuyệt vời về thiết kế hướng đối tượng, nhưng chúng đủ tốt để sử dụng như một cái nêm giúp phá vỡ sự phụ thuộc và cho phép chúng ta kiểm thử khi tiến về phía trước.

## Tất cả đều hướng đối tượng

Một số lập trình viên thủ tục không thích hướng đối tượng; họ cho rằng nó không cần thiết hoặc cho rằng sự phức tạp của nó chẳng cải thiện được gì cả. Nhưng khi bạn thực sự nghĩ về nó, bạn bắt đầu nhận ra rằng tất cả các chương trình thủ tục đều hướng đối tượng; thật đáng tiếc khi nhiều chương trình chỉ chứa một đối tượng. Để thấy điều này, hãy tưởng tượng một chương trình có khoảng 100 chức năng. Dưới đây là khai báo của họ:

```cpp
...
int db_find(char *id, unsigned int mnemonic_id,
struct db_rec **rec);
...
...
void process_run(struct gfh_task **tasks, int task_count);
...
```

Bây giờ hãy tưởng tượng rằng chúng ta có thể đặt tất cả các khai báo vào một tệp và bao quanh chúng bằng một khai báo lớp:

```cpp
class program
{
public:
	...
	int db_find(char *id, unsigned int mnemonic_id, struct db_rec **rec);
	...
	...
	void process_run(struct gfh_task **tasks, int task_count);
	...
};
```

Bây giờ chúng ta có thể tìm thấy từng định nghĩa hàm (đây là một):

```cpp
int db_find(char *id, unsigned int mnemonic_id, struct db_rec **rec);
{
	...
}
```

Và tiền tố tên của nó với tên của lớp:

```cpp
int program::db_find(char *id, unsigned int mnemonic_id, struct db_rec **rec)
{
	...
}
```

Bây giờ chúng ta phải viết một hàm `main()` mới cho chương trình:

```cpp
int main(int ac, char **av)
{
	program the_program;

	return the_program.main(ac, av);
}
```

Điều này có thay đổi hành vi của hệ thống không? Không thực sự. Sự thay đổi đó chỉ là một quá trình máy móc, nó giữ nguyên ý nghĩa và cách hoạt động của chương trình. Trên thực tế, hệ thống C cũ chỉ là một đối tượng lớn. Khi chúng ta bắt đầu sử dụng _Encapsulate Global References (339)_, chúng ta sẽ tạo các đối tượng mới và chia nhỏ hệ thống theo những cách giúp làm việc dễ dàng hơn.

Khi các ngôn ngữ thủ tục có phần mở rộng hướng đối tượng, chúng cho phép chúng ta đi theo hướng này. Đây không phải là hướng đối tượng thực sự; nó chỉ sử dụng đủ đối tượng để chia nhỏ chương trình để kiểm thử.

Chúng ta có thể làm gì ngoài việc trích xuất các phần phụ thuộc khi ngôn ngữ của chúng ta hỗ trợ OO? Thứ nhất, chúng ta có thể dần dần chuyển nó sang một thiết kế đối tượng tốt hơn. Nói chung, điều này có nghĩa là bạn phải nhóm các hàm liên quan trong các lớp và trích xuất nhiều phương thức để có thể tách rời các trách nhiệm rối rắm. Để có thêm lời khuyên về vấn đề này, hãy xem _Chương 20, Lớp này quá lớn và tôi không muốn nó lớn hơn nữa_.

Code thủ tục không cung cấp cho chúng ta nhiều tùy chọn như code hướng đối tượng, nhưng chúng ta có thể đạt được tiến bộ trong code kế thừa thủ tục. Các đường nối cụ thể mà ngôn ngữ thủ tục trình bày có ảnh hưởng quan trọng đến sự dễ dàng của công việc. Nếu ngôn ngữ thủ tục bạn đang sử dụng có ngôn ngữ kế thừa hướng đối tượng, tôi khuyên bạn nên chuyển sang ngôn ngữ đó. Các _đường nối đối tượng (40)_ còn hữu ích hơn nhiều so với việc thực hiện các kiểm thử tại chỗ. Các đường nối liên kết và tiền xử lý rất tốt để lấy code đang được kiểm thử, nhưng chúng thực sự không làm được gì nhiều để cải thiện thiết kế ngoài điều đó.
