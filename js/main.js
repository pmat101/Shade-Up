function randompickerbtn() {
    const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const colour = ['#'];
    for (i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16);
        colour.push(hexa[random]);
    }
    document.getElementById("randomValuePara").innerText = colour.join("");
    document.getElementById("randomPicker").style.backgroundColor = colour.join("");
}

function hexFindbtn() {
}

function RGBFindbtn() {
}

function RangeSelector() {
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
};

function hexConvbtn() {
}

function rgbConvbtn() {
}