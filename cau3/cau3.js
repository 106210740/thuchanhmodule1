let mangInput = [1, 5, 6, 23, 8, 47, 10, 3];

//Kiem tra mot so co phai so nguyen to khong
function kiemtraNguyenTo(n) {
    if (n < 2) {
        return false;
    }

    // kiem tra tu 2 den n-1 xem co chia het cho so nao khong
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false; //chia het thi ko phai so nguyen to
        }
    }

    return true;
}

// Tim va sap xep so nguyen to
function timVaSapXepSNT(mangDauVao) {
    let mangSNT = [];
    //loc ra cac so nguyen to
    for (let i = 0; i < mangDauVao.length; i++){
        let soHienTai = mangDauVao[i];

        // goi ham ktra o tren
        if(kiemtraNguyenTo(soHienTai) === true){
            mangSNT.push(soHienTai);
        }
    }


// sap xep tang dan
mangSNT.sort(function(a, b){
    return a-b;
});
    return mangSNT;
}
let ketQua = timVaSapXepSNT(mangInput);
let thongBao = "Mảng đầu vào: [" + mangInput.join(", ") + "]\n" +
               "Kết quả (SNT tăng dần): [" + ketQua.join(", ") + "]";

alert(thongBao);
console.log(thongBao);