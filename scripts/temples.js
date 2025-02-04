//Copyright
const date = new Date().getFullYear();
document.querySelector("#copyrightYear").innerHTML = date;

//Last Modified
let modified = document.lastModified;
document.querySelector("#modified").innerHTML = modified


// HAMBURGER MENU
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Antofagasta Chile Temple",
		location: "Antofagasta, Chile",
		dedicated: "2020, November, 27",
		area: 23000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-48608-main.jpg"
	  },
	  {
		templeName: "Columbus Ohio Temple",
		location: "Columbus, Ohio, United States",
		dedicated: "1998, September, 12",
		area: 11745,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/columbus-ohio-temple/columbus-ohio-temple-36109-main.jpg"
	  },
	  {
		templeName: "Rio de Janeiro Brazil Temple",
		location: "Rio De Janeiro, Brazil",
		dedicated: "2017, March, 4",
		area: 29966,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
	  },
	  {
		templeName: "Rome Italy Temple",
		location: "Rome, Italy",
		dedicated: "2010, October, 23",
		area: 41010,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
	  },
	  {
		templeName: "Bogotá Colombia Temple",
		location: "Bogotá, Colombia",
		dedicated: "1993, June, 26",
		area: 53500,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
	  }
  ];

//   The name of the temple.
//   The location of the temple.
//   The date the temple was dedicated.
//   The total area of the temple in square feet.
//   The provided image of the temple (an absolute address). Make sure to provide an appropriate alt value such as the name of the temple.
//   Use native lazy loading to each temple image


function createTempleCard(filteredTemples) {
	document.querySelector(".temples").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");
	
		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label"> Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label"> Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label"> Size:</span> ${temple.area} sq ft`
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`)
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".temples").appendChild(card);
	})
}

createTempleCard(temples);

// Old - temples built before 1900
// New - temples built after 2000
// Large - temples larger than 90000 square feet
// Small - temples smaller than 10000 square feet
// Home - displays all the temples stored in the array.

const older = document.querySelector("#old");
older.addEventListener("click", () => {
	const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    createTempleCard(oldTemples);
})

const newer = document.querySelector("#new");
newer.addEventListener("click", () => {
	const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    createTempleCard(newTemples);
})

const large = document.querySelector("#large");
large.addEventListener("click", () => {
	const largeTemples = temples.filter(temple => {
        return temple.area > 90000;
    });
    createTempleCard(largeTemples);
})

const small = document.querySelector("#small");
small.addEventListener("click", () => {
	const smallTemples = temples.filter(temple => {
        return temple.area < 10000;
    });
    createTempleCard(smallTemples);
})