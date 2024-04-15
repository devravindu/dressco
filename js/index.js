const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}


// Single Product Page Image Carrousoul

var productImage = document.getElementById('proImage');
var smallImages = document.getElementsByClassName('gallery-img');

for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].addEventListener('click', function() {
    productImage.src = this.src;
  });
}

// Get all .card elements inside #product
let cards = document.querySelectorAll('#product .card');

// Add event listener to each card
cards.forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = 'single-product.html';
    });
});