var colorImages = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg",
    "images/img10.jpg",
    "images/img11.jpg",
    "images/img12.jpg"

];

var bwImages = [
    "images-black-white/img1.jpg",
    "images-black-white/img2.jpg",
    "images-black-white/img3.jpg",
    "images-black-white/img4.jpg",
    "images-black-white/img5.jpg",
    "images-black-white/img6.jpg",
    "images-black-white/img7.jpg",
    "images-black-white/img8.jpg",
    "images-black-white/img9.jpg",
    "images-black-white/img10.jpg",
    "images-black-white/img11.jpg",
    "images-black-white/img12.jpg"

];

function loadGallery(images, galleryClass) {
    var gallery = document.querySelector("." + galleryClass);
    gallery.innerHTML = ""; 

    images.forEach(function(imgSrc) {
        var imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = "image";
        imgElement.onclick = function() {
            openImg(imgSrc);
        };
        gallery.appendChild(imgElement);
    });
}

function showGallery(type) {
    var colorGallery = document.querySelector(".color-img-gallery");
    var bwGallery = document.querySelector(".bw-img-gallery");

    if (type === "color") {
        colorGallery.style.display = "block";
        bwGallery.style.display = "none";
        loadGallery(colorImages, "color-img-gallery");
    } else if (type === "bw") {
        colorGallery.style.display = "none";
        bwGallery.style.display = "block";
        loadGallery(bwImages, "bw-img-gallery");
    }
}

function openImg(imgSrc) {
    var fullimgs = document.getElementById("fullimgs");
    var fullimg = document.getElementById("fullimg");
    fullimgs.style.display = "flex";
    fullimg.src = imgSrc;
}

function closeImg() {
    var fullimgs = document.getElementById("fullimgs");
    fullimgs.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    showGallery("color");
});
