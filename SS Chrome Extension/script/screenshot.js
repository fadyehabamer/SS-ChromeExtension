function setScreenshotUrl(url) {
    document.getElementById('target').src = url;
}


window.onload = function () {
    modal.style.display = "block";
}
var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}