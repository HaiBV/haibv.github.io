---
layout: default
---

# Chương 20, Lớp này quá lớn và tôi không muốn nó lớn hơn nữa

Nhiều tính năng mà mọi người thêm vào hệ thống là những điều chỉnh nhỏ. Chúng yêu cầu thêm một đoạn code nhỏ và có thể là một vài phương thức. Thật hấp dẫn khi chỉ thực hiện những thay đổi này đối với một lớp hiện có. Rất có thể, code mà bạn cần thêm phải sử dụng dữ liệu từ một số lớp hiện có và điều dễ dàng nhất là chỉ cần thêm code vào đó. Thật không may, cách thực hiện thay đổi dễ dàng này có thể dẫn đến một số rắc rối nghiêm trọng. Khi tiếp tục thêm code vào các lớp hiện có, chúng ta sẽ dần tạo nên các phương thức dài và các lớp lớn. Chương trình của chúng ta dần biến thành một đầm lầy và phải mất nhiều thời gian hơn để hiểu cách thêm các tính năng mới hoặc thậm chí chỉ hiểu cách hoạt động của các tính năng cũ.

Tôi đã từng đến thăm một nhóm có kiến trúc đẹp trên giấy tờ. Họ cho tôi biết các lớp sơ cấp là gì và cách họ giao tiếp với nhau trong những trường hợp bình thường. Sau đó, họ cho tôi xem một vài sơ đồ UML đẹp mắt thể hiện cấu trúc. Tôi đã rất ngạc nhiên khi bắt đầu xem code. Mỗi lớp của họ thực sự có thể được chia thành khoảng 10 lớp con hoặc hơn, và làm như vậy sẽ giúp họ vượt qua những vấn đề cấp bách nhất của mình.

Các vấn đề với các lớp lớn là gì? Đầu tiên là sự nhầm lẫn. Khi bạn có 50 hoặc 60 phương thức trong một lớp, thường rất khó để biết bạn phải thay đổi điều gì và liệu điều đó có ảnh hưởng đến điều gì khác hay không. Trong trường hợp xấu nhất, các lớp lớn có số lượng biến thể hiện đáng kinh ngạc và thật khó để biết tác động của việc thay đổi một biến. Một vấn đề khác là lập lịch trình nhiệm vụ. Khi một lớp có khoảng 20 trách nhiệm trở lên, rất có thể bạn sẽ có vô số lý do đáng kinh ngạc để thay đổi nó. Trong cùng một lần lặp lại, bạn có thể có một số lập trình viên phải làm những việc khác nhau cho lớp. Nếu chúng hoạt động đồng thời, điều này có thể dẫn đến một số xung đột nghiêm trọng, đặc biệt là do vấn đề thứ ba: Các lớp lớn rất khó kiểm thử. Đóng gói là một điều tốt, đúng không? Chà, đừng hỏi người kiểm thử điều đó; họ có khả năng ngắt đầu của bạn. Các lớp quá lớn thường che giấu quá nhiều. Đóng gói là điều tuyệt vời khi nó giúp chúng ta suy luận về code của mình và khi chúng ta biết rằng một số thứ chỉ có thể được thay đổi trong những trường hợp nhất định. Tuy nhiên, khi chúng ta đóng gói quá nhiều, những thứ bên trong sẽ bị thối rữa và mưng mủ. Không có cách nào dễ dàng để cảm nhận tác động của sự thay đổi, vì vậy mọi người quay trở lại lập trình _Chỉnh sửa và Cầu nguyện (9)_. Tại thời điểm đó, các thay đổi mất quá nhiều thời gian hoặc số lượng lỗi tăng lên. Bạn phải trả giá cho sự thiếu rõ ràng bằng cách nào đó.

Vấn đề đầu tiên phải đối mặt khi có những lớp lớn là: Làm thế nào có thể phát triển mà không làm mọi thứ trở nên tệ hơn? Các chiến thuật chính có thể sử dụng ở đây là _Sprout Class (63)_ và _Sprout Method (59)_. Khi phải thực hiện các thay đổi, chúng ta nên cân nhắc đưa code vào một lớp mới hoặc một phương thức mới. _Sprout Class(63)_ thực sự giúp mọi thứ không trở nên tệ hơn. Khi bạn đặt code mới vào một lớp mới, chắc chắn, bạn có thể phải ủy quyền từ lớp ban đầu, nhưng ít nhất bạn không làm cho nó lớn hơn. _Sprout Method (59)_ cũng giúp ích, nhưng theo một cách tinh tế hơn. Nếu bạn thêm code vào một phương thức mới, vâng, bạn sẽ có một phương thức bổ sung, nhưng ít nhất, bạn đang xác định và đặt tên cho một thứ khác mà lớp thực hiện; thường thì tên của các phương thức có thể cho bạn gợi ý về cách chia một lớp thành các phần nhỏ hơn.

Biện pháp khắc phục chính cho các lớp lớn là tái cấu trúc. Nó giúp chia nhỏ các lớp thành tập hợp các lớp nhỏ hơn. Nhưng vấn đề lớn nhất là xác định những lớp nhỏ hơn trông như thế nào. May mắn thay, chúng ta có một số phương hướng sau đây.

> Nguyên tắc đơn nhiệm (Single-Responsibility Principle - SRP)
> Mỗi lớp nên có một trách nhiệm duy nhất: Nó nên có một mục đích duy nhất trong hệ thống và chỉ nên có một lý do để thay đổi nó.

Nguyên tắc đơn nhiệm hơi khó mô diễn vì ý tưởng đơn nhiệm khá mơ hồ. Nếu chúng ta nhìn nó một cách đơn giản, chúng ta có thể nói, "Ồ, điều đó có nghĩa là mỗi lớp chỉ nên có một phương thức duy nhất, phải không?" Vâng, phương thức có thể được coi là trách nhiệm. Một `Task` chịu trách nhiệm chạy bằng phương thức `run` của nó, để cho chúng ta biết nó có bao nhiêu tác vụ con bằng phương thức `taskCount`, v.v. Nhưng ý nghĩa của trách nhiệm thực sự được chú trọng khi chúng ta nói về _mục đích chính_. Hình 20.1 cho thấy một ví dụ

![20.1](images/20/20-1.png)
Hình 20.1 `Rule parser.`.

Chúng ta có một lớp nhỏ có thể đánh giá các chuỗi chứa các biểu thức quy tắc trong một số ngôn ngữ tối nghĩa. Nó có trách nhiệm gì? Chúng ta có thể nhìn vào tên của lớp để tìm một trách nhiệm: Nó phân tích cú pháp. Nhưng đó có phải là mục đích chính của nó? Dường như không phải phân tích cú pháp. Cũng có vẻ như nó đang đánh giá.

Nó còn làm gì nữa? Nó giữ một chuỗi hiện tại, chuỗi mà nó đang phân tích cú pháp. Nó cũng giữ một trường cho biết vị trí hiện tại trong khi nó đang phân tích cú pháp. Cả hai trách nhiệm nhỏ đó dường như phù hợp với danh mục phân tích cú pháp.

Hãy xem một biến khác, trường `variables`. Nó giữ một tập hợp các biến mà trình phân tích cú pháp sử dụng để có thể đánh giá các biểu thức số học trong các quy tắc, chẳng hạn như `a + 3`. Nếu ai đó gọi phương thức `addVariable` với các đối số `a` và `1`, thì biểu thức `a + 3` sẽ đánh giá bằng `4`. Vì vậy, có vẻ như có một trách nhiệm khác, quản lý biến, trong lớp này.

![20.table.1](images/20/20-table-1.png)

Phương thức `evaluate` là một đầu vào của lớp. Đây là một trong hai phương thức công khai duy nhất và nó biểu thị trách nhiệm chính của lớp: đánh giá. Tất cả các phương thức kết thúc bằng hậu tố `Expression` đều giống nhau. Chúng không chỉ được đặt tên giống nhau mà còn chấp nhận `Nodes` làm tham số và trả về một giá trị `int` cho biết giá trị của biểu thức con. Các phương thức `nextTerm` và `hasMoreTerms` cũng tương tự. Chúng có vẻ là một số hình thức code thông báo đặc biệt cho các điều khoản. Như đã nói trước đó, phương thức `addVariable` liên quan đến việc quản lý biến.

Tóm lại, có vẻ như `Parser` có các trách nhiệm sau:
• Phân tích cú pháp
• Đánh giá biểu hiện
• Thông báo có thời hạn
• Quản lý biến

Nếu chúng ta phải đưa ra một thiết kế từ đầu tách rời tất cả các trách nhiệm này, thì nó có thể trông giống như Hình 20.2.

Như vậy có phải là quá mức cần thiết? Có thể. Thông thường, mọi người ít sử dụng ngôn ngữ thông dịch hợp nhất để phân tích cú pháp và đánh giá biểu thức; họ chỉ đánh giá khi họ phân tích cú pháp. Mặc dù điều đó có thể thuận tiện, nhưng thường thì nó không có tính mở rộng tốt khi ngôn ngữ phát triển. Một trách nhiệm khác ít ỏi là của `SymbolTable`. Nếu trách nhiệm duy nhất của `SymbolTable` là ánh xạ tên biến thành số nguyên, thì lớp này không mang lại cho chúng ta nhiều lợi thế so với việc chỉ sử dụng bảng băm hoặc danh sách. Thiết kế đẹp, nhưng đoán xem? Khá là lý thuyết. Trừ khi chúng ta chọn viết lại phần này của hệ thống, thiết kế nhiều lớp nhỏ của chúng ta là rất phi thực tế.

![20.2](images/20/20-2.png)
Hình 20.2 `Các lớp quy tắc với các trách nhiệm được phân tách`.

Trong trường hợp thực tế của các lớp lớn, điều quan trọng là phải xác định các trách nhiệm khác nhau và sau đó tìm ra cách để dần chuyển sang các trách nhiệm tập trung hơn.

## Xác định trách nhiệm

Trong ví dụ về `RuleParser` ở phần trước, tôi đã chỉ ra sự phân chia cụ thể một lớp thành các lớp nhỏ hơn. Khi tôi thực hiện việc chia tách đó, có cảm giác như tôi đang học vẹt. Tôi liệt kê tất cả các phương thức và bắt đầu nghĩ xem mục đích của chúng là gì. Các câu hỏi tôi đặt ra là "Tại sao phương thức này lại ở đây?" và “Nó đang làm gì cho lớp này?” Sau đó, tôi nhóm chúng thành các danh sách, tập hợp các phương thức có cùng lý do tồn tại ở đó.

Tôi gọi đây là cách xác định trách nhiệm theo nhóm phương thức. Đó chỉ là một trong nhiều cách để xác định trách nhiệm trong code hiện có.

Học cách xác định trách nhiệm là một kỹ năng thiết kế quan trọng và cần phải thực hành. Có vẻ kỳ lạ khi nói về kỹ năng thiết kế trong bối cảnh làm việc với code kế thừa này, nhưng thực sự có rất ít sự khác biệt giữa việc khám phá trách nhiệm trong code hiện có và xây dựng chúng cho code mà bạn chưa viết. Điều quan trọng là có thể xác định trách nhiệm và học cách phân chia chúng cho tốt. Thậm chí, code kế thừa còn cung cấp nhiều khả năng áp dụng kỹ năng thiết kế hơn cả các tính năng mới. Sẽ dễ dàng hơn để nói về sự cân bằng trong thiết kế khi bạn có thể thấy code bị ảnh hưởng và cũng dễ dàng hơn để xem liệu cấu trúc có phù hợp trong một ngữ cảnh nhất định hay không vì ngữ cảnh đó là có thật và ở ngay trước mắt chúng ta.

Phần này mô tả tập hợp các kinh nghiệm mà chúng ta có thể sử dụng để xác định trách nhiệm trong code hiện có. Lưu ý rằng chúng ta không phát minh ra trách nhiệm; chúng ta chỉ đang khám phá ra những gì đang ở đó. Bất kể code kế thừa có cấu trúc gì, các thành phần của nó làm những việc có thể nhận dạng được. Đôi khi chúng khó nhìn thấy, nhưng những kỹ thuật này có thể hữu ích. Cố gắng áp dụng chúng ngay cả với code mà bạn không phải thay đổi ngay lập tức. Bạn càng xác định các trách nhiệm vốn có trong code nhiều bao nhiêu, thì bạn càng hiểu hơn về nó bấy nhiêu.

> Kinh nghiệm #1: Nhóm phương thức
> Tìm tên phương thức tương tự. Viết ra tất cả các phương thức trên một lớp, cùng với các loại truy cập của chúng (công khai, riêng tư, v.v.) và cố gắng tìm những phương thức có vẻ là đi cùng nhau.

Kỹ thuật này, nhóm phương thức, là một khởi đầu tốt, đặc biệt là với các lớp rất lớn. Điều quan trọng là nhận ra bạn không cần phải phân loại tất cả các tên thành các lớp mới. Chỉ cần xem liệu bạn có thể tìm thấy một số phương thức có vẻ như là một phần của trách nhiệm chung hay không. Nếu bạn có thể xác định một số trách nhiệm hơi khác với trách nhiệm chính của lớp, thì bạn có hướng để có thể xử lý code về sau. Chờ cho đến khi bạn phải sửa đổi một trong các phương thức mà bạn đã phân loại, rồi hãy quyết định xem có cần trích xuất một lớp tại đó hay không.

Nhóm phương thức cũng là một bài tập nhóm tuyệt vời. Đặt bảng áp phích trong phòng nhóm của bạn với danh sách tên phương thức cho từng lớp chính của bạn. Các thành viên trong nhóm có thể đánh dấu các áp phích theo thời gian, hiển thị các nhóm phương thức khác nhau. Cả nhóm có thể băm ra những nhóm nào tốt hơn và quyết định hướng đi tiếp theo cho code.

> Kinh nghiệp #2: Tìm các phương thức ẩn
> Hãy chú ý đến các phương thức private và protected. Nếu một lớp có nhiều phương thức như vậy, điều đó thường cho thấy rằng có một lớp khác trong lớp đó muốn thoát ra.

Các lớp lớn có thể che giấu rất nhiều thứ. Câu hỏi này lặp đi lặp lại với những người mới bắt đầu tiếp cận kiểm thử đơn vị: "Làm cách nào để kiểm thử các phương thức private?" Nhiều người dành nhiều thời gian để cố gắng tìm ra cách giải quyết vấn đề này, nhưng, như tôi đã đề cập trong chương trước, câu trả lời thực sự là nếu bạn muốn thử nghiệm một phương thức private, thì phương thức đó không nên private; nếu việc công khai phương thức làm phiền bạn, rất có thể, đó là vì nó thuộc một phần trách nhiệm riêng biệt khác. Nó nên ở trên một lớp khác.

Lớp `RuleParser` trước đó trong phần này là ví dụ tinh túy về điều này. Nó có hai phương thức công khai: `evaluate` và `addVariable`. Mọi thứ khác là private. Lớp `RuleParser` sẽ như thế nào nếu chúng ta công khai `nextTerm` và `hasMoreTerms`? Chà, nghe có vẻ khá kỳ quặc. Người dùng trình phân tích cú pháp có thể hiểu rằng họ phải sử dụng hai phương thức đó cùng với `evaluate` để phân tích cú pháp và đánh giá các biểu thức. Sẽ là kỳ lạ nếu công khai các phương thức đó trên lớp `RuleParser`, nhưng sẽ ít kỳ lạ hơn nhiều—và, thực ra, hoàn toàn ổn— để biến chúng thành các phương thức công khai trên lớp `TermTokenizer`. Điều này không làm cho `RuleParser` giảm đi tính đóng gói. Mặc dù `nextTerm` và `hasMoreTerms` được công khai trên `TermTokenizer` nhưng chúng được truy cập private trong `parser`. Điều này được thể hiện trong Hình 20.3.

![20.3](images/20/20-3.png)
Hình 20.3 `RuleParser` và `TermTokenizer`.

> Kinh nghiệm #3: Tìm kiếm những quyết định có thể thay đổi
> Tìm kiếm những quyết định — không phải các quyết định mà bạn đang thực hiện trong, mà là các quyết định đã thực hiện. Có phần chức năng nào đó (giao tiếp với cơ sở dữ liệu, giao tiếp với một nhóm đối tượng khác, v.v.) có vẻ đang bị code cứng không? Bạn có thể tưởng tượng nó sẽ thay đổi như thế nào?

Khi bạn đang cố gắng chia nhỏ một lớp lớn, bạn rất dễ mất nhiều thời gian với tên của các phương thức. Rốt cuộc thì, chúng là một trong những điều đáng chú ý nhất trong một lớp. Nhưng tên của các phương thức không nói lên toàn bộ câu chuyện. Các lớp lớn thường chứa các phương thức thực hiện nhiều việc ở nhiều mức độ trừu tượng khác nhau. Chẳng hạn, một phương thức có tên `updateScreen()` có thể tạo văn bản cho một màn hình, định dạng nó và gửi nó tới một số đối tượng GUI khác nhau. Chỉ nhìn vào tên phương thức, bạn sẽ không biết có bao nhiêu công việc đang diễn ra và bao nhiêu trách nhiệm được đặt trong đó.

Vì lý do này, bạn nên thực hiện đôi chút tái cấu trúc trích xuất phương thức trước khi thực sự giải quyết các lớp để trích xuất. Những phương thức nào bạn nên trích xuất? Tôi xử lý việc này bằng cách tìm kiếm các quyết định. Có bao nhiêu điều được giả định trong code? Là các phương thức được gọi từ một API cụ thể? Có giả định rằng nó sẽ luôn truy cập cùng một cơ sở dữ liệu hay không? Nếu code đang thực hiện những điều này, bạn nên trích xuất các phương thức phản ánh những gì bạn giả định ở mức cao. Nếu bạn đang lấy thông tin cụ thể từ cơ sở dữ liệu, hãy trích xuất một phương thức được đặt tên theo thông tin bạn đang nhận. Khi bạn thực hiện các thao tác trích xuất này, bạn có nhiều phương thức hơn, nhưng bạn cũng có thể thấy rằng việc nhóm các phương thức đó sẽ dễ dàng hơn. Hơn thế nữa, bạn có thể thấy rằng mình đã đóng gói hoàn toàn một số tài nguyên đằng sau một tập hợp các phương thức. Khi bạn trích xuất một lớp cho chúng, bạn sẽ phá vỡ một số phụ thuộc vào các chi tiết cấp thấp.

> Kinh nghiệm #4: Tìm kiếm các liên kết bên trong
> Tìm các liên kết giữa các biến đối tượng và phương thức. Có phải các biến đối tượng nhất định được sử dụng bởi một số phương thức này chứ không phải các phương thức khác?

Thật khó để tìm thấy các lớp mà trong đó tất cả các phương thức đều sử dụng tất cả các biến đối tượng. Thông thường có một số loại "gộp" trong một lớp. Hai hoặc ba phương thức có thể là những phương thức duy nhất sử dụng bộ ba biến. Thường thì những cái tên sẽ giúp bạn thấy điều này. Chẳng hạn, trong lớp `RulerParser`, có một biến danh sách tên là `variables` và phương thức có tên là `addVariable`. Điều này thấy có một mối quan hệ rõ ràng giữa phương thức và biến đó. Nó không cho chúng ta biết rằng không có phương thức nào khác truy cập vào biến đó, nhưng ít nhất chúng ta có một nơi để bắt đầu tìm kiếm.

Một kỹ thuật khác mà chúng ta có thể sử dụng để tìm những "khối u" này là tạo một bản phác thảo nhỏ về các mối quan hệ bên trong một lớp. Chúng được gọi là bản phác thảo tính năng. Chúng hiển thị các phương thức và biến thể hiện mà mỗi phương thức trong một lớp sử dụng và chúng khá dễ thực hiện. Đây là một ví dụ:

```java
class Reservation
{
  private int duration;
  private int dailyRate;
  private Date date;
  private Customer customer;
  private List fees = new ArrayList();

  public Reservation(Customer customer, int duration, int dailyRate, Date date) {
    this.customer = customer;
    this.duration = duration;
    this.dailyRate = dailyRate;
    this.date = date;
  }

  public void extend(int additionalDays) {
    duration += additionalDays;
  }

  public void extendForWeek() {
    int weekRemainder = RentalCalendar.weekRemainderFor(date);
    final int DAYS_PER_WEEK = 7;
    extend(weekRemainder);
    dailyRate = RateCalculator.computeWeekly(customer.getRateCode()) / DAYS_PER_WEEK;
  }

  public void addFee(FeeRider rider) {
    fees.add(rider);
  }

  int getAdditionalFees() {
    int total = 0;
    for(Iterator it = fees.iterator(); it.hasNext(); ) {
      total += ((FeeRider)(it.next())).getAmount();
    }
    return total;
  }
  
  int getPrincipalFee() {
    return dailyRate * RateCalculator.rateBase(customer) * duration;
  }

  public int getTotalFee() {
    return getPrincipalFee() + getAdditionalFees();
  }
}
```

Bước đầu tiên là vẽ các vòng tròn cho từng biến, như trong Hình 20.4.

Tiếp theo, chúng ta xem xét từng phương thức và cho nó một vòng tròn. Sau đó, chúng ta nối vòng tròn phương thức đến các vòng tròn của biến thể hiện mà phương thức đó truy cập hoặc sửa đổi. Có thể bỏ qua các hàm khởi tạo. Nói chung, chúng sửa đổi từng biến thể hiện.

![20.4](images/20/20-4.png)
Hình 20.4 Các biến trong lớp `Reservation`.

Hình 20.5 hiển thị sơ đồ sau khi thêm một vòng tròn cho phương thức `extend`:

![20.5](images/20/20-5.png)
Hình 20.5 phương thức `extend` sử dụng biến `duration`.

> Nếu bạn đã đọc các chương mô tả về phác thảo hiệu ứng, bạn có thể thấy rằng _phác thảo tính năng_ trông rất giống _phác thảo hiệu ứng (155)_. Về cơ bản, chúng khá giống nhau. Sự khác biệt chính là hướng các mũi tên được đảo ngược. Trong các bản _phác thảo tính năng_, các mũi tên đi theo hướng của một phương thức hoặc biến được sử dụng bởi một phương thức hoặc biến khác. Trong các bản _phác thảo hiệu ứng_, mũi tên chỉ vào các phương thức hoặc biến bị ảnh hưởng bởi các phương thức và biến khác.
> 
> Đây là hai cách khác nhau, hoàn toàn hợp lý để xem xét các tương tác trong một hệ thống. Bản _phác thảo tính năng_ là tuyệt vời để lập bản đồ cấu trúc bên trong của các lớp. Bản _phác thảo hiệu ứng (155)_ rất lý tưởng để suy diễn từ một điểm thay đổi.
> 
> Có khó hiểu khi chúng trông hơi giống nhau không? Không thực sự. Những bản phác thảo này là những công cụ dùng một lần. Chúng là thứ mà bạn ngồi xuống và thảo luận với một đồng nghiệp trong khoảng 10 phút trước khi bạn thực hiện các thay đổi của mình. Sau đó, bạn ném chúng đi. Có rất ít giá trị trong việc giữ chúng về sau, vì vậy có rất ít khả năng chúng sẽ bị nhầm lẫn với nhau.

Hình 20.6 hiển thị bản phác thảo sau khi thêm các vòng tròn cho từng chức năng và các đường kẻ cho tất cả các đối tượng mà chúng sử dụng:

![20.6](images/20/20-6.png)
Hình 20.6 Phác thảo tính năng cho lớp `Reservation`.

Chúng ta có thể thấy được gì từ bản phác thảo này? Một điều hiển nhiên là có một chút phân cụm trong lớp này. Các biến `duration`, `dailyRate`, `date` và `customer` được sử dụng chủ yếu bởi `getPrincipalFee`, `extend` và `extendForWeek`. Có bất kỳ phương thức nào trong số này được công khai không? Có, `extend` và `extendForWeek`, nhưng `getPrincipalFee` thì không. Hệ thống của chúng ta sẽ như thế nào nếu chúng ta biến cụm này thành lớp riêng của nó (xem Hình 20.7)?

![20.7](images/20/20-7.png)
Hình 20.7 Một cụm bên trong lớp `Reservation`.


Hình tròn lớn trong sơ đồ có thể là một lớp mới. Nó cần phải có phương thức `extend`, `extendForWeek` và `getPrincipalFee` làm phương thức public, nhưng tất cả các phương thức khác có thể là private. Chúng ta có thể giữ `fees`, `addFee`, `getAdditionalFees`, và `getTotalFee` trong lớp `Reservation` và ủy quyền cho lớp mới (xem Hình 20.8)

![20.8](images/20/20-8.png)
Hình 20.8 `Reservation` sử dụng lớp mới.

Điều quan trọng cần tìm hiểu trước khi thử thực hiện việc này là liệu lớp mới có trách nhiệm rõ ràng và tốt hơn hay không. Chúng ta có thể nghĩ ra một cái tên cho nó không? Nó dường như làm hai việc: gia hạn đặt chỗ và tính phí gốc. Có vẻ như `Reservation` là một cái tên hay, nhưng đã được sử dụng cho lớp ban đầu.

Có một khả năng khác. Chúng ta có thể thử cách khác. Thay vì trích xuất tất cả code trong vòng tròn lớn, chúng ta có thể trích xuất phần khác, như trong Hình 20.9. 

Chúng ta có thể gọi lớp được trích xuất `FeeCalculator`. Điều đó có thể hiệu quả, nhưng phương thức `getTotalFee` cần gọi `getPrincipalFee` trên `Reservation` — phải không nhỉ?

![20.9](images/20/20-9.png)
Hình 20.9 Nhìn nhập `Reservation` theo một cách khác.

Điều gì sẽ xảy ra nếu chúng ta gọi `getPrincipalFee` trong `Reservation` và sau đó truyền giá trị đó vào `FeeCalculator`? Đây là một bản phác thảo của khác:

```java
public class Reservation
{
  ...
  private FeeCalculator calculator = new FeeCalculator();

  private int getPrincipalFee() {
    ...
  }

  public Reservation(Customer customer, int duration, int dailyRate, Date date) {
    this.customer = customer;
    this.duration = duration;
    this.dailyRate = dailyRate;
    this.date = date;
  }

  ...

  public void addFee(FeeRider fee) {
    calculator.addFee(fee);
  }

  public getTotalFee() {
    int baseFee = getPrincipalFee();
    return calculator.getTotalFee(baseFee);
  }
}
```

Cuối cùng chúng ta sẽ thu được cấu trúc như Hình 20.10.

Chúng ta thậm chí có thể xem xét việc chuyển `getPrincipalFee` sang `FeeCalculator` để làm cho trách nhiệm phù hợp hơn với tên lớp, nhưng nhận thấy `getPrincipalFee` phụ thuộc vào một số biến trong `Reservation`, nên tốt hơn là giữ nguyên vị trí cho nó.

![20.10](images/20/20-10.png)
Hình 20.10 `Reservation` sử dụng `FeeCalculator`

Bản phác thảo tính năng là một công cụ tuyệt vời để tìm trách nhiệm riêng biệt của lớp. Chúng ta có thể nhóm các tính năng lại và tìm ra những lớp có thể trích xuất dựa theo tên. Nhưng ngoài việc tìm ra trách nhiệm, các bản phác thảo tính năng còn cho phép chúng ta xác định cấu trúc phụ thuộc bên trong các lớp và điều đó thường quan trọng ngang với trách nhiệm khi quyết định trích xuất lớp con. Trong ví dụ này, có hai cụm biến và phương thức tách biệt rõ ràng. Mối liên hệ duy nhất giữa chúng là lệnh gọi `getPrincipalFee` bên trong `getTotalFee`. Trong các bản phác thảo tính năng, chúng ta thường thấy các kết nối này là một tập hợp nhỏ các đường kết nối các cụm lớn hơn. Tôi gọi đây là _điểm mấu chốt (180)_, và tôi sẽ nói về chúng nhiều hơn trong _Chương 12, Tôi cần thực hiện nhiều thay đổi trong một khu vực. Tôi có phải phá vỡ các phụ thuộc của tất cả các lớp liên quan không?_

Đôi khi sau khi vẽ một bản phác thảo, bạn không tìm thấy bất kỳ điểm mấu chốt nào. Không phải lúc nào chúng cũng tồn tại. Nhưng ít nhất, việc xem tên và sự phụ thuộc giữa các tính năng hoàn toàn hữu ích.

Khi có bản phác thảo, bạn có thể thử các cách chia lớp khác nhau. Để làm điều này, hãy khoanh vùng các nhóm tính năng, các đường giao nhau có thể xác định giao diện của một lớp mới. Khi khoanh vùng, hãy cố gắng nghĩ ra tên lớp cho mỗi nhóm. Thành thật mà nói, ngoài bất cứ điều gì bạn chọn làm hoặc không làm khi trích xuất các lớp con, đây là một cách tuyệt vời để nâng cao kỹ năng đặt tên của bạn. Đó cũng là một cách tốt để khám phá các lựa chọn thay thế thiết kế.