// Actualización del pie de página (Año y Fecha de Modificación)
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Valores estáticos tomados del HTML
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Función de una sola línea para cálculo en Sistema Métrico (°C y km/h)
const calculateWindChill = (t, w) => (13.12 + (0.6215 * t) - (11.37 * Math.pow(w, 0.16)) + (0.3965 * t * Math.pow(w, 0.16))).toFixed(1);

// Verificación de condiciones de operabilidad (Métrico: Temp <= 10 °C y Viento > 4.8 km/h)
const chillElement = document.getElementById("chill");

if (temp <= 10 && wind > 4.8) {
  chillElement.textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
  chillElement.textContent = "N/A";
}