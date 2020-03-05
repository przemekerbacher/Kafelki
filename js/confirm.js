let radiosDelivery = document.querySelectorAll('[name="delivery"]');
let timeInput = document.querySelector("[name='time'");

radiosDelivery.forEach(radio => {
	radio.addEventListener('click', function () {
		if (this.getAttribute("value") === "on-time") {
			timeInput.classList.add('show');
		} else {
			timeInput.classList.remove('show');
		}
	})
});