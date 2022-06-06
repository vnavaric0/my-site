
let absoluteblocks = document.querySelectorAll('.absoluteblock');
absoluteblocks.forEach(element => {
    element.style.top = document.querySelector('header').offsetHeight + 1.5 + 'px';
});

window.onresize = function() {
    absoluteblocks.forEach(element => {
        element.style.top = document.querySelector('header').offsetHeight + 'px';
    });
    if (window.matchMedia('(max-width: 920px)').matches) {
        document.querySelector('.pillowsabsolute').classList.add('not-active');
    }
};

document.querySelector('.pillowsoncliock').addEventListener('click', function() {
    if (window.matchMedia('(min-width: 920px)').matches) {
        document.querySelector('.pillowsabsolute').classList.toggle('not-active');
    }
});

let aboutproductimgs = document.querySelectorAll('.imgabouts img');
aboutproductimgs.forEach(element => {
    element.addEventListener('click', event => {
        element.classList.remove('activeborder');
    });
});

const reasons = document.querySelectorAll('.reasonstobuy span')
let activeborder = document.querySelector('.product-about-right .reasonstobuy .active-border');
reasons.forEach(element => {
    
    element.addEventListener('click', function() {
        activeborder.classList.remove('active-border');
        element.classList.add('active-border');
        activeborder = element;
    })
})

function MenuBarClick(elem) {
    elem.classList.toggle('active-menu-bar')
    document.querySelector('.urls-to-sections').classList.toggle('disflex')
}
const sizeinput = document.querySelectorAll('.sizechoose input');
sizeinput.forEach(input => {
    input.addEventListener('change', function() {
        sizeinput.forEach(inp => inp.classList.remove('checked-input'))
        input.classList.add('checked-input');
        document.querySelector('.choosen-size').textContent = document.querySelector('.checked-input + label').textContent;
    });
});

 document.querySelectorAll('.questask').forEach(quest => {
    // alert(quest.querySelector('.question-text'))
     quest.querySelector('.question-text').addEventListener('click', function() {
        quest.querySelector('.answer-text').classList.toggle('not-active');

     });
 });
