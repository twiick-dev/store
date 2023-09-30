let navbar=document.querySelector('.navbar');

let navbarProductList=document.getElementsByClassName('navbar-product-list');

let navbarMen=document.querySelector('#navbarMen');
let navbarWomen=document.querySelector('#navbarWomen');
let navbarEquipment=document.querySelector('#navbarEquipment');

navbarMen.addEventListener("mouseover", (event) => {
    navbar.classList.add('light-yellow')
    navbarProductList[0].classList.add('light-yellow')
});
navbarMen.addEventListener("mouseout", (event) => {
    navbar.classList.remove('light-yellow')
    navbarProductList[0].classList.remove('light-yellow')
});

navbarWomen.addEventListener("mouseover", (event) => {
    navbar.classList.add('olive-green')
    navbarProductList[1].classList.add('olive-green')
});
navbarWomen.addEventListener("mouseout", (event) => {
    navbar.classList.remove('olive-green')
    navbarProductList[1].classList.remove('olive-green')
});

navbarEquipment.addEventListener("mouseover", (event) => {
    navbar.classList.add('dark-green')
    navbarProductList[2].classList.add('dark-green')
});
navbarEquipment.addEventListener("mouseout", (event) => {
    navbar.classList.remove('dark-green')
    navbarProductList[2].classList.remove('dark-green')
});