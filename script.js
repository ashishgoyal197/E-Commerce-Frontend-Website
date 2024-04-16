const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Single Product - change small img

let mainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");

if (window.location.pathname.includes("sproduct.html")) {
  smallImg[0].addEventListener("click", () => {
    mainImg.src = smallImg[0].src;
  });
  smallImg[1].addEventListener("click", () => {
    mainImg.src = smallImg[1].src;
  });
  smallImg[2].addEventListener("click", () => {
    mainImg.src = smallImg[2].src;
  });
  smallImg[3].addEventListener("click", () => {
    mainImg.src = smallImg[3].src;
  });
}

// Shop

const allBannerImg = document.getElementsByClassName("highlightImg");
const firstProduct = document.getElementsByClassName("pro");
// if (
//   window.location.pathname.includes("shop.html") ||
//   window.location.pathname.includes("index.html")
// ) {
firstProduct[0].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${1}`;
});
console.log(firstProduct[1]);
firstProduct[1].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${2}`;
});
firstProduct[2].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${3}`;
});
firstProduct[3].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${4}`;
});
firstProduct[4].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${5}`;
});
firstProduct[5].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${6}`;
});
firstProduct[6].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${7}`;
});
firstProduct[7].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${8}`;
});
firstProduct[8].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${9}`;
});
firstProduct[9].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${10}`;
});
firstProduct[10].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${11}`;
});
firstProduct[11].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${12}`;
});
firstProduct[12].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${13}`;
});
firstProduct[13].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${14}`;
});
firstProduct[14].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${15}`;
});
firstProduct[15].addEventListener("click", () => {
  window.location.href = `sproduct.html?cart=${16}`;
});
// }

// return values to sproduct page
function picload() {
  const urlParams = new URLSearchParams(window.location.search);

  // Get the value parameter
  const value = urlParams.get("cart");

  mainImg.src = `./img/products/f${parseInt(value)}.jpg`;
  small1.src = `./img/products/f${parseInt(value)}.jpg`;
  small2.src = `./img/products/f${(parseInt(value) % 16) + 1}.jpg`;
  small3.src = `./img/products/f${((parseInt(value) + 1) % 16) + 1}.jpg`;
  small4.src = `./img/products/f${((parseInt(value) + 2) % 16) + 1}.jpg`;
}

//
