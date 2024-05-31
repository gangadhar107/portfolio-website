// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more-link');
    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const moreContent = this.previousElementSibling;
            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                moreContent.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                moreContent.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});
