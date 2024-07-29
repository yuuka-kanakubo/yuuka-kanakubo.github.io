document.addEventListener("DOMContentLoaded", function() {
    const publications = document.querySelectorAll('.publication');

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

    publications.forEach(publication => {
        observer.observe(publication);
    });
});
