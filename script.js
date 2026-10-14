// =====================================
// MENÚ PARA CELULAR
// =====================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


// Cerrar menú al hacer clic en un enlace

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


// =====================================
// FILTRO DE CATEGORÍAS
// =====================================

const categories = document.querySelectorAll(".category");
const products = document.querySelectorAll(".product");

categories.forEach(category => {

    category.addEventListener("click", () => {

        // Quitar active
        categories.forEach(button => {
            button.classList.remove("active");
        });

        // Activar botón seleccionado
        category.classList.add("active");

        const selectedCategory =
            category.getAttribute("data-category");

        products.forEach(product => {

            const productCategory =
                product.getAttribute("data-category");

            if (
                selectedCategory === "todos" ||
                selectedCategory === productCategory
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});


// =====================================
// MODAL DE RESERVA
// =====================================

const modal = document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const selectedService =
    document.getElementById("selectedService");

const reserveButtons =
    document.querySelectorAll(".reserve-btn");


// Servicio seleccionado
let currentService = "";


// Abrir modal
reserveButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentService =
            button.getAttribute("data-service");

        selectedService.textContent =
            currentService;

        modal.classList.add("show");

    });

});


// Cerrar modal
closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


// Cerrar haciendo clic fuera
modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


// =====================================
// ENVIAR RESERVA A WHATSAPP
// =====================================

const sendWhatsapp =
    document.getElementById("sendWhatsapp");

sendWhatsapp.addEventListener("click", () => {

    const name =
        document.getElementById("clientName").value.trim();

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;


    // Validación
    if (!name) {

        alert("Por favor, escribe tu nombre.");

        return;

    }

    if (!date) {

        alert("Por favor, selecciona una fecha.");

        return;

    }

    if (!time) {

        alert("Por favor, selecciona una hora.");

        return;

    }


    // Convertir fecha
    const dateObject = new Date(date + "T00:00:00");

    const formattedDate =
        dateObject.toLocaleDateString("es-BO", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });


    // Crear mensaje
    const message =
        `Hola Belleza Studio %0A%0A` +
        `Quiero reservar una cita.%0A%0A` +
        ` Nombre: ${name}%0A` +
        ` Servicio: ${currentService}%0A` +
        ` Fecha: ${formattedDate}%0A` +
        ` Hora: ${time}%0A%0A` +
        `¿Podrían confirmarme la disponibilidad?`;


    // Número de WhatsApp
    const phone = "59171058439";


    // Crear URL
    const whatsappURL =
        `https://wa.me/${phone}?text=${message}`;


    // Abrir WhatsApp
    window.open(
        whatsappURL,
        "_blank"
    );


    // Cerrar modal
    modal.classList.remove("show");

});