/**
 * Burger menu
 */

const BURGER_WIDTH = 1440; // px

// Burger menu elements
const burgerMenu = document.querySelector('.navigation__burger');
const menu = document.querySelector('.navigation__menu');
const overlay = document.querySelector('.page__overlay');
const menuLinks = document.querySelectorAll('.navigation__link');

// Toggle burger menu
burgerMenu.addEventListener('click', function () {
  this.classList.toggle('navigation_burger_active');
  menu.classList.toggle('navigation_menu_active');
  overlay.classList.toggle('page_overlay_active');
});

// Close forms and menu
function closeForms() {
  burgerMenu.classList.remove('navigation_burger_active');
  menu.classList.remove('navigation_menu_active');
  overlay.classList.remove('page_overlay_active');
}

// Close forms on window resize
function closeFormsOnResize() {
  if (window.innerWidth > BURGER_WIDTH) {
    closeForms();
  }
}

// Close menu when clicking outside
overlay.addEventListener('click', function () {
  closeForms();
});

// Close forms on Escape key
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeForms();
  }
});

function initMenu() {
  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // e.preventDefault();
      closeForms();
    });
  });
}

initMenu();
