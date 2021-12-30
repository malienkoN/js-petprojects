const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clearActiveClasses(slides);

        slide.classList.add('active');
    });
});

function clearActiveClasses(arr) {
    arr.forEach(el => {
        el.classList.remove('active');
    });
}