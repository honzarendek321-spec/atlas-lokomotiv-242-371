
document.addEventListener("DOMContentLoaded", () => {
    const nahled = document.getElementById("nahled");
    const velkyObrazek =
        document.getElementById("velky-obrazek");
    const zavrit = document.getElementById("zavrit");

    if (!nahled || !velkyObrazek || !zavrit) {
        return;
    }

    const fotografie =
        document.querySelectorAll(".galerie-obrazek");

    function zavriNahled() {
        nahled.hidden = true;
        velkyObrazek.removeAttribute("src");
    }

    fotografie.forEach((foto) => {
        foto.addEventListener("click", () => {
            velkyObrazek.src = foto.src;
            velkyObrazek.alt = foto.alt;
            nahled.hidden = false;
            zavrit.focus();
        });
    });

    zavrit.addEventListener("click", zavriNahled);

    nahled.addEventListener("click", (udalost) => {
        if (udalost.target === nahled) {
            zavriNahled();
        }
    });

    document.addEventListener("keydown", (udalost) => {
        if (udalost.key === "Escape" && !nahled.hidden) {
            zavriNahled();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const tlacitka = document.querySelectorAll("[data-filtr]");
    const fotky = document.querySelectorAll(
        ".galerie figure[data-rada]"
    );

    tlacitka.forEach((tlacitko) => {
        tlacitko.addEventListener("click", () => {
            const filtr = tlacitko.dataset.filtr;

            fotky.forEach((foto) => {
                foto.hidden =
                    filtr !== "vse" &&
                    foto.dataset.rada !== filtr;
            });

            tlacitka.forEach((btn) => {
                btn.classList.toggle(
                    "aktivni",
                    btn === tlacitko
                );
            });
        });
    });
});
