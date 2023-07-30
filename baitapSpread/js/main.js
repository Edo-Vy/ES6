/**
 * === Xây dựng hiệu ứng jump text khi hover
 */

let chuoiHm = document.querySelector('.heading').innerHTML.split('');

let chuoiMoi = [...chuoiHm];
let html = '';

for (let kyTu of chuoiMoi){

    html += ` <span>${kyTu}</span>`;

    document.querySelector('.heading').innerHTML = html;
}