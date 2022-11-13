// Mờ Buy ticket
const buyBtns = document.querySelectorAll(".js-place-buy");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

for (const btn of buyBtns) {
  btn.addEventListener("click", function () {
    modal.classList.add("open");
  });
}

modalClose.addEventListener("click", function () {
  modal.classList.remove("open");
});

modal.addEventListener("click", function () {
  modal.classList.remove("open");
});

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

//Đóng mở Mobile menu
var header = document.getElementById("header");
var menuSearch = document.getElementById("menu-search");
var headerHeight = header.clientHeight;
menuSearch.addEventListener("click", function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
});

// Tự động đóng khi chọn Menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.addEventListener("click", function (event) {
    var menuParent =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");

    if (menuParent) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  });
}
