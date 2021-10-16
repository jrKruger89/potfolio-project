/**
 * Toggle mewnu for mobile devices
 */
const burger = document.querySelector(".burger");
const navlist = document.querySelector(".nav-list");
const open = document.querySelector(".open");

let toggleMenu = () => {
  burger.classList.toggle("open");

  if (burger.classList.contains("open")) {
    navlist.style.left = "0px";
  } else {
    navlist.style.left = "-150px";
  }
};
