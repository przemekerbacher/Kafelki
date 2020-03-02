var expandButton = document.querySelector('#expand-button');
var productsNavigaion = document.querySelector('#products-scroll-spy');
var mainOffsetTop = document.querySelector('.products').offsetTop;
var menuButton = document.querySelector('.menu');
var hiddenMenu = document.querySelector('.hidden-menu');
var closeHiddenMenuButton = document.querySelector('.close-hidden-menu');
var basketbutton = document.querySelector('.basket');
var order = document.querySelector(".order");
var closeOrderButton = document.querySelector('.close-order');

//basket move in effect
basketbutton.addEventListener('click', function () {
	order.classList.add('active');
	order.classList.remove('disabled');
})

//basket move out effect
closeOrderButton.addEventListener('click', function () {
	order.classList.remove('active');
	order.classList.add('disabled');

})

//menu move in effect
menuButton.addEventListener('click', function () {
	hiddenMenu.classList.add('active');
	hiddenMenu.classList.remove('disabled');
})

//menu move out effect
closeHiddenMenuButton.addEventListener('click', function () {
	hiddenMenu.classList.remove('active');
	hiddenMenu.classList.add('disabled');
})

//rotate expand button
expandButton.addEventListener('click', function () {
	this.classList.toggle('rotate');
})