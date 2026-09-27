document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav a");
    const revealElements = document.querySelectorAll(".reveal");
    const sections = document.querySelectorAll("main section[id]");

    // Sticky header appearance
    const updateHeader = () => {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 20);
        }
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    // Mobile navigation
    if (hamburger && navMenu) {
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
    }

    // Reveal animation.
    // If IntersectionObserver is unavailable, show everything immediately.
    if ("IntersectionObserver" in window) {
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
                threshold: 0.08,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach((element) => revealObserver.observe(element));
    } else {
        revealElements.forEach((element) => element.classList.add("visible"));
    }

    // Safety fallback: never leave the page invisible if an observer fails.
    window.setTimeout(() => {
        revealElements.forEach((element) => element.classList.add("visible"));
    }, 1200);

    // Active nav section
    if ("IntersectionObserver" in window && sections.length > 0) {
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
    }
});
