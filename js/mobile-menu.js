const closeMobileMenuRef = document.getElementById("close-mobile-menu");

closeMobileMenuRef.addEventListener("click", onCloseMobileMenuHandler);
document.addEventListener("keydown", closeMobileMenuEscHandler);

function onCloseMobileMenuHandler(e) {
  document.getElementById("mobile-menu").classList.toggle("hidden");
  document.removeEventListener("keydown", closeMobileMenuEscHandler);
  document.removeEventListener("click", closeMobMenuClickOutside);
}

function closeMobileMenuEscHandler(e) {
  if (e.key === "Escape") {
    document.getElementById("mobile-menu").classList.add("hidden");
    // document.removeEventListener("click", closeMobMenuClickOutside);
  }
}

export function closeMobMenuClickOutside(e) {
  console.log(e.target.classList.value);

  if (e.target.classList.value !== "mobile-menu") {
    document.getElementById("mobile-menu").classList.add("hidden");
    document.removeEventListener("keydown", closeMobileMenuEscHandler);
  }
}
