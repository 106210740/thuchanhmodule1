//1. Khai báo Lớp (Class) Điện thoại
class DienThoai {
    constructor(maDienThoai, ten, hangSanXuat, gia) {
        this.maDienThoai = maDienThoai;
        this.ten = ten;
        this.hangSanXuat = hangSanXuat;
        this.gia = gia;
    }

    // Các phương thức getter (lấy dữ liệu)
    getTen() {
        return this.ten;
    }

    // Các phương thức setter (gán dữ liệu)
    setTen(tenMoi) {
        this.ten = tenMoi;
    }

    // Phương thức toString() để trả về thông tin đối tượng
    toString() {
        return "Mã: " + this.maDienThoai + 
               " | Tên: " + this.ten + 
               " | Hãng: " + this.hangSanXuat + 
               " | Giá: " + this.gia;
    }
}

//Hàm chính để chạy chương trình
function quanLyDienThoai() {
    // Tạo danh sách ban đầu
    let danhSach = [];
    danhSach.push(new DienThoai("DT01", "Samsung Galaxy S23", "Samsung", 20000000));
    danhSach.push(new DienThoai("DT02", "iPhone 15", "Apple", 25000000));
    danhSach.push(new DienThoai("DT03", "Oppo Reno", "Oppo", 8000000));

    //2. Thêm mới 1 điện thoại
    alert("Bắt đầu thêm mới điện thoại...");
    let maMoi = prompt("Nhập mã điện thoại:");
    let tenMoi = prompt("Nhập tên điện thoại:");
    let hangMoi = prompt("Nhập hãng sản xuất:");
    let giaMoi = parseInt(prompt("Nhập giá bán:"));

    // Tạo đối tượng mới và thêm vào danh sách
    let dtMoi = new DienThoai(maMoi, tenMoi, hangMoi, giaMoi);
    danhSach.push(dtMoi);

    //Sắp xếp danh sách theo tên (Alphabet)
    //Sử dụng localeCompare để so sánh chuỗi
    danhSach.sort(function(a, b) {
        return a.ten.localeCompare(b.ten);
    });

    //Hiển thị danh sách ra màn hình
    let chuoiHienThi = "DANH SÁCH ĐIỆN THOẠI (Đã sắp xếp):\n\n";
    
    for (let i = 0; i < danhSach.length; i++) {
        //Gọi phương thức toString() của từng đối tượng
        chuoiHienThi = chuoiHienThi + (i + 1) + ". " + danhSach[i].toString() + "\n";
    }

    alert(chuoiHienThi);
    console.log(chuoiHienThi);
}

// Gọi hàm để chạy
quanLyDienThoai();