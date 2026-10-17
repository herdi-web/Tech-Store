// hamburger menu
const menu = document.querySelector(".navbar-nav");
const btnMenu = document.querySelector("#menu-ex");

btnMenu.onclick = () => {
  menu.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("active");
};

// for feat filter product
const btnFilter = document.querySelectorAll(".kategori-products button");
const products = document.querySelectorAll(".products-lists img");

btnFilter.forEach((data) => {
  data.onclick = () => {
    btnFilter.forEach((data) => {
      data.className = "";
    });
    data.className = "active";

    const btnText = data.textContent;

    products.forEach((item) => {
      item.style.display = "none";
      if (
        item.getAttribute("data-filter") == btnText.toLowerCase() ||
        btnText == "Semua Produk"
      ) {
        item.style.display = "block";
      }
    });
  };
});
