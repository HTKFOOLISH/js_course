let std = ["HTKFoolish", 21, true];

console.log(std);

// Truy cập phần tử trong mảng
console.log(std[0]); // HTKFoolish
console.log(std[1]); // 21
console.log(std[2]); // true

// Chỉnh sửa
std[0] = "Take";

console.log(std); // Take

// Thêm, xoá

std.push("HCM"); // Thêm phần tử mới vào cuối mảng
console.log(std);

std.unshift("Khaizo"); // Thêm phần tử mới vào đầu mảng
console.log(std);

std.pop(); // Xoá phần tử cuối
console.log(std);

std.shift(); // Xoá phần tử đầu
console.log(std);

// Duyệt mảng với vòng lặp for
for (let i = 0; i < std.length; i++) {
  console.log(`Phần tử thứ ${i} trong mảng là: ${std[i]}`);
}

// Duyệt mảng với phương thức forEach
std.forEach((element, index) => {
  console.log(`Phần tử thứ ${index} trong mảng là: ${element}`);
});

// Biến đổi mảng sử dụng map()
let number = [1, 2, 3, 4, 5];
let square = number.map((num) => num ** 2);

console.log("Mảng số thường:", number);
console.log("Mảng số bình phương:", square);

// Lọc phần tử với filter()

let num = [1, 2, 3, 4, 5, 6];
let even = num.filter((e) => e % 2 === 0);

console.log("Số chẵn trong mảng:", even);
