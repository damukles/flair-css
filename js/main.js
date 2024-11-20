document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.accordion').forEach((accordion) => {
        accordion.querySelectorAll('.accordion-header').forEach((header) => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const isActive = header.classList.contains('active');
                // Close all accordion items
                accordion
                    .querySelectorAll('.accordion-header')
                    .forEach((h) => h.classList.remove('active'));
                accordion
                    .querySelectorAll('.accordion-content')
                    .forEach((c) => c.classList.remove('active'));

                // Open the clicked accordion item if it was not already active
                if (!isActive) {
                    header.classList.add('active');
                    content.classList.add('active');
                }
            });
        });
    });
});
