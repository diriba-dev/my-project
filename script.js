document.addEventListener("DOMContentLoaded", function() {

    const images = document.querySelectorAll(".gallery-item img");
    const viewer = document.getElementById("imageViewer");
    const fullImage = document.getElementById("fullImage");

    const closeBtn = document.getElementById("closeViewer");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let currentIndex = 0;

    function openImage(index) {
        currentIndex = index;
        fullImage.src = images[currentIndex].src;
        viewer.style.display = "flex";
    }

    images.forEach(function(image, index) {
        image.addEventListener("click", function() {
            openImage(index);
        });
    });

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        fullImage.src = images[currentIndex].src;
    });

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        fullImage.src = images[currentIndex].src;
    });

    closeBtn.addEventListener("click", function() {
        viewer.style.display = "none";
    });

});











const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "251927387648";

    const text =
        "Hello DIRIBA STUDIO!" +
        "\nName: " + name +
        "\nEmail: " + email +
        "\nPhone: " + phone +
        "\nMessage: " + message;

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(text);

    window.open(whatsappURL, "_blank");

});