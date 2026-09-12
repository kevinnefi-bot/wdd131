// Actualización dinámica de fechas en el footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Funcionalidad del menú hamburguesa
const mainNav = document.querySelector('nav');
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  hamburgerButton.classList.toggle('open');
});