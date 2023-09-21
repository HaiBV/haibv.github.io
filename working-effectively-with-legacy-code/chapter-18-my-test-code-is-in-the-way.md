---
layout: default
---

# Chương 18 Code kiểm thử của tôi bị cản trở

Khi bạn lần đầu tiên bắt đầu viết kiểm thử đơn vị, bạn có thể cảm thấy không tự nhiên. Một điều mà mọi người thường gặp phải là cảm giác rằng các kiểm thử của họ đang bị cản trở. Họ duyệt qua dự án của mình và đôi khi quên mất liệu họ đang xem code kiểm thử hay code sản xuất. Việc bạn bắt đầu có quá nhiều code kiểm thử cũng không giúp ích được gì. Trừ khi bạn bắt đầu thiết lập một số quy ước, nếu không bạn có thể sẽ bị ngập đầu.

## Quy ước đặt tên Lớp

Một trong những điều đầu tiên cần thiết lập là quy ước đặt tên lớp. Nói chung, bạn sẽ có ít nhất một lớp kiểm thử đơn vị cho mỗi lớp mà bạn làm việc, do đó, việc đặt tên lớp kiểm thử đơn vị là biến thể của tên lớp nó kiểm thử là điều hợp lý. Có một vài quy ước thường được dùng. Cách phổ biến nhất là sử dụng từ `Test` làm tiền tố hoặc hậu tố của tên lớp. Vì vậy, nếu chúng ta có một lớp có tên là `DBEngine`, chúng ta có thể có lớp kiểm thử là `TestDBEngine` hoặc `DBEngineTest`. Nó có quan trọng không? Không thực sự. Cá nhân tôi thích quy ước hậu tố `Test`. Nếu bạn có một IDE liệt kê các lớp theo thứ tự bảng chữ cái, mỗi lớp sẽ xếp bên cạnh lớp kiểm thử của nó và điều đó giúp bạn điều hướng giữa chúng dễ dàng hơn.

Những lớp nào khác sẽ xuất hiện trong kiểm thử? Thông thường, việc giả mạo các lớp đối với một số cộng tác viên của các lớp trong một gói hoặc thư mục thường rất hữu ích. Quy ước tôi sử dụng cho những điều đó là sử dụng tiền tố `Fake`. Việc này nhóm tất cả chúng lại với nhau theo thứ tự bảng chữ cái trong một trình duyệt nhưng hơi xa các lớp chính trong gói. Điều này thuận tiện vì thường các lớp giả là lớp con của các lớp trong các thư mục khác.

Một loại lớp khác, _lớp con kiểm thử_, thường được sử dụng trong kiểm thử. Lớp_ con kiểm thử_ là lớp mà bạn viết chỉ vì bạn muốn kiểm tra một lớp, nhưng nó có một số phần phụ thuộc mà bạn muốn tách ra. Đó là lớp con mà bạn viết khi sử dụng _Lớp con và Phương thức ghi đè (401)_. Quy ước đặt tên mà tôi sử dụng để kiểm thử các lớp con là tên của lớp có tiền tố là từ `Test`. Nếu các lớp trong một gói hoặc thư mục được liệt kê theo thứ tự bảng chữ cái thì tất cả các lớp con kiểm thử sẽ được nhóm lại với nhau.

Dưới đây là ví dụ về danh sách thư mục dành cho gói kế toán nhỏ:

• `CheckingAccount`
• `CheckingAccountTest`
• `FakeAccountOwner`
• `FakeTransaction`
• `SavingsAccount`
• `SavingsAccountTest`
• `TestingCheckingAccount`
• `TestingSavingsAccount`

Lưu ý rằng mỗi lớp sản xuất nằm cạnh lớp kiểm thử của nó. Nhóm lớp giả lập cùng nhau và nhóm các lớp con kiểm thử lại với nhau.

Tôi không áp đặt về sự sắp xếp này. Nó hoạt động trong nhiều trường hợp, nhưng có rất nhiều biến thể và lý do để thay đổi nó. Điều quan trọng cần nhớ là sự linh hoạt rất quan trọng. Điều quan trọng là phải cân nhắc mức độ dễ dàng di chuyển qua lại giữa các lớp và kiểm thử của bạn.
