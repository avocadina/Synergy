// scrollAnimation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slideFromLeft');
        };
    });
});

observer.observe(document.querySelector('.cta-cooperation'));
