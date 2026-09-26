const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Cochabamba Bolivia",
    location: "Cochabamba, Bolivia",
    dedicated: "2000, April, 30",
    area: 35500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cochabamba-bolivia/400x250/cochabamba-bolivia-temple-lds-1065074-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160935.jpg"
  }
];

const container = document.getElementById("temple-cards");
const categoryTitle = document.getElementById("category-title");

function displayTemples(filteredTemples) {
  container.innerHTML = "";
  
  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    `;

    container.appendChild(card);
  });
}

function getDedicatedYear(temple) {
  return parseInt(temple.dedicated.split(",")[0]);
}

document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  categoryTitle.textContent = "Home";
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();
  categoryTitle.textContent = "Old Temples";
  const oldTemples = temples.filter((t) => getDedicatedYear(t) < 1900);
  displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault();
  categoryTitle.textContent = "New Temples";
  const newTemples = temples.filter((t) => getDedicatedYear(t) > 2000);
  displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault();
  categoryTitle.textContent = "Large Temples";
  const largeTemples = temples.filter((t) => t.area > 90000);
  displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault();
  categoryTitle.textContent = "Small Temples";
  const smallTemples = temples.filter((t) => t.area < 10000);
  displayTemples(smallTemples);
});

const mainNav = document.querySelector('nav');
const hamburgerButton = document.querySelector('#menu');

if (hamburgerButton) {
  hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
  });
}

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

displayTemples(temples);