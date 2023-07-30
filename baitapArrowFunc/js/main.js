/**
 *  === Xây dựng ứng dụng đổi màu ngôi nhà ===
 */
let colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];


let renderColor = () => {

    let html = "";
    for (let index = 0; index < colorList.length; index++) {

        let color = colorList[index];
        html += `
        <button class ="color-button + ${color}" onclick ="changeColor('${color}')"></button>
        `;

    }
    document.querySelector('#colorContainer').innerHTML = html;
}
window.changeColor = (color) => {
  
    document.querySelector('#house').className = `house + ${color} `;
}
window.onload = function(){

    renderColor();
}