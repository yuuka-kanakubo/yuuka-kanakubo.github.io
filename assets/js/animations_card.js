document.addEventListener("DOMContentLoaded", function() {
    const presentations = document.querySelectorAll('.presentation-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    presentations.forEach(presentation => {
        observer.observe(presentation);
    });
});

