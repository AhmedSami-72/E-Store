const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// preloader
window.addEventListener("load", () => {
    const loader = document.getElementById("pre-loader");
    setTimeout(() => {
        loader.classList.add("hide");
        AOS.init({
            duration: 5000,
        });
    }, 1000);
});

////// preloader //////

// scroll
let scrollToTopButton = document.getElementById("scroll-to-top-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
//// scroll ////

// PopUp //
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
});

window.addEventListener("load", () => {
    setTimeout(() => {
        popup.classList.add("show");
    }, 5000);
});
//*// ======= Popup ======== //*//

// search-btn
let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");
let loginForm = document.querySelector(".login-form");
let menuBar = document.querySelector("#menu-bar");
let amenu = document.querySelector(".navbar");
let vidBtn = document.querySelectorAll(".video-btn");

function showbar() {
    searchBtn.classList.toggle("fa-times");
    searchForm.classList.toggle("active");
}

function showform() {
    loginForm.classList.add("active");
}

function hideform() {
    loginForm.classList.remove("active");
}

function showmenu() {
    menuBar.classList.toggle("fa-times");
    amenu.classList.toggle("active");
}
// search-btn

// dark mode
const toggle = document.getElementById("scroll-to-top");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    if (this.classList.toggle("bi-brightness-high-fill")) {
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "2s";
    } else {
        body.style.background = "#dfe6e9";
        // body.style.color = 'white';
        body.style.transition = "2s";
    }
});
// dark mode //










// add products to cart
var cartBtn = document.querySelector('.cart-icon');
var cartCount = document.querySelector('.cart-count');
var cart = document.querySelector('.cart');
var cartTotal = document.querySelector('.cart .total .amount');
var cartItems = [];

// Add item to cart
function addToCart(event) {
	var product = event.target.parentNode;
	var title = product.querySelector('h2').textContent;
	var price = product.querySelector('.price').textContent;
	var item = { title: title, price: price };
	cartItems.push(item);
	updateCart();
}

// Remove item from cart
function removeFromCart(event) {
	var index = parseInt(event.target.getAttribute('data-index'));
	cartItems.splice(index, 1);
	updateCart();
}

// Update cart
function updateCart() {
	var cartList = cart.querySelector('ul');
	var total = 0;
	cartList.innerHTML = '';
	for (var i = 0; i < cartItems.length; i++) {
		var item = cartItems[i];
		var li = document.createElement('li');
		var title = document.createElement('span');
		var price = document.createElement('span');
		var removeBtn = document.createElement('button');
		title.textContent = item.title;
		price.textContent = item.price;
		removeBtn.textContent = 'Remove';
		removeBtn.setAttribute('data-index', i);
		removeBtn.classList.add('remove-item');
		removeBtn.addEventListener('click', removeFromCart);
		li.appendChild(title);
		li.appendChild(price);
		li.appendChild(removeBtn);
		cartList.appendChild(li);
		total += parseFloat(item.price.replace('$', ''));
	}
	cartTotal.textContent = '$' + total.toFixed(2);
	cartCount.textContent = cartItems.length;
}

// Toggle cart
function toggleCart() {
	cart.classList.toggle('open');
}

// Add event listeners
cartBtn.addEventListener('click', toggleCart);
var addToCartBtns = document.querySelectorAll('.add-to-cart');
for (var i = 0; i < addToCartBtns.length; i++) {
	addToCartBtns[i].addEventListener('click', addToCart);
}




// contact
function formValidation() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  let errorMessage = document.querySelector(".error-message");
  errorMessage.innerHTML = "";

  if (name.value === "") {
      errorMessage.innerHTML = "Please enter your name";
      name.focus();
      return false;
  }

  if (email.value === "") {
      errorMessage.innerHTML = "Please enter your email";
      email.focus();
      return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errorMessage.innerHTML = "Please enter a valid email";
      email.focus();
      return false;
  }


  if (message.value === "") {
      errorMessage.innerHTML = "Please enter your message";
      message.focus();
      return false;
  }

  return true;
}