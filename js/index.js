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

// Kokis Animation
/*
let container = document.getElementById('container');
let count = 50;

for (let i = 0; i < 30; i++) {
let leftKokis = Math.floor(Math.random() * container.clientWidth);
let topKokis = Math.floor(Math.random() * container.clientHeight);
let widthKokis = Math.floor(Math.random() * 50);
  console.log(leftKokis);
  let timeKokis = Math.floor(Math.random() * 5) + 5;
  let div = document.createElement('div');
  div.classList.add('kokis');
  div.style.left = leftKokis + 'px';
  div.style.top = topKokis + 'px';
  div.style.width = widthKokis + 'px';
  div.style.height = widthKokis + 'px';
  div.style.animationDuration = 1 + timeKokis + 's';
  container.appendChild(div);
}
*/


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