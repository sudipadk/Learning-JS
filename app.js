var num = 0;
const h1 = document.getElementById("head");

function change() {
    if (num < 0) {
        h1.style.color = "red";
    }
    else if (num > 0) {
        h1.style.color = "green";
    }
    else {
        h1.style.color = "Black";
    }
}

increase.addEventListener('click', function () {
    let btn = document.getElementById("increase");
    num = num + 1;
    change();
    h1.innerHTML = num;
}