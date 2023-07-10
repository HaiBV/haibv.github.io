---
layout: default
---

# Chương 13, Tôi cần thực hiện thay đổi nhưng tôi không biết kiểm thử nào phải viết

Khi mọi người nói về kiểm thử, họ thường đề cập đến các kiểm thử sử dụng để tìm lỗi. Thường thì những kiểm thử này là kiểm thử thủ công. Viết các kiểm thử tự động để tìm lỗi trong code kế thừa thường không mang lại cảm giác hiệu quả bằng việc chạy thử code. Nếu bạn có một số cách để thực thi code kế thừa một cách thủ công, bạn thường có thể tìm ra lỗi rất nhanh. Nhược điểm là bạn phải làm đi làm lại công việc thủ công đó bất cứ khi nào bạn thay đổi code. Và, thành thật mà nói, mọi người không làm điều đó. Gần như mọi nhóm mà tôi từng làm việc phụ thuộc vào kiểm thử thủ công để tìm những thay đổi của họ đều đã bị tụt hậu rất xa. Sự tự tin của nhóm không phải là những gì nó có thể được.

Không, tìm lỗi trong code kế thừa thường không phải là vấn đề. Về mặt chiến lược, nó thực sự có thể là nỗ lực sai hướng. Thông thường tốt hơn là làm điều gì đó giúp nhóm của bạn bắt đầu viết code chính xác một cách nhất quán. Cách để giành chiến thắng là tập trung nỗ lực vào việc không đưa lỗi vào code ngay từ đầu.

Kiểm thử tự động là một công cụ rất quan trọng, nhưng không phải để tìm lỗi — ít nhất là không phải trực tiếp. Nói chung, các kiểm thử tự động nên chỉ định một mục tiêu mà chúng ta muốn hoàn thành hoặc cố gắng duy trì hành vi đã có. Trong dòng phát triển tự nhiên, các kiểm thử _chỉ định_ trở thành các kiểm thử _bảo tồn_. Bạn sẽ tìm thấy lỗi, nhưng thường không phải là lần đầu tiên chạy kiểm thử. Bạn tìm thấy lỗi trong các lần chạy sau khi bạn thay đổi hành vi mà bạn không mong đợi.

Điều này sẽ giúp chúng ta với code kế thừa ở đâu? Trong code kế thừa, chúng ta có thể không có bất kỳ kiểm thử nào đối với những thay đổi mà chúng ta cần thực hiện, vì vậy, không có cách nào để thực sự xác minh rằng chúng ta đang duy trì hành vi khi thực hiện thay đổi. Vì lý do này, cách tiếp cận tốt nhất có thể thực hiện khi cần thực hiện thay đổi là củng cố khu vực chúng ta muốn thay đổi bằng các kiểm thử để cung cấp một số loại mạng lưới an toàn. Chúng ta sẽ tìm thấy các lỗi trong quá trình thực hiện và sẽ phải xử lý chúng, nhưng trong hầu hết các code kế thừa, nếu coi việc tìm và sửa tất cả các lỗi là mục tiêu của mình thì chúng ta sẽ không bao giờ hoàn thành.

## Kiểm thử đặc tính

OK, vậy chúng ta cần các kiểm thử - chúng ta viết chúng như thế nào? Một cách để tiếp cận vấn đề này là tìm hiểu phần mềm phải làm gì và sau đó viết các kiểm thử dựa trên đó. Chúng ta có thể cố gắng tìm kiếm các tài liệu yêu cầu cũ và bản ghi nhớ dự án, sau đó ngồi xuống và bắt đầu viết kiểm thử. Chà, đó là một cách tiếp cận, nhưng không phải là cách tốt lắm. Trong gần như mọi hệ thống kế thừa, những gì hệ thống làm quan trọng hơn những gì nó phải làm. Nếu viết kiểm thử dựa trên giả định của chúng ta về những gì hệ thống phải làm, thì chúng ta sẽ quay lại tìm lỗi một lần nữa. Việc tìm lỗi rất quan trọng, nhưng mục tiêu của chúng ta ngay bây giờ là viết các kiểm thử tại chỗ để giúp chúng ta thực hiện các thay đổi một cách chắc chắn hơn.

Các kiểm thử mà chúng ta cần khi muốn duy trì hành vi là những gì tôi gọi là _kiểm thử đặc tính_. _Kiểm thử đặc tính_ là một kiểm thử đặc trưng cho hành vi thực tế của một đoạn code. Không có câu "Chà, nó nên làm cái này" hoặc "Tôi nghĩ nó làm cái kia." Các kiểm thử ghi lại hành vi thực tế hiện tại của hệ thống.

Đây là một thuật toán nhỏ để xác định kiểm thử đặc tính:
1. Sử dụng một đoạn code trong kiểm thử khai thác.
2. Viết một khẳng định mà bạn biết sẽ thất bại.
3. Hãy để thất bại cho bạn biết hành vi đó là gì.
4. Thay đổi kiểm thử để nó mong đợi hành vi mà code tạo ra.
5. Lặp lại.
Trong ví dụ sau, tôi khá chắc chắn rằng `PageGenerator` sẽ không tạo ra chuỗi “fred”:

```java
void testGenerator() {
  PageGenerator generator = new PageGenerator();
  assertEquals("fred", generator.generate());
}
```

Chạy thử nghiệm của bạn và để nó thất bại. Khi điều đó xảy ra, bạn đã tìm ra code thực sự làm gì trong điều kiện đó. Chẳng hạn, trong đoạn code trước, khi một `PageGenerator` mới được khởi tạo sẽ tạo ra một chuỗi trống khi phương thức tạo của nó được gọi:

```java
.F
Time: 0.01
There was 1 failure:
1) testGenerator(PageGeneratorTest)
junit.framework.ComparisonFailure: expected:<fred> but was:<>
  at PageGeneratorTest.testGenerator
    (PageGeneratorTest.java:9)
  at sun.reflect.NativeMethodAccessorImpl.invoke0
    (Native Method)
  at sun.reflect.NativeMethodAccessorImpl.invoke
    (NativeMethodAccessorImpl.java:39)
  at sun.reflect.DelegatingMethodAccessorImpl.invoke
    (DelegatingMethodAccessorImpl.java:25)
FAILURES!!!
Tests run: 1, Failures: 1, Errors: 0
```

Chúng ta có thể thay đổi để kiểm thử đó được vượt qua:

```java
void testGenerator() {
  PageGenerator generator = new PageGenerator();
  assertEquals("", generator.generate());
}
```
