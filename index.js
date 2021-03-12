let hblinks = document.querySelectorAll(".hamburger-item");
let checkbox = document.getElementById("hamburger-checkbox");

function closeHamburgerMenu(event) {
  checkbox.checked = false;
}

hblinks.forEach(function (button) {
  button.addEventListener("click", () => {
    closeHamburgerMenu();
  });
});
