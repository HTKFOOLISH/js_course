let pr1 = { name: "Laptop", price: 1000, inStock: true };
let pr2 = { name: "Phone", price: 500, inStock: true };
let pr3 = { name: "Tablet", price: 750, inStock: false };
let pr4 = { name: "Monitor", price: 300, inStock: true };
let pr5 = { name: "Keyboard", price: 100, inStock: false };

let products = [pr1, pr2, pr3, pr4, pr5];

console.log("Danh sách các sản phẩm ban đầu sản phẩm ban đầu:", products);

// 1. In tên sp đầu tiên
console.log("Tên sản phẩm đầu tiên:", products[0].name);

// 2. Update giá sp thứ hai thành 150
// Cách 1: thay đổi giá trị trực tiếp (Không nên sử dụng)
// products[1].price = 150;
// console.log(
//   "Danh sách các sản phẩm sau khi cập nhật giá của sản phẩm thứ hai:",
//   products
// );
// Cách 2:
// let newPriceOfPr2 = { ...pr2, price: 150 };
// let newProducts = [...products];
// newProducts[1] = newPriceOfPr2;
// console.log(
//   "Danh sách các sản phẩm sau khi cập nhật giá trị của sản phẩm thứ hai:",
//   newProducts
// );
// Cách 3: Sử dụng map()
// let newProducts = products.map((product, index) => {
//   if (index === 1) return { ...product, price: 150 };
//   return product;
// });
// Cách 4: Sử dụng forEach()
let newProducts = [];
products.forEach((product, index) => {
  if (index === 1) newProducts.push({ ...product, price: 150 });
  else newProducts.push(product);
});
console.log(
  "Danh sách các sản phẩm sau khi cập nhật giá trị của sản phẩm thứ hai:",
  newProducts
);

// 3. Thêm một sp mới
products.push({ name: "Mouse", price: 50, inStock: true });
console.log("Danh sách sản phẩm sau khi thêm sản phẩm mới:", products);

// 4. Xoá sp cuối
products.pop();
console.log("Danh sách sản phẩm sau khi xoá sản phẩm cuối:", products);

// 5. Dùng forEach() in ra tất cả tên sản phẩm
let productNames = [];
products.forEach((product) => productNames.push(product.name));
console.log("Tên tất cả sản phẩm:", productNames);

// 6. Dùng map() tạo mảng mới chỉ chứa giá sản phẩm
let prices = products.map((products) => products.price);
console.log("Mảng mới chỉ chứa giá sản phẩm:", prices);

// 7. Dùng filter() lấy các sản phẩm còn hàng
let inStockProducts = products.filter((products) => products.inStock);
console.log("Các sản phẩm còn hàng:", inStockProducts);

// 8. Dùng for..in duyệt qua thuộc tính của sản phẩm đầu tiên
console.log("Thuộc tính của sản phẩm đầu tiên:");
for (let key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}
