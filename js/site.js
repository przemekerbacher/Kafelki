var expandButton = document.querySelector('#expand-button');
var productsNavigaion = document.querySelector('#products-scroll-spy');
var mainOffsetTop = document.querySelector('.products').offsetTop;
var menuButton = document.querySelector('.menu');
var hiddenMenu = document.querySelector('.hidden-menu');
var closeHiddenMenuButton = document.querySelector('.close-hidden-menu');

menuButton.addEventListener('click', function () {
	hiddenMenu.style.left = 0;
})

closeHiddenMenuButton.addEventListener('click', function () {
	hiddenMenu.style.left = "-100%";
})

//rotate expand button
expandButton.addEventListener('click', function () {
	this.classList.toggle('rotate');
})

window.addEventListener('click', function () {
	if (hiddenMenu.classList.contains('active')) {
		hiddenMenu.style.left = "-100%";
		hiddenMenu.classList.remove("active");
		this.alert('click');

	}
})