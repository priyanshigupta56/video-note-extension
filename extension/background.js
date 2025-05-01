chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "open_popup") {
      chrome.windows.create({
        url: "popup.html",
        type: "popup",
        width: 320,
        height: 400
      });
    }
  });
  