# Operators

## Mục Lục

- [Operators](#operators)
  - [Mục Lục](#mục-lục)
  - [Arithmetic Operators (Toán tử số học)](#arithmetic-operators-toán-tử-số-học)
  - [Comparison Operators (Toán tử so sánh)](#comparison-operators-toán-tử-so-sánh)
  - [Logical Operators (Toán tử logic)](#logical-operators-toán-tử-logic)
  - [Source code](#source-code)

## Arithmetic Operators (Toán tử số học)

<table border="1">
  <tr style="background-color:gray; color: black">
    <th>Operator</th>
    <th>Description</th>
    <th>Example</th>
    <th>Result</th>
  </tr>
  <tr>
    <th>+</th>
    <th>Cộng</th>
    <th>3 + 2</th>
    <th>5</th>
  </tr>
  <tr>
    <th>-</th>
    <th>Trừ</th>
    <th>3 - 2</th>
    <th>1</th>
  </tr>
  <tr>
    <th>*</th>
    <th>Nhân</th>
    <th>3 * 2</th>
    <th>6</th>
  </tr>
  <tr>
    <th>/</th>
    <th>Chia</th>
    <th>3 / 2</th>
    <th>1.5</th>
  </tr>
  <tr>
    <th>%</th>
    <th>Chia lấy dư</th>
    <th>5 % 2</th>
    <th>1</th>
  </tr>
  <tr>
    <th>**</th>
    <th>Luỹ Thừa</th>
    <th>2 ** 3</th>
    <th>8</th>
  </tr>
  <tr>
    <th>++</th>
    <th>Tăng 1</th>
    <th>let a = 3; a++</th>
    <th>4</th>
  </tr>
  <tr>
    <th>--</th>
    <th>Giảm 1</th>
    <th>let a = 3; a--</th>
    <th>2</th>
  </tr>
</table>

## Comparison Operators (Toán tử so sánh)

<table border="1">
  <tr style="background-color:gray; color: black">
    <th>Operator</th>
    <th>Description</th>
    <th>Example</th>
    <th>Result</th>
  </tr>
  <tr>
    <th>==</th>
    <th>So sánh bằng (không chặt chẽ)</th>
    <th>5 == '5'</th>
    <th>true</th>
  </tr>
  <tr>
    <th>===</th>
    <th>So sánh bằng (chặt chẽ)</th>
    <th>5 === '5'</th>
    <th>false</th>
  </tr>
  <tr>
    <th>!=</th>
    <th>So sánh khác nhau (không chặt chẽ)</th>
    <th>5 != '5'</th>
    <th>false</th>
  </tr>
  <tr>
    <th>!==</th>
    <th>So sánh khác nhau (chặt chẽ)</th>
    <th>5 !== '5</th>
    <th>true</th>
  </tr>
  <tr>
    <th>></th>
    <th>Lớn hơn</th>
    <th>5 > 3</th>
    <th>true</th>
  </tr>
  <tr>
    <th><</th>
    <th>Bé hơn</th>
    <th>3 < 5</th>
    <th>true</th>
  </tr>
  <tr>
    <th>>=</th>
    <th>Lớn hơn hoặc bằng</th>
    <th>5 >= 5</th>
    <th>true</th>
  </tr>
  <tr>
    <th><=</th>
    <th>Bé hơn hoặc bằng</th>
    <th>4 <= 3</th>
    <th>false</th>
  </tr>
</table>

## Logical Operators (Toán tử logic)

<table border="1">
  <tr style="background-color:gray; color: black">
    <th>Operator</th>
    <th>Description</th>
    <th>Example</th>
    <th>Result</th>
  </tr>
  <tr>
    <th>&&</th>
    <th>
      <p style="margin:2px 0">- Phép AND</p>
      <p style="margin:2px 0">- Chỉ sai khi có điều kiện sai</p>
    </th>
    <th>3 > 2 && 2 !== 1</th>
    <th>true</th>
  </tr>
  <tr>
    <th>||</th>
    <th>
      <p style="margin:2px 0">- Phép OR</p>
      <p style="margin:2px 0">- Chỉ đúng khi có điều kiện đúng</p>
    </th>
    <th>3 > 2 || 2 < 1</th>
    <th>true</th>
  </tr>
  <tr>
    <th>!</th>
    <th>
      <p style="margin:2px 0">- Phép NOT</p>
      <p style="margin:2px 0">- Phủ định điều kiện (Nếu điều kiện đúng thì ra sai)</p>
    </th>
    <th>!(3 === 3)</th>
    <th>false</th>
  </tr>
</table>

## Source code

```
js_course/
├─ src/
│  └─ chapter_01/
│         ├─ lec_01/
│         ├─ lec_02/
│         ├─ lec_03/
│         └─ lec_04/
│             ├─ index_04.html
│             ├─ script_04.js
│             └─ operators.md
└─ README.md
```
