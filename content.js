function check_response(link, response) {
    if (response.includes("<script>\nwindow.location.href")) {
        link.style.fontSize= "20px";
        link.text = "🔵 Dropshipping 🔵";
    }
}

if (window.location.href.includes("google")) {
    document.querySelectorAll("a").forEach(link => {
        if (link.href !== "" && !link.href.includes("google")) {
            chrome.runtime.sendMessage(link.href, data => check_response(link, data)); 
        }
    });
}

function run() {
    const targetNode = document.getElementsByClassName('islrc')[0];
    const config = { attributes: true, childList: true, subtree: true };

    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'childList') {
                if (mutation.target.offsetParent.href) {
                    chrome.runtime.sendMessage(mutation.target.offsetParent.href, data => check_response(mutation.target.offsetParent, data)); 
                }
            }
        }
    };
    
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}



window.addEventListener('load', function load(e){
  window.removeEventListener('load', load, false);
  this.setTimeout(() => run(), 3000)
}, false);