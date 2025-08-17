// Câu 1

// tinhTrungBinh() Function

let tinhTrungBinh = (toan, van, anh) => {
  return ((toan + van + anh) / 3).toFixed(1);
};

// xepLoai() Function

let xepLoai = (diemTB) => {
  if (diemTB >= 9) return "Xuất sắc";
  if (diemTB >= 8) return "Giỏi";
  if (diemTB >= 6.5) return "Khá";
  return "Trung Bình";
};

// 3 variables
const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

// print out
console.log(`Điểm trung bình: ${tinhTrungBinh(diemToan, diemVan, diemAnh)}
Xếp loại: ${xepLoai(tinhTrungBinh(diemToan, diemVan, diemAnh))}`);
