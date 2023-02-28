const burgerMenuRef = document.querySelector(".header__menu-burger");

burgerMenuRef.addEventListener("click", onBurgerClickHandler);

function onBurgerClickHandler(e) {
  e.preventDefault();

  document.getElementById("mobile-menu").classList.toggle("hidden");
}
