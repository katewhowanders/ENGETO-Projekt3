// Ikona hamburgeru se změní na křížek - vytáhneme classu a vyměníme (vrátí se nám pole, nás zajímá index 1)

// 1. tvorba proměnných a načtení prvků z index.html
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.fa-solid');

// 2. přidání event listeneru na menuIcon

menuIcon.addEventListener('click', () => {
  if (hamburgerIcon.classList[1] === 'fa-bars') {
    hamburgerIcon.classList.add('fa-xmark');
    hamburgerIcon.classList.remove('fa-bars');
    menuList.style.display = 'block';
  } else {
    hamburgerIcon.classList.add('fa-bars');
    hamburgerIcon.classList.remove('fa-xmark');
    menuList.style.display = 'none';
  }
});

// LIGHT A DARK MODE
const switcher = document.querySelector('.switch input');
const header = document.querySelector('header');
const themeText = document.querySelector('.switcher-description p');
const themeIcon = document.querySelector('.switcher-description i');

const switchTheme = (event) => {
  console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

// Musíme zjistit, v jaké poloze je přepínač (vypnutý/zapnutý)
switcher.addEventListener('change', switchTheme);
