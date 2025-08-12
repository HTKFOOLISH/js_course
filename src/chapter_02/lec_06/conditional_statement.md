# Conditional Statement

## Mục lục

- [Conditional Statement](#conditional-statement)
  - [Mục lục](#mục-lục)
  - [Định nghĩa](#định-nghĩa)
  - [Các loại conditional statement](#các-loại-conditional-statement)
  - [if, if-else, else if statement](#if-if-else-else-if-statement)
  - [Switch Statement (switch case)](#switch-statement-switch-case)
  - [Ternary Operator](#ternary-operator)
  - [Nested if...else](#nested-ifelse)
  - [Cấu trúc source code](#cấu-trúc-source-code)

## Định nghĩa

Câu lệnh điều kiện cho phép chương trình thực thi các khối code dựa theo điều kiện đưa ra.  
Nếu gặp điều kiện và được đáp ứng thì các khối code đó sẽ được thực thi, còn nếu không thì các khối code khác được thực thi dựa trên điều kiện mà các khối code đó đáp ứng.

## Các loại conditional statement

Có tổng cộng các loại câu điều kiện sau:

<table border="1">
  <tr style="background-color:gray; color: black">
    <th>Câu điều kiện</th>
    <th>Mô tả</th>
  </tr>
  <tr>
    <th>if, if-else, else if</th>
    <th>Câu điều kiện if else này thực thi theo từng khối if, else if hoặc là else.</th>
  </tr>
  <tr>
    <th>Switch case</th>
    <th>Thực thi theo từng case riêng lẻ, phù hợp với câu điều kiện có nhiều trường hợp (từ 3 trở lên).</th>
  </tr>
  <tr>
    <th>Ternary code</th>
    <th>Toán tử ba ngôi, dạng rút gọn của if else, dùng cho các điều kiện đơn giản (không cái này thì cái kia).</th>
  </tr>
  <tr>
    <th>Nested if...else</th>
    <th>Cấu trúc điều kiện lồng nhau.</th>
  </tr>
</table>

## if, if-else, else if statement

Cú pháp:

```js
if (condition) {
  // block of code will run if condition is true
}
```

```js
if (condition_1) {
  // block of code will run if condition_1 is true
} // condition_1 is false
else {
  // block of code will run if condition_1 is false
}
```

```js
if (condition_1) {
  // block of code will run if condition_1 is true
} else if (condition_2) {
  // block of code will run if condition_1 is false and condition_2 is true
} else {
  // block of code will run if both condition_1 and condition_2 are false.
}
```

## Switch Statement (switch case)

Cú pháp:

```js
switch (expression) {
  case value_1:
    // Code block 1
    break;
  case value_2:
    // Code block 2
    break;
  // more cases
  default:
  // Default code block
}
```

## Ternary Operator

Toán tử ba ngôi là một cách viết nhỏ gọn của câu điều kiện `if-else`.  
Được gọi là `ternary` (**3 ngôi/ba biến số**) vì nó có 3 toán hạng:

- Một điều kiện để kiểm tra.
- Một biểu thức cho điều kiện đúng.
- Một biểu thức cho điều kiện sai.

Cú pháp:

```
condition ? expressionIfTrue : expressionIfFalse
```

Ví dụ:

```js
let age = 21;
const result =
  age >= 18 ? "You can talk if you want" : "You f**k**g keep silence, OK!";
```

## Nested if...else

Cấu trúc if-else lồng nhau, có nghĩa là trong một block of code của điều kiện này có thể là một câu điều kiện if-else khác.

Cấu trúc:

```js
if (condition_1) {
  if (nested_condition_1) {
    // block of code
  } else {
    // block of code
  }
} else {
  if (nested_condition_2) {
    // block of code
  }
  // block of code
}
```

Ví dụ:

```js
let weather = "sunny";
let temp = 25;

if (weather === "sunny") {
  if (temp > 30) {
    console.log("It's a hot day!");
  } else if (temp > 20) {
    console.log("It's a warm day.");
  } else {
    console.log("It's a bit cool today.");
  }
} else if (weather === "rainy") {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Check the weather forecast!");
}
```

## Cấu trúc source code

```
js_course/
├─ src/
│  ├─ lab_01/
│  ├─ lec_01/
│  ├─ lec_02/
│  ├─ lec_03/
│  ├─ lec_04/
│  ├─ lec_05/
│  └─ lec_06/
│     ├─ index_06.html
│     ├─ conditional_statement.md
│     └─ js/
│        ├─ if-else.js
│        ├─ switch_case.js
│        ├─ ternary.js
│        └─ nested_if-else.js
└─ README.md
```
