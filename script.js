const showDescriptions = document.querySelectorAll(".btn");
const descriptions = document.querySelectorAll(".more");

showDescriptions.forEach((showDescription, index) => {
  showDescription.addEventListener("click", () => {
    showDescription.style.display = "none";
    descriptions[index].style.display = "block";
  });
  descriptions[index].addEventListener("mouseout", () => {
    setTimeout(() => {
      showDescription.style.display = "block";
      descriptions[index].style.display = "none";
    }, 2000);
  });
});
