# DOM events

## Mục Lục

## Link tài liệu:

[DOM events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)

## Khái niệm

Sự kiện (events): Là hành động xảy ra trên trang web, ví dụ: người dùng click chuột, nhập dữ liệu, rê chuột, trang tải xong, ...

## Một số các event thường gặp

Xem bảng dưới đây:

<table border="1">
  <tr style="background-color:gray; color: black">
    <th>Loại event</th>
    <th>Ví dụ</th>
  </tr>
  <tr>
    <td>Chuột (Mouse)</td>
    <td>click, dblclick, mouseover, mouseout, mousemove</td>
  </tr>
  <tr>
    <td>Form</td>
    <td>submit, change, focus, blur</td>
  </tr>
  <tr>
    <td>Trang</td>
    <td>load, resize, scroll</td>
  </tr>
</table>

## Các cách gắn event

Chúng ta có ba cách chính để gắn event như sau

### 1. Inline (Gắn trực tiếp vào HTML)

Xem ví dụ dưới đây:

`html` code:

```html
<button onclick="myFunction()">Click Me!</button>
```

`js` code:

```js
function myFunction() {
  console.log("You clicked the button!");
}
```

Đây là cách để gắn event nhanh chóng nhưng khó để bảo trì. Chỉ sử dụng khi mà ta có thể sử dụng `function` nhanh và gọn ngay trong `html` code.

### 2. Thuộc tính DOM (DOM properties)

Xem ví dụ về `html` code dưới đây:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <button id="myBtn">Click me</button>

    <script>
      const btn = document.getElementById("myBtn");

      btn.onclick = function () {
        console.log("You clicked the button!");
      };
    </script>
  </body>
</html>
```

Cách này chỉ gắn được một hàm cho sự kiện, nếu gắn một hàm mới thì sẽ bị ghi đè.

### 3. Sử dụng `addEventListener()`

Mặc dù hai cách làm trên đều dễ viết, dễ hiểu dành cho người mới bắt đầu, nhưng hai cách viết đó không có sự tách riêng giữa HTML và JavaScript làm cho khó bảo trì đối với các trang web hoặc dự án lớn.

Do đó chúng ta đến với một phương pháp khác, một phương pháp tiêu chuẩn và hiện đại hơn: Lắng nghe **event** với `addEventListener()`.

> **Link tài liệu tham khảo**:  
> [EventTarget: `addEventListener()` method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

#### Khái niệm

`addEventListener()` là một phương thức tiêu chuẩn, nó thiết lập một hàm để gọi khi nào một **event** nào đó được thực thi.

#### Syntax

```js
let element = document.getElementById(id);
element.addEventListener(event, handler, options);
```

Với:

- **element**: phần tử HTML bạn muốn gắn sự kiện (ví dụ: `button`, `div`, ...)
- **event**: tên sự kiện, viết không có “on”. Ví dụ "click", "mouseover", "input", "keydown"…
- **handler**: hàm callback sẽ chạy khi sự kiện xảy ra.
- **options** (không bắt buộc):
  - **capture**: true/false — xử lý ở giai đoạn capturing hay bubbling.
  - **once**: true — chạy duy nhất 1 lần rồi tự hủy.
  - **passive**: true — tối ưu cho scroll/touch.

#### Ví dụ

Hãy xem ví dụ bên dưới để hiểu rõ hơn cách để sử dụng **method** này.

`html` code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <button id="myBtn">Click me</button>

    <script src="script_13.js"></script>
  </body>
</html>
```

`script_13.js` code:

```js
const btn = document.getElementById("myBtn");

// Kiểm tra biến có tồn tại hay không
if (btn === null) {
  console.error("Button not found");
}

console.log(btn); // check

// Sử dụng addEventListener để thao tác.
btn.addEventListener("click", function () {
  console.log("Button clicked !");
});
```

Trong `script_13.js` code trên có thể sửa phần addEventListener như sau:  
Thay vì tạo hàm trực tiếp ta có thể gọi tới một hàm để rạch ròi hơn như dưới đây. Thay tất cả đoạn dưới **comment** (Sử dụng addEventListener để thao tác) thành:

```js
// Sử dụng addEventListener để thao tác.
btn.addEventListener("click", myFunction);

function myFunction() {
  console.log("Button clicked");
}
```

> [!Warning]  
> Khi sử dụng gọi hàm trong addEventListener thì `function` được gọi không được thêm dấu `()` vì:
>
> - Dấu `()` có nghĩa là hàm sẽ được thực thi (call) ngay lặp tức.
> - Sau khi thực thi xong hàm sẽ trả về (return) một giá trị.
> - Giá trị đó được gán cho bên ngoài.

### 4. Thay đổi nội dung của các thẻ trong HTML

#### innerText

Cho phép lấy hoặc thay đổi phần nội dung văn bản của thẻ mà người dùng nhìn thấy trên trang web (có style của CSS).

Xem ví dụ bên dưới:

`html` code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <p id="demoInnerText">Hello <strong>User</strong></p>

    <button id="myBtn">Click me</button>

    <script src="script.js"></script>
  </body>
</html>
```

`js` code:

```js
const demoInnerText = document.getElementById("demoInnerText");
const btn = document.getElementById("myBtn");

console.log(demoInnerText.innerText, btn);

const handleClickBtn = () => {
  demoInnerText.innerText = "Welcome to JS course!";
};

btn.addEventListener("click", handleClickBtn);
```

Theo như ví dụ trên:

- `console.log(demoInnerText.innerText, btn);` sẽ in ra:
  - `demoInnerText.innerText` - Hello **User**
  - `btn` - In ra thẻ được gắn id là `btn`.
- Biến `handleClickBtn` là một **arrow function** sử dụng để đổi văn bản của thẻ `<p>`:
  - `demoInnerText.innerText` = "Text" - đổi văn bản trong thẻ thành Text, HIỂN THỊ NGUYÊN VĂN Text của thẻ.
  - Không giống `innerHTML`, xem phần bên dưới.

#### innerHTML

Cho phép lấy hoặc thay đổi nội dung HTML bên trong phần tử, bao gồm các thẻ và văn bản được lồng bên trong.

Không giống như `innerText`. Nếu sử dụng `innerText` thì chỉ lấy hoặc được mỗi phần văn bản thì `innerHTML` lấy cả các thẻ bên trong và khi thay đổi thì các thẻ đó được trình duyệt phân tích và render thành các node DOM tương ứng.  
Xem ví dụ bên dưới.

`html` code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <p id="demoInnerText">Hello <strong>User</strong></p>

    <button id="myBtn">Click me</button>

    <script src="script.js"></script>
  </body>
</html>
```

`js` code:

```js
const demoInnerText = document.getElementById("demoInnerText");
const btn = document.getElementById("myBtn");

console.log(demoInnerText.innerHTML, btn);

const handleClickBtn = () => {
  demoInnerText.innerHTML = "Welcome to <strong>JS course!</strong>";
};

btn.addEventListener("click", handleClickBtn);
```

Trong ví dụ trên, bạn có thể thay `innerHTML` thành `innerText` để thấy được sự khác nhau giữa hai method này.

## Thay đổi CSS sử dụng JavaScript

### Tổng quan

Có 3 cách sau, xem trong bảng dưới đây.

<table border="1">
  <tr style="background-color:gray; color: black">
    <th>Các cách</th>
    <th>Syntax</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>style method</td>
    <td>element.style.property = value</td>
    <td>Sử dụng để hay đổi trực tiếp vài style nhỏ của element.</td>
  </tr>
  <tr>
    <td>classList method</td>
    <td>element.classList.add(), remove(), toggle()</td>
    <td>
      <p style= "margin: 0">- Thêm/xoá class</p>
      <p style= "margin: 0">- Sử dụng khi đã định nghĩa CSS trong file .css đã có sẵn.</p>
    </td>
  </tr>
  <tr>
    <td>Thay đổi CSS trong thẻ style hoặc stylesheet</td>
    <td>Truy cập document.styleSheets hoặc tạo thẻ style mới.</td>
    <td>Sử dụng khi muốn chỉnh sửa nhiều quy tắc CSS động.</td>
  </tr>
</table>

### 1. Sử dụng `style` method

Thay đổi trực tiếp thuộc tính style.

Syntax:

```js
element.style.property = value;
```

Với:

- `property`: Thuộc tính của CSS.
- `value`: Giá trị mới.

Ví dụ:

`html` code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <p id="contentTagP">My Content</p>

    <button id="btn1">Click to change!</button>

    <script src="script.js"></script>
  </body>
</html>
```

`js` code:

```js
const contentTagP = document.getElementById("contentTagP");
const btn1 = document.getElementById("btn1");

console.log(contentTagP, btn1);

isClicked = true;
btn1.addEventListener("click", () => {
  console.log("Button btn1 is clicked!");
  if (isClicked) {
    contentTagP.style.color = "red";
    contentTagP.style.backgroundColor = "yellow";
    btn1.innerText = "Click to return back!";
  } else {
    contentTagP.style.color = "black";
    contentTagP.style = "unset";
    btn1.innerText = "Click to change!";
  }
  isClicked = !isClicked;
});
```

### 2. Sử dụng `classList` method

Sử dụng để thêm hoặc xoá hoặc toggle class.  
Đây là cách chuẩn vì dễ bảo trì.

Xem ví dụ dưới đây, thay vì thêm style như trên, ta tiến hành tạo ra các class để thay đổi style CSS cho thẻ ta cần:

`html` code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <link rel="stylesheet" href="styles/toggle-CSS-using-JS.css" />
  </head>
  <body>
    <p id="contentTagP">My Content</p>

    <button id="btn1">Click to change!</button>

    <script src="script.js"></script>
  </body>
</html>
```

`css` code:

```css
/* 2. Using classList */
.highlight {
  background-color: yellow;
  color: red;
}
```

`js` code:

```js

```

### 3. Thay đổi CSS trong thẻ `<style>` hoặc `stylesheet`

Hãy xem ví dụ bên dưới và chạy thử để hiểu thêm:

- Thêm **rule** mới:

  - `html` code:

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Document</title>
      </head>
      <body>
        <p id="demoInnerText">Hello <strong>User</strong></p>

        <button id="myBtn">Click me</button>

        <script src="script.js"></script>
      </body>
    </html>
    ```

  - `js` code:

    ```js

    ```

- Truy cập một `stylesheet` sẵn có:

  - `html` code:

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Document</title>
      </head>
      <body>
        <p id="demoInnerText">Hello <strong>User</strong></p>

        <button id="myBtn">Click me</button>

        <script src="script.js"></script>
      </body>
    </html>
    ```

  - `js` code:

    ```js

    ```
