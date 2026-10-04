document.addEventListener("DOMContentLoaded", () => {
  // Track and increment review count in localStorage
  let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
  numReviews++;
  window.localStorage.setItem("numReviews-ls", numReviews);

  const countDisplay = document.getElementById("review-count");
  if (countDisplay) {
    countDisplay.textContent = numReviews;
  }

  // Footer dates
  const currentYearSpan = document.getElementById("currentyear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedP = document.getElementById("lastModified");
  if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
  }
});
