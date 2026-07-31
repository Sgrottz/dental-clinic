$(document).ready(function()  {
    $("#mobile_btn").on("click", function() {
        $("#mobile_menu").toggleClass("active");
        $(this).find("i")
        .toggleClass("fa-bars")
        .toggleClass("fa-times");
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 110;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.service', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_img', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#contact_info', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('#contact_form', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

}); 

emailjs.init({
    publicKey: "aPDuC2qL_oy-Zjmwh",
});

document.getElementById("contact_form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    const serviceID = "service_nsc6yb9";
    const templateID = "template_6refqwq";
    const submitButton = document.getElementById("submit_button");
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;
    emailjs.send(serviceID,templateID, formData)
    .then(()=> {
        Toastify({
            text: "E-mail enviado com sucesso!",

            style: {
                background: "#28a745",
                color: "#f4f4f4"
            },
        }).showToast();
    })
    .catch((error) => {
        Toastify({

            text: "Erro ao enviar o e-mail!",
            style: {
                background: "#dc3545",
                color: "#f4f4f4"
            },
        }).showToast();
    })
    .finally(() => {
        submitButton.textContent = "Enviar mensagem";
        submitButton.disabled = false;
    })
});