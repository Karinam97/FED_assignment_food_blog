"use strict";
menuToggler.addEventListener('click', ev => {
  mainNav.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent === "x" ? "≡" : "x";

});
