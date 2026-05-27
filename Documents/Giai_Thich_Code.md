# Hướng Dẫn và Giải Thích Code Chi Tiết

Tài liệu này được viết dành cho người mới bắt đầu, nhằm giải thích cặn kẽ từng thành phần code đang được sử dụng trong dự án website (bao gồm HTML, CSS, và JavaScript).

---

## 1. File `HTML/index.html` (Trang Đăng Nhập)

Đây là file tạo ra giao diện đăng nhập cho người dùng.

- **`<!DOCTYPE html>`**: Khai báo cho trình duyệt biết đây là một trang HTML phiên bản 5.
- **`<html lang="en">`**: Thẻ gốc bao bọc toàn bộ trang web. `lang="en"` báo cho trình duyệt biết ngôn ngữ chính là tiếng Anh (giúp ích cho các công cụ dịch thuật).
- **Thẻ `<head>`**: Chứa các thông tin cài đặt ngầm cho trang web, không hiển thị trực tiếp ra màn hình:
  - **`<meta charset="UTF-8">`**: Hỗ trợ hiển thị chính xác các ngôn ngữ có dấu (như tiếng Việt).
  - **`<meta name="viewport" ...>`**: Giúp trang web hiển thị tương thích trên nhiều kích thước màn hình khác nhau (từ điện thoại đến máy tính).
  - **`<link rel="stylesheet" ...>`**: Dùng để nhúng các file CSS (file tạo kiểu dáng) từ bên ngoài vào. Ở đây ta nhúng thư viện biểu tượng (FontAwesome) và file CSS tự viết (`style.css`).
- **Thẻ `<body>`**: Chứa toàn bộ nội dung sẽ hiển thị lên màn hình.
  - **`<div id="wrapper">`**: Một chiếc hộp (div) lớn bao bọc toàn bộ trang để dễ dàng căn chỉnh mọi thứ vào chính giữa.
  - **`<form id="form-login">`**: Khu vực để người dùng điền thông tin (tên đăng nhập, mật khẩu).
  - **Thẻ `<input>`**: Tạo ra các ô để người dùng gõ chữ vào.
    - `type="text"`: Ô nhập văn bản bình thường.
    - `type="password"`: Ô nhập mật khẩu (các chữ cái bị che đi thành dấu chấm).
  - **Thẻ `<i>`**: Thường dùng để hiển thị các biểu tượng (icon) lấy từ thư viện FontAwesome (ví dụ: hình người dùng, hình chìa khóa, hình con mắt).
- **Thẻ `<script>`**: Đặt ở cuối trang để tải các file JavaScript xử lý logic. Code gọi đến thư viện `jQuery` và file `app.js` của dự án.

---

## 2. File `HTML/product-detail.html` (Trang Chi tiết / Chỉnh sửa Sản phẩm)

Trang này hiển thị thông tin của một sản phẩm và cho phép chỉnh sửa. Cấu trúc khá giống trang đăng nhập, nhưng có thêm một số điểm mới:

- **`<div class="navbar">`**: Thanh điều hướng (menu) nằm trên cùng của trang web.
  - Các thẻ **`<a>` (Anchor)**: Là các đường dẫn liên kết, khi bấm vào sẽ chuyển sang trang khác (ví dụ: `home.html`, `products.html`).
- **Thẻ `<img>`**: Dùng để chèn hình ảnh. Thuộc tính `src` chỉ ra đường dẫn tới bức ảnh (ví dụ: `../Product Image/croissant.jpg`).
- **Thẻ `<textarea>`**: Tương tự như `<input>` nhưng cho phép người dùng gõ văn bản dài trên nhiều dòng (dùng để nhập phần mô tả sản phẩm).
- **Inline CSS (`style="..."`)**: Trong file này, bạn sẽ thấy nhiều đoạn mã CSS được viết trực tiếp bên trong thẻ HTML. Ví dụ: `style="text-align: center; color: #ff8fd0;"`. Cách này giúp căn chỉnh nhanh trực tiếp mà không cần viết vào file `style.css`.
- **`onclick="..."`**: Khi người dùng nhấn nút "Lưu thay đổi", đoạn code JavaScript nhỏ bên trong sẽ chạy: hiển thị thông báo (`alert`), chuyển hướng trang (`window.location.href`) và ngăn chặn biểu mẫu tự tải lại trang (`event.preventDefault()`).

---

## 3. File `CSS/style.css` (Tạo kiểu dáng và màu sắc)

File này làm cho trang web trở nên đẹp mắt hơn thay vì chỉ có chữ đen nền trắng cơ bản.

- **`#wrapper { ... display: flex; align-items: center; justify-content: center; }`**: Đây là một bộ quy tắc rất phổ biến, giúp đưa toàn bộ khung đăng nhập vào chính giữa màn hình một cách hoàn hảo.
- **`#form-login`**: 
  - `background: rgba(255, 255, 255, 0.39)`: Tạo màu nền trắng hơi trong suốt, mang lại hiệu ứng hiện đại.
  - `box-shadow`: Tạo bóng đổ cho form, giúp nó nổi bật lên so với nền.
  - `border-radius: 50px`: Bo tròn các góc của form.
- **`.form-input`**: Lớp này dùng chung cho các ô nhập liệu.
  - `border: 0; outline: 0; background: transparent;`: Xóa bỏ viền đen và nền mặc định xấu xí của ô nhập liệu, giúp nó hòa quyện vào thiết kế chung.
- **`:hover`**: Đây là hiệu ứng khi người dùng rê chuột lên một phần tử. Ví dụ: `.nav-links a:hover { text-decoration: underline; }` sẽ hiện đường gạch chân khi chuột trỏ vào các nút trên thanh menu.
- **Các giá trị màu sắc (`color: #ff8fd0;`)**: Toàn bộ trang web sử dụng một màu chủ đạo là hồng phấn `#ff8fd0`. 

---

## 4. File `JS/app.js` (Xử lý các hành động và Logic)

File này sử dụng **jQuery** (một công cụ giúp viết JavaScript ngắn gọn hơn).

- **`$(document).ready(function () { ... });`**: Lệnh này báo cho trình duyệt biết: "Hãy đợi tải xong hết HTML hiển thị ra rồi mới bắt đầu chạy đoạn code JavaScript bên trong". Điều này giúp tránh lỗi phần tử chưa xuất hiện mà code đã tìm kiếm.

### Chức năng Ẩn/Hiện mật khẩu
```javascript
$('#eye, .eye-toggle').click(function () {
    let input = $(this).siblings('input');
    if (input.attr('type') === 'password') {
        input.attr('type', 'text');
        $(this).removeClass('fa-eye').addClass('fa-eye-slash');
    } else { ... }
});
```
- Khi người dùng click vào biểu tượng con mắt (`#eye`), hệ thống sẽ tìm ô nhập liệu nằm ngay cạnh nó (`.siblings('input')`).
- Nếu ô đó đang là kiểu `password` (bị che dấu chấm), nó sẽ đổi sang kiểu `text` (hiện chữ) và đổi biểu tượng con mắt thành con mắt bị gạch chéo (`fa-eye-slash`). Ngược lại sẽ đổi về ẩn.

### Chức năng Kiểm tra Đăng nhập
```javascript
$('#form-login').submit(function (e) {
    e.preventDefault();
    let username = $('.form-input').eq(0).val();
    let password = $('#password').val();
    ...
```
- Khi người dùng bấm nút "Đăng Nhập" (`submit`), hàm này sẽ chạy.
- **`e.preventDefault();`**: Ngăn trang web tự động tải lại (load lại) trang.
- Sau đó, lấy đoạn chữ người dùng vừa nhập vào ô Username (`username`) và ô Password (`password`) thông qua lệnh `.val()`.
- Dùng vòng lặp kiểm tra (If - Else):
  - Nếu người dùng để trống -> Hiện thông báo yêu cầu nhập (`alert`).
  - Nếu nhập đúng "admin" và "admin" -> Thông báo thành công và dùng lệnh `window.location.href = "home.html";` để đưa người dùng tới trang chủ.
  - Các trường hợp khác -> Báo lỗi nhập sai tài khoản.
