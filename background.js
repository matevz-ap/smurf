chrome.runtime.onMessage.addListener(
    function(url, sender, onSuccess) {
        fetch(url, {method: 'GET'})
            .then(response => response.text())
            .then(responseText => onSuccess(responseText))
        return true;
    }
);

chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        "id": 13371337,
        "priority": 1,
        "action": {
            "type": "modifyHeaders",
            "requestHeaders": [
                { "header": "Referer", "operation": "set", "value": "https://www.google.com/" }
            ]
        },
        "condition": {
            "urlFilter": "*",
            "resourceTypes": ["xmlhttprequest"]
        }
    }],
})