# Variable

## Mục lục

- [Variable](#variable)
  - [Mục lục](#mục-lục)
  - [Giới thiệu](#giới-thiệu)
  - [const](#const)
  - [let vs var](#let-vs-var)
  - [Cấu trúc source code và link tham khảo](#cấu-trúc-source-code-và-link-tham-khảo)
    - [Cấu trúc source code](#cấu-trúc-source-code-phần-này)
    - [Link tham khảo](#link-tham-khảo)

## Giới thiệu

Trong phần này cụ thể ta cần phân biệt được sự khác nhau giữa `let`, `const` và `var`.

## const

Sử dụng `const` để khai báo một biến sao cho giá trị của nó là không đổi được ngay sau khi gán.

Chạy thử đoạn code sau:

```js
const PI = 3.14;

PI = 5; // Uncaught TypeError: Assignment to constant variable.
console.log("PI = " + PI);
```

khi chạy đoạn code trên sẽ báo lỗi `Uncaught TypeError: Assignment to constant variable.`, có nghĩa là bạn không thể gán giá trị cho biến `const`

Bạn có thể gõ lệnh `console.log(PI)` vào console trên web để check xem có thay đổi giá trị hay không.

## let vs var

Cả hai đều sử dụng để khai báo biến.  
Sự khác nhau giữa hai **keyword** này là:

- `let`:

  - Quản lý phạm vi khai báo một cách chặt chẽ, dễ sử dụng (**block scope**).
  - Không thể gán lại trong cùng một phạm vi.

- `var`:
  - Quản lý phạm vi một cách lỏng lẻo chính là một cách hiểu đơn giản hay nói đúng hơn là có phạm vi ảnh hưởng lớn (**function scope**).
  - Cho phép gán lại trong cùng phạm vi.

**Nên ưu tiên sử dụng `let` và `const` thay vì `var`** vì nó mới hơn và an toàn hơn, hiện đại hơn.

Ví dụ về sự khác nhau giữa `var` vầ `let`:

```js
console.log("======= Sự khác nhau giữa let và var =======");

// Ví dụ 1:

console.log(" \t\t\t===== Ví dụ 1 =====");

var foo = "Foo";
let bar = "Bar";

console.log(foo, bar); // Foo Bar

{
  var moo = "Mooo";
  let baz = "Bazz";

  console.log(moo, baz); // Mooo Bazz
}

console.log(moo); // Mooo
// console.log(baz); // Uncaught ReferenceError: baz is not defined
```

```js
// Ví dụ 2:

console.log(" \t\t\t===== Ví dụ 2 =====");

// Với var

var funcs_1 = [];
// khởi tạo 3 hàm sử dụng var để khai báo biến i
for (var i = 0; i < 3; i++) {
  // lưu trữ dưới dạng function đối với từng phần tử i
  funcs_1[i] = function () {
    // each should log its value.
    console.log("My value: " + i);
  };
}

console.log("=== Kết quả của funcs_1 khi sử dụng var ===");

for (var j = 0; j < 3; j++) {
  // in ra kết quả của từng biến trong funcs_1[i]
  funcs_1[j]();
}

// Sử dụng let

var funcs_2 = [];
// khởi tạo 3 hàm sử dụng let để khai báo biến i
for (let i = 0; i < 3; i++) {
  // lưu trữ dưới dạng function đối với từng phần tử i
  funcs_2[i] = function () {
    // each should log its value.
    console.log("My value: " + i);
  };
}

console.log("=== Kết quả của funcs_2 khi sử dụng let ===");

for (var j = 0; j < 3; j++) {
  // in ra kết quả của từng biến trong funcs_2[i]
  funcs_2[j]();
}
```

## Cấu trúc source code và link tham khảo:

### Cấu trúc source code phần này

```
js_course/
├─ src/
│  └─ chapter_01/
│         └─ lec_01/
│             ├─ index_01.html
│             ├─ script_01.js
│             └─ variable.md
└─ README.md
```

### Link tham khảo

Bạn có thể tìm hiểu thêm qua các link sau để tìm hiểu sâu hơn:

- [Sự khác nhau giữa let và var - Stack Overflow.](https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var)
- [Lịch sử ra đời của JavaScript - w3school.](https://www.w3schools.com/js/js_versions.asp)
