# Primitive Data Type

## Mục Lục

- [Primitive Data Type](#primitive-data-type)
  - [Mục Lục](#mục-lục)

## Định nghĩa

Là các kiểu dữ liệu cơ bản, không có các phương thức (**methods**) cũng như thuộc tính (**attributes**), và được lưu trữ trực tiếp giá trị vào vùng nhớ của biến.

## Các Primitive Data Types (**Kiểu dữ liệu nguyên thuỷ**) trong JavaScript

Có 7 kiểu dữ liệu:

<table border="1">
  <tr style="background-color:gray; color: black">
    <th>Kiểu dữ liệu</th>
    <th>Ví dụ</th>
    <th>Note</th>
  </tr>
  <tr>
    <td>Number</td>
    <td>10; 3.14</td>
    <td>Gồm số nguyên, số thực</td>
  </tr>
  <tr>
    <td>String</td>
    <td>HTKFOOLISH</td>
    <td>Chuỗi ký tự nằm trong dấu nháy đơn, nháy kép hoặc dấu nháy ngược (<strong>backtick</strong>)</td>
  </tr>
  <tr>
    <td>BigInt</td>
    <td>123n</td>
    <td>Sử dụng cho các số rất lớn, chữ cái <strong>n</strong> ở đuôi để định nghĩa. Giới hạn của kiểu dữ liệu: [-(2<sup>53</sup>-1), (2<sup>53</sup>-1)]
    </td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>true, false</td>
    <td>
      <p style="margin:2px 0">- Kiểu dữ liệu logic</p>
      <p style="margin:2px 0">- Chỉ có hai giá trị</p>
    </td>
  </tr>
  <tr>
    <td>Undefined</td>
    <td>undefined</td>
    <td>Khai báo biến nhưng không gán giá trị</td>
  </tr>
  <tr>
    <td>Null</td>
    <td>null</td>
    <td>
      <p style="margin:2px 0">- Khai báo biến với giá trị là <strong>null</strong></p>
      <p style="margin:2px 0">- Ám chỉ giá trị của biến là "<strong>empty/nothing</strong>"</p>
    </td>
  </tr>
  <tr>
    <td>Symbol</td>
    <td>Symbol("id")</td>
    <td>Sử dụng để tạo giá trị duy nhất</td>
  </tr>
</table>

## Kiểm tra kiểu dữ liệu

Sử dụng `type of` keywork

Ví dụ:

```js
console.log(103); // number
console.log("HTKFoolish"); // string
```

## Chuyển đổi / Ép kiểu

Gọi là **Type Conversion** (ép kiểu)

Xem một số ví dụ dưới đây

```js
let numString = "123";
let convertedNumber = Number(numString);
console.log(convertedNumber); // 123
```

```js
let invalidString = "abc";
let convertedInvalid = Number(invalidString);
console.log(convertedInvalid); // NaN (Not a Number)
```

```js
let booleanString = "true";
let convertedBoolean = Boolean(booleanString);
console.log(convertedBoolean); // true (non-empty string is truthy)
```
