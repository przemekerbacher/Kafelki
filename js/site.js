let expandButton = document.querySelector('#expand-button');
let menuButton = document.querySelector('.menu');
let hiddenMenu = document.querySelector('.hidden-menu');
let closeHiddenMenuButton = document.querySelector('.close-hidden-menu');
let basketbutton = document.querySelector('.basket');
let order = document.querySelector(".order");
let closeOrderButton = document.querySelector('.close-order');
let hiddenMenuUl = document.querySelectorAll('.hidden-menu ul');
let hiddenMenuItems = document.querySelectorAll('.hidden-menu li');

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

//hide menu when menu item clicked
hiddenMenuItems.forEach(element => {
	element.addEventListener('click', function () {
		hiddenMenu.classList.remove('active');
		hiddenMenu.classList.toggle('disabled');
	})
});

// detect if clicked outside hidden objects
document.addEventListener('click', function () {
	if (event.target.classList.contains("blur")) {
		if (order.classList.contains("active")) {
			console.log('order contain')
			order.classList.remove('active');
			order.classList.add('disabled');
		} else {
			hiddenMenu.classList.remove('active');
			hiddenMenu.classList.add('disabled');
		}
	}
})



