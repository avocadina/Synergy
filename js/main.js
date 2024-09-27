// scrollAnimation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slideFromLeft');
        };
    });
});

observer.observe(document.querySelector('.cta-cooperation'));
observer.observe(document.querySelector('.cta-calculation'));

// slider

const slider = document.querySelector('.slider');
const testimonials = document.querySelector('.testimonials__list');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const sliderElement = document.querySelector('.testimonials__item');

if (slider) {
    next.addEventListener('click', () => {
        var width = 356;
        var gap = 24;
        var current = getComputedStyle(slider).marginLeft;

        const minMargin = -(parseInt(width) + parseInt(gap)) + 'px';

        slider.style.marginLeft = parseInt(current) - parseInt(gap) - parseInt(width) + 'px';

        if (slider.style.marginLeft < minMargin) {
            slider.style.marginLeft = '0px';
        }
    });

    prev.addEventListener('click', () => {
        var width = 356;
        var gap = 24;
        var current = getComputedStyle(slider).marginLeft;
        const maxMargin = 380 + 'px';
        slider.style.marginLeft = parseInt(current) + parseInt(gap) + parseInt(width) + 'px';

        if (slider.style.marginLeft >= 0 + 'px') {
            slider.style.marginLeft = '0px';

        }
    });
}