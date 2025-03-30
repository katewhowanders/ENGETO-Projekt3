// NAVIGACE
// Ikona hamburgeru se změní na křížek - vytáhneme classu a vyměníme (vrátí se nám pole, nás zajímá index 1)
// 1. tvorba proměnných a načtení prvků z index.html
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.fa-solid');
// 2. přidání event listeneru na menuIcon
menuIcon.addEventListener('click', function () {
    if (hamburgerIcon.classList[1] === 'fa-bars') {
        hamburgerIcon.classList.add('fa-xmark');
        hamburgerIcon.classList.remove('fa-bars');
        menuList.style.display = 'block';
    }
    else {
        hamburgerIcon.classList.add('fa-bars');
        hamburgerIcon.classList.remove('fa-xmark');
        menuList.style.display = 'none';
    }
});
// LIGHT A DARK MODE
// proměnné
const switcher = document.querySelector('.switch input');
const themeText = document.querySelector('.switcher-description p');
const themeIcon = document.querySelector('.switcher-description i');

// funkce
const darkMode = () => {
    themeText.textContent = 'Dark Mode';
    themeIcon.classList.replace('fa-sun', 'fa-moon');

}

const lightMode = () => {
    themeText.textContent = 'Light Mode';
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

const switchTheme = function (event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        // zavoláme funkci pro změnu textu na Dark Mode a ikony
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
};
// Musíme zjistit, v jaké poloze je přepínač (vypnutý/zapnutý)
switcher.addEventListener('change', switchTheme);

/****************** */
// FORM
/****************** */
// Výběr vstupních prvků z html
const regForm = document.querySelector('.registration-form');
const form = document.querySelector('form');

const fullName = document.querySelector('.full-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');

// Výběr notifikace chyb
const notifName = document.querySelector('.notif-name');
const notifEmail = document.querySelector('.notif-email');
const notifPassword = document.querySelector('.notif-password');
const notifConfirmPassword = document.querySelector('.notif-confirm-password');
const paragraphText = document.querySelector('.result-text');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log('Formulář byl odeslán.');
    
    if (fullName.value === "") {
        notifName.style.display = "block"
    }

    if (email.value === "") {
        notifEmail.style.display = "block"
    }

    if (password.value === "") {
        notifPassword.style.display = "block"
    }

    if (confirmPassword.value === "") {
        notifConfirmPassword.style.display = "block"
    }
} );

password.addEventListener("input", () => {
    const password1Value = password.value
    const password2Value = confirmPassword.value
    
    if(password1Value === password2Value){
        paragraphText.textContent = 'Hesla jsou shodná'
        paragraphText.classList.add('valid')
        paragraphText.classList.remove('invalid')
    } else {
        paragraphText.textContent = 'Hesla nejsou shodná'
        paragraphText.classList.add('invalid')
        paragraphText.classList.remove('valid')
    }

    if (password1Value === '' && password2Value === '') {
        paragraphText.textContent = ''
    } 
        
})

confirmPassword.addEventListener("input", () => {
    const password1Value = password.value
    const password2Value = confirmPassword.value
    
    if(password1Value === password2Value){
        paragraphText.textContent = 'Hesla jsou shodná'
        paragraphText.classList.add('valid')
        paragraphText.classList.remove('invalid')
    } else {
        paragraphText.textContent = 'Hesla nejsou shodná'
        paragraphText.classList.add('invalid')
        paragraphText.classList.remove('valid')
    }

    if (password1Value === '' && password2Value === ''){
        paragraphText.textContent = ''
    } 
        
})


