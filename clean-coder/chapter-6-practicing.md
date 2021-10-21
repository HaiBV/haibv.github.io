---
layout: default
---

# Chương 6 Luyện tập

Mọi chuyên gia luyện tập kỹ năng của họ bằng cách thực hành các bài tập rèn luyện kỹ năng. Nhạc sỹ luyện tập với các thang âm. Cầu thủ bóng đá chạy đến khi mệt. Bác sỹ luyện tập kỹ thuật khâu và phẫu thuật. Luật sư tập tranh luận. Binh sỹ diễn tập nhiệm vụ. Khi hiệu suất quan trọng, các chuyên gia luyện tập. Toàn bộ chương này nói về những phương pháp luyện tập lập trình viên có thể thực hành kỹ năng của họ.

## Nền tảng của việc luyện tập

Luyện tập không phải là một khái niệm mới trong lập trình phần mềm, nhưng chúng ta không hề nhận ra nó cho đến đầu những năm 2000. Có lẽ ví dụ chính thức đầu tiên của một chương trình dùng để thực hành đã được in ở trang 6 của [K&R-C] (Ngôn ngữ lập trình C).

```cpp
main();
{
  printf('hello, world\n');
}
```

Bất kỳ ai trong chúng ta cũng đã viết chương trình trên với một hoặc nhiều ngôn ngữ. Chúng ta sử dụng nó như một cách để tìm hiểu môi trường mới hoặc ngôn ngữ mới. Viết và chạy chương trình đó là bằng chứng cho thấy chúng ta có thể viết và chạy _bất kỳ_ chương trình nào.

Khi tôi còn trẻ, một trong những chương trình đầu tiên mà môi viết trên một máy tính mới là SQINT, bình phương số nguyên. Tôi viết chúng bằng Assembler, BASIC, FORTRAN, COBOL, và vô vàn ngôn ngữ khác. Một lần nữa, nó là một cách để chứng minh rằng tôi có thể khiến máy tính làm những gì tôi muốn.

Trong đầu những năm 80 là thời điểm những chiếc máy tính cá nhân lần đầu tiên được bày bán rộng rãi ngoài cửa hàng. Bất cứ khi nào sở hữu 1 chiếc, như VIC-20, hoặc Commodore-64, hoặc TRS-80, tôi đều viết một chương trình nhỏ in ra một chuỗi vô hạn các ký tự '\' và '/' trên màn hình. Các hình mẫu mà chương trình này tạo ra đẹp mắt và nhìn có vẻ phức tạp hơn nhiều do với chính chương trình tạo ra chúng.

Mặc dù những chương trình nhỏ này chắc chắn là chương trình luyện tập, nhưng nói chung các lập trình viên đã không _luyện tập_. Thực ra thì, ý nghĩ đó chưa bao giờ xảy ra với chúng tôi. Chúng tôi quá bận để viết code để luyện tập kỹ năng của mình. Và ngoài ra, bên ngoài sẽ là gì? Trong những năm đó, lập trình không đòi hỏi phản ứng nhanh hay những đôi tay linh hoạt. Chúng tôi không sử dụng trình chỉnh sửa trên màn hình cho đến cuối những năm 70. Chúng tôi dành phần lớn thời gian để biên dịch hoặc gỡ những đoạn code dài khủng khiếp. Chúng tôi vẫn chưa phát minh ra chu trình thời gian ngắn như TDD, vậy nên chúng tôi không yêu cầu sự tinh chỉnh mà việc luyện tập mang lại.

### Hai mươi số không

Nhưng nhiều thứ đã thay đổi so thuở sơ khai của ngành lập trình. Một vài thứ đã thay đổi rất nhiều. Những thứ khác không thay đổi gì cả.

Một trong những chiếc máy đầu tiên tôi từng sử dụng để lập trình là PDP-8/I. Chiếc máy này có chu trình 1,5 micro giây. Nó có 4096 12-bit từ trong bộ nhớ. Nó có kích thước bằng một chiếc tủ lạnh và tiêu tốn khá nhiều điện. Nó có một ổ lưu đĩa có thể chứa 32K 12-bit từ, và chúng tôi nói chuyện với nó bằng teletype 10-ký-tự-mỗi-giây. Chúng tôi nghĩ rằng đây là một cỗ máy mạnh mẽ và chúng tôi đã sử dụng nó để làm nên những điều kỳ diệu.

Tôi vừa mua một chiếc laptop Macbook Pro mới. Nó có bộ xử lý 2.8GHz lõi kép, 8GB RAM, 512GB SSD, và màn hình 17-inch 1920x1200 LED. Tôi mang nó trong balo của tôi. Có thể đặt trên đùi và tiêu thụ ít hơn 85w.

Chiếc laptop của tôi nhanh hơn 8000 lần, có bộ nhớ trong nhiều hơn 2 triệu lần, có bộ nhớ nhiều hơn 16 triệu lần, tiêu thụ 1% điện năng và kích thước chỉ bằng 1%, và giá tiền chỉ bằng 1/25 có với PDP-8/I. Hãy làm một phép tính:

8000 x 2000000 x 16000000 x 100 x 100 x 25 =6.4 x 10^22

Một con số _lớn_. Chúng ta đang nói về 22 _cấp độ mũ!_ Đó là số Ångström từ đây tới chòm sao Alpha Centauri. Đó là số lượng electron trên một tờ dollar. Đó là khối lượng trái đất theo đơn vị của Michael Moore. Đó là một con số vô cùng lớn. Và nó đang ở trong laptop của tôi, và có thể là của bạn nữa.

Và tôi đang làm gì với sức mạnh của 22 cấp số mũ của 10? Tôi đang làm những việc tương tự như tôi đã làm với PDP-8/I. Tôi đang viết những câu lệnh _if_, vòng lặp _while_, và _những việc được giao_.

Oh, tôi có những công cụ tốt hơn để viết những câu lệnh đó. Và tôi có những ngôn ngữ tốt hơn để viết những câu lệnh đó. Nhưng bản chất của những câu lệnh đó không hề thay đổi. Code ở năm 2010 sẽ dễ nhận biết với một lập trình viên từ những năm 1960. Đất sét mà chúng tôi chế tác không thay đổi nhiều trong 4 thập kỷ đó.

### Vòng thời gian

Nhưng cách chúng ta làm việ đã thay đổi đáng kể. Vào những năm 60, tôi có thể phải đợi 1 hoặc 2 ngày để có được kết quả biên dịch. Đến cuối những năm 70, biên dịch một chương trình với 50 nghìn dòng mất 45 phút. Ngay đến những năm 90, thời gian biên dịch vẫn còn rất lâu.

Lập trình viên ngày nay không đợi biên dịch. Lập trình viên bây giờ có sức mạnh rất lớn dưới những ngón tay và họ có thể quay vòng tái cấu trúc trong chỉ vài giây.

Ví dụ, tôi làm việc với dự án FitNesse với 64 nghìn dòng code Java. Một bản dựng hoàn chỉnh, bao gồm toàn bộ unit test và test tích hợp, mất dưới 4 phút để chạy. Nếu qua được test, tôi sẵn sàng bàn giao sản phẩm. _Nên toàn bộ quy trình QA, từ source code cho đến triển khai, chỉ cần ít hơn 4 phút._ Thời gian biên dịch không đáng kể. Từng unit test chỉ cần vài _giây_. Vì vậy tôi có thể thực hiện quay vòng giữa biên dịch/kiểm thử _10 lần mỗi phút_.

Không phải lúc nào nhanh cũng là khôn ngoan. Thường thì nên chậm lại và nghĩ kỹ sẽ tốt hơn. Nhưng có những lúc những vòng quy lặp lại nhanh nhất có thể được coi là _hiệu quả cao._

Muốn làm nhanh bất kỳ điều gì đều cần luyện tập. Việc xoay vòng code/test nhanh chóng đòi hỏi bạn đưa ra quyết định rất nhanh. Đưa ra quyết định nhanh chóng nghĩa là phải nhận ra rất nhiều tình huống cũng như vấn đề và _biết_ làm thế nào để giải quyết chúng.

Hãy xem xét 2 võ sư trong trận chiến. Mỗi người đều phải nhận ra ý định của người còn lại và có cách phản ứng phù hợp chỉ trong mili giây. Trong một trận chiến, bạn không thể dừng thời gian lại, nghiên cứu các tư thế, và cân nhắc các phản ứng phù hợp. Trong một trận chiến bạn chỉ có thể _phản ứng_. Thực ra là, _cơ thể_ bạn phản ứng trong khi tâm trí bạn làm việc ở một cấp độ cao hơn.

Khi bạn xoay vòng code/test nhiều lần trong một phút, chính _cơ thể_ bạn biết cần bấm vào phím nào. Một phần tiềm thức của bạn nhận ra tình huống và phản ứng trong vòng mili giây với giải pháp thích hợp trong khi tâm trí bạn được tự do tập trung vào vấn đề cấp cao hơn.

Trong cả 2 trường hợp đấu võ và lập trình, tốc độ phụ thuộc vào thực hành. Và trong cả 2 trường hợp, việc thực hành tương tự nhau. Chúng ta chọn một số cặp vấn đề/giải pháp và thực hiện chúng lặp đi lặp lại cho đến khi chúng ta hoàn toàn kiểm soát chúng.

Xem xét một nghệ sỹ guitar như Carlos Santana. Âm nhạc trong đầu ông đơn giản phát ra từ ngón tay ông. Ông không tập trung vào vị trí của những ngón tay hay kỹ thuật. Tâm trí ông được tự do lên kế hoạch cho các giai điệu và hòa âm ở cấp độ cao hơn trong khi cơ thể ông chuyển các kế hoạch đó thành các chuyện động ngón tay ở cấp độ thấp hơn.

Nhưng để đạt được cấp độ đó yêu cầu rất nhiều luyện tập. Nhạc sỹ luyện tập thang âm, giai điệu và riff lặp đi lặp lại cho đến khi họ hoàn toàn kiểm soát chúng.

## Coding Dojo

Từ năm 2001, tôi sử dụng một chương trình gọi là _The Bowling Game_ để thuyết trình bài giảng về TDD. Nó là một bài tập nhỏ đáng yêu và cần khoảng 30 phút. Bạn sẽ được trải nghiệm xung đột trong thiết kế, xây dựng cao trào, và kết thúc bằng sự bất ngờ. Tôi đã viết cả một chương về ví dụ này ở [PPP2003]

Qua nhiều năm, tôi đã thuyết trình bài giảng này hàng trăm, thậm chí hàng ngàn lần. Tôi đã học thuộc lòng nó. Tôi có thể làm cả trong khi đang ngủ. Tôi tối thiểu số lần gõ phím, điều chỉnh tên biến và chỉnh sửa cấu trúc thuật tuán cho đến khi vừa ý. Mặc dù tôi không biết bắt đầu từ khi nào, nhưng đó là bài kata đầu tiên của tôi.

Năm 2005 tôi tham dự hội thảo XP2005 ở Sheffield, Anh. Tôi tham dự một buổi họp có tên là _Coding Dojo_ do Laurent Bossavit và Emmanuel Gaillot trình bày. Họ yêu cầu tất cả mọi người mở laptop của mình và code cùng họ khi họ sử dụng TDD để viết chương trình _Game of Life_ của Conway. Họ gọi nó là một "Kata" và ý tưởng ban đầu là của "Pragmatic" Dave Thomas.

Kể từ đó, nhiều lập trình viên đã sử dụng võ thuật như một phép ẩn dụ về việc thực hành của họ. Cái tên Coding Dojo bắt đầu gắn liền với hoạt động này. Đôi khi một nhóm lập trình viên sẽ gặp gỡ và luyện tập cùng nhau giống như các võ sĩ thường làm. Và ở thời điểm khác, những lập trình viên sẽ luyện tập một mình, cũng giống như các võ sĩ thường làm.

Khoảng 1 năm trước tôi có dạy cho một nhóm lập trình viên ở Omaha. Vào buổi trưa, họ mời tôi tham gia Coding Dojo của họ. Tôi quan sát khoảng 20 lập trình viên mở laptop của họ ra, gõ phím liên tục, thực hiện Kata _The Bowling Game_ theo người trưởng nhóm.

Có một vài hoạt động thường diễn ra ở võ đường. Dưới đây là một vài ví dụ:

### Kata

Trong võ thuật, kata là một tập hợp những động tác được biên đạo, mô phỏng chính xác một trận chiến. Với mục tiêu, hướng đến tiệm cận, là sự hoàn hảo. Người luyện võ cố gắng dạy cơ thể mình thực hiện từng chuyển động hoàn hảo và tập hợp thành một bài tập trôi chảy. Kata được luyện tập tốt khi trình diễn sẽ rất đẹp mắt.

Mặc dù nhìn rất đẹp, nhưng mục đích luyện tập kata không phải là để trình diễn trên sân khấu. Mục đích là để luyện tập tâm trí và cơ thể bạn cách phản xạ với tình huống nhất định trong trận chiến. Mục tiêu cuối cùng là làm cho các chuyển động đã hoàn thiện trở nên tự động và theo bản năng để chúng có mặt khi bạn cần.

Kata trong lập trình là một tập hợp những tổ hợp phím và chuyển động chuột được biên đạo, mô phỏng chính xác việc xử lý một vài vấn đề trong lập trình. Bạn không thực sự giải quyết vấn đề bởi vì bạn đã biết cách giải quyết chúng rồi. Thay vào đó, bạn luyện tập chuyển động và quyết định liên quan đến việc giải quyết vấn đề.

Một lần nữa mục tiêu là tiệm cận của sự hoàn hảo. Bạn lặp đi lặp lại bài tập để rèn luyện chuyển động cũng như phản ứng cho não bộ và những ngón tay của bạn. Trong khi luyện tập, bạn có thể khám phá ra những cải tiến tinh tế trong chuyển động hoặc trong chính giải pháp.

Luyện tập những bài kata thích hợp là một cách tốt để học hotkeys và thành ngữ điều hướng. Đó cũng là một cách tốt để học những nguyên tắc như TDD hay CI. Nhưng quan trọng nhất, đó là một cách tốt để đưa những cặp vấn đề/giải pháp vào tiềm thức của bạn, để bạn dễ dàng biết cách giải quyết khi đối mặt với chúng trong lập trình thực tế.

Cũng như các võ sư, mọt lập trình viên nên biết nhiều bài kata khác nhau và luyện chúng thường xuyên để tránh bị lãng quên qua thời gian. Nhiều bài kata được lưu lại ở http://katas.softwarecraftsmanship.org. Một số khác có thể tìm thấy ở http://codekata.pragprog.com. Dưới đây là những bài ưa thích của tôi:

- [The Bowling Game](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata)
- [Prime Factors](http://butunclebob.com/ArticleS.UncleBob.ThePrimeFactorsKata)
- [Word Wrap](http://thecleancoder.blogspot.com/2010/10/craftsman-62-darkpath.html)

Đối với những thử thách thực sự, hãy thử học một bài kata thật tốt đến mức trôi chảy. Làm tốt được điều này _rất khó_.

### Wasa

Khi tôi học jujitsu, phần lớn thời gian ở võ đường được dành cho luyện tập theo cặp _wasa_. Wasa giống như một bài tập kata cho 2 người. Các quy trình được ghi nhớ và phát lại chính xác. Một bên đóng vai tấn công, và bên còn lại phòng thủ. Các chuyển động được lặp đi lặp lại đến khi 2 bên hoán đổi vai trò. 

Lập trình viên có thể luyện tập theo cách tương tự bằng trò chơi _bóng bàn (ping-pong)_. Cả 2 chọn một kata, hoặc một vấn đề đơn giản. Một người viết unit test, và người còn lại phải chạy qua được unit test đó. Sau đó họ đổi lại vai trò.

Nếu 2 bên chọn một kata thông thường, thì kết quả sẽ được biết trước và các lập trình viên sẽ luyện tập và nhận xét về kỹ thuật gõ phím và di chuyển chuột của nhau cũng như cách họ ghi nhớ kata thế nào. Mặt khác, nếu 2 bên chọn một vấn đề mới để giải quyết, thì trò chơi có thể trở nên thú vị hơn một chút. Lập trình viên sẽ viết unit test có một lượng lớn quyền kiểm soát với cách giải quyết vấn đề. Anh cũng có quyền đáng kể thiết lập các ràng buộc. Ví dụ, nếu các lập trình viên chọn thực hiện một thuật toán sắp xếp, người viết unit test có thể dễ dàng đưa ra các hạn chế về tốc độ và bộ nhớ làm thách thức cho đối tác của anh ta. Điều đó có thể làm trò chơi trở nên cạnh tranh ... và vui vẻ.
### Randori
