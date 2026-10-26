const intro = document.getElementById("intro");
const mainContent = document.getElementById("main-content");


// Tunggu sampai animasi intro selesai

setTimeout(() => {

    // Hilangkan intro
    intro.style.opacity = "0";

    // Tampilkan website utama
    setTimeout(() => {

        intro.style.display = "none";

        mainContent.style.opacity = "1";

    }, 1000);

}, 5000);
//mmm
const intro = document.getElementById("intro");
const mainContent = document.getElementById("main-content");
const enterBtn = document.getElementById("enterBtn");
const bgMusic = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {

    // Putar musik
    bgMusic.play();

    // Hilangkan opening
    intro.style.opacity = "0";

    // Tampilkan halaman utama
    setTimeout(() => {

        intro.style.display = "none";
        mainContent.style.opacity = "1";

    }, 1000);

});

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const bgMusic = document.getElementById("bgMusic");
const home = document.getElementById("home");

enterBtn.addEventListener("click", () => {

    // Mulai musik
    bgMusic.play();

    // Hilangkan intro
    intro.style.opacity = "0";

    // Munculkan menu utama
    home.style.opacity = "1";

    // Hapus intro setelah animasi selesai
    setTimeout(() => {
        intro.style.display = "none";
    }, 1000);

});