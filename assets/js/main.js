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
<<<<<<< HEAD
=======
const head = document.querySelector("header");
>>>>>>> e5928ca (first commit)

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    if (this.classList.toggle("bi-brightness-high-fill")) {
        body.style.background = "white";
        body.style.color = "black";
<<<<<<< HEAD
        body.style.transition = "2s";
    } else {
        body.style.background = "#dfe6e9";
        // body.style.color = 'white';
=======
        // head.style.color = "black";
        body.style.transition = "2s";
    } else {
        body.style.background = "#333";
        // head.style.color = "white";
        // head.style.background = "#333";
        body.style.color = 'white';
>>>>>>> e5928ca (first commit)
        body.style.transition = "2s";
    }
});
// dark mode //





<<<<<<< HEAD





=======
>>>>>>> e5928ca (first commit)
// add products to cart
var cartBtn = document.querySelector('.cart-icon');
var cartCount = document.querySelector('.cart-count');
var cart = document.querySelector('.cart');
var cartTotal = document.querySelector('.cart .total .amount');
var cartItems = [];

// Add item to cart
function addToCart(event) {
<<<<<<< HEAD
	var product = event.target.parentNode;
	var title = product.querySelector('h2').textContent;
	var price = product.querySelector('.price').textContent;
	var item = { title: title, price: price };
	cartItems.push(item);
	updateCart();
=======
    var product = event.target.parentNode;
    var title = product.querySelector('h2').textContent;
    var price = product.querySelector('.price').textContent;
    var item = {
        title: title,
        price: price
    };
    cartItems.push(item);
    updateCart();
>>>>>>> e5928ca (first commit)
}

// Remove item from cart
function removeFromCart(event) {
<<<<<<< HEAD
	var index = parseInt(event.target.getAttribute('data-index'));
	cartItems.splice(index, 1);
	updateCart();
=======
    var index = parseInt(event.target.getAttribute('data-index'));
    cartItems.splice(index, 1);
    updateCart();
>>>>>>> e5928ca (first commit)
}

// Update cart
function updateCart() {
<<<<<<< HEAD
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
=======
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
>>>>>>> e5928ca (first commit)
}

// Toggle cart
function toggleCart() {
<<<<<<< HEAD
	cart.classList.toggle('open');
=======
    cart.classList.toggle('open');
>>>>>>> e5928ca (first commit)
}

// Add event listeners
cartBtn.addEventListener('click', toggleCart);
var addToCartBtns = document.querySelectorAll('.add-to-cart');
for (var i = 0; i < addToCartBtns.length; i++) {
<<<<<<< HEAD
	addToCartBtns[i].addEventListener('click', addToCart);
=======
    addToCartBtns[i].addEventListener('click', addToCart);
>>>>>>> e5928ca (first commit)
}




// contact
function formValidation() {
<<<<<<< HEAD
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
=======
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




const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cPassword");

// Email Validtion
function checkEmail() {
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emaiPattern)) {
        return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
    }
    emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
        if (pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return (pInput.type = "text");
        }
        eyeIcon.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
    });
});

// Password Validation
function createPass() {
    const passPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
    }
    passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Confirm Password Validtion
function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    checkEmail();
    createPass();
    confirmPass();

    //calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});


// function search
function search() {
    let searchBar = document.querySelector("#search-bar").value.toUpperCase();
    let productList = document.querySelector(".product-main");
    let product = document.querySelectorAll(".showcase");
    let productName = document.getElementsByClassName("showcase-title");

    for (let i = 0; i < productName.length; i++) {
        if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
            product[i].style.display = "";
        } else {
            product[i].style.display = "none";
        }
    }
}

// function img
// const image__container = document.querySelector(".img-holder img");
// const image__list = document.querySelectorAll(".img-holder img");
// for (let i = 0; i < image__list.length; i++) {
//     image__list[i].addEventListener("click", function (e) {
//         // const imgSrc = e.target.src;
//         const imgSrc = e.target.getAttribute('src');
//         image__container.setAttribute("src", `${imgSrc}`);
//         console.log(e.target.getAttribute('src'));
//     });
// }
>>>>>>> e5928ca (first commit)
