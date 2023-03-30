$(window).on("load",function(){
    $(".loader").fadeOut(5000);
});

const leftboxes = document.querySelectorAll('.box1');
window.addEventListener('scroll', () => {
    leftboxes.forEach(leftbox => {
        if (leftbox.getBoundingClientRect().top < (window.innerHeight/5*4)) {
            leftbox.classList.add('slide1');
            leftbox.classList.add('backeffect');
        }
    });
});

const topboxes = document.querySelectorAll('.box2');
window.addEventListener('scroll', () => {
    topboxes.forEach(topbox => {
        if (topbox.getBoundingClientRect().top < (window.innerHeight/5*4)) {
            topbox.classList.add('slide2');
            topbox.classList.add('backeffect');
        }
    });
});

const bottomboxes = document.querySelectorAll('.box3');
window.addEventListener('scroll', () => {
    bottomboxes.forEach(bottombox => {
        if (bottombox.getBoundingClientRect().top < (window.innerHeight)) {
            bottombox.classList.add('slide3');
            bottombox.classList.add('backeffect');
        }
    });
});

const rightboxes = document.querySelectorAll('.box4');
window.addEventListener('scroll', () => {
    rightboxes.forEach(rightbox => {
        if (rightbox.getBoundingClientRect().top < (window.innerHeight/5*4)) {
            rightbox.classList.add('slide4');
            rightbox.classList.add('backeffect');
        }
    });
});


var cursor= document.querySelector(".cursor");
var cursor2= document.querySelector(".cursor2");
document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: "+e.clientX+"px; top: "+e.clientY+"px;";
});

cursorscale=document.querySelectorAll("h3,.team-heading,i,.nav-link");
cursorscale.forEach(link => {
    link.addEventListener("mouseover", () => {
        cursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
    });
});


const crew = document.querySelectorAll('.team-heading');
window.addEventListener('scroll', () => {
    crew.forEach(leftbox => {
        if (leftbox.getBoundingClientRect().top < (window.innerHeight)) {
            leftbox.classList.add('crew-animation');
        }
    });
});