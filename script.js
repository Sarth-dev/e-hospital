let hamburger = document.querySelector('.hamburger');
let navlinks = documnet.getElementById('nav-links');
let links = document.querySelectorAll('.links');

hamburger.addEventListener('click',() =>{
    navlinks.classList.toggle('hide');
    hamburger.classList.toggle('lines-rotate');
});

for (let i=0;i<links.length;i++){
    links[i].addEventListener('click',() => {
        navlinks.classList.toggle('hide');
    });
}