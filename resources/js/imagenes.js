const fulImgBox = document.getElementById("fulImgBox"),
    fulImg = document.getElementById("fulImg");

function openFulImg(reference) {
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg() {
    fulImgBox.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector('.cerrar-imagen').addEventListener('click', function () {

        window.location.href = "/resources/html/escritorio.html"
    })

    document.querySelector('.cerrar-video').addEventListener('click', function () {
        console.log("entró")
        window.location.href = "/resources/html/escritorio.html"
    })
})