function giaiBaiToan() {
    // 1. Dùng "let" để khai báo biến
    let n;
    // Nhập n và kiểm tra điều kiện

    do {
        let input = prompt("Nhập một số nguyên dương n (n <= 20): ");
        n = parseInt(input);
        if (isNaN(n) || n <= 0 || n > 20) {
            alert("Vui lòng nhập một số nguyên dương hợp lệ không vượt quá 20.");
        }
    } while (isNaN(n) || n <=0 || n> 20);

    // Nhập mảng
    let arr = [];
    for (let i = 0; i < n; i++){
        // Nối chuỗi
        let thongBaoNhap = "Nhập phần tử thứ " + (i+1) + ":";
        let val = parseInt(prompt(thongBaoNhap));
        // Kiểm tra nếu nhập linn tinh thì để là 0
        if (isNaN(val)) val = 0;
        arr.push(val);
    }

    // Phần tính toán
    let tongChan = 0;
    let tongLe = 0;
    for (let i=0; i< arr.length; i++){
        if (arr[i] % 2 === 0){
            tongChan += arr[i];
        } else {
            tongLe += arr[i];
        }

    }
    let ketQua = tongChan - tongLe;

    // Hiển thị kết quả
    let thongBao = "Danh sách mảng: [" + arr.join(", ") + "]\n" +
                   "Tổng chẵn: " + tongChan + "\n" +
                   "Tổng lẻ: " + tongLe + "\n" +
                   "Kết quả (Chẵn - Lẻ): " + ketQua;

    alert(thongBao);
    console.log(thongBao);




}
giaiBaiToan();