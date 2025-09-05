# Object

## Mục lục

- [**Định nghĩa, sơ lược về `object`**](#định-nghĩa-sơ-lược-về-object)
- [**Syntax**](#syntax)
- [**Truy cập vào các thuộc tính trong Object**](#truy-cập-vào-các-thuộc-tính-trong-object)
  - [**Các cách truy cập và cập nhật thuộc tính trong Object**](#các-cách-truy-cập-và-cập-nhật-thuộc-tính-trong-object)
  - [**Truy cập lồng nhau (nested objects)**](#truy-cập-lồng-nhau-nested-objects)
  - [**Cập nhật thuộc tính**](#cập-nhật-thuộc-tính)
- [**Lặp Object sử dụng for...in và for...of**](#lặp-object-sử-dụng-forin-và-forof):
  - [**forEach**](#foreach)
  - [**for...in**](#forin)
  - [**for...of**](#forof)

## Định nghĩa, sơ lược về `object`

**Object** (Đối tượng) là một kiểu dữ liệu phức hợp, cho phép lưu trữ nhiều giá trị dưới dạng cặp **key–value** (thuộc tính: giá trị).

Một object có thể chứa:

- Thuộc tính (**properties**): dữ liệu (số, chuỗi, boolean, mảng, object khác…).
- Phương thức (**methods**): hàm (function) gắn với object.

## Syntax

Dưới đây là cách khai báo một object:

```js
let obj_name = {
  key_1 : value_1,
  ...
  key_n : value_n
}
```

Với:

- `obj_name`: tên của object.
- `key_1`, ... , `key_n`: Tên **thuộc tính**/**phương thức**, sử dụng để truy cập vào giá trị từng **value** của nó.
- `value_1`, ... , `value_n`: Lần lượt là giá trị của các **thuộc tính**/**phương thức** trên.

Ví dụ:

```js
let person = {
  name: "Foolish Huỳnh",
  age: 21,
  sayHello: function () {
    console.log("Xin chào, mình là " + this.name);
  },
};

console.log(person.name); // "Foolish Huỳnh"
person.sayHello(); // "Xin chào, mình là Foolish Huỳnh"
```

Trong ví dụ trên, ta có thể thấy được những điều như sau:

- Các **key** là thuộc tính (**properties**): `name`, `age`.
- Các **key** là phương thức (**methods**): `sayHello`.

## Truy cập vào các thuộc tính trong Object.

### Các cách truy cập và cập nhật thuộc tính trong Object.

Có hai cách để truy cập vào thuộc tính của `object`:

- Sử dụng dấu chấm (`.`) .
- Sử dụng dấu ngoặc vuông (`[]`) .

Ví dụ:

```js
let person = {
  name: "Foolish Huỳnh",
  age: 21,
  sayHello: function () {
    console.log("Xin chào, mình là " + this.name);
  },
};

console.log(person.name); // "Foolish Huỳnh"
person.sayHello(); // "Xin chào, mình là Foolish Huỳnh"

// Truy cập và thay đổi thuộc tính của object
// Sử dụng dấu chấm
console.log(person.age); // 21
console.log(person.name); // Foolish Huỳnh
person.sayHello(); // Xin chào, mình là Foolish Huỳnh

// Sử dụng dấu ngoặc vuông
console.log(person["age"]); // 21
console.log(person["name"]); // Foolish Huỳnh
person["sayHello"](); // Xin chào, mình là Foolish Huỳnh
```

### Truy cập lồng nhau (nested objects)

Hãy xem ví dụ dưới đây

```js
let person = {
  name: "Foolish Huỳnh",
  age: 21,
  sayHello: function () {
    console.log("Xin chào, mình là " + this.name);
  },
  contact: {
    email: "nam@gmail.com",
    phone: "123456789",
  },
};

// Truy cập lồng nhau (nested objects)
console.log(person.contact.email); // FoolishHuynh@gmail.com
console.log(person["contact"]["email"]); // FoolishHuynh@gmail.com
```

### Cập nhật thuộc tính

Để cập nhật thuộc tính, trước hết là sẽ truy cập thuộc tính cần cập nhật và sau đó gán bằng một giá trị mới hoặc thực hiện các phép toán logic để tiến hành cập nhật một giá trị mới cho nó.  
Nhưng nếu như thuộc tính đó không tồn tại thì đồng nghĩa với việc ta đang tạo ra một thuộc tính mới.

Hãy xem ví dụ dưới đây:

```js
let person = {
  name: "Foolish Huỳnh",
  age: 21,
  sayHello: function () {
    console.log("Xin chào, mình là " + this.name);
  },
  contact: {
    email: "FoolishHuynh@gmail.com",
    phone: "012345678",
  },
};

// Cập nhật thuộc tính
person.age = 22; // Cập nhật tuổi
person.isAdmin = true; // Thêm thuộc tính mới

delete person.age; // Xoá thuộc tính
delete person.ok; // Xoá thuộc tính không tồn tại thì không sao cả

console.log(person);
```

Trong đoạn code ví dụ trên, vì thuộc tính `age` đã có sẵn nên khi ta gán cho nó một giá trị mới (`person.age = 22`) thì thuộc tính này sẽ được cập nhật từ 21 thành 22.  
Nhưng `isAdmin` không phải là thuộc tính được khai báo trước đó nên khi ta gán cho nó một giá trị thì nó sẽ hiểu là ta đang thêm thuộc tính mới cho `person` object.  
Cũng tương tự với xoá thuộc tính, nếu như thuộc tính đó không tồn tại thì không có gì xảy ra nhưng nếu có tồn tại thì thuộc tính đó sẽ bị xoá.  
Thay vì sử dụng dấu chấm để cập nhật thì ta cũng có thể sử dụng dấu ngoặc vuông để cập nhật thuộc tính cho **object**.

## Lặp Object sử dụng for...in và for...of

Ta có hai cách để sử dụng vòng lặp duyệt qua **Object**:

- `for...in`: duyệt qua thuộc tính (**key**).
- `for...of`: duyệt qua giá trị (**value**).
- Hoặc sử dụng phương thức `forEach`.

### forEach

Ta xét một ví dụ dưới đây, có ba obj sinh viên và bạn muốn in ra tên của ba người.  
Sử dụng `forEach` và mảng.

Trước tiên ta tiến hành khai báo ba **object** và một **array** để lưu trữ 3 **object** đó:

```js
const sv1 = {
  name: "Nguyễn Văn A",
  age: 20,
  score: 8,
};

const sv2 = {
  name: "Trần Thị B",
  age: 21,
  score: 9,
};

const sv3 = {
  name: "Lê Văn C",
  age: 22,
  score: 7,
};

const std = [sv1, sv2, sv3];
```

Sau đó, sử dụng `forEach` để duyệt và in ra tên của từng **object** có trong **array**:

```js
std.forEach((item, index) => {
  console.log(`Full name of student ${index + 1} is: ${item.name}`);
});
```

### for...in

Syntax:

```js
for (let key in object) {
  console.log(key, object[key]);
}
```

Ví dụ:

```js
let person = {
  name: "Foolish Huỳnh",
  age: 21,
  sayHello: function () {
    console.log("Xin chào, mình là " + this.name);
  },
  contact: {
    email: "FoolishHuynh@gmail.com",
    phone: "012345678",
  },
};

for (let key in person) {
  console.log(key, person[key]);
}
```

### for...of

#### Syntax

```js
for (let value of iterable) {
  console.log(value);
}
```

Ví dụ:

```js
let person = {
  name: "Foolish Huỳnh",
  age: 21,
  sayHello: function () {
    console.log("Xin chào, mình là " + this.name);
  },
  contact: {
    email: "FoolishHuynh@gmail.com",
    phone: "012345678",
  },
};
```

#### Sử dụng `Object.values(obj_name)`

`Object.values(obj_name)`: trả về giá trị với `obj_name` là tên của object.

Code:

```js
for (let value of Object.values(person)) {
  console.log(value);
}
```

#### Sử dụng `Object.entries(obj_name)`

`Object.entries(obj_name)`: trả về mảng dạng `[key, value]`, với:

- `obj_name`: tên của object.
- `key`: properties của object.
- `value`: giá trị của `key` tương ứng trong object.

Code:

```js
// for (let entry of Object.entries(person)) {
//   console.log(entry);
// }

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
```

Đoạn code được comment thì sẽ in ra một mảng với dạng `[key, value]`.  
Còn đoạn code không được comment thì sẽ in ra `key` `value` từng đôi một thay vì là mảng với dạng được nói ở trên.
