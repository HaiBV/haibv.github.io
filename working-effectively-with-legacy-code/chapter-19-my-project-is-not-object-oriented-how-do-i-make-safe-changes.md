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
