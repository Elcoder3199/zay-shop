'use strict';
let loading = document.querySelector(".preloader");

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        setTimeout(() => {
            loading.style.display = "none";
            loading.remove();
        }, 700);
    }
}

// =========== single shop working =========
const mainImg = document.querySelector("#product-detail"),
    singleProImgs = document.querySelectorAll("#single-project-img");

// change the main image src when click on the images
singleProImgs.forEach(img => {
    img.addEventListener("click", function (e) {
        e.preventDefault();
        let src = img.src;
        mainImg.src = src;
    })
})

// increase the quantit value when click or descrease

let btnMinus = document.getElementById("btn-minus"),
    btnPlus = document.getElementById("btn-plus"),
    productQuanity = document.getElementById("product-quanity"),
    varValue = document.getElementById("var-value");

btnMinus.addEventListener("click", minusQuanity);
btnPlus.addEventListener("click", plusQuanity);

function minusQuanity() {
    if (productQuanity.value < 1) {
        productQuanity.value = 1;
    } else if (productQuanity.value > 1) {
        productQuanity.value--;
        varValue.innerHTML--;
    }
}

function plusQuanity() {
    productQuanity.value++;
    varValue.innerHTML++;
}