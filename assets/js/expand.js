document.addEventListener("DOMContentLoaded", function() {
    const publications = document.querySelectorAll('.publication');

    publications.forEach(publication => {
        publication.addEventListener('click', function() {
            const description = this.querySelector('.description');
            const fullDescription = this.getAttribute('data-description');

            if (this.classList.contains('expanded')) {
                this.classList.remove('expanded');
                description.textContent = description.textContent.split(' ').slice(0, 20).join(' ') + '...'; // Truncate to initial state
            } else {
                this.classList.add('expanded');
                description.textContent = fullDescription;
            }
        });
    });
});
