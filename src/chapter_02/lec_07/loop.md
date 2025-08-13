# Loop

## Mục lục

- [Loop](#loop)
  - [Mục lục](#mục-lục)
  - [Định nghĩa](#định-nghĩa)
  - [Các loại vòng lặp](#các-loại-vòng-lặp)
    - [Vòng lặp `for`](#vòng-lặp-for)
    - [Vòng lặp `while`](#vòng-lặp-while)
    - [Vòng lặp `do...while`](#vòng-lặp-dowhile)
  - [So sánh vòng lặp `while` và `do...while`](#so-sánh-vòng-lặp-while-và-dowhile)
  - [Cấu trúc source code](#cấu-trúc-source-code)

## Định nghĩa

Vòng lặp giúp việc tự động hoá việc lặp lại các khối lệnh thay vì phải viết thủ công nhiều lần.

## Các loại vòng lặp

### Vòng lặp `for`

Vòng lặp `for` được tạo với 3 biểu thức với syntax như sau:

```js
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

Với:

- **expression 1**: được thực thi (một lần) trước khi thực thi **code block** trong ngoặc `{}`
- **expression 2**: xác định điều kiện để thực thi **code block**
- **expression 3**: được thực thi (nhiều lần) sau khi **code block** được thực thi

Víd dụ:

```js
let textForLoop = "";

for (let i = 0; i < 5; i++) {
  textForLoop += "The number is " + i + "<br />";
}

document.getElementById("for-loop").innerHTML = textForLoop;
```

### Vòng lặp `while`

Syntax:

```js
while (condition) {
  // code block to be executed
}
```

Lưu ý: Vòng lặp sẽ lặp liên tục nếu `condition` đúng (**true**), do đó cần thiết lập điểm dừng cho vòng lặp này trong **code block** `(condition = false)`

Ví dụ:

```js
let textWhileLoop = "";
let i = 0;
while (i < 5) {
  textWhileLoop += "The number is " + i + "<br />";
  i++;
}
document.getElementById("while-loop").innerHTML = textWhileLoop;
```

### Vòng lặp `do...while`

Đây là loại vòng lặp làm trước kiểm tra sau. Những vòng lặp trước đó đều kiểm tra trước rồi mới làm.

Syntax:

```js
do {
  // code block to be executed
} while (condition);
```

Ví dụ:

```js
let doWhileLoopText = "";
let k = 0;

do {
  doWhileLoopText += "The number is " + k + "<br />";
  k++;
} while (k < 5);

document.getElementById("do-while-loop").innerHTML = doWhileLoopText;
```

## So sánh vòng lặp `while` và `do...while`

Như đã nói ở trên thì `do...while` là vòng lặp **LÀM TRƯỚC KIỂM TRA SAU**  
Còn `while` là vòng lặp **KIỂM TRA TRƯỚC LÀM SAU**

Chạy đoạn code dưới đây để xem và so sánh.

- `while` loop:

  ```js
  // While Loop
  console.log("=".repeat(50));

  console.log("While Loop");
  let a = 5;
  console.log("In the loop:");
  while (a < 5) {
    console.log("\t a = " + a);
    a++;
  }
  console.log("Out of the loop: a = " + a);
  ```

- `do...while` loop:

  ```js
  // Do while Loop
  console.log("=".repeat(50));

  console.log("Do...While Loop");
  let b = 5;
  console.log("In the loop:");
  do {
    console.log("\tb = " + b);
    b++;
  } while (b < 5);
  console.log("Out of the loop: b = " + b);
  ```

## Cấu trúc source code

```
js_course/
├─ src/
│  ├─ chapter_01/
│  └─ chapter_02/
│         ├─ lec_06/
│         └─ lec_07/
│             ├─ index_07.html
│             ├─ loop.md
│             └─ js/
│               ├─ forLoop.js
│               ├─ whileLoop.js
│               └─ doWhileLoop.js
└─ README.md
```
