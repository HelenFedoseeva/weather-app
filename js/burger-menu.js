const burgerMenuRef = document.querySelector(".header__menu-burger");

burgerMenuRef.addEventListener("click", onBurgerClickHandler);

function onBurgerClickHandler(e) {
  e.preventDefault();

  console.log("burger click");
}
