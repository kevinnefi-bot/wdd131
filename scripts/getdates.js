// Set the current year in the footer span
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set the last modified date in the footer paragraph
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;