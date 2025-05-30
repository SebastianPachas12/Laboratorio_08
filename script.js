document.addEventListener("DOMContentLoaded", () => {
    // MENÚ HAMBURGUESA RESPONSIVE
    const toggleMenu = document.querySelector("#menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggleMenu && navLinks) {
        toggleMenu.addEventListener("click", () => {
            navLinks.classList.toggle("activo");
        });
    }

    // CERRAR MENÚ AL HACER CLICK EN UN ENLACE (MÓVIL)
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("activo")) {
                navLinks.classList.remove("activo");
            }
        });
    });

    // CÓDIGO DE CATALOGO: FILTRADO Y BÚSQUEDA
    const filtroCategoria = document.getElementById("filtro-categoria");
    const inputBusqueda = document.getElementById("busqueda-juego");
    const juegosGrid = document.querySelector(".juegos-grid");

    if (filtroCategoria && inputBusqueda && juegosGrid) {
        function filtrarJuegos() {
            const categoria = filtroCategoria.value.toLowerCase();
            const busqueda = inputBusqueda.value.toLowerCase();

            const juegos = juegosGrid.querySelectorAll(".juego");
            juegos.forEach(juego => {
                const titulo = juego.querySelector("h3").textContent.toLowerCase();
                const juegoCategoria = juego.getAttribute("data-categoria").toLowerCase();

                const coincideCategoria = categoria === "todas" || juegoCategoria === categoria;
                const coincideBusqueda = titulo.includes(busqueda);

                if (coincideCategoria && coincideBusqueda) {
                    juego.style.display = "";
                } else {
                    juego.style.display = "none";
                }
            });
        }

        filtroCategoria.addEventListener("change", filtrarJuegos);
        inputBusqueda.addEventListener("input", filtrarJuegos);
    }
});
