document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        });


        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }


    /* =========================
       REVEAL ANIMATION
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =========================
       BACK TO TOP
    ========================= */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        const handleScroll = () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        };


        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );


        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-links a");


    if (
        sections.length > 0 &&
        navItems.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            const currentId =
                                entry.target.getAttribute("id");


                            navItems.forEach(link => {

                                link.classList.remove("active");

                                const href =
                                    link.getAttribute("href");


                                if (
                                    href ===
                                    `#${currentId}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            });

                        }

                    });

                },
                {
                    rootMargin:
                        "-30% 0px -60% 0px"
                }
            );


        sections.forEach(section => {

            sectionObserver.observe(section);

        });

    }


    /* =========================
       ESCAPE KEY
    ========================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (navLinks && menuToggle) {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }

    });


    /* =========================
       EXTERNAL LINKS
    ========================= */

    document
        .querySelectorAll('a[target="_blank"]')
        .forEach(link => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });


    /* =========================
       CURRENT YEAR
    ========================= */

    const year =
        document.querySelector("#year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =========================
       CONSOLE
    ========================= */

    console.log(
        "👋 Welcome to Ankita Pradhan's Portfolio!"
    );

    console.log(
        "Python Developer | Django | DRF | React.js | SQL"
    );

});