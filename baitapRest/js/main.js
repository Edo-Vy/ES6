/**
 * === Viết chương trình tính điểm trung bình cho cả hai khối lớp 1 và 2. 
 * Cả hai khối dùng chung hàm tính điểm trung bình
 * --- Sử dụng arrow funtion xây dựng hàm tính điểm trung bình
 */


let tinhDTB = (...restDiem) => {
    let diemTB = 0;
    for (let index = 0; index < restDiem.length; index++) {

        diemTB += restDiem[index];

    }
    return (diemTB / restDiem.length).toFixed(2);
}
document.querySelector('#btnKhoi1').onclick = () => {

    let diemToan = Number(document.querySelector('#inpToan').value);
    let diemLy = Number(document.querySelector('#inpLy').value);
    let diemHoa = Number(document.querySelector('#inpHoa').value);

    document.querySelector('#tbKhoi1').innerHTML = "" + tinhDTB(diemToan, diemLy, diemHoa);
}

document.querySelector('#btnKhoi2').onclick = () => {

    let diemVan = Number(document.querySelector('#inpVan').value);
    let diemSu = Number(document.querySelector('#inpSu').value);
    let diemDia = Number(document.querySelector('#inpDia').value);
    let diemEnglish = Number(document.querySelector('#inpEnglish').value);

    document.querySelector('#tbKhoi2').innerHTML = "" + tinhDTB(diemVan, diemSu, diemDia, diemEnglish);
}