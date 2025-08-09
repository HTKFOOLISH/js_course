# Lab 01

## Yêu cầu:

- Tạo các biến sau với const hoặc let cho phù hợp:
  - **fullName**: Tên đầy đủ (string)
  - **birthYear**: năm sinh (number)
  - **isStudent**: boolean
- Tính tuổi hiện tại dựa trên **birthYear**.
  - Gợi ý: [tính năm hiện tại](https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript), sử dụng:
    ```js
    const today = new Date();
    const currentYear = today.getFullYear();
    ```
- In ra console theo format dưới đây:
  ```
  Tên: [fullName]
  Tuổi: [calculatedAge]
  Sinh viên: [Đúng/Sai]
  ```
