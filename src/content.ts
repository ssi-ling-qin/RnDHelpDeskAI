window.onload = () => {
    // inject ui helper
    injectHelperUI();

};

function injectHelperUI(){
    let AIWidget =  document.createElement('div');
    AIWidget.className = "dynt-helpdesk-widget";
    document.querySelector("body").appendChild(AIWidget);
    let AIWidgetWrapper =  document.createElement('div');
    AIWidgetWrapper.className = "dynt-helpdesk-widget-wrapper";
    AIWidget.appendChild(AIWidgetWrapper);
    let widgetTrigger =  document.createElement('div');
    widgetTrigger.className = "dynt-helpdesk-widget-trigger";
    AIWidgetWrapper.appendChild(widgetTrigger);      
    let widgetTriggerIcon =  document.createElement('span');
    widgetTriggerIcon.className = "dynt-helpdesk-widget-trigger-icon open";
    widgetTrigger.appendChild(widgetTriggerIcon);
    widgetTriggerIcon.appendChild(document.createTextNode("?")); 
    //create close btn in svg format test change
    var triggerCloseBtn = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    triggerCloseBtn.className = "dynt-helpdesk-widget-trigger-icon close"; 
    // my new changes
}

chrome.runtime.onMessage.addListener((request, sender, resp) => {
    console.log('request', request);
    //console.log('sender', sender);
    //console.log('response', resp());
    if (request.hasOwnProperty('widgetToState') && request.widgetToState){
        document.querySelector(".dynt-helpdesk-widget-wrapper").className += " active";
    }
});

function checkWidgetSetting() {
    chrome.storage.local.get(['helpdeskWidgetStateOn'], (result) => {
        //console.log("result",result);
         if(result.helpdeskWidgetStateOn){
            var widgetSwitch = document.querySelector(".dynt-helpdesk-widget-switch");
         };
    });

    
}