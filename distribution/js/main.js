// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}

// Multilanguage
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.langWrap>a');
const smHeadingEl = document.querySelector('.smHeading');
const navLinkHomeEl = document.getElementById('navLinkHome');
const navLinkAboutEl = document.getElementById('navLinkAbout');
const navLinkWorkEl = document.getElementById('navLinkWork');
const navLinkConEl = document.getElementById('navLinkCont');




link.forEach(el =>{
    el.addEventListener('click',() => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');


        const attr = el.getAttribute('lang');

        smHeadingEl.textContent = headingText[attr].smHeading;
        navLinkHomeEl.textContent = headingText[attr].navLinkHome;
        navLinkAboutEl.textContent = headingText[attr].navLinkAbout;
        navLinkWorkEl.textContent = headingText[attr].navLinkWork;
        navLinkConEl.textContent = headingText[attr].navLinkCont;



    });
});
var headingText = {
    'en':{
        'smHeading': 'Web Developer, Programmer, Designer & Entrepreneur',
        'navLinkHome': 'Home',
        'navLinkAbout': 'About',
        'navLinkWork': 'My Work',
        'navLinkCont': 'Contact Me'

    },
    'pl':{
        'smHeading': 'Programista Stron Internetowych, Programista, Projektant & Przedsiębiorca',
        'navLinkHome': 'Strona Główna',
        'navLinkAbout': 'O Mnie',
        'navLinkWork': 'Moja Praca',
        'navLinkCont': 'Nawiąż Kontakt Ze mną',
    }
}
