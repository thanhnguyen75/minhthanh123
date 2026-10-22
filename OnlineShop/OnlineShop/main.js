/* =========================================================
     BÀI TẬP MỞ RỘNG: thêm Đăng nhập / Đăng ký vào ứng dụng
     Cửa Hàng Online mà em đã hoàn thiện ở bài trước.

     Phần sản phẩm / giỏ hàng bên dưới (PHẦN B) đã có sẵn đầy
     đủ, giữ nguyên không cần sửa. Nhiệm vụ của em là hoàn
     thiện 5 hàm còn thiếu ở PHẦN A - đánh dấu TODO 1 đến TODO 5.

     Làm lần lượt từng TODO, test lại ngay sau mỗi bước (nhớ
     tải lại trang F5 sau khi lưu file để chạy code mới).
     ========================================================= */

  /* =========================================================
     PHẦN A: ĐĂNG NHẬP / ĐĂNG KÝ (cần hoàn thiện)
     ========================================================= */

  // Danh sách tài khoản - lưu trong mảng (mất khi tải lại trang
  // vì đây chỉ là JavaScript thuần, không có server/database)
  // KHÔNG cần sửa phần dữ liệu này
  let danhSachTaiKhoan = [
    { taiKhoan: "khach1", matKhau: "123456" }
  ];

  // Tài khoản đang đăng nhập. null nghĩa là chưa đăng nhập - KHÔNG cần sửa
  let taiKhoanDangNhap = null;

  // Tham chiếu DOM - KHÔNG cần sửa phần này
  const oTaiKhoan = document.getElementById("oTaiKhoan");
  const oMatKhau = document.getElementById("oMatKhau");
  const oThongBaoLoi = document.getElementById("thongBaoLoi");
  const oManHinhDangNhap = document.getElementById("manHinhDangNhap");
  const oManHinhCuaHang = document.getElementById("manHinhCuaHang");
  const oTenDangNhap = document.getElementById("tenDangNhap");

  /* =========================================================
     TODO 1: Hàm timTaiKhoan(taiKhoan)
     - Dùng vòng lặp for duyệt qua danhSachTaiKhoan
     - Nếu danhSachTaiKhoan[i].taiKhoan === taiKhoan thì
       return danhSachTaiKhoan[i] (trả về cả object tài khoản)
     - Nếu duyệt hết mảng mà không tìm thấy thì return null
     (Y hệt cách viết hàm timSanPham() ở bài trước)
     ========================================================= */
  function timTaiKhoan(taiKhoan) {
    // TODO 1: viết code ở đây
    for (let i = 0; i < danhSachTaiKhoan.length; i++) {
        if (danhSachTaiKhoan[i].taiKhoan === taiKhoan) {
            return danhSachTaiKhoan[i];
        }
    }
    return null;
  }

  /* =========================================================
     TODO 2: Hàm dangKy()
     Được gọi khi bấm nút "Đăng ký".
     - Đọc giá trị 2 ô input: oTaiKhoan.value, oMatKhau.value
     - Dùng timTaiKhoan(taiKhoan) để kiểm tra tài khoản đã tồn
       tại chưa. Nếu khác null (đã tồn tại):
         + gán oThongBaoLoi.className = "thong-bao loi"
         + gán oThongBaoLoi.textContent = "Tài khoản đã tồn tại, vui lòng chọn tên khác hoặc đăng nhập."
         + return (dừng hàm, không đăng ký nữa)
     - Nếu chưa tồn tại:
         + push object { taiKhoan: taiKhoan, matKhau: matKhau }
           vào mảng danhSachTaiKhoan
         + gán oThongBaoLoi.className = "thong-bao thanh-cong"
         + gán oThongBaoLoi.textContent = "Đăng ký thành công! Bây giờ hãy đăng nhập."
     ========================================================= */
  function dangKy() {
    // TODO 2: viết code ở đây
    let taiKhoan = oTaiKhoan.value.trim();
    let matKhau = oMatKhau.value;

    if (taiKhoan === "" || matKhau === "") {
        oThongBaoLoi.className = "thong-bao loi";
        oThongBaoLoi.textContent = "Vui lòng nhập đầy đủ tài khoản và mật khẩu.";
        return;
    }

    if (timTaiKhoan(taiKhoan) !== null) {
        oThongBaoLoi.className = "thong-bao loi";
        oThongBaoLoi.textContent = "Tài khoản đã tồn tại, vui lòng chọn tên khác hoặc đăng nhập.";
        return;
    }

    danhSachTaiKhoan.push({
        taiKhoan: taiKhoan,
        matKhau: matKhau
    });

    oThongBaoLoi.className = "thong-bao thanh-cong";
    oThongBaoLoi.textContent = "Đăng ký thành công! Bây giờ hãy đăng nhập.";
  }

  /* =========================================================
     TODO 3: Hàm dangNhap()
     Được gọi khi bấm nút "Đăng nhập".
     - Đọc giá trị 2 ô input: oTaiKhoan.value, oMatKhau.value
     - Dùng timTaiKhoan(taiKhoan) để tìm tài khoản, lưu vào 1 biến
     - Nếu không tìm thấy (null) HOẶC mật khẩu không khớp
       (tk.matKhau !== matKhau):
         + gán oThongBaoLoi.className = "thong-bao loi"
         + gán oThongBaoLoi.textContent = "Sai tài khoản hoặc mật khẩu."
         + return
     - Nếu đúng:
         + gán taiKhoanDangNhap = taiKhoan
         + xóa trắng 2 ô input, xóa trắng oThongBaoLoi.textContent
         + gọi hienThiManHinh() để chuyển sang màn hình cửa hàng
     ========================================================= */
  function dangNhap() {
    // TODO 3: viết code ở đây
    let taiKhoan = oTaiKhoan.value.trim();
    let matKhau = oMatKhau.value;

    let tk = timTaiKhoan(taiKhoan);

    if (tk === null || tk.matKhau !== matKhau) {
        oThongBaoLoi.className = "thong-bao loi";
        oThongBaoLoi.textContent = "Sai tài khoản hoặc mật khẩu.";
        return;
    }

    taiKhoanDangNhap = tk.taiKhoan;

    oTaiKhoan.value = "";
    oMatKhau.value = "";
    oThongBaoLoi.textContent = "";

    hienThiManHinh();
  }

  /* =========================================================
     TODO 4: Hàm dangXuat()
     Được gọi khi bấm nút "Đăng xuất".
     - Gán taiKhoanDangNhap = null
     - Gọi hienThiManHinh() để quay lại màn hình đăng nhập
     ========================================================= */
  function dangXuat() {
    // TODO 4: viết code ở đây
    taiKhoanDangNhap = null;
    hienThiManHinh();
  }

  /* =========================================================
     TODO 5: Hàm hienThiManHinh()
     Ẩn/hiện 2 khối màn hình dựa vào biến taiKhoanDangNhap.
     - Nếu taiKhoanDangNhap === null (chưa đăng nhập):
         + oManHinhDangNhap.style.display = "block"
         + oManHinhCuaHang.style.display = "none"
     - Ngược lại (đã đăng nhập):
         + oManHinhDangNhap.style.display = "none"
         + oManHinhCuaHang.style.display = "block"
         + oTenDangNhap.textContent = taiKhoanDangNhap
     ========================================================= */
  function hienThiManHinh() {
    // TODO 5: viết code ở đây
    if (taiKhoanDangNhap === null) {
        oManHinhDangNhap.style.display = "block";
        oManHinhCuaHang.style.display = "none";
    } else {
        oManHinhDangNhap.style.display = "none";
        oManHinhCuaHang.style.display = "block";
        oTenDangNhap.textContent = taiKhoanDangNhap;
    }
  }

  /* =========================================================
     PHẦN B: SẢN PHẨM VÀ GIỎ HÀNG (đã hoàn thiện, KHÔNG cần sửa)
     ========================================================= */
  let danhSachSanPham = [
    { id: "SP001", ten: "Áo thun", gia: 150000 },
    { id: "SP002", ten: "Quần jean", gia: 350000 },
    { id: "SP003", ten: "Giày sneaker", gia: 500000 },
    { id: "SP004", ten: "Mũ lưỡi trai", gia: 80000 },
    { id: "SP005", ten: "Balo", gia: 250000 }
  ];

  let gioHang = [];

  const oBangSanPham = document.getElementById("bangSanPham");
  const oBangGioHang = document.getElementById("bangGioHang");
  const oTongTien = document.getElementById("tongTien");

  // Định dạng tiền Việt Nam
function dinhDangTien(soTien) {
    return soTien.toLocaleString("vi-VN") + "đ";
}

// Tìm sản phẩm theo mã
function timSanPham(id) {
    for (let i = 0; i < danhSachSanPham.length; i++) {
        if (danhSachSanPham[i].id === id) {
            return danhSachSanPham[i];
        }
    }
    return null;
}

// Hiển thị danh sách sản phẩm
function hienThiSanPham() {
    let html = "";

    for (let i = 0; i < danhSachSanPham.length; i++) {
        let sp = danhSachSanPham[i];

        html += `
            <tr>
                <td>${sp.id}</td>
                <td>${sp.ten}</td>
                <td>${dinhDangTien(sp.gia)}</td>
                <td>
                    <button onclick="themVaoGio('${sp.id}')">
                        Thêm vào giỏ
                    </button>
                </td>
            </tr>
        `;
    }

    oBangSanPham.innerHTML = html;
}

// Hiển thị giỏ hàng
function hienThiGioHang() {
    let html = "";
    let tong = 0;

    for (let i = 0; i < gioHang.length; i++) {
        let sp = gioHang[i];
        let thanhTien = sp.gia * sp.soLuong;

        tong += thanhTien;

        html += `
            <tr>
                <td>${sp.ten}</td>
                <td>${sp.soLuong}</td>
                <td>${dinhDangTien(sp.gia)}</td>
                <td>${dinhDangTien(thanhTien)}</td>
                <td>
                    <button onclick="xoaKhoiGio(${i})">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    }

    oBangGioHang.innerHTML = html;
    oTongTien.textContent = dinhDangTien(tong);
}

// Thêm sản phẩm vào giỏ
function themVaoGio(id) {
    let sp = timSanPham(id);

    if (sp === null) {
        return;
    }

    let viTri = -1;

    for (let i = 0; i < gioHang.length; i++) {
        if (gioHang[i].id === id) {
            viTri = i;
            break;
        }
    }

    if (viTri !== -1) {
        gioHang[viTri].soLuong++;
    } else {
        gioHang.push({
            id: sp.id,
            ten: sp.ten,
            gia: sp.gia,
            soLuong: 1
        });
    }

    hienThiGioHang();
}

// Xóa sản phẩm khỏi giỏ
function xoaKhoiGio(viTri) {
    if (viTri >= 0 && viTri < gioHang.length) {
        gioHang.splice(viTri, 1);
    }

    hienThiGioHang();
}

// Thanh toán
function thanhToan() {
    if (gioHang.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    let tong = 0;

    for (let i = 0; i < gioHang.length; i++) {
        tong += gioHang[i].gia * gioHang[i].soLuong;
    }

    alert(
        "Thanh toán thành công!\nTổng tiền: " +
        dinhDangTien(tong)
    );

    gioHang = [];
    hienThiGioHang();
}


/* =========================================================
   KHỞI TẠO KHI TẢI TRANG
   ========================================================= */

hienThiManHinh();
hienThiSanPham();
hienThiGioHang();
