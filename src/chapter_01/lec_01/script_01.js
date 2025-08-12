// console.log("Variables in JavaScript");

/* const */

console.log("======= Ví dụ về const =======");

const PI = 3.14;

// PI = 5; // Uncaught TypeError: Assignment to constant variable.
console.log("PI = " + PI);

/* Ví dụ về sự khác nhau giữa var vầ let. */

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
