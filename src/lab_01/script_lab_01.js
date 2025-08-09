/* Yêu cầu bài toán:
- tạo ra ba biến sau:
  - fullName: Tên đầy đủ (string)
  - birthYear: năm sinh (number)
  - isStudent: true/false (boolean)
- tính tuổi hiện tại sử dụng built-in Date() object
- In ra theo form:
  Tên: [fullName]
  Tuổi: [calculatedAge]
  Sinh viên: [Đúng/Sai]
*/

// Tạo ba biến fullName, birthYear, isStudent sử dụng const
const fullName = "HTKFoolish";
const birthYear = 2004;
let isStudent;

// Tính tuổi hiện tại
const today = new Date();
const currentYear = today.getFullYear();

const calculatedAge = currentYear - birthYear;

// Kiểm tra xem tuổi có trong khoảng từ 10 đến 26 hay không

isStudent = Array.from({ length: 7 }, (_, i) => i + 19).includes(calculatedAge);

// In ra thông tin
console.log(`Tên: ${fullName}
Tuổi: ${calculatedAge}
Sinh viên: ${isStudent ? "Đúng" : "Sai"}`);
