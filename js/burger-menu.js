import { closeMobMenuClickOutside } from "./mobile-menu.js";

const burgerMenuRef = document.querySelector(".header__menu-burger");

burgerMenuRef.addEventListener("click", onBurgerClickHandler);

function onBurgerClickHandler(e) {
  e.preventDefault();
  console.log(569);
  document.getElementById("mobile-menu").classList.remove("hidden");
  //   document.addEventListener("click", closeMobMenuClickOutside);
}
