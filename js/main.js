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
    let hexC = document.getElementById("hexInput").value;
    document.getElementById("color-box").style.backgroundColor = hexC;
}

function RGBFindbtn() {
    let red = document.getElementById("RInput").value;
    let green = document.getElementById("GInput").value;
    let blue = document.getElementById("BInput").value;
    document.getElementById("rgb-color-box").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function RangeSelector() {
    let rRange = document.getElementById("RrInput").value;
    let gRange = document.getElementById("GrInput").value;
    let bRange = document.getElementById("BrInput").value;
    document.getElementById("range-color-box").style.backgroundColor = `rgb(${rRange}, ${gRange}, ${bRange})`;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
};

function hexConvbtn() {
    let hexv = document.getElementById("hexCInp").value;
    let r, g, b;
    if (hexv.length == 3) {
        r = parseInt(hexv.slice(0, 1) + hexv.slice(0, 1), 16);
        g = parseInt(hexv.slice(1, 2) + hexv.slice(1, 2), 16);
        b = parseInt(hexv.slice(2, 3) + hexv.slice(2, 3), 16);
    } else {
        r = parseInt(hexv.slice(0, 2), 16);
        g = parseInt(hexv.slice(2, 4), 16);
        b = parseInt(hexv.slice(4, 6), 16);
    }
    document.getElementById("hexCOut").innerText = `rgb(${r}, ${g}, ${b})`;
}

function rgbConvbtn() {
}
