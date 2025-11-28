let inputString = prompt("Nhập vào một chuỗi bất kì: ");

function demKytuinhoa(chuoi){
    //1. Khai bao bien dem
    let dem = 0;
    //2. Thuat toan dem ky tu in hoa
    //Duyet qua tung ky tu cua chuoi
    for (let i = 0; i < chuoi.length; i++){
        let kyTu = chuoi[i];

        //kiem tra ky tu nam trong khoang tu "A" den "Z"
        if (kyTu >= 'A' && kyTu <= 'Z') {
            dem++;
        }
    }

    // 3. Xu ly ket qua tra ve
    if (dem > 0) {
        return dem;
    } else {
        return  "The Strings is not contain upper char";
    }
}

// goi ham
let ketQua = demKytuinhoa(inputString);

//hien thi ket qua
alert("Chuoi ban dau: " + inputString + "\n" + "Ket qua: " + ketQua);
console.log("Ket qua: " + ketQua);
