document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav a");
    const revealElements = document.querySelectorAll(".reveal");

    // Sticky header appearance
    const updateHeader = () => {
        header.classList.toggle("scrolled", window.scrollY > 20);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    // Mobile navigation
    hamburger.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });

    // Reveal animation
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    // Active nav section
    const sections = document.querySelectorAll("main section[id]");

    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const id = entry.target.getAttribute("id");

                navLinks.forEach((link) => {
                    const target = link.getAttribute("href");
                    link.classList.toggle("active", target === `#${id}`);
                });
            });
        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0
        }
    );

    sections.forEach((section) => navObserver.observe(section));
});
