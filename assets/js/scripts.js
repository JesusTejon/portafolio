document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.card, #presentacion, #contacto');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 0.8s ease";
        observer.observe(el);
    });
});
