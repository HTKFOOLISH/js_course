# Lab_03

## Lưu ý:

Khi cập nhật giá trị cho một Object/Array thì giá trị mà ta cần cập nhật ban đầu ấy sẽ thay đổi. Nên khi muốn giữ lại giá trị ban đầu được khởi tạo thì tạo một biến khác để lưu giá trị được cập nhật.

Ví dụ:

```js
let arr = ["Ta Kê", 21, "I'm a student."];

console.log("Mảng được khởi tạo ban đầu là:", arr);

// Cập nhật tuổi trong mảng
// Cách 1: Cập nhật trực tiếp trong mảng => làm thay đổi giá trị
arr[1] = 22;

console.log("Mảng sau khi được cập nhật:", arr);
```

Sau khi chạy đoạn chương trình trên thì giá trị của mảng ban đầu sẽ bị thay đổi.

Nhưng quan trọng là ta đang nhắm tới làm thế nào để biến đổi mảng ban đầu mà vẫn giữ được giá trị cũ, đây là điều cần thiết và quan trọng.  
Vì đối với các project lớn thì dữ liệu cũ thường quan trọng, chỉ thay đổi một cách gián tiếp các giá trị khi chưa chắc chắn một điều gì vì nếu thay đổi trực tiếp sẽ có thể làm mất dữ liệu cũ.

Xem ví dụ về cách thay đổi, update giá trị một cách dán tiếp.

```js
let arr = ["Ta Kê", 21, "I'm a student."];

console.log("Mảng được khởi tạo ban đầu là:", arr);

// Cập nhật tuổi trong mảng
// Cách 2: Cập nhật giá trị gián tiếp
let newArr = [...arr];

newArr[1] = 22;

console.log("Cập nhật tuổi:", newArr);
```

Làm tương tự với mục 2. của bài tập bên dưới.

## Yêu cầu

Tạo một mảng products chứa danh sách 5 sản phẩm, mỗi sản phẩm là một object có các thuộc tính:

- `name`: tên sản phẩm
- `price`: giá
- `inStock`: kiểm tra còn hay không còn hàng

Ex:

```js
{
name: "T-shirt",
price: 200,
inStock: true
}
```

## Thực hiện

1. In ra tên của sản phẩm đầu tiên.
2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
5. Dùng forEach() in ra tất cả tên sản phẩm
6. Dùng map() tạo mảng mới chỉ chứa giá sản phẩm
7. Dùng filter() lấy các sản phẩm còn hàng
8. Dùng for..in duyệt qua thuộc tính của sản phẩm đầu tiên
