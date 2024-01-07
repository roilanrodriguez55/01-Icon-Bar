const switchButton = document.querySelector(".switch-container");
const iconBar = document.querySelector(".icon-bar");

switchButton.addEventListener("click", (e) => {
  e.preventDefault();
  iconBar.classList.toggle("vertical");
  iconBar.classList.toggle("horizontal");
});
