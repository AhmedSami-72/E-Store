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

// about

// add to cart

var cartBtn = document.querySelector(".cart-icon");
var cartCount = document.querySelector(".cart-count");
var cart = document.querySelector(".cart");
var cartTotal = document.querySelector(".cart .total .amount");
var cartItems = [];

// Add item to cart
function addToCart(event) {
  var product = event.target.parentNode;
  var title = product.querySelector("h2").textContent;
  var price = product.querySelector(".price").textContent;
  var item = { title: title, price: price };
  cartItems.push(item);
  updateCart();
}

// Remove item from cart
function removeFromCart(event) {
  var index = parseInt(event.target.getAttribute("data-index"));
  cartItems.splice(index, 1);
  updateCart();
}

// Update cart
function updateCart() {
  var cartList = cart.querySelector("ul");
  var total = 0;
  cartList.innerHTML = "";
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var li = document.createElement("li");
    var title = document.createElement("span");
    var price = document.createElement("span");
    var removeBtn = document.createElement("button");
    title.textContent = item.title;
    price.textContent = item.price;
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("data-index", i);
    removeBtn.classList.add("remove-item");
    removeBtn.addEventListener("click", removeFromCart);
    li.appendChild(title);
    li.appendChild(price);
    li.appendChild(removeBtn);
    cartList.appendChild(li);
    total += parseFloat(item.price.replace("$", ""));
  }
  cartTotal.textContent = "$" + total.toFixed(2);
  cartCount.textContent = cartItems.length;
}

// Toggle cart
function toggleCart() {
  cart.classList.toggle("open");
}

// Add event listeners
cartBtn.addEventListener("click", toggleCart);
var addToCartBtns = document.querySelectorAll(".add-to-cart");
for (var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", addToCart);
}

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
//   image__list[i].addEventListener("click", function (e) {
//     // const imgSrc = e.target.src;
//     const imgSrc = e.target.getAttribute('src');
//     image__container.setAttribute("src", `${imgSrc}`);
//     console.log(e.target.getAttribute('src'));
//   });
// }
