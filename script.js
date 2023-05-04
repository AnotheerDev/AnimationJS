    // Sélectionne l'élément HTML correspondant à l'icone Facebook
const iconeFacebook = document.querySelector("#iconeFacebook");
    // Initialise une variable pour vérifier si l'icone est en train de tourner ou non
let isRotating = false;


    // Ajoute un événement "click" à l'icone Facebook, qui va déclencher une fonction au clic
iconeFacebook.addEventListener("click", function() {
    // Ajoute ou enlève la classe CSS "animation" à l'élément HTML correspondant à l'icone Facebook
    // Utilisation de this pour faire référence à iconeFacebook
    this.classList.toggle("animation");
    // Ajoute ou enlève(avec toggle) la classe CSS "animP" à l'élément HTML qui contient le texte "Facebook"
    this.querySelector("p").classList.toggle("animP");
    // Ajoute ou enlève(avec toggle) la classe CSS "backgroundFacebook" à l'élément HTML correspondant à la section de la page
    document.querySelector("section").classList.toggle("backgroundFacebook");

    // Sélectionne l'élément HTML correspondant à l'icone de l'élément cliqué
    const icon = this.querySelector("i");
    // Ajoute une transition CSS à l'élément HTML correspondant à l'icone
    icon.style.transition = "transform 1s ease-in-out";

    // Si l'icone est en train de tourner, le faire revenir à sa position d'origine (0 degré) et mettre la variable "isRotating" à "false"
    if (isRotating) {
        icon.style.transform = "rotate(0deg)";
        isRotating = false;
        // Sinon, faire tourner l'icone à 360 degrés et mettre la variable "isRotating" à "true"
    } else {
        icon.style.transform = "rotate(360deg)";
        isRotating = true;
    }
});




const iconeTwitter = document.querySelector("#iconeTwitter");
let isRotatingTwitter = false;

iconeTwitter.addEventListener("click", function() {
    this.classList.toggle("animation");
    this.querySelector("p").classList.toggle("animP");
    document.querySelector("section").classList.toggle("backgroundTwitter");

    const icon = this.querySelector("i");
    icon.style.transition = "transform 1s ease-in-out";

    if (isRotatingTwitter) {
        icon.style.transform = "rotate(0deg)";
        isRotatingTwitter = false;
    } else {
        icon.style.transform = "rotate(360deg)";
        isRotatingTwitter = true;
    }
});




const iconeInstagram = document.querySelector("#iconeInstagram");
let isRotatingInstagram = false;

iconeInstagram.addEventListener("click", function() {
    this.classList.toggle("animation");
    this.querySelector("p").classList.toggle("animP");
    document.querySelector("section").classList.toggle("backgroundInstagram");

    const icon = this.querySelector("i");
    icon.style.transition = "transform 1s ease-in-out";

    if (isRotatingInstagram) {
        icon.style.transform = "rotate(0deg)";
        isRotatingInstagram = false;
    } else {
        icon.style.transform = "rotate(360deg)";
        isRotatingInstagram = true;
    }
});