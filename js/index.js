const sideNavBar = document.getElementById("side-nav-bar");

function showSideNavBar() {
  sideNavBar.style.display = "flex";
}

function hideSideNavBar() {
  sideNavBar.style.display = "none";
}

// Single Product Page Image Carrousoul

var productImage = document.getElementById("proImage");
var smallImages = document.getElementsByClassName("gallery-img");

for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].addEventListener("click", function () {
    productImage.src = this.src;
  });
}

// Get all .card elements inside #product
let cards = document.querySelectorAll("#product .card");

// Add event listener to each card
cards.forEach((card) => {
  card.addEventListener("click", function () {
    window.location.href = "single-product.html";
  });
});
