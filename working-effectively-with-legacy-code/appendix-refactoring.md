---
layout: default
---

# Phụ lục - Tái cấu trúc

Tái cấu trúc là một kỹ thuật cốt lõi để cải thiện code. Tài liệu tham khảo kinh điển về tái cấu trúc là cuốn sách _Tái cấu trúc: Cải thiện thiết kế code hiện tại (Refactoring: Improving the Design of Existing Code) của Martin Fowler (Addison-Wesley, 1999)_. Tôi giới thiệu cho bạn cuốn sách đó để biết thêm thông tin về loại tái cấu trúc mà bạn có thể thực hiện khi bạn có kiểm thử tại chỗ trong code.

Trong chương này, tôi mô tả một phương pháp tái cấu trúc chính: _Trích xuất Phương thức_. Nó sẽ giúp bạn hiểu rõ hơn về cơ chế liên quan đến việc tái cấu trúc bằng kiểm thử.

## Trích xuất Phương thức

Trong tất cả các phép tái cấu trúc, _Trích xuất Phương thức_ có lẽ là hữu ích nhất. Ý tưởng đằng sau _Trích xuất Phương thức_ là chúng ta có thể chia nhỏ các phương thức lớn hiện có thành các phương thức nhỏ hơn một cách có hệ thống. Khi làm điều này, chúng ta làm cho ta của mình dễ hiểu hơn. Ngoài ra, chúng ta có thể thường xuyên sử dụng lại các phần và tránh trùng lặp logic trong các khu vực khác của hệ thống.

> Trong các code base được bảo trì kém, các phương thức có xu hướng phát triển lớn hơn. Mọi người thêm logic vào các phương thức hiện có và chúng tiếp tục phát triển. Khi điều này xảy ra, các phương thức có thể thực hiện hai hoặc ba việc riêng biệt khác nhau cho người gọi chúng. Tệ hơn, chúng có thể thực hiện hàng chục hoặc hàng trăm. _Trích xuất Phương thức_ là phương pháp khắc phục trong những trường hợp này.

Khi bạn muốn trích xuất một phương thức, điều đầu tiên bạn cần là một tập hợp các kiểm thử. Nếu bạn có một phương thức được kiểm thử kỹ lưỡng, bạn có thể trích xuất các phương thức nhỏ hơn từ phương thức ban đầu bằng các bước sau:

1. Xác định đoạn code bạn muốn trích xuất và đánh dấu nhận xét đoạn mã đó.

2. Nghĩ tên cho phương thức mới và tạo phương thức trống.

3. Thực hiện lệnh gọi đến phương thức mới trong phương thức cũ.

4. Sao chép đoạn code muốn trích xuất vào phương thức mới

5. _Dựa vào Trình biên dịch (315)_ để tìm hiểu những tham số nào bạn sẽ phải chuyển và những giá trị nào bạn sẽ phải trả về.

6. Điều chỉnh khai báo phương thức cho phù hợp với tham số và giá trị trả về (nếu có).

7. Chạy kiểm nghiệm của bạn.

8. Xóa code nhận xét.

Đây là một ví dụ đơn giản trong Java:

```java
public class Reservation
{
    public int calculateHandlingFee(int amount) {
        int result = 0;

        if (amount < 100) {
            result += getBaseFee(amount);
        } else {
            result += (amount * PREMIUM_RATE_ADJ) + SURCHARGE;
        }
        return result;
    }
    ...
}
```

Logic trong câu điều kiện else tính toán phí xử lý cho đặt phòng đặc biệt. Chúng ta cần sử dụng logic đó ở một nơi khác trong hệ thống của mình. Thay vì sao chép code, chúng ta có thể trích xuất nó từ đây và sử dụng nó ở nơi khác.

Đây là bước đầu tiên

```java
public class Reservation
{
    public int calculateHandlingFee(int amount) {
        int result = 0;
        
        if (amount < 100) {
            result += getBaseFee(amount);
        } else {
            // result += (amount * PREMIUM_RATE_ADJ) + SURCHARGE;
        }
        return result;
    }
    ...
}
```

Chúng ta muốn gọi phương thức mới là `getPremiumFee`, vì vậy chúng ta thêm phương thức mới và lệnh gọi của nó:

```java
public class Reservation
{
    public int calculateHandlingFee(int amount) {
        int result = 0;
        if (amount < 100) {
            result += getBaseFee(amount);
        } else {
            // result += (amount * PREMIUM_RATE_ADJ) + SURCHARGE;
            result += getPremiumFee();
        }
        return result;
    }

    int getPremiumFee() {
    }
    ...
}
```

Tiếp theo, chúng ta sao chép code cũ vào phương thức mới và xem nó có biên dịch được không:

```java
public class Reservation
{
    public int calculateHandlingFee(int amount) {
        int result = 0;
        
        if (amount < 100) {
            result += getBaseFee(amount);
        } else {
            // result += (amount * PREMIUM_RATE_ADJ) + SURCHARGE;
            result += getPremiumFee();
        }
        return result;
    }

    int getPremiumFee() {
        result += (amount * PREMIUM_RATE_ADJ) + SURCHARGE;
    }
    ...
}
```

Có lỗi. COde sử dụng các biến có tên là `result` và `amount` không được khai báo. Vì chỉ tính toán một phần của `result` nên chỉ trả về những gì chúng ta tính toán. Chúng ta sẽ đặt `amount` làm tham số cho phương thức và thêm nó vào lệnh gọi:

```java
public class Reservation
{
    public int calculateHandlingFee(int amount) {
        int result = 0;
        
        if (amount < 100) {
            result += getBaseFee(amount);
        } else {
            // result += (amount * PREMIUM_RATE_ADJ) + SURCHARGE;
            result += getPremiumFee(amount);
        }
        return result;
    }

    int getPremiumFee(int amount) {
        return (amount * PREMIUM_RATE_ADJ) + SURCHARGE;
    }
    ...
}
```

Bây giờ chúng ta có thể chạy kiểm thử và xem liệu chúng có còn hoạt động không. Nếu đúng, chúng ta có thể quay lại và loại bỏ code nhận xét:

```java
public class Reservation
{
    public int calculateHandlingFee(int amount) {
        int result = 0;
        
        if (amount < 100) {
            result += getBaseFee(amount);
        } else {
            result += getPremiumFee(amount);
        }
        return result;
    }

    int getPremiumFee(int amount) {
        return (amount * PREMIUM_RATE_ADJ) + SURCHARGE;
    }
    ...
}
```

> Mặc dù nó không thực sự cần thiết nhưng tôi thích bình luận đoạn code mà tôi sắp trích xuất; bằng cách đó, nếu tôi mắc lỗi và kiểm thử thất bại, tôi có thể dễ dàng quay lại với những gì tôi đã làm, làm kiểm thử đạt và sau đó thử lại.

Ví dụ tôi vừa trình bày chỉ là một cách thực hiện _Trích xuất Phương thức_. Khi bạn thực hiện các kiểm thử, đó là một thao tác tương đối đơn giản và an toàn. Nếu bạn có một công cụ tái cấu trúc thì việc này thậm chí còn dễ dàng hơn. Tất cả những gì bạn phải làm là chọn một phần của phương thức và thực hiện lựa chọn menu. Công cụ này sẽ kiểm tra xem liệu code đó có thể được trích xuất dưới dạng một phương thức hay không và nhắc bạn nhập tên của phương thức mới.

_Trích xuất Phương thức_ là một kỹ thuật cốt lõi để làm việc với code kế thừa. Bạn có thể sử dụng nó để trích xuất sự trùng lặp, phân tách trách nhiệm và chia nhỏ các phương thức lớn.