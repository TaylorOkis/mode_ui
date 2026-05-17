const menu = document.querySelector("#main");
const footer = document.querySelector("#footer");
const hamMenu = document.querySelector(".topnav__ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const topNavOverlay = document.querySelector(".topnav__overlay");
const topNavLinks = document.querySelector(".topnav__links");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  topNavOverlay.classList.toggle("active");

  if (offScreenMenu.classList.contains("active")) {
    bodyScrollLockUpgrade.disableBodyScroll(offScreenMenu);
  } else {
    bodyScrollLockUpgrade.enableBodyScroll(offScreenMenu);
  }
});
