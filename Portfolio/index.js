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
