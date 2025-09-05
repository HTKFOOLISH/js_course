# Array

## Mục lục

- [Định nghĩa](#định-nghĩa)
- [Khai báo mảng](#khai-báo-mảng)
- [Truy cập từng phần tử](#truy-cập-từng-phần-tử)
- [Chỉnh sửa phần tử trong mảng](#chỉnh-sửa-phần-tử-trong-mảng)
- [Thêm, xoá](#thêm-xoá)
- [Duyệt mảng với vòng lặp và `forEach`](#duyệt-mảng-với-vòng-lặp-và-foreach)
  - [Sử dụng vòng lặp `for`](#sử-dụng-vòng-lặp-for)
  - [Sử dụng phương thức `forEach`](#sử-dụng-phương-thức-foreach)
- [Biến đổi mảng với `map()`](#biến-đổi-mảng-với-map)
- [Lọc phần tử mảng với `filter()`](#lọc-phần-tử-mảng-với-filter)

## Định nghĩa

**Array** (Mảng) là một kiểu dữ liệu đặc biệt trong JavaScript cho phép lưu trữ tập hợp các giá trị trong một tên biến duy nhất.

Ví dụ, thay vì sử dụng:

```js
let name = "HTKFoolish";
let age = 21;
let isStudent = true;
```

Ta có thể sử dụng mảng để lưu trữ các giá trị trên.

## Khai báo mảng

Sử dụng dấu ngoặc vuông `[]`.

Ví dụ như ở trên, sử dụng mảng:

```js
let student = ["HTKFoolish", 21, true];
```

Với các giá trị lần lượt tương ứng với **tên**, **tuổi** và **isStudent**.

Từ đó, ta có thể thấy JavaScript không giới hạn kiểu dữ liệu bên trong mảng.

## Truy cập từng phần tử

```js
let student = ["HTKFoolish", 21, true];
console.log(std[0]);
console.log(std[1]);
console.log(std[2]);
```

## Chỉnh sửa phần tử trong mảng

```js
let student = ["HTKFoolish", 21, true];
student[0] = "Take";

console.log(student);
```

## Thêm, xoá

<table
  style="
    width: 480px;
    height: 200px;
    margin: 20px auto;
    border: 1px solid black;
    border-collapse: collapse;
  "
>
  <tr style="background-color: gray; color: black">
    <th>Thêm</th>
    <th>Mô tả</th>
    <th>Xoá</th>
    <th>Mô tả</th>
  </tr>
  <tr>
    <th>push()</th>
    <th>Thêm vào cuối</th>
    <th>pop()</th>
    <th>Xoá ở cuối</th>
  </tr>
  <tr>
    <th>unshift()</th>
    <th>Thêm vào đầu</th>
    <th>shift()</th>
    <th>Xoá ở đầu</th>
  </tr>
</table>

## Duyệt mảng với vòng lặp và `forEach`

### Sử dụng vòng lặp `for`

```js
let std = ["HTKFoolish", 21, true];
for (let i = 0; i < std.length; i++) {
  console.log(`Phần tử thứ ${i} trong mảng là: ${std[i]}`);
}
```

### Sử dụng phương thức `forEach`

```js
let std = ["HTKFoolish", 21, true];
std.forEach((element, index) => {
  console.log(`Phần tử thứ ${index} trong mảng là: ${element}`);
});
```

## Biến đổi mảng với `map()`

`map()` là một phương thức mà nó sẽ duyệt qua từng phần tử của mảng và tạo ra một mảng mới với từng phần tử trong mảng mới là kết quả của sự biến đổi từng phần tử tương ứng từ mảng ban đầu.

Xem ví dụ dưới đây:

```js
let number = [1, 2, 3, 4, 5];
let square = number.map((num) => num ** 2);

console.log("Mảng số thường:", number);
console.log("Mảng số bình phương:", square);
```

Kết quả:

```
Mảng số thường: [1, 2, 3, 4, 5]
Mảng số bình phương: [1, 4, 9, 16, 25]
```

## Lọc phần tử mảng với `filter()`

Nếu `map()` là duyệt từng phần tử và tạo mảng mới sau khi xử lý tác vụ gì đó, thì `filter()` sẽ duyệt theo điều kiện. Có nghĩa là đúng thì sẽ lưu còn không thì bỏ qua. Xem ví dụ dưới đây:

```js
// Lọc phần tử với filter()

let num = [1, 2, 3, 4, 5, 6];
let even = num.filter((e) => e % 2 === 0);

console.log("Số chẵn trong mảng:", even);
```

Kết quả:

```
Số chẵn trong mảng: [2, 4, 6]
```
