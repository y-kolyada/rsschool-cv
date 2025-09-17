/**
 * Burger menu
 */

const BURGER_WIDTH = 768; // px
const HIGHLIGHT_TIMEOUT = 1000; // ms

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

// Close forms on window resize > BURGER_WIDTH
window.onresize = closeFormsOnResize;

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


/**
 * Navigation highlighting
 */

function initHighlighting() {
  const navLinks = document.querySelectorAll('.navigation__link');
  let currentHighlight = null;
  let isHighlightedFromClick = false;

  // Function to remove highlight
  function removeHighlight() {
    if (currentHighlight && !isHighlightedFromClick) {
      currentHighlight.classList.remove('highlight');
      currentHighlight = null;
    }

    // Reset the flag after timeout
    if (isHighlightedFromClick) {
      setTimeout(() => {
        isHighlightedFromClick = false;
      }, HIGHLIGHT_TIMEOUT);
    }
  }

  // window.addEventListener('scroll', removeHighlight);

  // Add click listeners to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      let targetHeading = document.querySelector(`h2#${targetId}`);

      if (currentHighlight) {
        currentHighlight.classList.remove('highlight');
      }

      if (targetHeading) {
        targetHeading.classList.add('highlight');
        currentHighlight = targetHeading;

        isHighlightedFromClick = true;
      }
    });
  });
}


function main () {
  initMenu();
  initHighlighting();
}

main();
