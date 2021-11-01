let navbarHeight = document.getElementById('nb').offsetHeight;
let firstSectionWrapper = document.getElementById('first-section-wrapper');
let onepixel = 1;
let rowFullHeight = document.getElementById('row-full-height');
firstSectionWrapper.style.height = window.innerHeight - navbarHeight - onepixel + 'px';
rowFullHeight.style.height = firstSectionWrapper.style.height;