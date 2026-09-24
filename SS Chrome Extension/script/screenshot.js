function setScreenshotUrl(url) {
    document.getElementById('target').src = url;
}

// Ask the background service worker for the screenshot taken for this tab.
const screenshotId = new URLSearchParams(location.search).get('id');
chrome.runtime.sendMessage({ type: 'getScreenshot', id: screenshotId }, (response) => {
    if (chrome.runtime.lastError || !response || !response.screenshotUrl) {
        document.getElementById('target').alt = 'Screenshot not available. Click the extension icon again to take a new one.';
        return;
    }
    setScreenshotUrl(response.screenshotUrl);
});

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