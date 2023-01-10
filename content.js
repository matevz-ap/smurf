function check_response(link, response) {
    if (response.includes("<script>\nwindow.location.href")) {
        link.style.fontSize= "20px";
        link.text = "DROPSHIPPING";
    }
}

if (window.location.href.includes("google")) {
    document.querySelectorAll("a").forEach(link => {
        if (link.href !== "" && !link.href.includes("google")) {
            chrome.runtime.sendMessage(link.href, data => check_response(link, data)); 
        }
    });
}

