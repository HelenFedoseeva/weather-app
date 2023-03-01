const burgerMenuRef = document.querySelector(".header__menu-burger");

burgerMenuRef.addEventListener("click", onBurgerClickHandler);

function onBurgerClickHandler(e) {
  document.getElementById("mobile-menu").classList.toggle("transform");
}
