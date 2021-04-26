chrome.runtime.onInstalled.addListener(function () {
    console.log('rnd help desk request helper have been successfully installed!');
    chrome.storage.local.set({ helpdeskWidgetStateOn: false }, function () {
        console.log("local storage set");
    });
});
//# sourceMappingURL=background.js.map