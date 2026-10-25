
const allPhotos = document.querySelectorAll(".pic");

const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const check5 = document.getElementById("check5");
const check6 = document.getElementById("check6");

function filterPhotos(category) {
    allPhotos.forEach(function (photo) {

        if (
            category === "all" ||
            photo.classList.contains(category)
        ) {
            photo.style.display = "block";
        } else {
            photo.style.display = "none";
        }

    });
}

check1.addEventListener("change", function () {
    filterPhotos("all");
});

check2.addEventListener("change", function () {
    filterPhotos("nature");
});

check3.addEventListener("change", function () {
    filterPhotos("asthetic");
});

check4.addEventListener("change", function () {
    filterPhotos("quotes");
});

check5.addEventListener("change", function () {
    filterPhotos("calligraphy");
});

check6.addEventListener("change", function () {
    filterPhotos("art");
});

check7.addEventListener("change", function () {
    filterPhotos("cartoon");
});

check8.addEventListener("change", function () {
    filterPhotos("notes");
});


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

allPhotos.forEach(function (photo) {
    const image = photo.querySelector("img");

    image.addEventListener("click", function () {
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt || "Gallery image";
        lightbox.classList.add("show");
    });
});

closeLightbox.addEventListener("click", function () {
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }
});
