document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<span>↑</span>';
    backToTopButton.setAttribute('id', 'backToTop');
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Add hover effect
    backToTopButton.addEventListener('mouseenter', () => {
        backToTopButton.style.animation = 'flicker 2s forwards';
    });

    // Remove hover effect
    backToTopButton.addEventListener('mouseleave', () => {
        backToTopButton.style.animation = 'none';
        // Reset opacity after animation ends
        setTimeout(() => {
            backToTopButton.style.opacity = '0.3';
        }, 0);
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});