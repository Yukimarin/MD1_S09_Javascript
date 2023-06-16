// ctrl + ?
// Từ khóa khai báo biến (var, let, const-constant-hằng số)
// let a = 10;
// console.log(a);
// var b = "Bách";
// console.log(b);
// const c = 7;
// console.log(c);
// 1. Snake case(nguyen_xuan_bach)
// 2. Camel case(nguyenXuanBach)
// 3. Kebab case(nguyen-xuan-bach)

// Phan biet var, let, const
// const a = 10;
// a=7 - Loi khong the gan lai gia tri
// const a =9 - khong the khai bao lai

// let a = 10;
// console.log("Trước khi gán lai=>", a);
// a = 5;
// console.log("Sau khi gán lai=>", a);
// Có thể gán lại giá nhưng không thể khai báo lại

// var a = 10;
// console.log("Trước khi gán lai và khai báo lại=>", a);
// var a = "Bách";
// console.log("Sau khi khai báo lại=>", a);
//  a = "Xuân Bách";
// console.log("Sau khi gán lại=>", a);
// Từ khóa var có thể khai báo lại và gán lại giá trị

// Giải thích về hoisting
// Ví dụ về let và const
// console.log(a);
// const a = 10;
// console.log(a);

// Với var
// var a
// console.log(a);
// var a = 10;
// console.log(a);

// Có 2 kiểu dữ liệu chính là:
// + Kiểu dữ liệu nguyên thủy (7 kiểu)
// -Number- Số (1;-7;14.8)
// let a = 5.5;
// console.log(typeof a);
// -String- Chuỗi ("Bách")
// let a ="PTJS05"
// console.log(typeof a);
// -Boolean (true/false)
// console.log(1==1);
// -null (rỗng hoặc là null)
// let a = null;
// console.log(a);
// -undefined (khởi tạo nhưng không được gán giá trị)
// var a;
// console.log(a);
// -symbol (ES6)
// -bigint -bigInteger (ít gặp)
// + Kiểu dữ liệu phức tạp
// - Array
// - Object

// Các phương thức Window
// alert
// alert("Chào mừng Thảo quay lại lớp");
// confirm
// confirm("Xác nhận mật khẩu");
// prompt
// let a = prompt("Nhập vào số tuổi của bạn");
// console.log(typeof a); - String
// Chuyển kiểu dữ liệu người dùng khi nhập vào prompt(string) thành Number
// Cách 1. Thêm dấu +prompt("")
// Cách 2. Number(prompt(""))
// Cách 3. parseInt(prompt(""))
// let a = Number(prompt("Nhập số tuổi của bạn"));
// console.log(typeof a);

// Toán tử (4 loại chính)
// 1 Toán tử số học
// let a = 12;
// let b = 5;
// let sum = a * b;
// let sum = a / b;
// let sum = a % b;
// ở dòng 89 là cộng sau và đến khi thực
// hiện bước tiếp theo thì mới được cộng giá trị

// console.log(a++);
// Phân biệt a++ (cộng sau) và ++a (cộng trước)
// Ví dụ 1: (a++) + (++a) = 12 + 14 =26
// Ví dụ 2: (a++) + (a++) - (++a)= 12 + 13 -15=10
// console.log((a++) + (a++) - (++a));

// 2 Toán tử gán
// let a = 10;
// let b = 9;
// // a= a+b
// a += b;
// // a= a-b
// a -= b;
// // a= a*b
// a *= b;
// console.log(a);
// Ví dụ: Tính tổng 2 số mà người dùng nhập vào
// let a = Number(prompt("Nhập vào số thứ nhất"));
// let b = Number(prompt("Nhập vào số thứ hai"));
// let sum = a + b;
// console.log(sum);

// 3 Toán tử so sánh
// console.log(10!==10);

// 4 Toán tử logic
// console.log(1 < 2 && 3 > 2 && 1 > 2); - false vì 1<2
// console.log(1 > 2 || 2 > 3); -false;

// Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn:
// Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và tổng của những điểm này.

let a = Number(prompt("Nhập vào điểm vật lý"));
let b = +prompt("Nhập vào điểm Hóa học");
let c = parseInt(prompt("Nhập vào điểm Sinh học"));

let total = a + b + c;
let average = total / 3;
alert("Điểm tổng các môn là: ${total}");
alert(`Điểm tổng các môn là: ${total}`);
alert(`Điểm trung bình các môn là: ${average}`);
