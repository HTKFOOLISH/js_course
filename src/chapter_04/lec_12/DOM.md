# DOM

## Mục Lục

- [DOM](#dom)
  - [Mục Lục](#mục-lục)
  - [Khái niệm](#khái-niệm)
    - [Tại sao nói DOM là một mô hình cây?](#tại-sao-nói-dom-là-một-mô-hình-cây)
  - [Truy cập phần tử HTML trong DOM](#truy-cập-phần-tử-html-trong-dom)

## Khái niệm

Link tham khảo: [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)

Nói đơn giản: HTML là "_bản thiết kế_", DOM là "_bản đồ_" mà trình duyệt vẽ ra để người dùng thao tác được.

### Tại sao nói DOM là một mô hình cây?

Như đã nói ở trên: HTML DOM giúp thao tác dữ liệu theo mô hình hướng đối tượng. Các phần tử bên trong 1 tài liệu có cấu trúc được định nghĩa thành các đối tượng, phương thức và thuộc tính để có thể truy xuất dễ dàng mà vẫn đảm bảo tính cấu trúc.

Hãy xem ví dụ dưới đây:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My title</title>
  </head>
  <body>
    <h1>A heading</h1>
    <a href="www.google.com">Link text</a>
  </body>
</html>
```

- Mỗi thẻ HTML là một **node** (nút trong cây).
- `html` là **root** (gốc).
- Bên trong có `<head>`, `<body>` => con của `<html>`
- Trong `<body>` có `<h1>`, `<a>` … => con của <body>, và cứ thế

Vì quan hệ cha–con này xếp theo cấu trúc phân cấp, giống như cây thư mục, nên gọi là cây DOM và có dạng giống ảnh bên dưới.

<img width="1200" height="1242" alt="image" src="https://github.com/user-attachments/assets/f7c26c23-8df9-48b6-bce3-26fb11881cd7" />

## Truy cập phần tử HTML trong DOM

Ta có một số cách phổ biến sau:

- `document.getElementById(id)`: lấy theo id của phần tử, trả về phần tử đó (hoặc `null` nếu không tìm thấy).

- `document.querySelectorAll(selector)`: Lấy phần tử đầu tiên khớp với **CSS Selector** (id, class, tag, ...)

- `document.querySelectorAll(selector)`: Lấy tất cả phần tử khớp với **selector**, trả về `NodeList` (giống mảng).

Ví dụ:

Ta có một file `index_12.html` như sau và dán một script tới file `script_12.js` với source code như sau:

- source code:

```
lec_12
 ┣ js
 ┃ ┗ script_12.js
 ┗ index_12.html
```

- `index_12.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <div id="title">
      <h1>DOM</h1>
      <hr />
    </div>

    <div>
      <p id="username">username: HTKFoolish</p>
      <p id="username">username: HTKFoolish</p>
      <p id="username">username: HTKFoolish</p>
      <p id="username">username: HTKFoolish</p>
    </div>

    <script src="js/script_12.js"></script>
  </body>
</html>
```

Bây giờ ta sẽ sử dụng 3 cách truy cập vào phần tử HTML nói trên:

- Sử dụng `document.getElementById(id)`:

  ```js
  console.log("Lecture 12: DOM");

  const element = document.getElementById("username");

  console.log(element);
  ```

- Sử dụng `document.querySelector(selector)`:

  ```js
  console.log("Lecture 12: DOM");

  const element = document.querySelector("#username");

  console.log(element);
  ```

- Sử dụng `document.querySelectorAll(selector)`

  ```js
  console.log("Lecture 12: DOM");

  const element = document.querySelector("username");

  console.log(element);
  ```

Hãy thử chạy lần lượt 3 Ví dụ trên để kiểm chứng kết quả.
