const menu = document.querySelector(".menu"),
mopen = document.querySelector(".mopen"),
mclose = document.querySelector(".mclose"),
blackB = document.querySelector(".blackB"),
serBtn = document.querySelector(".serBtn"),
options = document.querySelector(".options");
btns = document.querySelector(".btns");

var slides = document.querySelectorAll(".slide");
var btnn = document.querySelectorAll(".btnn");
let currentSlide = 1;

var manualNav = function(manual){
slides.forEach((slide) => {
slide.classList.remove('active');
btnn.forEach((btn)=> {
btn.classList.remove('active');
});
});

    slides[manual].classList.add('active');
    btnn[manual].classList.add('active');
}

btnn.forEach((btn, i) => {
   btn.addEventListener ("click", ()=> {
    manualNav(i);
    currentSlide = i;
   });
});

var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;
    var repeater = ()=> {
        setTimeout(function() {
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
            
          })


            slides[i].classList.add('active');
            btnn[i].classList.add('active');
            i++;

           if (slides.length == i) {
            i = 0;
           }
            
           if (i >= slides.length) {
            return;
           }
           repeater();
        }, 10000);
    } 
    repeater();
}
repeat();


mopen.onclick = function x(){
    menu.style.right="0";
    menu.style.top="0";
    blackB.style.right="0";
    blackB.style.top="0";
}
mclose.onclick = e=>{
    menu.style.right="-100%";
    blackB.style.right="-100%";
}
blackB.onclick = e=>{
    menu.style.right="-100%";
    blackB.style.right="-100%";
}
btns.onclick = e=>{
    menu.style.right="-100%";
    blackB.style.right="-100%";
}


// serBtn.onclick = s=>{
//         options.style.visibility="visible";
// }
