// Inject html
let injectHTML = () => {
	let obj = {
		"pizzas": [{
				"id": 1,
				"name": "margherita",
				"price": "30.00",
				"image-url": "../images/pizza-margherita.jpg",
				"ingredients": [
					"sos pomidorowy",
					"ser"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 2,
				"name": "Rita",
				"price": "30.00",
				"image-url": "../images/pizza-rounded.jpg",
				"ingredients": [
					"szynka"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 3,
				"name": "Fungi",
				"price": "30.00",
				"image-url": "../images/pizza-napoletana.jpg",
				"ingredients": [
					"pierczarki"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 4,
				"name": "Salami",
				"price": "30.00",
				"image-url": "../images/pizza-cinque-stagioni.jpg",
				"ingredients": [
					"salami"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 5,
				"name": "Capri",
				"price": "30.00",
				"image-url": "../images/pizza-rounded.jpg",
				"ingredients": [
					"pieczarki",
					"szynka"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 6,
				"name": "Hawajska",
				"price": "30.00",
				"image-url": "../images/pizza-margherita.jpg",
				"ingredients": [
					"szynka",
					"ananas"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 7,
				"name": "Tonno",
				"price": "30.00",
				"image-url": "../images/pizza-napoletana.jpg",
				"ingredients": [
					"tuńczyk",
					"cebula"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			}
		],
		"drinks": [{
				"id": 1,
				"name": "Coca-Cola",
				"price": "4.00",
				"image-url": "https://dummyimage.com/250x250/000/48990b"
			},
			{
				"id": 2,
				"name": "Sprite",
				"price": "4.00",
				"image-url": "https://dummyimage.com/250x250/000/48990b"
			},
			{
				"id": 3,
				"name": "Napój CApi",
				"price": "4.00",
				"image-url": "https://dummyimage.com/250x250/000/48990b"
			}
		]
	}
	let pizzas = obj.pizzas;
	let drinks = obj.drinks;
	let pizzasElement = document.querySelector('.products #pizza');
	let drinksElement = document.querySelector('.products #drinks');

	pizzas.forEach(element => {
		var html = `
		<div class="product-wrap col-md-6 col-lg-4 p-3">
<div class="product-item rounded">
	<div class="add-to-basket">
		<i class="fas fa-plus"></i>
	</div>	
	<img class="product-image img-thumbnail w-75" src="${element["image-url"]}" alt="produt-image">
	<div class="product-info w-100 pt-1 text-color row align-items-center row">
		<p class="col-6 product-name ">${element.name}</p>
		<div class="col-6">
			<span class="product-price d-block text-right">30.00 zł</span>
		</div>
	</div>
	<div class="product-ingredients w-100">
		<p>
			${element.ingredients.join(", ")}
		</p>
	</div>
	<div class="product-alergens d-flex justify-content-center flex-column">
		<button id="expand-button-${element.id}" class="dropdown-toggle" type="button" data-toggle="collapse"
			data-target="#expand-alergens-${element.id}" aria-expanded="false"></button>
		<p class="collapse" id="expand-alergens-${element.id}">
			<strong>Alergeny:</strong>
			${element.alergens}
		</p>
	</div>
</div>
</div>`;
		pizzasElement.innerHTML += html;
	});

	drinks.forEach(element => {
		var html = `<div class="product-wrap col-md-6 col-lg-4 p-3">
		<div class="product-item rounded">
			<img class="product-image img-thumbnail w-75" src="${element["image-url"]}"
				alt="produt-image">
			<div class="product-info w-100 pt-1 text-color row align-items-center row">
				<p class="col-6 product-name ">${element.name}</p>
				<div class="col-6">
					<span class="product-price d-block text-right">4.00 zł</span>
				</div>
			</div>
		</div>
	</div>`;

		drinksElement.innerHTML += html;
	})

}

injectHTML();