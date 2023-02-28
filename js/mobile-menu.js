const closeMobileMenuRef = document.getElementById("close-mobile-menu");

closeMobileMenuRef.addEventListener("click", onCloseMobileMenuHandler);

function onCloseMobileMenuHandler(e) {
  document.getElementById("mobile-menu").classList.toggle("hidden");
}
