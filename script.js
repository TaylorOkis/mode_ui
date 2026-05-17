const menu = document.querySelector("#main");
const footer = document.querySelector("#footer");
const hamMenu = document.querySelector(".topnav__ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const topNavOverlay = document.querySelector(".topnav__overlay");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  topNavOverlay.classList.toggle("active");
  bodyScrollLockUpgrade.disableBodyScroll(offScreenMenu);
});
