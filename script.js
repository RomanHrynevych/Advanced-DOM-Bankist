'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Scrolling from nav
const navScrolling = document.querySelector(`.nav__links`);

navScrolling.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    e.target.classList.contains('nav__link') &&
    !e.target.classList.contains('nav__link--btn')
  ) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Initializing Tabs
const operationsSection = document.querySelector(`.operations`);
const operationsButtons = document.querySelectorAll(`.operations__tab`);
const operationsTabs = document.querySelectorAll(`.operations__content`);

operationsSection.addEventListener('click', function (e) {
  e.preventDefault();
  const target = e.target.closest('.operations__tab');

  // Version after watching tutorial
  if (!target) return;
  const index = target.getAttribute('data-tab');
  operationsButtons.forEach(b => b.classList.remove('operations__tab--active'));
  operationsTabs.forEach(t =>
    t.classList.remove('operations__content--active')
  );
  target.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${index}`)
    .classList.add('operations__content--active');

  // Version before watching tutorial
  // const newActiveIndex = target.getAttribute('data-tab');
  // const currActiveIndex = document
  //   .querySelector(`.operations__tab--active`)
  //   .getAttribute('data-tab');
  // if (target.classList.contains('btn') && currActiveIndex !== newActiveIndex) {
  //   operationsButtons.children[currActiveIndex - 1].classList.remove(
  //     'operations__tab--active'
  //   );
  //   operationsButtons.children[newActiveIndex - 1].classList.add(
  //     'operations__tab--active'
  //   );
  //   operationsTabs.children[currActiveIndex - 1].classList.remove(
  //     'operations__content--active'
  //   );
  //   operationsTabs.children[newActiveIndex - 1].classList.add(
  //     'operations__content--active'
  //   );
  // }
});

///////////////////////////////////////
// Initializing nav hover effect
const header = document.querySelector(`.nav`);
const navbar = document.querySelector(`.nav__links`);
const navbarElem = document.querySelector(`.nav__item`);
const navbarElements = document.querySelectorAll(`.nav__item`);
const otherElements = [header.children[0], ...header.children[1].children];

// Version after watching tutorial
header.addEventListener('mouseover', function (e) {
  const target = e.target;
  if (target.classList.contains('nav__link')) {
    const siblings = target.closest('.nav').querySelectorAll('.nav__link');
    const logo = document.querySelector(`.nav__logo`);
    logo.style.opacity = 0.5;
    siblings.forEach(el =>
      el !== target ? (el.style.opacity = 0.5) : (el.style.opacity = 1)
    );
  }
});

header.addEventListener('mouseout', function (e) {
  const target = e.target;
  const siblings = target.closest('.nav').querySelectorAll('.nav__link');
  const logo = document.querySelector(`.nav__logo`);
  logo.style.opacity = 1;
  siblings.forEach(el => (el.style.opacity = 1));
});

// Version before watching tutorial
// navbarElements.forEach(t =>
//   t.addEventListener('mouseenter', function (e) {
//     otherElements.forEach(t => (t.style.opacity = `.5`));
//     e.target.style.opacity = `1`;
//   })
// );
// navbarElements.forEach(t =>
//   t.addEventListener('mouseout', function (e) {
//     otherElements.forEach(t => (t.style.opacity = `1`));
//   })
// );
