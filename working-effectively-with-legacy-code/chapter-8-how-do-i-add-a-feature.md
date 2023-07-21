---
layout: default
---

# Chương 8, Làm thế nào để tôi thêm một chức năng mới?

Đây hẳn là câu hỏi trừu tượng nhất và về vấn đề chuyên biệt nhất trong cuốn sách này. Tôi suýt nữa đã không đưa nó vào vì điều đó. Nhưng thực tế là, bất kể thiết kế của chúng ta có cách tiếp cận thế nào hay có hạn chế nào, có một số kỹ thuật mà có thể sử dụng để làm cho công việc trở nên dễ dàng hơn.

Hãy nói về bối cảnh. Trong code kế thừa, một trong những cân nhắc quan trọng nhất là chúng ta không có các kiểm thử xung quanh phần lớn code của mình. Tồi tệ hơn, việc đưa chúng vào đúng vị trí có thể gặp khó khăn. Nhiều người trong nhiều nhóm bị cám dỗ quay trở lại với các kỹ thuật trong _Chương 6, Tôi không có nhiều thời gian và tôi phải thay đổi nó_, vì điều này. Chúng ta có thể sử dụng các kỹ thuật được mô tả ở đó (phát triền và đóng gói) để thêm vào code mà không cần kiểm tra, nhưng có những mối nguy hiểm khác ngoài những mối nguy hiểm rõ ràng. Có một điều, khi chúng ta phát triển hoặc đóng gói, chúng ta không sửa đổi đáng kể code hiện có, vì vậy code sẽ không khá hơn trong một khoảng thời gian. Sao chép là một mối nguy hiểm khác. Nếu code mà chúng ta thêm code trùng lặp tồn tại trong các khu vực chưa được kiểm thử, code đó có thể sẽ nằm đó và mưng mủ. Tồi tệ hơn, chúng ta có thể không nhận ra rằng sẽ có sự trùng lặp cho đến khi thực hiện các thay đổi của mình. Mối nguy hiểm cuối cùng là sự sợ hãi và cam chịu: sợ rằng chúng ta không thể thay đổi một đoạn code cụ thể và làm cho nó dễ làm việc hơn, và cam chịu vì toàn bộ các khu vực của code không trở nên tốt hơn. Nỗi sợ hãi cản trở việc đưa ra quyết định đúng đắn. Các mầm và lớp bọc còn lại trong code là những lời nhắc nhở nhỏ về nó.

Nói chung, tốt hơn là nên đối đầu với con thú thay vì trốn tránh nó. Nếu chúng ta có thể kiểm thử code, chúng ta có thể sử dụng các kỹ thuật trong chương này để tiến lên một cách tốt đẹp. Nếu bạn cần tìm cách thực hiện các kiểm thử đúng vị trí, hãy xem _Chương 13, Tôi cần thực hiện thay đổi nhưng tôi không biết kiểm thử nào phải viết_. Nếu các phần phụ thuộc cản trở bạn, hãy xem _Chương 9, Tôi không thể đưa lớp này vào kiểm thử khai thác_ và _Chương 10, Tôi không thể đưa lớp này vào kiểm thử khai thác_. Khi chúng ta có các kiểm thử đúng vị trí, chúng ta sẽ ở vị thế tốt hơn để thêm các tính năng mới. Chúng ta có một nền tảng vững chắc.

## Phát triển dựa trên thử nghiệm (Test-Driven Development - TDD)

Kỹ thuật bổ sung tính năng mạnh mẽ nhất mà tôi biết là phát triển dựa trên thử nghiệm (TDD). Nó hoạt động ngắn gọn như sau: Đầu tiên tưởng tượng ra phương thức sẽ giúp chúng ta giải quyết một phần của vấn đề, sau đó chúng ta viết một trường hợp kiểm thử thất bại cho phương thức đó. Phương thức này chưa tồn tại, nhưng nếu chúng ta có thể viết kiểm thử cho nó, thì chúng ta đã củng cố hiểu biết của mình về những gì nên làm của code chúng ta sắp viết.

Phát triển dựa trên thử nghiệm sử dụng một thuật toán nhỏ như sau:
1. Viết một trường hợp kiểm thử thất bại.
2. Viết code để biên dịch kiểm thử.
3. Viết code để vượt qua kiểm thử.
4. Tái cấu trúc.
5. Lặp lại

Đây là một ví dụ. Chúng ta đang làm việc với một ứng dụng tài chính và cần một lớp sử dụng các phép toán mạnh mẽ để xác định có nên giao dịch một số mặt hàng nhất định hay không. Chúng ta cần một lớp Java tính toán một thứ gọi là thời điểm thống kê đầu tiên về một điểm. Chúng ta chưa có một phương thức nào làm được điều đó, nhưng chúng ta biết rằng có thể viết một trường hợp kiểm thử cho phương thức đó. Chúng ta biết toán học, vì vậy chúng ta biết rằng câu trả lời phải là -0,5 đối với dữ liệu chúng tôi mã hóa trong kiểm thử.

### Viết một trường hợp kiểm thử thất bại
Đây là một trường hợp kiểm thử cho chức năng chúng ta cần.

```java
public void testFirstMoment() {
  InstrumentCalculator calculator = new InstrumentCalculator();
  calculator.addElement(1.0);
  calculator.addElement(2.0);

  assertEquals(-0.5, calculator.firstMomentAbout(2.0), TOLERANCE);
}
```

### Viết code để biên dịch kiểm thử
Kiểm thử chúng ta vừa viết rất tốt, nhưng nó không biên dịch được. Chúng ta không có phương thức có tên `firstMomentAbout` trong `InstrumentCalculator`. Nhưng chúng ta thêm nó như một phương thức rỗng. Chúng ta muốn thử nghiệm thất bại, vì vậy chúng ta yêu cầu nó trả về giá trị `double` là `NaN` (chắc chắn không phải là giá trị mong đợi là -0,5).

```java
public class InstrumentCalculator
{
  double firstMomentAbout(double point) {
    return Double.NaN;
  }
  ...
}
```

### Viết code để vượt qua kiểm thử
Với kiểm thử được viết, chúng ta viết code để nó vượt qua.

```java
public double firstMomentAbout(double point) {
  double numerator = 0.0;
  for (Iterator it = elements.iterator(); it.hasNext(); ) {
    double element = ((Double)(it.next())).doubleValue();
    numerator += element - point;
  }
  return numerator / elements.size();
}
```

> Đây là một lượng code lớn bất thường cần viết để đáp ứng với kiểm thử trong TDD. Thông thường, các bước nhỏ hơn nhiều, mặc dù chúng có thể lớn như vậy nếu bạn chắc chắn về thuật toán bạn cần sử dụng.

### Tái cấu trúc
Có bất kỳ sự trùng lặp nào ở đây không? Không. Chúng ta có thể chuyển sang trường hợp tiếp theo.

### Viết một trường hợp kiểm thử thất bại.

Code chúng ta vừa viết đã vượt qua được kiểm thử, nhưng nó chắc chắn không đúng cho mọi trường hợp. Trong câu lệnh `return`, chúng ta có thể vô tình chia cho 0. Trong trường hợp đó, chúng ta nên làm gì? Chúng ta trả về cái gì khi không có phần tử nào? Trong trường hợp này, chúng ta muốn trả về một ngoại lệ. Kết quả sẽ vô nghĩa đối với chúng ta trừ khi chúng ta có dữ liệu trong danh sách thành phần của mình.

Kiểm thử tiếp theo sẽ đặc biệt hơn. Nó sẽ không vượt qua nếu một `UnlimitedBasisException` không được trả ra và nó sẽ vượt qua nếu không có ngoại lệ nào được trả ra hoặc bất kỳ ngoại lệ nào khác được trả ra. Khi chúng ta chạy nó, nó không thành công vì `ArithmeticException` bị trả ra khi chúng ta chia cho 0 trong `FirstMomentAbout`.

```java
public void testFirstMoment() {
  try {
    new InstrumentCalculator().firstMomentAbout(0.0);
    fail("expected InvalidBasisException");
  }
  catch (InvalidBasisException e) {
  }
}
```

### Viết code để biên dịch kiểm thử.

Để làm điều này, chúng ta phải thay đổi khai báo của `firstMomentAbout` để nó trả ra một `UnlimitedBasisException`.

```java
public double firstMomentAbout(double point)
    throws InvalidBasisException {

  double numerator = 0.0;
  for (Iterator it = elements.iterator(); it.hasNext(); ) {
    double element = ((Double)(it.next())).doubleValue();
    numerator += element - point;
  }
  return numerator / elements.size();
}
```

Nhưng nó vẫn chưa biên dịch được. Các lỗi trình biên dịch cho biết rằng chúng ta phải thực sự trả ra ngoại lệ nếu nó được liệt kê trong phần khai báo, vì vậy cần tiếp tục viết thêm code.

```java
public double firstMomentAbout(double point)
    throws InvalidBasisException {

  if (element.size() == 0)
    throw new InvalidBasisException("no elements");

  double numerator = 0.0;
  for (Iterator it = elements.iterator(); it.hasNext(); ) {
    double element = ((Double)(it.next())).doubleValue();
    numerator += element - point;
  }
  return numerator / elements.size();
}
```

### Viết code để vượt qua kiểm thử.
Kiểm thử đã vượt qua

### Tái cấu trúc.

Không có trùng lặp nào.

### Viết một trường hợp kiểm thử thất bại
### Viết code để biên dịch kiểm thử
### Viết code để vượt qua kiểm thử
### Tái cấu trúc
