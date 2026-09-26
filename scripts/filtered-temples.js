const container = document.getElementById("temple-cards");
const categoryTitle = document.getElementById("category-title");
const mainNav = document.querySelector("nav");
const hamburgerButton = document.getElementById("menu");

function displayTemples(filteredTemples) {
  if (!container) return;

  container.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");
    card.className = "temple-card";

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName} Temple"
        loading="lazy"
        width="400"
        height="250"
      >
    `;

    container.appendChild(card);
  });
}

function getDedicatedYear(temple) {
  return Number.parseInt(temple.dedicated.split(",")[0], 10);
}

function filterTemples(title, filterFunction) {
  categoryTitle.textContent = title;
  displayTemples(temples.filter(filterFunction));
}

document.getElementById("home").addEventListener("click", (event) => {
  event.preventDefault();
  categoryTitle.textContent = "Home";
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (event) => {
  event.preventDefault();
  filterTemples("Old Temples", (temple) => getDedicatedYear(temple) < 1900);
});

document.getElementById("new").addEventListener("click", (event) => {
  event.preventDefault();
  filterTemples("New Temples", (temple) => getDedicatedYear(temple) > 2000);
});

document.getElementById("large").addEventListener("click", (event) => {
  event.preventDefault();
  filterTemples("Large Temples", (temple) => temple.area > 90000);
});

document.getElementById("small").addEventListener("click", (event) => {
  event.preventDefault();
  filterTemples("Small Temples", (temple) => temple.area < 10000);
});

if (hamburgerButton && mainNav) {
  hamburgerButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    hamburgerButton.classList.toggle("open", isOpen);
    hamburgerButton.setAttribute("aria-expanded", String(isOpen));
  });
}

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;

displayTemples(temples);