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

const sliding = document.querySelectorAll('.sk');
window.addEventListener('scroll', () => {
    sliding.forEach(slideup => {
        if (slideup.getBoundingClientRect().top < (window.innerHeight/4*3)) {
            slideup.classList.add('slideup');
        }
    });
});

const sliding2 = document.querySelectorAll('.profile-pic');
window.addEventListener('scroll', () => {
    sliding2.forEach(slideup => {
        if (slideup.getBoundingClientRect().top < (window.innerHeight/4*3)) {
            slideup.classList.add('slideright');
        }
    });
});

const sliding3 = document.querySelectorAll('.sk1');
window.addEventListener('scroll', () => {
    sliding3.forEach(slideup => {
        if (slideup.getBoundingClientRect().top < (window.innerHeight/4*3)) {
            slideup.classList.add('slideleft');
        }
    });
});
const sliding4 = document.querySelectorAll('.sk2');
window.addEventListener('scroll', () => {
    sliding4.forEach(slideup => {
        if (slideup.getBoundingClientRect().top < (window.innerHeight/4*3)) {
            slideup.classList.add('slideleft');
        }
    });
});

jQuery(document).ready(function($) {
      var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 992) {
          $('.abo').addClass('pop');
        } 
        if (ww < 992) {
            $('.sk').addClass('slideup');
            $('.sk1').addClass('slideleft');
            $('.sk2').addClass('slideleft');
            $('.profile-pic').addClass('slideright');
          }
      };
      $(window).resize(function(){
        alterClass();
      });
      alterClass();
    });


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
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

var html = document.querySelector('.html');
var css = document.querySelector('.css3');
var javascript = document.querySelector('.javascript');
var git = document.querySelector('.git');
var bootstrap = document.querySelector('.bootstrap');
var github = document.querySelector('.github');
var c = document.querySelector('.c');
var python = document.querySelector('.python');
var oracle = document.querySelector('.oracle');
var jquery = document.querySelector('.jquery');
var vscode = document.querySelector('.vscode');



    var elems = [css, html, javascript, git, github, vscode, c, python, oracle, bootstrap, jquery];

    var counter = 0;

    function removeClass () {

        if (counter < elems.length) {
            elems[counter].classList.remove('hidden');
            counter++;
            setTimeout(removeClass, 1300)
        } else {
           addClass();
        }
    }

    function addClass () {
      for(var i = 0; i < elems.length; i++) {
        elems[i].classList.add('hidden');
      }
    }

removeClass();

setInterval(function(){
  
  counter = 0;
  removeClass();
  
}, 14700)