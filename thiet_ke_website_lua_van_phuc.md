# Tài liệu Đặc tả Thiết kế & Nội dung Website: Làng Lụa Vạn Phúc

## I. TỔNG QUAN DỰ ÁN (PROJECT OVERVIEW)
- **Mục tiêu:** Xây dựng một trang web quảng bá văn hóa, lịch sử và sản phẩm của làng lụa Vạn Phúc (Hà Đông, Hà Nội). Nâng tầm giá trị lụa tơ tằm truyền thống.
- **Phong cách thiết kế:** Cổ điển (Vintage/Heritage), Tối giản (Minimalist), Sang trọng và mang đậm âm hưởng văn hóa Á Đông. Không rườm rà, tập trung vào cảm xúc và hình ảnh/video chất lượng cao.
- **Khách hàng mục tiêu:** Khách du lịch (trong và ngoài nước), những người yêu thích văn hóa truyền thống, thời trang thủ công và những người tìm mua lụa thật.

---

## II. HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM & UI/UX)

### 1. Bảng màu (Color Palette)
- **Màu nền chủ đạo:** Trắng ngà/Be (`#F9F6F0`) - Gợi sự mộc mạc của thớ vải thô, giúp văn bản dễ đọc.
- **Màu chữ chính:** Nâu gỗ trầm (`#3E2723`) - Tạo sự cổ kính, hoài niệm, thay cho màu đen tuyền quá gắt.
- **Màu điểm nhấn (Accent):** Vàng tơ tằm (`#D4AF37`) cho các nút bấm, icon, đường viền; Đỏ bã trầu (`#8B0000`) cho các tiêu đề quan trọng cần sự quyền quý.

### 2. Nghệ thuật chữ (Typography)
- **Heading (Tiêu đề):** `Playfair Display` hoặc `Merriweather` (Font có chân/Serif) - Cổ điển, sang trọng, mang dáng dấp của những trang sách cũ.
- **Body Text (Văn bản):** `Inter` hoặc `Lora` (Font không chân thanh mảnh hoặc serif hiện đại) - Đảm bảo khả năng đọc tốt trên mọi thiết bị.

### 3. Hình ảnh & Hiệu ứng (Visual & Animation)
- **Xử lý ảnh:** Ảnh chụp tĩnh mang hơi hướng phim (film-look), độ tương phản cao, hơi ám vàng ấm (warm sepia).
- **Animation:** Trang sử dụng kỹ thuật **Parallax Scrolling** (cuộn trang với nền chuyển động chậm hơn tiền cảnh). Các thành phần text và ảnh xuất hiện với hiệu ứng **Fade-in up** (từ dưới nổi lên từ từ) khi cuộn đến, nhịp độ chậm rãi, thư thái.

---

## III. CHI TIẾT BỐ CỤC & NỘI DUNG TỪNG PHẦN (PAGE SECTIONS)

Website thiết kế theo cấu trúc **Single-page** (Trang đơn cuộn dài), chia làm các Section (phân cảnh) sau:

### Section 0: Thanh Điều hướng (Header & Navigation)
- **Giao diện:** Thanh menu trong suốt (transparent) khi ở đầu trang, và chuyển sang nền trắng ngà (sticky) khi cuộn xuống.
- **Logo (Trái):** Icon khung cửi cách điệu tối giản màu nâu sẫm, kèm dòng chữ "Vạn Phúc Silk" nét mảnh.
- **Menu (Phải):** Cội nguồn | Quy trình | Hoa văn | Cẩm nang | Liên hệ.

### Section 1: Hero Banner (Cảm xúc mở màn)
- **Visual:** Một video chạy lặp (Looping Video Background) chất lượng 4K. Cảnh cận cảnh những sợi tơ vàng óng đang được kéo từ kén, hoặc cảnh dải lụa mỏng tung bay nhẹ nhàng dưới nắng sớm trong không gian sân đình cổ kính.
- **Overlay:** Lớp phủ mờ màu nâu đen (opacity 30%) để làm nổi chữ.
- **Nội dung hiển thị giữa màn hình:**
  - *Subtitle (chữ nhỏ, cách điệu):* Nghìn năm văn hiến
  - *Main Title (Tiêu đề lớn):* LỤA VẠN PHÚC – TINH HOA TƠ LỤA VƯƠNG TRIỀU
  - *Nút CTA (Call-to-Action):* "Khám phá dòng lịch sử" (Nút viền mảnh màu vàng tơ, hover vào sẽ sáng lên).

### Section 2: Cội nguồn và Dấu ấn Lịch sử
*Khu vực này thiết kế nền vân giấy dó. Bố cục chia hai cột: Một bên là hình ảnh cổ/đen trắng, một bên là nội dung.*

- **Vị trí địa lý:** Nép mình tĩnh lặng bên dòng sông Nhuệ thanh bình, cách trung tâm Hà Nội khoảng 10km, Làng lụa Vạn Phúc (phường Vạn Phúc, quận Hà Đông) vẫn giữ vẹn nguyên hình bóng làng quê Bắc Bộ với cây đa, giếng nước, sân đình.
- **Người khai sinh (Tổ nghề):** Theo ngọc phả, tổ nghề lụa là bà A Lã Thị Nương - một người con gái quê Cao Bằng xinh đẹp, tài đảm, làm dâu làng Vạn Phúc. Bà đã mang những bí quyết dệt lụa thiêng liêng truyền dạy cho dân làng, mở ra một trang sử mới cho vùng đất này.
- **Dòng chảy thời gian (Trình bày dạng thanh Timeline dọc):**
  - **Thế kỷ IX:** Nghề dệt lụa Vạn Phúc bắt đầu hình thành.
  - **Thời nhà Nguyễn:** Lụa Vạn Phúc đạt đến đỉnh cao tinh xảo, được triều đình chọn làm vật phẩm tiến vua và may y phục cho hoàng gia. Lụa Vạn Phúc gắn liền với sự đài các, vương giả.
  - **Năm 1931 & 1932:** Lụa Vạn Phúc vươn mình ra thế giới khi lần đầu tham gia hội chợ Marseille và Paris (Pháp), được người Pháp mệnh danh là "Sản phẩm tinh xảo bậc nhất Đông Dương".

### Section 3: Quy trình Dệt lụa (Tinh hoa công nghệ thủ công)
*Section này chiếm toàn màn hình với tông nền tối màu. Ở giữa là Infographic kết hợp Video ngắn.*

- **Video minh họa (1 phút):** Nằm gọn ở giữa màn hình. Video nhịp độ chậm, ghi âm ASMR thực tế: tiếng tằm ăn rỗi rào rào, tiếng nước sôi luộc kén, tiếng lách cách đều đặn của con thoi trên khung cửi gỗ.
- **Sơ đồ các bước làm lụa (Infographic vẽ nét thanh mảnh xoay quanh video):**
  1. **Chăn tằm, ươm tơ:** Kén tằm được phân loại kỹ lưỡng. Người thợ dùng nước sôi luộc kén để làm mềm lớp keo sericin, sau đó cẩn thận kéo rút từng sợi tơ mỏng manh óng ả.
  2. **Hồ sợi (Chỉnh sợi):** Tơ được làm sạch, nhúng qua một loại keo đặc biệt (hồ) để sợi tơ đanh hơn, dai hơn, không bị đứt đoạn khi đưa lên khung dệt.
  3. **Mắc cửi & Nối cửi:** Đây là công đoạn đòi hỏi sự tĩnh tâm tuyệt đối. Hàng ngàn sợi tơ dọc phải được luồn chính xác qua các kẽ go nhỏ xíu. Một sai sót nhỏ cũng làm hỏng cả tấm lụa.
  4. **Dệt lụa:** Sự giao hòa giữa người nghệ nhân và khung dệt gỗ. Bàn tay giật go, đôi chân đạp bàn đạp nhịp nhàng cùng tiếng thoi đưa thoăn thoắt để dệt nên những hoa văn chìm nổi tinh xảo.
  5. **Nhuộm & Phơi lụa:** Tấm lụa mộc được nhuộm thủ công bằng các loại màu tự nhiên chiết xuất từ vỏ cây, lá, rễ... Sau đó được mang phơi dưới nắng tự nhiên, đón gió sông Nhuệ để lụa khô và bóng hơn.

### Section 4: Ngôn ngữ của Lụa (Hoa văn & Ý nghĩa)
*Trình bày dạng Gallery (Phòng tranh) hoặc Băng chuyền (Carousel) trượt ngang.*

- **Đoạn dẫn:** Lụa Vạn Phúc không chỉ là vải vóc, đó là tác phẩm nghệ thuật ôm trọn triết lý nhân sinh. Đặc sản trứ danh nhất ở đây là **Lụa Vân** - loại lụa mỏng nhẹ như khói, có hoa văn nổi rực rỡ và hoa văn chìm ẩn giấu, chỉ khi soi ra ánh sáng mới thấy hết sự kỳ diệu.
- **Các mẫu hoa văn tiêu biểu (Có ảnh minh họa chụp macro rõ thớ vải):**
  - **Tứ linh (Long - Ly - Quy - Phượng):** Biểu tượng của quyền lực, vượng khí và sự trường tồn.
  - **Song hạc / Hạc chầu:** Tượng trưng cho sự trường thọ, thanh cao và khí tiết.
  - **Mây vờn (Tường vân):** Gửi gắm ước vọng về một cuộc sống bình an, mưa thuận gió hòa.
  - **Hoa đào / Hoa mai:** Tượng trưng cho mùa xuân, sự sinh sôi nảy nở và sắc đẹp thanh xuân.

### Section 5: Cẩm nang Lụa (Tips & Kiến thức)
*Bố cục thẻ (Card) hoặc hai cột rõ ràng, thực tế và hữu ích.*

#### Cột 1: Bí quyết phân biệt lụa dệt thủ công và lụa công nghiệp
- **Chạm (Xúc giác):** Lụa thủ công Vạn Phúc cầm rất nhẹ, mềm, mượt nhưng không bị trơn tuột. Khi vò nhẹ không bị nhăn nhúm nhiều, mặc vào mát mẻ mùa hè, ấm áp mùa đông và không hề dính sát vào da (không tích điện).
- **Thử nghiệm lửa:** Rút một sợi tơ nhỏ ở mép vải và đốt. Lụa tơ tằm thật (protein động vật) sẽ cháy khét như mùi tóc cháy, tạo thành muội than đen xốp, dùng tay bóp nhẹ là vỡ vụn ngay. Lụa nilon sẽ khét mùi nhựa, khói đen và vón cục cứng nhắc.
- **Kích thước vải:** Do giới hạn của khung cửi gỗ truyền thống, khổ vải lụa Vạn Phúc xịn thường hẹp, chủ yếu là khổ 90cm hoặc 115cm, hiếm khi có khổ rộng như vải công nghiệp.

#### Cột 2: Chăm sóc và bảo quản lụa tơ tằm
- **Giặt:** Chỉ nên giặt tay nhẹ nhàng trong nước lạnh. Hãy dùng dầu gội đầu hoặc sữa tắm em bé thay vì bột giặt mạnh (vì tơ tằm có cấu trúc giống tóc người).
- **Phơi:** Tuyệt đối vắt nhẹ tay, không vặn xoắn. Phơi lụa ở nơi có bóng râm, thoáng gió. Ánh nắng gắt sẽ làm sợi tơ bị giòn, mau mục và phai màu.
- **Ủi (Là):** Là lụa khi vải còn hơi ẩm (hoặc xịt sương nhẹ). Sử dụng bàn là hơi nước ở nhiệt độ thấp nhất (chế độ Silk). Khuyên dùng một lớp vải cotton mỏng lót lên trên tấm lụa khi là để bảo vệ bề mặt lụa.

### Section 6: Footer & Nguồn tham khảo
- **Block Trái - Thông tin Làng Lụa:**
  - Địa chỉ: Phố Vạn Phúc, phường Vạn Phúc, quận Hà Đông, TP. Hà Nội.
  - Email: contact@vanphucsilk-heritage.com
  - Bản đồ: (Chèn Google Map được custom chuyển sang màu tone sepia/nâu).
- **Block Phải - Trích nguồn (Credits):**
  - Thông tin lịch sử tham khảo từ: *Sách Địa chí Hà Tây (Sở Văn hóa Thông tin Hà Tây).*
  - Tài liệu kỹ thuật dệt: *Báo cáo của Hiệp hội Làng nghề Việt Nam.*
  - Chân thành cảm ơn các nghệ nhân làng Vạn Phúc đã cung cấp tư liệu và hình ảnh cho dự án.
- **Dòng cuối cùng:** `© 2024 Van Phuc Silk Village. All Rights Reserved. Designed with respect to tradition.`

---

## IV. TỔNG KẾT
Tài liệu này đóng vai trò như một "bản vẽ thi công" nội dung chi tiết. Các lập trình viên (Front-end) và Designer có thể dựa 100% vào tài liệu này để sắp xếp cấu trúc thẻ HTML, cắt hình ảnh và copy/paste toàn bộ văn bản để dựng lên một website hoàn chỉnh và chuyên nghiệp.
