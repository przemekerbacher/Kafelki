let expandButtons = document.querySelectorAll(".expand-button");
let menuButton = document.querySelector(".menu");
let hiddenMenu = document.querySelector(".hidden-menu");
let closeHiddenMenuButton = document.querySelector(".close-hidden-menu");
let basketbutton = document.querySelector(".basket");
let order = document.querySelector(".order");
let closeOrderButton = document.querySelector(".close-order");
let hiddenMenuUl = document.querySelectorAll(".hidden-menu ul");
let hiddenMenuItems = document.querySelectorAll(".hidden-menu li");
let header = document.querySelector("header");

//basket move in effect
basketbutton.addEventListener("click", function() {
  order.classList.add("active");
  order.classList.remove("disabled");
});

//basket move out effect
closeOrderButton.addEventListener("click", function() {
  order.classList.remove("active");
  order.classList.add("disabled");
});

//menu move in effect
menuButton.addEventListener("click", function() {
  hiddenMenu.classList.add("active");
  hiddenMenu.classList.remove("disabled");
});

//menu move out effect
closeHiddenMenuButton.addEventListener("click", function() {
  hiddenMenu.classList.remove("active");
  hiddenMenu.classList.add("disabled");
});

//rotate expand button
expandButtons.forEach(expandButton => {
  expandButton.addEventListener("click", function() {
    this.classList.toggle("rotate");
  });
});

//hide menu when menu item clicked
hiddenMenuItems.forEach(element => {
  element.addEventListener("click", function() {
    hiddenMenu.classList.remove("active");
    hiddenMenu.classList.toggle("disabled");
  });
});

// detect if clicked outside hidden objects
document.addEventListener("click", function() {
  if (event.target.classList.contains("blur")) {
    if (order.classList.contains("active")) {
      console.log("order contain");
      order.classList.remove("active");
      order.classList.add("disabled");
    } else {
      hiddenMenu.classList.remove("active");
      hiddenMenu.classList.add("disabled");
    }
  }
});

//add blur to header when menu is expanded
let navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function() {
  if (this.getAttribute("aria-expanded") == "false") {
    header.classList.add("blur");
  } else {
    header.classList.remove("blur");
  }
});

//show/hide buttons
window.addEventListener("scroll", () => {
  function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  const scrollPosition = window.scrollY;
  const menu = document.querySelector("#menu");
  const menuTopOffset = offset(menu).top;

  if (scrollPosition >= menuTopOffset - window.innerHeight) {
    menuButton.classList.remove("hidden");
    basketbutton.classList.remove("hidden");
  } else {
    menuButton.classList.add("hidden");
    basketbutton.classList.add("hidden");
  }
});
