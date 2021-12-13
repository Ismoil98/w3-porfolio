const elContentLeft = document.querySelector('.content__left');
const elSiteMobi = document.querySelector('.site__mobi');
const elSiteMobiHamburger = document.querySelector('.site__mobi--hamburger');
const elMainWrapper = document.querySelector('.main--wrapper');


function close() {
    elContentLeft.setAttribute('class','list-styled');
}

function site_bar() {
    elContentLeft.setAttribute('class', 'list-left')
    elMainWrapper.setAttribute('class', 'shadow')
}


// form
const elForm = document.querySelector('.contact__section--form');
const elInput1 = document.querySelector('.value1');
const elInput2 = document.querySelector('.value2');
const elInput3 = document.querySelector('.value3');

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    console.log("Name: " + elInput1.value.trim());
    console.log("Email: " + elInput2.value.trim());
    console.log("Message: " + elInput3.value.trim());

    elInput1.value = null;    
    elInput2.value = null;    
    elInput3.value = null;    
})