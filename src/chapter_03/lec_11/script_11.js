console.log("Object");

// Ví dụ về object
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

console.log(person.name); // "Foolish Huỳnh"
person.sayHello(); // "Xin chào, mình là Foolish Huỳnh"

// Truy cập và thay đổi thuộc tính của object
// Sử dụng dấu chấm
console.log("=".repeat(50));
console.log(
  `\t${"-".repeat(38)}
  \tTruy cập và thay đổi thuộc tính của object:
\tSử dụng dấu chấm:`
);
console.log(person.age); // 21
console.log(person.name);
person.sayHello();

// Sử dụng dấu ngoặc vuông
console.log(
  `\t${"-".repeat(38)}
\tSử dụng dấu ngoặc vuông:`
);
console.log(person["age"]); // 21
console.log(person["name"]);
person["sayHello"]();

// Truy cập lồng nhau (nested objects)
console.log(
  `${"=".repeat(50)}
Truy cập lồng nhau (nested objects):`
);
console.log(person.contact.email); // FoolishHuynh@gmail.com
console.log(person["contact"]["email"]); // FoolishHuynh@gmail.com

// Cập nhật thuộc tính
console.log(
  `${"=".repeat(50)}
Cập nhật thuộc tính:`
);
person.age = 22; // Cập nhật tuổi
person.isAdmin = true; // Thêm thuộc tính mới

delete person.age; // Xoá thuộc tính
delete person.ok; // Xoá thuộc tính không tồn tại thì không sao cả

console.log(person);

// Sử dụng for...in và for...of với object
console.log(
  `${"=".repeat(50)}
Sử dụng vòng lặp với Object:`
);
console.log(
  `\t${"-".repeat(38)}
\tFor...in:`
);
for (let key in person) {
  console.log(key + ": " + person[key]);
}

console.log(
  `\t${"-".repeat(38)}
\tFor...of:
\t\tSử dụng Object.values():`
);

for (let value of Object.values(person)) {
  console.log(value);
}

console.log(
  `\t${"-".repeat(38)}
\tFor...of:
\t\tSử dụng Object.entries():`
);

// for (let entry of Object.entries(person)) {
//   console.log(entry);
// }
// Ouput: [key1, value1]
//        [key2, value2]
//          ... ...

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
// Ouput: key1 value1
//        key2 value2
//          ... ...

// Sử dụng forEach
console.log(
  `\t${"-".repeat(38)}
\tforEach:`
);

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

std.forEach((item, index) => {
  console.log(`Full name of student ${index + 1} is: ${item.name}`);
});
