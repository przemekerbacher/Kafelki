// Inject html
let injectHTML = () => {
	let productsData = {
		"pizzas": [{
				"id": 1,
				"name": "margherita",
				"price": "18.00",
				"image-url": "images/pizza-margherita.jpg",
				"ingredients": [
					"sos pomidorowy",
					"ser"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 2,
				"name": "Rita",
				"price": "20.00",
				"image-url": "images/pizza-rounded.jpg",
				"ingredients": [
					"szynka"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 3,
				"name": "Fungi",
				"price": "22.00",
				"image-url": "images/pizza-napoletana.jpg",
				"ingredients": [
					"pierczarki"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 4,
				"name": "Salami",
				"price": "24.00",
				"image-url": "images/pizza-cinque-stagioni.jpg",
				"ingredients": [
					"salami"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 5,
				"name": "Capri",
				"price": "20.00",
				"image-url": "images/pizza-rounded.jpg",
				"ingredients": [
					"pieczarki",
					"szynka"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 6,
				"name": "Hawajska",
				"price": "21.00",
				"image-url": "images/pizza-margherita.jpg",
				"ingredients": [
					"szynka",
					"ananas"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			},
			{
				"id": 7,
				"name": "Tonno",
				"price": "21.00",
				"image-url": "images/pizza-napoletana.jpg",
				"ingredients": [
					"tuńczyk",
					"cebula"
				],
				"alergens": "gluten, pszenica, jęczmień, owies, orkisz, kamut lub ich odmiany hybrydowe, a także produkty pochodne,	Skorupiaki i produkty pochodne, Jaja i produkty pochodne,Ryby i produkty pochodne"
			}
		],
		"drinks": [{
				"id": 1,
				"name": "7UP 0,5",
				"price": "5.00",
				"image-url": "https://dummyimage.com/250x250/000/48990b"
			},
			{
				"id": 2,
				"name": "7UP 1 litr",
				"price": "7.00",
				"image-url": "https://dummyimage.com/250x250/000/48990b"
			},
			{
				"id": 3,
				"name": "Napój Capi",
				"price": "4.00",
				"image-url": "https://dummyimage.com/250x250/000/48990b"
			},
			{
				"id": 4,
				"name": "Ice Tea Lemon",
				"price": "5.00",
				"image-url": "https://dummyimage.com/250x250/000/48990b"
			},

		]
	}
	let pizzas = productsData.pizzas;
	let drinks = productsData.drinks;
	let pizzasElement = document.querySelector('.products #pizza');
	let drinksElement = document.querySelector('.products #drinks');

	pizzas.forEach(element => {
		var html = `
		<div class="product-wrap col-md-6 p-3">
			<div class="product-item rounded">
				<div class="row align-items-center">
					<div class="col-3 mb-2">
						<img class="product-image img-thumbnail img-fluid" src="${element["image-url"]}" alt="produt-image">
					</div>
					<div class="product-info text-color col-6">
						<p class="col-6 product-name">${element.name}</p>
						<div class="product-ingredients p-0 m-0 w-100 col-12">
							<p>
								${element.ingredients.join(", ")}
							</p>
						</div>
					</div>
					<div class="col-3">
						<span class="product-price d-block text-right">30.00 zł</span>
					</div>
				</div>
				<button class="product-button">Dodaj do koszyka</button>
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