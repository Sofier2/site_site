let left = 0;

const slideBlock = document.querySelector('.slider-block');

document.querySelector(".arrow-next").addEventListener('click', function(){ 
    left = left + 450;
    if (left > 900) {
        left = 0;
    }
   
    slideBlock.style.left = -left + 'px';

})

document.querySelector(".arrow-prev").addEventListener('click', function(){ 
    left = left - 450;
    if (left < 0) {
        left = 900;
    }
   
    slideBlock.style.left = -left + 'px';

})