---
layout: default
---

# Chương 11, Tôi Cần Thực Hiện Thay Đổi. Tôi nên kiểm thử những phương thức nào?

Chúng ta cần thực hiện một số thay đổi và chúng ta cần viết các _kiểm thử đặc tính_ (186) để xác định các hành vi đã có. Chúng ta nên viết chúng ở đâu? Câu trả lời đơn giản nhất là viết kiểm thử cho từng phương thức mà chúng ta thay đổi. Nhưng vậy đã đủ chưa? Có thể, nếu code đơn giản và dễ hiểu, nhưng trong code kế thừa, thường thì không có gì là chắc chắn cả. Một thay đổi ở một nơi có thể ảnh hưởng đến hành vi ở một nơi khác; trừ khi chúng ta có một kiểm thử tại chỗ đó, chúng ta có thể không bao giờ biết được.

Khi tôi cần thực hiện thay đổi trong code kế thừa đặc biệt rắc rối, tôi thường dành thời gian cố gắng tìm ra nơi tôi nên viết các kiểm thử của mình. Điều này liên quan đến việc suy nghĩ về sự thay đổi mà tôi sẽ thực hiện, xem nó sẽ ảnh hưởng đến điều gì, và những thứ bị ảnh hưởng sẽ ảnh hưởng đến điều gì, v.v. Kiểu lý luận này không có gì mới; mọi người đã làm điều đó kể từ buổi bình minh của thời đại máy tính.

Các lập trình viên ngồi xuống và suy luận về các chương trình của họ vì nhiều lý do. Điều buồn cười là, chúng ta không nói nhiều về nó. Chúng ta giả định rằng mọi người đều biết cách làm và điều đó "là một phần của lập trình viên." Thật không may, điều đó không giúp ích gì nhiều cho chúng ta khi phải đối mặt với những đoạn code rắc rối khủng khiếp, vượt xa khả năng suy luận dễ dàng của chúng ta về nó. Chúng ta biết rằng chúng ta nên tái cấu trúc lại nó để làm cho nó dễ hiểu hơn, nhưng sau đó lại xảy ra vấn đề với việc kiểm thử lại. Nếu chúng ta không có các kiểm thử, làm sao chúng tôi biết rằng chúng ta đang tái cấu trúc chính xác?

Tôi đã viết các kỹ thuật trong chương này để thu hẹp khoảng cách. Thường thì chúng ta phải suy luận về các hiệu ứng theo những cách khác thường để tìm ra nơi tốt nhất để kiểm thử.

## Lý luận về hiệu ứng

Trong ngành này, chúng ta không nói về điều này thường xuyên, nhưng đối với mỗi thay đổi chức năng trong phần mềm, sẽ có một số chuỗi tác động liên quan. Chẳng hạn, nếu đổi từ 3 thành 4 trong đoạn code C# dưới đây, nó sẽ thay đổi kết quả của phương thức khi nó được gọi. Nó cũng có thể thay đổi kết quả của các phương thức gọi phương thức đó, v.v., và cứ thế, tất cả quay trở về một số ranh giới của hệ thống. Mặc dù vậy, nhiều phần của code sẽ không có hành vi khác. Chúng sẽ không tạo ra các kết quả khác nhau vì chúng không gọi trực tiếp hoặc gián tiếp `getBalancePoint()`.

```C
int getBalancePoint() {
	const int SCALE_FACTOR = 3;
	int result = startingLoad + (LOAD_FACTOR * residual * SCALE_FACTOR);
	foreach(Load load in loads) {
		result += load.getPointWeight() * SCALE_FACTOR;
	}
	return result;
}
```

> IDE hỗ trợ việc phân tích hiệu ứng
> Đôi khi tôi ước mình có một IDE hỗ trợ tôi biết được các hiệu ứng trong code kế thừa. Tôi có thể đánh dấu một đoạn code và nhấn một phím nóng. Sau đó, IDE sẽ cung cấp cho tôi danh sách tất cả các biến và phương thức có thể bị ảnh hưởng khi tôi thay đổi đoạn code đã chọn.
> Có lẽ một ngày nào đó sẽ có người phát triển một công cụ như vậy. Trong khi chờ đợi, chúng ta phải suy luận các hiệu ứng mà không có công cụ. Đó là một kỹ năng rất dễ học, nhưng thật khó để biết khi nào chúng ta đã hiểu đúng.

Cách tốt nhất để hiểu được lý luận về hiệu ứng có tác dụng như thế nào là xem xét một ví dụ. Xem xét một lớp Java là một phần của ứng dụng thao tác ngôn ngữ C++. Nghe có vẻ khá chuyên sâu về miền phải không? Nhưng kiến thức miền không quan trọng khi chúng ta suy luận các hiệu ứng.

Hãy thử một bài tập nhỏ. Lập danh sách tất cả những thứ có thể thay đổi sau khi đối tượng `CppClass` được tạo sẽ ảnh hưởng đến kết quả được trả về bởi bất kỳ phương thức nào của nó.

```Java
public class CppClass {
	private String name;
	private List declarations;

	public CppClass(String name, List declarations) {
		this.name = name;
		this.declarations = declarations;
	}

	public int getDeclarationCount() {
		return declarations.size();
	}

	public String getName() {
		return name;
	}

	public Declaration getDeclaration(int index) {
		return ((Declaration)declarations.get(index));
	}

	public String getInterface(String interfaceName, int [] indices) {
		String result = "class " + interfaceName + " {\npublic:\n";
		for (int n = 0; n < indices.length; n++) {
			Declaration virtualFunction = (Declaration)(declarations.get(indices[n]));
			result += "\t" + virtualFunction.asAbstract() + "\n";
		}
		result += "};\n";
		return result;
	}
}
```

Danh sách đó sẽ giống như thế này:

1. Ai đó có thể thêm các phần tử bổ sung vào danh sách khai báo sau khi chuyển nó tới hàm khởi tạo. Vì danh sách được giữ theo tham chiếu nên những thay đổi được thực hiện đối với danh sách có thể thay đổi kết quả của `getInterface`, `getDeclaration` và `getDeclarationCount`.
2. Ai đó có thể thay đổi một trong các đối tượng được giữ trong danh sách khai báo hoặc thay thế một trong các phần tử của nó, ảnh hưởng đến các phương thức tương tự.

> Một số người nhìn vào phương thức `getName` và nghi ngờ rằng nó có thể trả về một giá trị khác nếu bất kỳ ai thay đổi chuỗi `name`, nhưng trong Java, các đối tượng `String` là bất biến. Bạn không thể thay đổi giá trị của chúng sau khi chúng được tạo. Sau khi một đối tượng `CppClass` được tạo, `getName` luôn trả về cùng một giá trị chuỗi.

Chúng ta tạo một bản phác thảo cho thấy những thay đổi trong `declarations` có ảnh hưởng đến `getDeclarationCount()` (xem Hình 11.1)

![11.1](images/11-1.png)
Hình 11.1 `declarations` tác động đến `getDeclarationCount`.

Bản phác thảo này cho thấy rằng nếu `declarations` thay đổi theo một cách nào đó - ví dụ: nếu kích thước của nó tăng lên - `getDeclarationCount()` có thể trả về một giá trị khác.

Chúng ta cũng có thể tạo một bản phác thảo cho cho `getDeclaration(int index)` (xem Hình 11.2).

Các giá trị trả về của lệnh gọi `getDeclaration(int index)` có thể thay đổi nếu có điều gì đó khiến `declarations` thay đổi hoặc nếu các khai báo bên trong nó thay đổi.

Hình 11.3 cho thấy những điều tương tự cũng ảnh hưởng đến phương thức `getInterface`.

Chúng ta có thể gộp tất cả các bản phác thảo này lại với nhau thành một bản phác thảo lớn hơn (xem Hình 11.4)

![11.2](images/11-2.png)
Hình 11.2 `declarations` và các đối tượng mà nó nắm giữ tác động đến `getDeclarationCount`

![11.3](images/11-3.png)
Hình 11.3 Những thứ ảnh hưởng đến `getInterface`

![11.4](images/11-4.png)
Hình 11.4 Tổng hợp các bản phác thảo

Không có nhiều cú pháp trong các sơ đồ này. Tôi chỉ gọi chúng là _các bản phác thảo hiệu ứng_. Điều quan trọng là có một thành phần riêng cho từng biến có thể bị ảnh hưởng và từng phương thức có giá trị trả về có thể thay đổi. Đôi khi các biến nằm trên cùng một đối tượng và đôi khi chúng nằm trên các đối tượng khác nhau. Điều đó không thành vấn đề: Chúng tôi chỉ tạo thành phần cho những thứ sẽ thay đổi và vẽ một mũi tên tới mọi thứ có giá trị có thể thay đổi trong thời gian chạy bởi vì chúng.

> Nếu code của bạn được cấu trúc tốt, hầu hết các phương thức trong ứng dụng của bạn đều có cấu trúc hiệu ứng đơn giản. Trên thực tế, một thước đo mức độ tốt của ứng dụng là các hiệu ứng khá phức tạp đối với thế giới bên ngoài là tổng của một tập hợp các hiệu ứng đơn giản hơn nhiều bên trong code. Hầu như bất cứ điều gì bạn có thể làm khiến cho bản phác thảo hiệu ứng đơn giản hơn cho một đoạn code đều khiến nó trở nên dễ hiểu và dễ bảo trì hơn.

Hãy mở rộng bức tranh của chúng ta về hệ thống mà lớp trước hình thành và nhìn vào một bức tranh hiệu ứng lớn hơn. Các đối tượng `CppClass` được tạo trong một lớp có tên là `ClassReader`. Trên thực tế, chúng tôi có thể xác định rằng chúng chỉ được tạo trong `ClassReader`.

```Java
public class ClassReader {
	private boolean inPublicSection = false;
	private CppClass parsedClass;
	private List declarations = new ArrayList();
	private Reader reader;

	public ClassReader(Reader reader) {
		this.reader = reader;
	}

	public void parse() throws Exception {
		TokenReader source = new TokenReader(reader);
		Token classToken = source.readToken();
		Token className = source.readToken();

		Token lbrace = source.readToken();
		matchBody(source);
		Token rbrace = source.readToken();

		Token semicolon = source.readToken();

		if (classToken.getType() == Token.CLASS && className.getType() == Token.IDENT && lbrace.getType() == Token.LBRACE && rbrace.getType() == Token.RBRACE && semicolon.getType() == Token.SEMIC) {
				parsedClass = new CppClass(className.getText(),declarations);
		}
	}
	...
}
```

Hãy nhớ những gì chúng ta đã học về `CppClass`? Chúng ta có biết rằng danh sách khai báo sẽ không bao giờ thay đổi sau khi `CppClass` được tạo không? Chúng ta không thực sự khẳng định được với những gì đã biết. Chúng ta cần tìm ra cách danh sách khai báo được điền. Nếu chúng ta xem xét nhiều hơn về lớp, chúng ta có thể thấy rằng các khai báo chỉ được thêm vào một vị trí trong `CppClass`, một phương thức có tên là `matchVirtualDeclaration` được gọi bởi `matchBody`.

```Java
private void matchVirtualDeclaration(TokenReader source)
throws IOException {
	if (!source.peekToken().getType() == Token.VIRTUAL)
		return;
	List declarationTokens = new ArrayList();
	declarationTokens.add(source.readToken());
	while(source.peekToken().getType() != Token.SEMIC) {
		declarationTokens.add(source.readToken());
	}
	declarationTokens.add(source.readToken());
	if (inPublicSection)
		declarations.add(new Declaration(declarationTokens));
}
```

Có vẻ như tất cả các thay đổi xảy ra với danh sách này xảy ra trước khi đối tượng `CppClass` được tạo. Bởi vì chúng ta thêm các khai báo mới vào danh sách và không giữ bất kỳ tham chiếu nào đến chúng, nên các khai báo cũng sẽ không thay đổi.

Hãy nghĩ về những thứ nằm trong danh sách khai báo. Phương thức `readToken` của `TokenReader` trả về các đối tượng `token` chỉ chứa một chuỗi và một số nguyên không bao giờ thay đổi. Tôi không trình bày nó ở đây, nhưng nhìn lướt qua lớp `Declaration` cho thấy rằng không có gì khác có thể thay đổi trạng thái của nó sau khi được tạo, vì vậy chúng ta có thể cảm thấy khá thoải mái khi nói rằng khi một đối tượng `CppClass` được tạo, danh sách khai báo và danh sách nội dung của nó sẽ không thay đổi.

Điều này sẽ giúp chúng ta thế nào? Nếu chúng ta nhận được các giá trị không mong muốn từ `CppClass`, chúng ta biết rằng chỉ cần xem xét một vài điều. Nhìn chung, chúng ta có thể bắt đầu thực sự nhìn lại những nơi mà các đối tượng con của `CppClass` được tạo ra để tìm ra điều gì đang xảy ra. Chúng ta cũng có thể làm cho code rõ ràng hơn bằng cách bắt đầu đánh dấu một số tham chiếu trong hằng số `CppClass` bằng cách sử dụng từ khóa `final` của Java.

Trong các chương trình không được viết tốt, chúng ta thường thấy rất khó hiểu tại sao kết quả mà chúng ta đang xem xét lại như vậy. Khi chúng ta đang ở vào hoàn cảnh đó, chúng ta có một vấn đề cần gỡ lỗi và phải suy luận ngược từ vấn đề đến nguồn gốc của nó. Khi làm việc với code kế thừa, chúng ta thường phải đặt một câu hỏi khác: Nếu chúng ta thực hiện một thay đổi cụ thể, nó có thể ảnh hưởng đến phần kết quả còn lại của chương trình như thế nào?

Điều này liên quan đến suy luận tịnh tiến từ các điểm thay đổi. Khi bạn xử lý tốt kiểu lập luận này, bạn sẽ bắt đầu có một kỹ thuật để tìm ra những chỗ hợp lý để viết kiểm thử.

## Suy luận tịnh tiến

Trong ví dụ trước, chúng ta đã cố gắng tìm ra tập hợp các đối tượng ảnh hưởng đến các giá trị tại một vị trí cụ thể trong code. Khi viết các _kiểm thử đặc tính_ (186), chúng ta sẽ đảo ngược quá trình này. Chúng ta xem xét một tập hợp các đối tượng và cố gắng tìm ra điều gì sẽ thay đổi sau khi chúng ngừng hoạt động. Đây là một ví dụ. Lớp sau đây là một phần của hệ thống tệp trong bộ nhớ. Chúng ta không có bất kỳ kiểm thử nào cho nó, nhưng chúng ta muốn thực hiện một số thay đổi.

```Java
public class InMemoryDirectory {
	private List elements = new ArrayList();

	public void addElement(Element newElement) {
		elements.add(newElement);
	}

	public void generateIndex() {
		Element index = new Element("index");
		for (Iterator it = elements.iterator(); it.hasNext(); ) {
			Element current = (Element)it.next();
			index.addText(current.getName() + "\n");
		}
		addElement(index);
	}

	public int getElementCount() {
		return elements.size();
	}

	public Element getElement(String name) {
		for (Iterator it = elements.iterator(); it.hasNext(); ) {
			Element current = (Element)it.next();
			if (current.getName().equals(name)) {
				return current;
			}
		}
		return null;
	}
}
```

`InMemoryDirectory` là một lớp Java nhỏ. Chúng ta có thể tạo một đối tượng `InMemoryDirectory`, thêm các phần tử vào đó, tạo một chỉ mục (index) và sau đó truy cập các phần tử. `Elements` là các đối tượng chứa văn bản, giống như các tệp. Khi chúng tôi tạo một chỉ mục, chúng tôi tạo một phần tử có tên là `index` và nối thêm tên của tất cả các phần tử khác vào nội dung của nó.

Một tính năng kỳ lạ của `InMemoryDirectory` là chúng ta không thể gọi `generateIndex` hai lần mà không làm hỏng mọi thứ. Nếu chúng ta gọi `generateIndex` hai lần, chúng ta sẽ có hai phần tử chỉ mục (phần tử thứ hai được tạo sẽ liệt kê phần tử đầu tiên là một phần tử của thư mục).

May mắn thay, ứng dụng sử dụng `InMemoryDirectory` theo một cách rất hạn chế. Nó tạo ra các thư mục, lấp đầy chúng bằng các phần tử, gọi `generateIndex`, sau đó chuyển thư mục đi khắp nơi để các phần khác của ứng dụng có thể truy cập các phần tử của nó. Tất cả đều hoạt động tốt ngay bây giờ, nhưng chúng ta cần phải thay đổi. Chúng ta cần sửa đổi phần mềm để cho phép mọi người thêm các phần tử vào bất kỳ lúc nào trong thời gian tồn tại của thư mục.

Lý tưởng nhất là chúng ta muốn việc tạo và bảo trì chỉ mục diễn ra như một tác dụng phụ của việc thêm các phần tử. Lần đầu tiên thêm một phần tử, phần tử chỉ mục sẽ được tạo và nó phải chứa tên của phần tử đã được thêm vào. Lần thứ hai, phần tử chỉ mục đó sẽ được cập nhật với tên của phần tử được thêm vào. Sẽ dễ dàng để viết các kiểm thử cho hành vi mới và code thỏa mãn chúng, nhưng chúng tôi không có bất kỳ kiểm thử nào cho hành vi hiện tại. Làm thế nào để chúng ta tìm ra nơi để đặt chúng?
