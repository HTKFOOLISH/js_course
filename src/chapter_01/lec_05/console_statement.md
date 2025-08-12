# Console Statement

## Mục Lục

- [Console Statement](#console-statement)
  - [Mục Lục](#mục-lục)
  - [Todo comment](#todo-comment)
  - [Các câu lệnh thường gặp](#các-câu-lệnh-thường-gặp)
  - [Các tip](#các-tip)
  - [Cấu trúc source code](#cấu-trúc-source-code)

## Todo comment

Comment trên một dòng:

```js
// comment trên một dòng sử dụng cho từng dòng code hoặc comment đơn giản
```

Comment trên nhiều dòng:

```js
/*
Đây là comment trên nhiều dòng.
Sử dụng để chú thích cho các hàm, các phần giải thích phức tạp.
*/
```

## Các câu lệnh thường gặp

In giá trị ra màn hình:

```js
console.log();
```

Hiển thị lỗi:

```js
console.error();
```

Hiển thị cảnh báo:

```js
console.warn();
```

## Các tip

- Sử dụng dấu `,` để ngăn cách các chuỗi, giá trị trong câu lệnh `console.log()` thay vì cộng các chuỗi.
- Tô màu cho các dòng `log` sử dụng `%c`

Ví dụ:

```js
console.log("%cWarning!", "color: yellow; font-weight: bold");
```

Ví dụ trên bao gồm cả hai **tips** (sử dụng dấu phẩy và tô màu).

## Cấu trúc source code

```
js_course/
├─ src/
│  └─ chapter_01/
│         ├─ lec_01/
│         ├─ lec_02/
│         ├─ lec_03/
│         ├─ lec_03/
│         └─ lec_05/
│             ├─ index_05.html
│             ├─ script_05.js
│             └─ console_statement.md
└─ README.md
```
