document.addEventListener("DOMContentLoaded", function() {
    const publications = document.querySelectorAll('.publication');
    const modal = document.getElementById('publicationModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthors = document.getElementById('modalAuthors');
    const modalDOI = document.getElementById('modalDOI');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.querySelector('.close');

    publications.forEach(publication => {
        publication.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const authors = this.getAttribute('data-authors');
            const doi = this.getAttribute('data-doi');
            const description = this.getAttribute('data-description');
            const image = this.getAttribute('data-image');

            modalTitle.textContent = title;
            modalAuthors.textContent = authors;
            modalDOI.textContent = doi;
            modalDOI.href = doi;
            modalDescription.textContent = description;
            modalImage.src = image;

            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

