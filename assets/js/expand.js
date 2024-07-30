document.addEventListener("DOMContentLoaded", function() {
    const publications = document.querySelectorAll('.publication');

    publications.forEach(publication => {
        publication.addEventListener('click', function() {
            const fullDescription = this.querySelector('.full-description');
            const description = this.getAttribute('data-description');

            if (this.classList.contains('expanded')) {
                this.classList.remove('expanded');
                fullDescription.textContent = '';
            } else {
                this.classList.add('expanded');
                fullDescription.textContent = description;
            }
        });
    });
});
