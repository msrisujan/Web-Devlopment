document.querySelectorAll(".jelly-letters>span").forEach((element) => {
    element.addEventListener("mouseover", (e) => jiggle(e.target));
});

function jiggle(letter) {
    if (!letter.classList.contains("jiggle")) {
        letter.classList.remove("pop");
        letter.classList.remove("abo");
        letter.classList.add("jiggle");
        setTimeout(
            function () {
                letter.classList.remove("jiggle");
            },
            1000
        );
    }
}

const popping = document.querySelectorAll('.abo');
window.addEventListener('scroll', () => {
    popping.forEach(pop => {
        if (pop.getBoundingClientRect().top < (window.innerHeight) && pop.classList.contains('abo')) {
            pop.classList.add('pop');
        }
    });
});
const skills = document.querySelectorAll('.skills');
window.addEventListener('scroll', () => {
    skills.forEach(pop => {
        if (pop.getBoundingClientRect().top < (window.innerHeight/4*3) ) {
            pop.classList.add('skill');
            pop.classList.add('skills1');
        }
    });
});
const soc = document.querySelectorAll('.soc');
window.addEventListener('scroll', () => {
    soc.forEach(pop => {
        if (pop.getBoundingClientRect().top < (window.innerHeight/4*3) ) {
            pop.classList.add('con');
            pop.classList.add('soc1');
        }
    });
});
const details = document.querySelectorAll('.details');
window.addEventListener('scroll', () => {
    details.forEach(pop => {
        if (pop.getBoundingClientRect().top < (window.innerHeight/4*3) ) {
            pop.classList.add('about');
            pop.classList.add('details1');
        }
    });
});
const sliding = document.querySelectorAll('.sk');
window.addEventListener('scroll', () => {
    sliding.forEach(slideup => {
        if (slideup.getBoundingClientRect().top < (window.innerHeight/4*3)) {
            slideup.classList.add('slideup');
        }
    });
});

jQuery(document).ready(function($) {
      var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 992) {
          $('.details').addClass('about');
        } 
        if (ww < 992) {
            $('.sk').addClass('slideup');
          }
      };
      $(window).resize(function(){
        alterClass();
      });
      alterClass();
    });


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// const colors = [
//   "#08fdd8",
//   "#00fade",
//   "#00f8e3",
//   "#00f5e8",
//   "#00f2ec",
//   "#00eff0",
//   "#00ecf3",
//   "#0ee9f5",
// ];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
//   circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
