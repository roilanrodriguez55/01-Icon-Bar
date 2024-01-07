const switchButton = document.querySelector(".switch-container button");
const iconBar = document.querySelector(".icon-bar");

switchButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  iconBar.classList.toggle("vertical");
  iconBar.classList.toggle("horizontal");
});
