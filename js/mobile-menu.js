const closeMobileMenuRef = document.getElementById("close-mobile-menu");

closeMobileMenuRef.addEventListener("click", onCloseMobileMenuHandler);
document.addEventListener("keydown", closeMobileMenuEscHandler);

function onCloseMobileMenuHandler(e) {
  document.getElementById("mobile-menu").classList.remove("transform");
  document.removeEventListener("keydown", closeMobileMenuEscHandler);
}

function closeMobileMenuEscHandler(e) {
  if (e.key === "Escape") {
    document.getElementById("mobile-menu").classList.remove("transform");
  }
}

// export function closeMobMenuClickOutside(e) {
//   console.log(e.target.classList.value);

//   if (
//     e.target.classList.value === "mobile-menu" ||
//     e.target.classList.value === "mobile-menu__item" ||
//     e.target.classList.value === "mobile-menu__container"
//   ) {

//     return;
//   }
//   document.getElementById("mobile-menu").classList.add("hidden");
//   document.removeEventListener("keydown", closeMobileMenuEscHandler);
// }
