const switchButton = document.querySelector(".switch-container");
const iconBar = document.querySelector(".icon-bar");

switchButton.addEventListener("click", () => {
  iconBar.classList.toggle("vertical");
  iconBar.classList.toggle("horizontal");
});
