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
