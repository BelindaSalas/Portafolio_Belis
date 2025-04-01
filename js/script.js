document.addEventListener("DOMContentLoaded", function() {
    console.log("Portafolio cargado");

    // Agregar funcionalidad de navegación suave
    document.querySelectorAll(".nav__list a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Agregar funcionalidad a los iconos de redes sociales
    const socialLinks = {
        facebook: "https://www.facebook.com/tuusuario",
        instagram: "https://www.instagram.com/tuusuario",
        linkedin: "https://www.linkedin.com/in/tuusuario",
        github: "https://github.com/tuusuario"
    };

    document.querySelectorAll(".social-icon").forEach(icon => {
        icon.addEventListener("click", function() {
            const platform = this.getAttribute("data-platform");
            if (socialLinks[platform]) {
                window.open(socialLinks[platform], "_blank");
            }
        });
    });
});
