var widgetSwitch = document.getElementById("widgetState");

// When the button is clicked,toggle widget status
widgetSwitch.addEventListener("click", async () => {
    
    var widgetToState = document.getElementById("widgetState").checked;
    storeSetting(widgetToState);
    // Here I pass the message to the content script with the actual content being the result of the variable scenrioId.
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {widgetToState:widgetToState})
    });

});

function storeSetting(widgetToState) {
    let setting = {helpdeskWidgetStateOn:widgetToState};
    chrome.storage.local.set(setting, () => {
      console.log('stored', setting);
      
    });
  }
