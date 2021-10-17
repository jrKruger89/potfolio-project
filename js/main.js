/**
 * Toggle mewnu for mobile devices
 */
const burger = document.querySelector(".burger");
const navlist = document.querySelector(".nav-list");
const open = document.querySelector(".open");
const main = document.querySelector("main");

let toggleMenu = () => {
  burger.classList.toggle("open");

  if (burger.classList.contains("open")) {
    navlist.style.left = "0px";
    main.classList.add("blur");
  } else {
    navlist.style.left = "-200px";
    main.classList.remove("blur");
  }
};
