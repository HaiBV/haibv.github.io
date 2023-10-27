---
layout: default
---

# Chương 4 Mô hình đường nối

Một trong những điều mà gần như tất cả mọi người đều nhận thấy khi cố gắng viết kiểm thử cho code hiện có là mức độ kém phù hợp của code với việc kiểm thử. Nó không chỉ riêng về các chương trình hoặc ngôn ngữ cụ thể. Nói chung, các ngôn ngữ lập trình dường như không hỗ trợ tốt cho việc kiểm thử. Có vẻ như cách duy nhất để có được một chương trình có thể kiểm thử dễ dàng là viết kiểm thử khi bạn phát triển nó hoặc dành một chút thời gian để "thiết kế cho khả năng kiểm thử". Có rất nhiều hy vọng cho cách tiếp cận trước đây, nhưng nếu phần lớn code trong lĩnh vực này là bằng chứng thì cách tiếp cận sau đã không thành công lắm.

Một điều mà tôi nhận thấy là khi cố gắng kiểm thử code, tôi đã bắt đầu nghĩ về code theo một cách khá khác. Tôi chỉ có thể coi đây là một vấn đề riêng tư, nhưng tôi nhận thấy rằng cách nhìn nhận code khác này giúp ích cho tôi khi làm việc với các ngôn ngữ lập trình mới và xa lạ. Vì tôi không thể đề cập đến mọi ngôn ngữ lập trình trong cuốn sách này nên tôi quyết định trình bày quan điểm này ở đây với hy vọng rằng nó sẽ giúp ích cho bạn cũng như giúp ích cho tôi.

## Một trang văn bản khổng lồ

Khi mới bắt đầu lập trình, tôi thật may mắn vì đã bắt đầu đủ muộn để có một chiếc máy tính của riêng mình và một trình biên dịch chạy trên chiếc máy đó; nhiều người bạn của tôi bắt đầu lập trình từ thời còn sử dụng thẻ đục lỗ. Khi tôi quyết định học lập trình ở trường, tôi bắt đầu làm việc trên thiết bị đầu cuối trong phòng thí nghiệm. Chúng tôi có thể biên dịch code của mình từ xa trên máy DEC VAX. Có một hệ thống kế toán nhỏ được áp dụng. Mỗi lần biên dịch đều khiến chúng tôi mất tiền từ tài khoản của mình và chúng tôi có một khoảng thời gian sử dụng máy cố định trong mỗi học kỳ.

Vào thời điểm đó trong cuộc đời tôi, một chương trình chỉ là một danh sách. Cứ sau vài giờ, tôi lại đi bộ từ phòng thí nghiệm đến phòng máy in, lấy bản in chương trình của mình và xem xét kỹ lưỡng, cố gắng tìm ra điều gì đúng hay sai. Tôi không đủ hiểu biết để quan tâm nhiều đến tính mô-đun. Chúng tôi phải viết code mô-đun để chứng minh rằng chúng tôi có thể làm được điều đó, nhưng tại thời điểm đó, tôi thực sự quan tâm nhiều hơn đến việc liệu code có tạo ra câu trả lời đúng hay không. Khi tôi bắt đầu viết code hướng đối tượng, tính mô-đun đã mang tính hàn lâm. Tôi sẽ không đổi lớp này sang lớp khác trong quá trình làm bài tập ở trường. Khi mới bước chân vào ngành, tôi bắt đầu quan tâm rất nhiều đến những thứ đó, nhưng ở trường, một chương trình đối với tôi chỉ là một danh sách, một tập hợp dài các chức năng mà tôi phải viết và hiểu từng cái một.

Cách nhìn này về một chương trình như một danh sách có vẻ chính xác, ít nhất nếu chúng ta nhìn vào cách mọi người xử lý các chương trình mà họ viết. Nếu chúng ta không biết lập trình là gì và nhìn thấy một căn phòng đầy những lập trình viên đang làm việc, chúng ta có thể nghĩ rằng họ là những học giả đang kiểm tra và biên tập những tài liệu lớn quan trọng. Một chương trình có thể giống như một trang văn bản lớn. Thay đổi một chút văn bản có thể khiến ý nghĩa của toàn bộ tài liệu thay đổi nên mọi người thực hiện những thay đổi đó một cách cẩn thận để tránh sai sót.

Nhìn bề ngoài thì điều đó hoàn toàn đúng, nhưng còn tính mô-đun thì sao? Chúng ta thường được khuyên rằng sẽ tốt hơn nếu viết chương trình được tạo thành từ những phần nhỏ có thể tái sử dụng, nhưng tần suất các phần nhỏ được sử dụng lại một cách độc lập như thế nào? Không thường xuyên lắm. Tái sử dụng là khó khăn. Ngay cả khi các phần mềm trông có vẻ độc lập, chúng vẫn thường phụ thuộc lẫn nhau theo những cách tinh tế.

## Đường nối

Khi bạn bắt đầu cố gắng tách từng lớp riêng lẻ ra để kiểm thử đơn vị, bạn thường phải phá bỏ rất nhiều sự phụ thuộc. Điều thú vị là bạn thường có rất nhiều việc phải làm, bất kể thiết kế có "tốt" đến đâu. Việc kéo các lớp ra khỏi các dự án hiện có để kiểm thử thực sự làm thay đổi ý tưởng của bạn về thế nào là "tốt" đối với thiết kế. Nó cũng khiến bạn nghĩ về chương trình theo một cách hoàn toàn khác. Ý tưởng về một chương trình như một trang văn bản không còn phù hợp nữa. Chúng ta nên nhìn nó như thế nào? Chúng ta hãy xem một ví dụ, một hàm trong C++.

```cpp
bool CAsyncSslRec::Init()
{
	if (m_bSslInitialized) {
		return true;
	}
	m_smutex.Unlock();
	m_nSslRefCount++;

	m_bSslInitialized = true;

	FreeLibrary(m_hSslDll1);
	m_hSslDll1=0;
	FreeLibrary(m_hSslDll2);

	m_hSslDll2=0;

	if (!m_bFailureSent) {
		m_bFailureSent=TRUE;
		PostReceiveError(SOCKETCALLBACK, SSL_FAILURE);
	}

	CreateLibrary(m_hSslDll1,”syncesel1.dll”);
	CreateLibrary(m_hSslDll2,”syncesel2.dll”);

	m_hSslDll1->Init();
	m_hSslDll2->Init();

	return true;
}
```

Nó chắc chắn trông giống như một tờ văn bản, phải không nào? Giả sử chúng ta muốn chạy tất cả phương thức đó ngoại trừ dòng này:

```cpp
PostReceiveError(SOCKETCALLBACK, SSL_FAILURE);
```

Chúng ta nên làm việc đó như thế nào?

Thật dễ dàng phải không? Tất cả những gì chúng ta phải làm là nhập code và xóa dòng đó.

Được rồi, hãy hạn chế vấn đề hơn một chút. Chúng tôi muốn tránh thực thi dòng code đó vì `PostReceiveError` là một hàm toàn cục giao tiếp với một hệ thống con khác và hệ thống con đó rất khó làm việc khi kiểm thử. Vì vậy, vấn đề trở thành, làm cách nào để chúng ta thực thi phương thức mà không gọi `PostReceiveError` khi đang kiểm thử? Làm cách nào để thực hiện điều đó mà vẫn cho phép lệnh gọi tới `PostReceiveError` trong quá trình sản xuất?

Đối với tôi, đó là một câu hỏi có thể có nhiều câu trả lời và nó dẫn đến ý tưởng về một đường nối.

Đây là định nghĩa của một đường nối. Chúng ta hãy xem nó và sau đó là một số ví dụ.

> Đường nối
> Đường nối là nơi bạn có thể thay đổi hành vi trong chương trình của mình mà không cần chỉnh sửa ở nơi đó.

Có một đường nối nào trong lệnh gọi tới `PostReceiveError` không? Có. Chúng ta có thể loại bỏ hành vi ở đó theo một số cách. Đây là một trong những cách đơn giản nhất. `PostReceiveError` là một hàm toàn cục, nó không phải là một phần của lớp `CAsynchSslRec`. Điều gì xảy ra nếu chúng ta thêm một phương thức có cùng giá trị trả về vào lớp `CAsynchSslRec`?

```cpp
class CAsyncSslRec
{
	...
	virtual void PostReceiveError(UINT type, UINT errorcode);
	...
};
```

Trong tệp triển khai, chúng ta có thể thêm phần thân cho nó như thế này:

```cpp
void CAsyncSslRec::PostReceiveError(UINT type, UINT errorcode)
{
	::PostReceiveError(type, errorcode);
}
```

Sự thay đổi đó sẽ duy trì hành vi. Chúng ta đang sử dụng phương thức mới này để ủy quyền cho hàm toàn cục `PostReceiveError` bằng cách sử dụng toán tử phạm vi của C++ (::). Chúng ta có một chút gián tiếp ở đó, nhưng cuối cùng chúng ta gọi cùng một hàm toàn cục.

Thôi được, bây giờ nếu chúng ta phân lớp lớp `CAsyncSslRec` và ghi đè phương thức `PostReceiveError` thì sao?

```cpp
class TestingAsyncSslRec : public CAsyncSslRec
{
	virtual void PostReceiveError(UINT type, UINT errorcode)
	{
	}
};
```

Nếu chúng ta làm điều đó và quay lại nơi đang tạo `CAsyncSslRec` và thay vào đó tạo một `TestAsyncSslRec`, thì chúng ta đã loại bỏ hành vi của lệnh gọi tới `PostReceiveError` trong code này một cách hiệu quả:

```java
bool CAsyncSslRec::Init()
{
	if (m_bSslInitialized) {
		return true;
	}
	m_smutex.Unlock();
	m_nSslRefCount++;

	m_bSslInitialized = true;

	FreeLibrary(m_hSslDll1);
	m_hSslDll1=0;
	FreeLibrary(m_hSslDll2);
	m_hSslDll2=0;

	if (!m_bFailureSent) {
		m_bFailureSent=TRUE;
		PostReceiveError(SOCKETCALLBACK, SSL_FAILURE);
	}

	CreateLibrary(m_hSslDll1,"syncesel1.dll");
	CreateLibrary(m_hSslDll2,"syncesel2.dll");

	m_hSslDll1->Init();
	m_hSslDll2->Init();

	return true;
}
```

Bây giờ chúng ta có thể viết các kiểm thử cho code đó mà không có tác dụng phụ khó chịu.

Đường nối này tôi gọi là đường nối đối tượng. Chúng ta có thể thay đổi phương thức được gọi mà không thay đổi phương thức gọi nó. Đường nối đối tượng có sẵn trong các ngôn ngữ hướng đối tượng và chúng chỉ là một trong nhiều loại đường nối khác nhau.

Tại sao lại có đường nối? Khái niệm này tốt cho việc gì?

Một trong những thách thức lớn nhất trong việc kiểm thử code kế thừa là phá bỏ các phần phụ thuộc. Khi chúng ta may mắn, sự phụ thuộc mà chúng ta có là nhỏ và cục bộ; nhưng trong những trường hợp khó, chúng rất nhiều và trải rộng khắp codebase. Chế độ đường nối của phần mềm giúp chúng ta nhìn thấy các cơ hội đã có trong code base. Nếu chúng ta có thể thay thế hành vi tại các đường nối, chúng ta có thể loại trừ có chọn lọc các phần phụ thuộc trong kiểm thử của mình. Chúng ta cũng có thể chạy code khác có chứa các phần phụ thuộc đó nếu muốn cảm nhận các điều kiện trong code và viết kiểm thử dựa trên các điều kiện đó. Thông thường, công việc này có thể giúp chúng ta có đủ số lượng kiểm thử để hỗ trợ công việc tích cực hơn.

## Các loại đường nối

Mỗi ngôn ngữ lập trình lại có các loại đường nối có sẵn khác nhau. Cách tốt nhất để khám phá chúng là xem xét tất cả các bước liên quan đến việc chuyển văn bản của chương trình thành code chạy trên máy. Mỗi bước có thể nhận dạng sẽ hiển thị các loại đường nối khác nhau.

### Đường nối tiền xử lý

Trong hầu hết các môi trường lập trình, văn bản chương trình thường được đọc bởi trình biên dịch. Trình biên dịch sau đó sẽ phát ra các mã lệnh đối tượng hoặc mã byte. Tùy thuộc vào ngôn ngữ, có thể có các bước xử lý sau đó, nhưng còn các bước trước đó thì sao?

Chỉ một số ngôn ngữ có giai đoạn xây dựng trước khi biên dịch. C và C++ là phổ biến nhất trong số đó.

Trong C và C++, một bộ tiền xử lý macro chạy trước trình biên dịch. Qua nhiều năm, bộ tiền xử lý macro đã không ngừng bị chửi rủa và chế giễu. Với nó, chúng ta có thể tạo ra những dòng văn bản trông vô hại như thế này:

```cpp
TEST(getBalance,Account)
{
	Account account;
	LONGS_EQUAL(0, account.getBalance());
}
```

và để chúng xuất hiện như thế này trong trình biên dịch.

```cpp
class AccountgetBalanceTest : public Test
{
	public: AccountgetBalanceTest () : Test ("getBalance" "Test") {}
	void run (TestResult& result_);
}
AccountgetBalanceInstance;
void AccountgetBalanceTest::run (TestResult& result_) {
	Account account;
	{
		result_.countCheck();
		long actualTemp = (account.getBalance());
		long expectedTemp = (0);
		if ((expectedTemp) != (actualTemp)) {
			result_.addFailure (Failure (name_, "c:\\seamexample.cpp", 24,
			StringFrom(expectedTemp),
			StringFrom(actualTemp)));
			return;
		}
	}
}
```

Chúng ta cũng có thể lồng code trong các câu lệnh biên dịch có điều kiện như thế này để hỗ trợ việc gỡ lỗi và các nền tảng khác nhau (aarrrgh!):

```cpp
...
m_pRtg->Adj(2.0);

#ifdef DEBUG
#ifndef WINDOWS
	{ FILE *fp = fopen(TGLOGNAME,"w");
	if (fp) { fprintf(fp,"%s", m_pRtg->pszState); fclose(fp); }}
#endif

m_pTSRTable->p_nFlush |= GF_FLOT;
#endif
...
```

Với việc thay thế `db_update` ở vị trí này, chúng ta có thể viết kiểm thử xác minh `db_update` đã được gọi với các tham số phù hợp. Chúng ta có thể làm điều đó vì lệnh `#include` của bộ tiền xử lý C cung cấp cho chúng ta một đường nối có thể sử dụng để thay thế văn bản trước khi nó được biên dịch.

Các đường nối tiền xử lý khá mạnh mẽ. Tôi không nghĩ mình thực sự muốn có một bộ tiền xử lý cho Java và các ngôn ngữ hiện đại khác, nhưng thật tuyệt khi có công cụ này trong C và C++ như một sự đền bù cho một số trở ngại kiểm thử khác mà chúng gặp phải.

Tôi chưa đề cập đến nó trước đó, nhưng có một điều quan trọng khác cần hiểu về đường nối: Mỗi đường nối đều có một điểm kích hoạt. Chúng ta hãy xem lại định nghĩa của đường nối:

> Đường nối
>
> Đường nối là nơi bạn có thể thay đổi hành vi trong chương trình của mình mà không cần chỉnh sửa ở nơi đó.

Khi bạn có một đường nối, bạn có một nơi mà hành vi có thể thay đổi. Chúng ta thực sự không thể đến nơi đó và thay đổi code chỉ để kiểm thử nó. Code phải giống nhau trong cả quá trình sản xuất và kiểm thử. Trong ví dụ trước, chúng ta muốn thay đổi hành vi trong văn bản của lệnh gọi `db_update`. Để khai thác đường nối đó, bạn phải thực hiện thay đổi ở một nơi khác. Trong trường hợp này, điểm kích hoạt là một định nghĩa tiền xử lý có tên `TESTING`. Khi `TESTING` được xác định, tệp `localdefs.h` xác định các macro thay thế lệnh gọi tới `db_update` trong tệp nguồn.

> Điểm kích hoạt
>
> Mỗi đường nối đều có một điểm kích hoạt, một nơi mà bạn có thể đưa ra quyết định sử dụng hành vi này hay hành vi khác.

### Đường nối liên kết

Trong nhiều hệ thống ngôn ngữ, việc biên dịch không phải là bước cuối cùng của quá trình dựng. Trình biên dịch tạo ra một biểu diễn trung gian của code và biểu diễn đó chứa các lệnh gọi code trong các tệp khác. Trình liên kết kết hợp các biểu diễn này. Chúng giải quyết từng lệnh gọi để bạn có thể có một chương trình hoàn chỉnh khi chạy.

Trong các ngôn ngữ như C và C++, thực sự có một trình liên kết riêng thực hiện thao tác mà tôi vừa mô tả. Trong Java và các ngôn ngữ tương tự, trình biên dịch thực hiện quá trình liên kết ở hậu trường. Khi tệp nguồn chứa câu lệnh nhập, trình biên dịch sẽ kiểm tra xem lớp đã nhập có thực sự được biên dịch hay không. Nếu lớp chưa được biên dịch, nó sẽ biên dịch nó, nếu cần, rồi kiểm tra xem liệu tất cả các lệnh gọi của nó có thực sự giải quyết chính xác trong thời gian chạy hay không.

Bất kể ngôn ngữ của bạn sử dụng sơ đồ nào để giải quyết các tham chiếu, bạn thường có thể khai thác nó để thay thế các phần của chương trình. Hãy xem trường hợp Java. Đây là một lớp nhỏ tên là `FitFilter`:

```java
package fitnesse;

import fit.Parse;
import fit.Fixture;

import java.io.*;
import java.util.Date;

import java.io.*;
import java.util.*;

public class FitFilter {

	public String input;
	public Parse tables;
	public Fixture fixture = new Fixture();
	public PrintWriter output;

	public static void main (String argv[]) {
		new FitFilter().run(argv);
	}

	public void run (String argv[]) {
		args(argv);
		process();
		exit();
	}

	public void process() {
		try {
			tables = new Parse(input);
			fixture.doTables(tables);
		} catch (Exception e) {
			exception(e);
		}
		tables.print(output);
	}
	...
}
```

Trong tệp này, chúng ta nhập `fit.Parse` và `fit.Fixture`. Trình biên dịch và JVM tìm các lớp đó như thế nào? Trong Java, bạn có thể sử dụng biến môi trường đường dẫn lớp để xác định nơi hệ thống Java tìm để tìm các lớp đó. Bạn thực sự có thể tạo các lớp có cùng tên, đặt chúng vào một thư mục khác và thay đổi đường dẫn lớp để liên kết đến một `fit.Parse` và `fit.Fixture` khác. Mặc dù sẽ khó hiểu khi sử dụng thủ thuật này trong code sản xuất, nhưng khi bạn đang kiểm thử, đây có thể là một cách khá tiện lợi để phá bỏ sự phụ thuộc.

> Giả sử chúng tôi muốn cung cấp một phiên bản khác của lớp `Parse` để kiểm thử. Đường nối sẽ ở đâu?
>
> Đường nối là lệnh gọi `Parse` mới trong phương thức xử lý.
>
> Điểm kích hoạt ở đâu?
>
> Điểm kích hoạt là đường dẫn lớp.

Loại liên kết động này có thể được thực hiện bằng nhiều ngôn ngữ. Hầu hết đều có một số cách để khai thác các đường nối liên kết. Nhưng không phải tất cả các liên kết đều động. Trong nhiều ngôn ngữ cũ, gần như tất cả các liên kết đều ở trạng thái tĩnh; nó xảy ra một lần sau khi biên dịch.

Nhiều hệ thống xây dựng C và C++ thực hiện liên kết tĩnh để tạo các tệp thực thi. Thông thường, cách dễ nhất để sử dụng đường nối liên kết là tạo một thư viện riêng cho bất kỳ lớp hoặc hàm nào bạn muốn thay thế. Khi làm điều đó, bạn có thể thay đổi tập lệnh xây dựng của mình để liên kết với những tập lệnh đó thay vì tập lệnh sản xuất khi bạn đang kiểm thử. Việc này có thể tốn một chút công sức nhưng sẽ mang lại hiệu quả nếu bạn có code base tràn ngập các lệnh gọi đến thư viện của bên thứ ba. Ví dụ: hãy tưởng tượng một ứng dụng CAD chứa nhiều lệnh gọi được nhúng tới thư viện đồ họa. Đây là một ví dụ về một số code điển hình:

```java
void CrossPlaneFigure::rerender()
{
	// draw the label
	drawText(m_nX, m_nY, m_pchLabel, getClipLen());
	drawLine(m_nX, m_nY, m_nX + getClipLen(), m_nY);
	drawLine(m_nX, m_nY, m_nX, m_nY + getDropLen());
	if (!m_bShadowBox) {
		drawLine(m_nX + getClipLen(), m_nY, m_nX + getClipLen(), m_nY + getDropLen());
		drawLine(m_nX, m_nY + getDropLen(), m_nX + getClipLen(), m_nY + getDropLen());
	}

	// draw the figure
	for (int n = 0; n < edges.size(); n++) {
		...
	}

	...
}
```

Code này thực hiện nhiều lời gọi trực tiếp đến thư viện đồ họa. Thật không may, cách duy nhất để thực sự xác minh rằng code này đang thực hiện những gì bạn muốn là nhìn vào màn hình máy tính khi các hình được vẽ lại. Trong code phức tạp, điều đó khá dễ xảy ra lỗi, chưa kể tẻ nhạt. Một cách khác là sử dụng các đường nối liên kết. Nếu tất cả các chức năng vẽ là một phần của một thư viện cụ thể, bạn có thể tạo các phiên bản sơ khai liên kết đến phần còn lại của ứng dụng. Nếu bạn quan tâm đến việc chỉ tách phần phụ thuộc, chúng có thể chỉ là các hàm trống:

```java
void drawText(int x, int y, char *text, int textLength)
{ }

void drawLine(int firstX, int firstY, int secondX, int secondY)
{ }
```

Nếu các hàm trả về giá trị, bạn phải trả về một giá trị nào đó. Thông thường, đoạn code cho biết thành công hoặc giá trị mặc định của một loại là một lựa chọn tốt:

```java
int getStatus()
{
	return FLAG_OKAY;
}
```

Trường hợp của một thư viện đồ họa hơi không điển hình. Một lý do khiến nó là một ứng cử viên sáng giá cho kỹ thuật này là vì nó gần như là một giao diện "nói" thuần túy. Bạn thực hiện các lệnh gọi đến các chức năng để yêu cầu chúng làm điều gì đó và không yêu cầu trả lại nhiều thông tin. Việc yêu cầu thông tin rất khó vì các giá trị mặc định thường không phải là thứ phù hợp để trả về khi bạn đang cố gắng thực thi code của mình.

Sự tách biệt thường là lý do để sử dụng đường nối liên kết. Bạn cũng có thể làm cảm biến; nó chỉ đòi hỏi một chút công việc. Trong trường hợp thư viện đồ họa mà chúng tôi vừa giả mạo, chúng tôi có thể giới thiệu một số cấu trúc dữ liệu bổ sung để ghi lại cuộc gọi:

```cpp
std::queue<GraphicsAction> actions;

void drawLine(int firstX, int firstY, int secondX, int secondY)
{
	actions.push_back(GraphicsAction(LINE_DRAW, firstX, firstY, secondX, secondY);
}
```

Với các cấu trúc dữ liệu này, chúng ta có thể cảm nhận được tác động của một hàm trong kiểm thử:

```cpp
TEST(simpleRender,Figure)
{
	std::string text = "simple";
	Figure figure(text, 0, 0);

	figure.rerender();
	LONGS_EQUAL(5, actions.size());
	GraphicsAction action;
	action = actions.pop_front();
	LONGS_EQUAL(LABEL_DRAW, action.type);

	action = actions.pop_front();
	LONGS_EQUAL(0, action.firstX);
	LONGS_EQUAL(0, action.firstY);
	LONGS_EQUAL(text.size(), action.secondX);
}
```

Các sơ đồ mà chúng ta có thể sử dụng để cảm nhận các hiệu ứng có thể khá phức tạp, nhưng tốt nhất là nên bắt đầu với một sơ đồ rất đơn giản và chỉ cho phép nó phức tạp đến mức cần thiết để giải quyết các nhu cầu cảm biến hiện tại.

Điểm kích hoạt đường nối liên kết luôn nằm ngoài văn bản chương trình. Đôi khi nó nằm trong một bản dựng hoặc một tập lệnh triển khai. Điều này làm cho việc sử dụng các đường nối liên kết hơi khó nhận thấy.

> Mẹo sử dụng
>
> Nếu bạn sử dụng các đường nối liên kết, hãy đảm bảo rằng sự khác biệt giữa môi trường kiểm thử và môi trường sản xuất là rõ ràng.

### Đường nối đối tượng

Các đường nối đối tượng là những đường nối hữu ích nhất có sẵn trong các ngôn ngữ lập trình hướng đối tượng. Điều cơ bản cần nhận ra khi xem xét một lệnh gọi trong một chương trình hướng đối tượng là nó không xác định phương thức nào sẽ thực sự được thực thi. Hãy xem một ví dụ Java:

```java
	cell.Recalculate();
```

Khi chúng ta xem đoạn code này, có vẻ như phải có một phương thức có tên `Recalculate` sẽ thực thi khi thực hiện lệnh gọi đó. Nếu chương trình muốn chạy thì phải có một phương thức có tên đó; nhưng thực tế là có thể có nhiều hơn một:

![4.1](images/4/4-1.png)
Hình 4.1 Cây phân cấp Lớp `Cell`

Phương thức nào sẽ được gọi trong dòng code này?

```java
	cell.Recalculate();
```

Nếu không biết đối tượng `cell` trỏ đến cái gì thì chúng ta sẽ không thể biết được. Nó có thể là phương thức `ReCalculate` của `ValueCell` hoặc phương thức `ReCalculate` của `FormulaCell`. Nó thậm chí có thể là phương thức `Recalculate` của một số lớp khác không kế thừa từ `Cell` (nếu đúng như vậy, `cell` là một cái tên đặc biệt tàn nhẫn để sử dụng cho biến đó!). Nếu chúng ta có thể thay đổi cách gọi `Recalculate` trong dòng code đó mà không thay đổi code xung quanh nó, thì lệnh gọi đó là một đường nối.

Trong các ngôn ngữ hướng đối tượng, không phải tất cả các lệnh gọi phương thức đều là đường nối. Dưới đây là ví dụ về lệnh gọi không phải là đường nối:

```java
public class CustomSpreadsheet extends Spreadsheet
{
	public Spreadsheet buildMartSheet() {
		...
		Cell cell = new FormulaCell(this, "A1", "=A2+A3");
		...
		cell.Recalculate();
		...
	}
	...
}
```

Trong đoạn code này, chúng ta đang tạo một `cell` và sau đó sử dụng nó trong cùng một phương thức. Lệnh gọi `Recalculate` có là đường nối đối tượng không? Không. Không có điểm kích hoạt. Chúng ta không thể thay đổi phương thức `Recalculate` nào được gọi vì sự lựa chọn phụ thuộc vào loại cell. Lớp của cell được quyết định khi đối tượng được tạo và chúng ta không thể thay đổi nó nếu không sửa đổi phương thức.

Điều gì sẽ xảy ra nếu đoạn code trông như thế này?

```java
public class CustomSpreadsheet extends Spreadsheet
{
	public Spreadsheet buildMartSheet(Cell cell) {
		...
		cell.Recalculate();
		...
	}
	...
}
```

Lệnh gọi tới `cell.Recalculate` trong `buildMartSheet` bây giờ có phải là một đường nối không? Đúng. Chúng ta có thể tạo `CustomSpreadsheet` trong kiểm thử và gọi `buildMartSheet` bằng bất kỳ loại `Cell` nào mà chúng ta muốn sử dụng. Cuối cùng, chúng ta sẽ thay đổi cách gọi `cell.Recalculate` mà không thay đổi phương thức gọi nó.

Điểm kích hoạt ở đâu?

Trong ví dụ này, điểm kích hoạt là danh sách đối số của `buildMartSheet`. Chúng ta có thể quyết định loại đối tượng nào sẽ chuyển và thay đổi hành vi của `Recalculate` theo bất kỳ cách nào mà chúng ta muốn để kiểm thử.

Được rồi, hầu hết các đường nối của đối tượng đều khá đơn giản. Đây là một trong những khó khăn. Có đường nối đối tượng nào khi gọi tới `Recalculate` trong phiên bản `buildMartSheet` này không?

```java
public class CustomSpreadsheet extends Spreadsheet
{
	public Spreadsheet buildMartSheet(Cell cell) {
		...
		Recalculate(cell);
		...
	}

	private static void Recalculate(Cell cell) {
		...
	}

	...
}
```

Phương thức `Recalculate` là một phương thức tĩnh. Lệnh gọi `Recalculate` trong `buildMartSheet` có phải là một đường nối không? Đúng. Chúng ta không phải chỉnh sửa `buildMartSheet` để thay đổi hành vi trong lệnh gọi đó. Nếu chúng ta xóa từ khóa `static` trên `Recalculate` và biến nó thành một phương thức được `protected` thay vì một phương thức `private`, chúng ta có thể phân lớp và ghi đè nó trong quá trình kiểm thử:

```java
public class CustomSpreadsheet extends Spreadsheet
{
	public Spreadsheet buildMartSheet(Cell cell) {
		...
		Recalculate(cell);
		...
	}
	protected void Recalculate(Cell cell) {
		...
	}

	...
}

public class TestingCustomSpreadsheet extends CustomSpreadsheet {
	protected void Recalculate(Cell cell) {
		...
	}
}
```

Không phải là tất cả khá gián tiếp sao? Nếu chúng ta không thích sự phụ thuộc, tại sao chúng ta không vào code và thay đổi nó? Đôi khi cách đó có tác dụng, nhưng với những code kế thừa đặc biệt khó chịu, cách tiếp cận tốt nhất thường là làm những gì có thể để sửa đổi code ít nhất có thể khi bạn đang thực hiện kiểm thử. Nếu bạn biết các đường nối mà ngôn ngữ của bạn cung cấp và cách sử dụng chúng, bạn thường có thể viết kiểm thử tại chỗ một cách an toàn hơn những gì bạn có thể làm.

Các loại đường nối tôi đã trình bày là những loại chính. Bạn có thể tìm thấy chúng trong nhiều ngôn ngữ lập trình. Chúng ta hãy xem lại ví dụ dẫn đầu chương này và xem chúng ta có thể thấy những đường nối nào:

```java
bool CAsyncSslRec::Init()
{
	if (m_bSslInitialized) {
		return true;
	}
	m_smutex.Unlock();
	m_nSslRefCount++;

	m_bSslInitialized = true;

	FreeLibrary(m_hSslDll1);
	m_hSslDll1=0;
	FreeLibrary(m_hSslDll2);
	m_hSslDll2=0;

	if (!m_bFailureSent) {
		m_bFailureSent=TRUE;
		PostReceiveError(SOCKETCALLBACK, SSL_FAILURE);
	}

	CreateLibrary(m_hSslDll1,"syncesel1.dll");
	CreateLibrary(m_hSslDll2,"syncesel2.dll");

	m_hSslDll1->Init();
	m_hSslDll2->Init();
	return true;
}
```

Những đường nối nào có sẵn trong lệnh gọi `PostReceiveError`? Hãy liệt kê chúng.

1. `PostReceiveError` là một hàm toàn cục nên chúng ta có thể dễ dàng sử dụng _đường nối liên kết_ ở đó. Chúng ta có thể tạo một thư viện có chức năng sơ khai và liên kết với nó để loại bỏ hành vi đó. Điểm kích hoạt sẽ là tệp tạo tệp hoặc một số cài đặt trong IDE của chúng tôi. Chúng tôi phải thay đổi bản dựng của mình để liên kết với thư viện kiểm thử khi chúng ta đang kiểm thử và thư viện sản xuất khi chúng ta muốn xây dựng hệ thống thực.

2. Chúng ta có thể thêm câu lệnh `#include` vào code và sử dụng bộ tiền xử lý để xác định macro có tên `PostReceiveError` khi chúng ta đang kiểm thử. Vì vậy, chúng ta có một _đường may tiền xử lý_ ở đó. _Điểm kích hoạt_ ở đâu? Chúng ta có thể sử dụng định nghĩa tiền xử lý để bật hoặc tắt định nghĩa macro.

3. Chúng ta cũng có thể khai báo một hàm ảo cho `PostRecieveError` giống như chúng ta đã làm ở đầu chương này, vì vậy chúng ta cũng có một _đường nối đối tượng_ ở đó. Điểm kích hoạt ở đâu? Trong trường hợp này, điểm kích hoạt là nơi chúng ta quyết định tạo một đối tượng. Chúng ta có thể tạo đối tượng `CAsyncSslRec` hoặc đối tượng của một số lớp con thử nghiệm ghi đè `PostRecieveError`.

Điều thực sự đáng ngạc nhiên là có rất nhiều cách để thay thế hành vi trong lệnh gọi này mà không cần chỉnh sửa phương thức:

```java
bool CAsyncSslRec::Init()
{
	...
	if (!m_bFailureSent) {
		m_bFailureSent=TRUE;
		PostReceiveError(SOCKETCALLBACK, SSL_FAILURE);
	}
	...

	return true;
}
```

Điều quan trọng là chọn đúng loại đường nối khi bạn muốn kiểm thử các đoạn code. Nói chung, các _đường nối đối tượng_ là sự lựa chọn tốt nhất trong các ngôn ngữ hướng đối tượng. Đôi khi, các _đường nối tiền xử lý_ và các _đường nối liên kết_ có thể hữu ích nhưng chúng không rõ ràng như các _đường nối đối tượng_. Ngoài ra, các kiểm thử phụ thuộc vào chúng có thể khó duy trì. Tôi muốn dành riêng các _đường nối tiền xử lý_ và các _đường nối liên kết_ cho các trường hợp mà sự phụ thuộc phổ biến và không có lựa chọn thay thế nào tốt hơn.

Khi bạn đã quen với việc xem code theo các đường nối, bạn sẽ dễ dàng biết cách kiểm thử mọi thứ hơn và xem cách cấu trúc code mới để giúp việc kiểm thử dễ dàng hơn.
