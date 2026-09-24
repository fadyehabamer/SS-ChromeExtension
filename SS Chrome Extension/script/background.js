// Screenshots waiting to be picked up by the viewer tab, keyed by id.
// A Manifest V3 service worker cannot reach into extension pages the way
// chrome.extension.getViews() did in MV2, so the viewer page asks for its
// image with chrome.runtime.sendMessage() once it has loaded.
const pendingScreenshots = new Map();
let id = 100;

chrome.action.onClicked.addListener(async (tab) => {
    let screenshotUrl;
    try {
        // The activeTab permission granted by clicking the action allows this capture.
        screenshotUrl = await chrome.tabs.captureVisibleTab(tab.windowId, { format: "png" });
    } catch (error) {
        // e.g. chrome:// pages and the Chrome Web Store cannot be captured.
        console.error("Could not capture the visible tab:", error);
        return;
    }
    const screenshotId = String(id++);
    pendingScreenshots.set(screenshotId, screenshotUrl);
    await chrome.tabs.create({ url: chrome.runtime.getURL("screenshot.html?id=" + screenshotId) });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (!message || message.type !== "getScreenshot") {
        return;
    }
    const screenshotUrl = pendingScreenshots.get(message.id) || null;
    pendingScreenshots.delete(message.id);
    sendResponse({ screenshotUrl });
});

