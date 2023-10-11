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
