---
layout: default
---

# Chương 25, Các kỹ thuật phá bỏ sự phụ thuộc

Trong chương này, tôi sẽ trình bày về các kỹ thuật phá bỏ sự phụ thuộc. Danh sách này không đầy đủ; đây chỉ là một số kỹ thuật mà tôi đã sử dụng với các nhóm để phân tách các lớp một cách đủ tốt để kiểm thử chúng. Về mặt lý thuyết, những kỹ thuật này là tái cấu trúc — mỗi kỹ thuật đều bảo toàn hành vi. Nhưng không giống như hầu hết các hoạt động tái cấu trúc được viết trong ngành cho đến nay, những hoạt động tái cấu trúc này được thực hiện mà không cần kiểm thử, để có được các kiểm thử tại chỗ. Trong hầu hết các trường hợp, nếu bạn làm theo các bước này một cách cẩn thận thì khả năng xảy ra sai sót là rất nhỏ. Điều này không có nghĩa là chúng hoàn toàn an toàn. Bạn vẫn có thể mắc lỗi khi thực hiện chúng, vì vậy bạn nên cẩn thận khi sử dụng chúng. Trước khi bạn sử dụng những phép tái cấu trúc này, hãy xem _Chương 23, Làm thế nào để biết rằng tôi không làm phá vỡ bất cứ thứ gì?_ Những lời khuyên trong chương đó có thể giúp bạn sử dụng những kỹ thuật này một cách an toàn để bạn có thể viết kiểm thử đúng vị trí. Khi làm như vậy, bạn sẽ có thể thực hiện những thay đổi sâu rộng hơn và tự tin hơn rằng mình không vi phạm bất kỳ điều gì.

Những kỹ thuật này không ngay lập tức làm cho thiết kế của bạn tốt hơn. Trên thực tế, nếu bạn có khả năng thiết kế tốt, một số kỹ thuật này sẽ khiến bạn lo lắng. Những kỹ thuật này có thể giúp bạn có được các phương thức, lớp và cụm lớp được kiểm thử và nhờ đó hệ thống của bạn sẽ dễ bảo trì hơn. Tại thời điểm đó, bạn có thể sử dụng các phép tái cấu trúc được hỗ trợ kiểm thử để làm cho thiết kế rõ ràng hơn

> Một số cách tái cấu trúc trong chương này đã được Martin Fowler mô tả trong cuốn sách _Tái cấu trúc: Cải thiện thiết kế mã hiện có (Refactoring: Improving the Design of Existing Code)_ (Addison-Wesley, 1999). Tôi đã đưa chúng vào đây với một số thay đổi. Chúng đã được thiết kế riêng để có thể sử dụng an toàn mà không cần kiểm thử.

## Tham số thích ứng (Adapt Parameter)

Khi thực hiện thay đổi với các phương thức, vấn đề đau đầu tôi thường gặp phải là sự phụ thuộc do các tham số của phương thức gây ra. Đôi khi tôi cảm thấy khó tạo được tham số mình cần; hoặc là, tôi cần kiểm thử tác động của phương thức lên tham số. Trong nhiều trường hợp, điều đó không hề dễ dàng với lớp của tham số. Nếu lớp đó là lớp mà tôi có thể sửa đổi, tôi có thể sử dụng _Trích xuất Giao diện (362)_ để phá bỏ sự phụ thuộc. _Trích xuất Giao diện_ thường là lựa chọn tốt nhất khi muốn phá bỏ sự phụ thuộc của tham số.

Nói chung, chúng ta muốn làm điều gì đó thật đơn giản để phá bỏ các phần phụ thuộc cản trở việc kiểm thử, một điều gì đó không có khả năng xảy ra lỗi. Tuy nhiên, trong một số trường hợp, _Trích xuất Giao diện (362)_ hoạt động không tốt lắm. Nếu loại tham số ở mức khá thấp hoặc dành riêng cho một số công nghệ triển khai thì việc trích xuất giao diện có thể phản tác dụng hoặc không thể thực hiện được.

> Sử dụng _Tham số thích ứng_ khi bạn không thể sử dụng _Trích xuất Giao diện (362)_ với lớp của tham số hoặc khi tham số đó khó giả mạo.

Dưới đây là một ví dụ:

```java
public class ARMDispatcher
{
  public void populate(HttpServletRequest request) {
    String [] values = request.getParameterValues(pageStateName);

    if (values != null && values.length > 0)
    {
      marketBindings.put(pageStateName + getDateStamp(), values[0]);
    }
    ...
  }
  ...
}
```

Trong lớp trên, phương thức `populate` nhận `HttpServletRequest` làm tham số. `HttpServletRequest` là giao diện thuộc chuẩn J2EE của Sun dành cho Java. Nếu hiện tại muốn kiểm thử `populate`, chúng ta sẽ phải tạo một lớp triển khai `HttpServletRequest` và cung cấp một số cách để truyền các giá trị tham số mà nó cần để có kết quả trả về khi kiểm thử. Tài liệu Java SDK hiện tại cho thấy có khoảng 23 phương thức khai báo trong `HttpServletRequest` và không tính các khai báo từ siêu giao diện của nó mà chúng ta phải triển khai. Sẽ thật tuyệt nếu sử dụng _Trích xuất Giao diện (362)_ để tạo một giao diện hẹp hơn, chỉ cung cấp các phương thức chúng ta cần, nhưng chúng ta không thể trích xuất giao diện từ giao diện khác. Trong Java, chúng ta cần có `HttpServletRequest` mở rộng giao diện chúng ta đang trích xuất và không thể sửa đổi giao diện chuẩn theo cách đó. May mắn thay, chúng ta có những lựa chọn khác.

Một số thư viện đối tượng giả lập có sẵn cho J2EE. Nếu tải xuống một trong số chúng, chúng ta có thể sử dụng mô hình cho `HttpServletRequest` và thực hiện kiểm thử chúng ta cần thực hiện. Điều này có thể tiết kiệm khá nhiều thời gian; nếu theo cách này, chúng ta sẽ không phải mất thời gian để tự thực hiện lời gọi servlet giả. Vì vậy, có vẻ như chúng ta đã có giải pháp — hoặc không?

Khi tôi phá bỏ sự phụ thuộc, tôi luôn cố gắng nhìn về phía trước và xem kết quả liệu sẽ như thế nào. Sau đó tôi có thể quyết định xem tôi có thể sống chung với nó hay không. Trong trường hợp này, code sản xuất của chúng ta sẽ trông khá giống nhau và chúng ta sẽ phải làm rất nhiều việc để duy trì `HttpServletRequest`, một giao diện API, tại chỗ. Có cách nào để làm cho code trông đẹp hơn và làm cho việc phá bỏ phần phụ thuộc dễ dàng hơn không? Trên thực tế là có. Chúng ta có thể gói tham số lại và phá bỏ hoàn toàn sự phụ thuộc của chúng ta vào giao diện API. Khi chúng ta hoàn thành việc đó, code sẽ trông như thế này:

```java
public class ARMDispatcher {
  public void populate(ParameterSource source) {
    String values = source.getParameterForName(pageStateName);
    if (value != null) {
      marketBindings.put(pageStateName + getDateStamp(),
      value);
    }
    ...
  }
}
```

Ở đây chúng ta đã làm gì? Chúng ta đã sử dụng một giao diện mới có tên `ParameterSource`. Vào lúc này, phương thức duy nhất mà nó có là phương thức có tên `getParameterForName`. Không giống như phương thức `HttpServletRequest getParmeterValue`, `getParameterForName` chỉ trả về một `String`. Chúng ta viết phương thức theo cách đó vì chúng ta chỉ quan tâm đến tham số đầu tiên trong ngữ cảnh này.

> Hướng tới các giao diện truyền đạt trách nhiệm hơn là chi tiết triển khai. Điều này làm cho code dễ đọc hơn và dễ bảo trì hơn.

Đây là một lớp giả triển khai `ParameterSource`. Chúng ta có thể sử dụng nó trong kiểm thử của mình:

```java
class FakeParameterSource implements ParameterSource
{
  public String value;
  public String getParameterForName(String name) {
    return value;
  }
}
```

Và nguồn tham số cho code sản xuất trông như thế này:

```java
class ServletParameterSource implements ParameterSource
{
  private HttpServletRequest request;

  public ServletParameterSource(HttpServletRequest request) {
    this.request = request;
  }

  String getParameterValue(String name) {
    String [] values = request.getParameterValues(name);
    if (values == null || values.length < 1)
      return null;
    return values[0];
  }
}
```

Nhìn bề ngoài, việc này có vẻ giống như chúng ta đang làm mọi thứ trở nên đẹp đẽ chỉ để cho đẹp, nhưng một vấn đề phổ biến trong các code base kế thừa là thường không có bất kỳ lớp trừu tượng nào; phần code quan trọng nhất trong hệ thống thường nằm xen kẽ với các lệnh gọi API cấp thấp. Chúng ta đã thấy điều này có thể gây khó khăn cho việc kiểm thử như thế nào, nhưng vấn đề còn vượt xa việc kiểm thử. Code khó hiểu hơn khi nó tràn ngập các giao diện lớn chứa hàng tá phương thức không được sử dụng. Khi bạn tạo các phần trừu tượng hẹp với mục tiêu nhắm đến những gì bạn cần, code của bạn sẽ giao tiếp tốt hơn và bạn sẽ có được đường nối tốt hơn.

Nếu chúng ta chuyển sang sử dụng `ParameterSource` trong ví dụ này, chúng ta sẽ tách logic tổng hợp khỏi các nguồn cụ thể. Chúng ta sẽ không bị ràng buộc với các giao diện J2EE cụ thể nữa.

> Tham số thích ứng là một trường hợp trong đó chúng ta không _Bảo toàn chữ ký (312)_. Hãy sử dụng cẩn thận.

Tham số thích ứng có thể gặp rủi ro nếu giao diện đơn giản hóa mà bạn đang tạo cho lớp của tham số quá khác với giao diện hiện tại của tham số. Nếu không cẩn thận khi thực hiện những thay đổi đó, chúng ta có thể gây ra những lỗi nhỏ. Như mọi khi, hãy nhớ rằng mục tiêu là phá vỡ các phần phụ thuộc đủ tốt để thực hiện các kiểm thử. Bạn nên thiên về việc thực hiện những thay đổi mà bạn cảm thấy tự tin hơn là những thay đổi mang lại cho bạn cấu trúc tốt nhất. Những điều đó có thể đến sau khi bạn đã có kiểm thử. Ví dụ: trong trường hợp này, chúng tôi có thể muốn thay đổi `ParameterSource` để các lời gọi của nó không phải kiểm thử null khi họ gọi các phương thức của nó (xem _Mẫu đối tượng Null (112)_ để biết chi tiết).

> An toàn là trên hết. Sau khi thực hiện các kiểm thử, bạn có thể thực hiện các thay đổi mang tính xâm lấn một cách tự tin hơn nhiều.

### Các bước thực hiện

Để sử dụng _Thông số thích ứng_, hãy thực hiện các bước sau:

1. Tạo giao diện mới mà bạn sẽ sử dụng trong phương thức này. Làm cho nó đơn giản và dễ hiểu nhất có thể, nhưng cố gắng không tạo ra một giao diện đòi hỏi nhiều hơn những thay đổi nhỏ nhặt trong phương thức.

2. Tạo trình triển khai sản xuất cho giao diện mới.

3. Tạo trình triển khai giả lập cho giao diện.

4. Viết một trường hợp kiểm thử đơn giản, truyền giả lập vào phương thức.

5. Thực hiện những thay đổi bạn cần trong phương thức sử dụng tham số mới.

6. Chạy kiểm thử để xác minh rằng bạn có thể kiểm thử phương thức bằng cách sử dụng phương thức giả lập.

## Phá vỡ đối tượng phương thức

Trong nhiều ứng dụng, rất khó để làm việc với các phương thức lớn. Thông thường, nếu bạn có thể khởi tạo lớp chứa chúng và đưa chúng vào kiểm thử khai thác, bạn có thể bắt đầu viết kiểm thử. Trong một số trường hợp, công việc cần thiết để tạo một lớp riêng biệt có thể rất nhiều. Nó thậm chí có thể quá mức cần thiết cho những thay đổi bạn cần thực hiện. Nếu phương thức bạn cần làm việc có kích thước nhỏ và không sử dụng dữ liệu phiên bản, hãy sử dụng _Tìm kiếm Phương thức Tĩnh (345)_ để kiểm thử các thay đổi của bạn. Mặt khác, nếu phương thức của bạn lớn hoặc sử dụng dữ liệu và phương thức phiên bản, hãy cân nhắc sử dụng _Phá vỡ đối tượng phương thức_. Nói ngắn gọn, ý tưởng đằng sau cách tái cấu trúc này là chuyển một phương thức lớn sang một lớp mới. Các đối tượng mà bạn tạo bằng cách sử dụng lớp mới đó được gọi là đối tượng phương thức vì chúng thể hiện code của một phương thức duy nhất. Sau khi sử dụng _Phá vỡ đối tượng phương thức_, bạn thường có thể viết kiểm thử cho lớp mới dễ dàng hơn so với phương thức cũ. Các biến cục bộ trong phương thức cũ có thể trở thành biến thể hiện trong lớp mới. Thông thường, điều đó giúp việc phá bỏ các phần phụ thuộc dễ dàng hơn và chuyển code sang trạng thái tốt hơn.

Đây là một ví dụ trong C++ (các phần lớn của lớp và phương thức đã bị loại bỏ để bảo tồn cây):

```cpp
class GDIBrush
{
  public:
    void draw(vector<point>& renderingRoots, ColorMatrix& colors, vector<point>& selection);
    ...

  private:
    void drawPoint(int x, int y, COLOR color);
    ...
};

void GDIBrush::draw(vector<point>& renderingRoots, ColorMatrix& colors, vector<point>& selection)
{
  for(vector<points>::iterator it = renderingRoots.begin(); it != renderingRoots.end(); ++it) {
    point p = *it;
    ...

    drawPoint(p.x, p.y, colors[n]);
  }
  ...
}
```

Lớp `GDIBrush` có một phương thức lớn tên là `draw`. Chúng ta không thể dễ dàng viết kiểm thử cho nó và sẽ rất khó để tạo một phiên bản `GDIBrush` trong bộ kiểm thử khai thác. Hãy sử dụng _Phá vỡ đối tượng phương thức_ để di chuyển `draw` sang một lớp mới.

Bước đầu tiên là tạo một lớp mới sẽ thực hiện công việc 'draw'. Chúng ta có thể gọi nó là `Renderer`. Sau khi tạo xong, chúng ta tạo cho nó một hàm khởi tạo công khai. Các tham số của hàm khởi tạo này phải tham chiếu đến lớp gốc và các tham số của phương thức gốc. Chúng ta cần _Bảo toàn Chữ ký (312)_ về sau.

```cpp
class Renderer
{
public:
  Renderer(GBIBrush *brush, vector<point>& renderingRoots, ColorMatrix &colors, vector<point>& selection);
  ...
}
```

Sau khi tạo hàm khởi tạo, chúng ta thêm các biến thể hiện cho từng tham số của hàm khởi tạo và khởi tạo chúng. Chúng ta cũng thực hiện việc này như một tập hợp các thao tác cắt/sao chép/dán để _Bảo toàn Chữ ký (312)_.

```cpp
class Renderer
{
private:
  GDIBrush *brush;
  vector<point>& renderingRoots;
  ColorMatrix& colors;
  vector<point>& selection;

public:
  Renderer(GDIBrush *brush, vector<point>& renderingRoots, ColorMatrix& colors, vector<point>& selection)
  : brush(brush), renderingRoots(renderingRoots), colors(colors), selection(selection)
  {}
}
```

Bạn có thể nhìn và nói, "Hmmm, có vẻ như chúng ta sẽ rơi vào tình thế tương tự. Chúng ta đang chấp nhận một tham chiếu đến `GDIBrush` và chúng ta không thể khởi tạo một trong những tham chiếu đó trong kiểm thử khai thác của mình. Điều này có ích gì cho chúng ta?" Chờ đã, chúng ta sẽ có kết quả ở một nơi khác.

Sau khi tạo xong hàm khởi tạo, chúng ta có thể thêm một phương thức khác vào lớp, một phương thức sẽ thực hiện công việc đã được thực hiện trong phương thức `draw()`. Chúng ta cũng có thể gọi nó là `draw()`

```cpp
class Renderer
{
private:
  GDIBrush *brush;
  vector<point>& renderingRoots;
  ColorMatrix& colors;
  vector<point>& selection;

public:
  Renderer(GDIBrush *brush, vector<point>& renderingRoots, ColorMatrix& colors, vector<point>& selection)
  : brush(brush), renderingRoots(renderingRoots), colors(colors), selection(selection)
  {}

	void draw();
}
```

Bây giờ chúng ta thêm phần thân của phương thức `draw()` vào `Renderer`. Chúng ta sao chép nội dung của phương thức `draw()` cũ sang phương thức mới và _Dựa vào Trình biên dịch (315)_

```cpp
void Renderer::draw()
{
	for(vector<points>::iterator it = renderingRoots.begin(); it != renderingRoots.end(); ++it) {
		point p = *it;
		...
		drawPoint(p.x, p.y, colors[n]);
	}
	...
}
```

Nếu `draw()` trong `Renderer` có bất kỳ tham chiếu nào đến các biến thể hiện hoặc phương thức của `GDIBrush`, quá trình biên dịch của chúng ta sẽ thất bại. Để làm cho nó thành công, chúng ta có thể tạo `getters` cho các biến và tạo các phương thức mà nó phụ thuộc vào thành public. Trong trường hợp này, chỉ có một phương thức phụ thuộc duy nhất, một phương thức privated có tên `drawPoint`. Sau khi công khai nó trên `GDIBrush`, chúng ta có thể truy cập nó từ một tham chiếu đến lớp `Renderer` và biên dịch code.

Bây giờ chúng ta có thể ủy quyền phương thức `draw` của `GDIBrush` cho `Renderer`

```cpp
void GDIBrush::draw(vector<point>& renderingRoots, ColorMatrix &colors, vector<point>& selection)
{
	Renderer renderer(this, renderingRoots, colors, selection);
	renderer.draw();
}
```

Bây giờ quay lại phần phụ thuộc `GDIBrush`. Nếu không thể khởi tạo `GDIBrush` trong kiểm thử khai thác, chúng ta có thể sử dụng _Trích xuất Giao diện_ để loại bỏ hoàn toàn sự phụ thuộc vào `GDIBrush`. Phần trên _Trích xuát Giao diện (362)_ có chi tiết, nhưng tóm tắt lại, chúng tôi tạo một lớp giao diện trống và yêu cầu `GDIBrush` triển khai nó. Trong trường hợp này, chúng ta có thể gọi nó là `PointRenderer` vì `drawPoint` là phương thức trên `GDIBrush` mà chúng ta thực sự cần quyền truy cập trong `Renderer`. Sau đó, chúng ta thay đổi tham chiếu mà `Renderer` giữ từ `GDIBrush` sang `PointRenderer`, biên dịch và để trình biên dịch cho chúng ta biết những phương thức nào phải có trên giao diện. Đây là code cuối cùng thu được:

```cpp
class PointRenderer
{
	public:
		virtual void drawPoint(int x, int y, COLOR color) = 0;
};

class GDIBrush : public PointRenderer
{
	public:
		void drawPoint(int x, int y, COLOR color);
	...
}
class Renderer
{
	private:
		PointRender *pointRenderer;
		vector<point>& renderingRoots;
		ColorMatrix& colors;
		vector<point>& selection;

	public:
		Renderer(PointRenderer *renderer, vector<point>& renderingRoots, ColorMatrix& colors, vector<point>& selection)
		: pointRenderer(pointRenderer), renderingRoots(renderingRoots) colors(colors), selection(selection)
		{}

	void draw();
};

void Renderer::draw()
{
	for(vector<points>::iterator it = renderingRoots.begin(); it != renderingRoots.end(); ++it) {
		point p = *it;
		...
		pointRenderer->drawPoint(p.x,p.y,colors[n]);
	}
	...
}
```

Hình 25.1 cho thấy nó trông như thế nào bằng UML

![25.1](images/25/25-1.png)
Hình 25.1 `GDIBrush` sau khi sử dụng _Phá vỡ đối tượng phương thức_.

Những gì chúng ta thu được có vẻ hơi kỳ lạ. Chúng ta có một lớp `(GDIBrush)` triển khai giao diện mới `(PointRenderer)` và được sử dụng duy nhất bởi một đối tượng `(Renderer)` do lớp đó tạo ra. Bạn có thể cảm thấy khó chịu vì chúng ta đã public các một số phương thức privated trong lớp ban đầu để có thể sử dụng kỹ thuật này. Giờ đây, phương thức privated `drawPoint` của `GDIBrush` đã được public. Điều quan trọng cần lưu ý là đây không thực sự đã là hoàn thành.

Theo thời gian, bạn sẽ cảm thấy chán ghét thực tế là bạn không thể khởi tạo lớp ban đầu trong bộ kiểm thử khai thác và bạn sẽ phá bỏ các phần phụ thuộc khác để có thể làm được. Sau đó, bạn sẽ xem xét các lựa chọn khác. Ví dụ: `PointRenderer` có cần phải là một giao diện không? Nó có thể là một lớp chứa `GDIBrush` không? Nếu có thể, có lẽ bạn có thể bắt đầu chuyển sang thiết kế dựa trên khái niệm mới này về `Renderers`.

Đó chỉ là một trong những cách tái cấu trúc đơn giản mà chúng ta có thể thực hiện khi kiểm thử lớp này. Cấu trúc kết quả có thể mời nhiều hơn nữa.

> Đối tượng phương thức _Phá vỡ đối tượng phương thức_. Trong trường hợp đơn giản nhất, phương thức gốc không sử dụng bất kỳ biến thể hiện hoặc phương thức nào từ lớp gốc. Chúng ta không cần truyền cho nó một tham chiếu đến lớp ban đầu.
>
> Trong các trường hợp khác, phương thức chỉ sử dụng dữ liệu từ lớp gốc. Đôi khi, việc đặt dữ liệu này vào một lớp lưu giữ dữ liệu mới và chuyển nó làm tham số cho đối tượng phương thức là điều hợp lý.
>
> Trường hợp tôi trình bày ở phần này là trường hợp xấu nhất; chúng ta cần sử dụng các phương thức trên lớp gốc, vì vậy chúng ta sử dụng `Trích xuất Giao diện (362)` và bắt đầu xây dựng một số tính trừu tượng giữa đối tượng phương thức và lớp gốc.

### Các bước thực hiện

Bạn có thể sử dụng các bước sau để thực hiện _Phá vỡ đối tượng phương thức_ một cách an toàn mà không cần kiểm tra:

1. Tạo một lớp sẽ chứa code của phương thức.

2. Tạo một hàm khởi tạo cho lớp và _Bảo tồn Chữ ký (312)_ để cung cấp cho nó một bản sao chính xác của các tham số được phương thức sử dụng. Nếu phương thức sử dụng dữ liệu cá thể hoặc các phương thức từ lớp gốc, hãy thêm một tham chiếu đến lớp gốc làm tham số đầu tiên cho hàm khởi tạo.

3. Đối với mỗi tham số trong hàm khởi tạo, hãy khai báo một biến thực thể và cung cấp cho nó cùng kiểu với biến đó. _Bảo tồn Chữ ký (312)_ bằng cách sao chép tất cả các tham số trực tiếp vào lớp và định dạng chúng dưới dạng khai báo biến thể hiện. Gán tất cả các tham số cho các biến thể hiện trong hàm khởi tạo.

4. Tạo một phương thức thực thi trống trên lớp mới. Thông thường phương pháp này được gọi là `run()`. Chúng t đã sử dụng tên `draw` trong ví dụ.

5. Sao chép phần thân của phương thức cũ vào phương thức thực thi và biên dịch thành _Dựa vào Trình biên dịch (315)_.

6. Các thông báo lỗi từ trình biên dịch sẽ cho biết phương thức vẫn đang sử dụng các phương thức hoặc biến từ lớp cũ ở đâu. Trong mỗi trường hợp này, hãy thực hiện những gì cần thiết để biên dịch phương thức. Trong một số trường hợp, điều này đơn giản như việc thay đổi lệnh gọi để sử dụng tham chiếu đến lớp ban đầu. Trong các trường hợp khác, bạn có thể phải đặt các phương thức ở chế độ public trên lớp gốc hoặc giới thiệu các `getters` để không phải đặt các biến thể hiện ở chế độ public.

7. Sau khi lớp mới biên dịch, hãy quay lại phương thức ban đầu và thay đổi nó để nó tạo một thể hiện của lớp mới và ủy thác công việc của nó cho nó.

8. Nếu cần, hãy sử dụng _Trích xuất Giao diện (362)_ để thoát khỏi sự phụ thuộc vào lớp gốc
