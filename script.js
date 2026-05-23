const mediaItems = [
    // INDEX PAGE
    { type: "image", src: "images/work1.jpeg" },
    { type: "video", src: "images/workvc.mp4" },
    { type: "image", src: "images/work2.jpeg" },

    // GALLERY PAGE
    { type: "image", src: "images/work3.jpeg" },
    { type: "image", src: "images/work5.jpeg" },
    { type: "image", src: "images/work6.jpeg" },
    { type: "image", src: "images/work7.jpeg" },
    { type: "image", src: "images/work8.jpeg" },
    { type: "image", src: "images/work9.jpeg" },
    { type: "image", src: "images/work4.jpeg" },
    { type: "image", src: "images/work11.jpeg" }
];

let currentIndex = 0;

function openPopup(index) {
    currentIndex = index;
    showMedia();

    document.getElementById("popup").style.display = "flex";
}

function showMedia() {

    const img = document.getElementById("popup-img");
    const video = document.getElementById("popup-video");
    const videoSource = document.getElementById("popup-video-source");

    const item = mediaItems[currentIndex];

    // reset
    img.style.display = "none";
    video.style.display = "none";

    video.pause();

    // IMAGE
    if (item.type === "image") {

        img.src = item.src;
        img.style.display = "block";
    }

    // VIDEO
    else {

        videoSource.src = item.src;

        video.load();

        video.style.display = "block";

        video.play();
    }
}

function changeMedia(step) {

    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = mediaItems.length - 1;
    }

    if (currentIndex >= mediaItems.length) {
        currentIndex = 0;
    }

    showMedia();
}

function closePopup() {

    document.getElementById("popup").style.display = "none";

    const video =
        document.getElementById("popup-video");

    video.pause();
}