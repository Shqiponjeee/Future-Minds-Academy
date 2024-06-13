
const defaultTitle = document.title;
const defaultFavicon = getFaviconHref();

let intervalId = null;
let currentNotification = null;

function startNotification(text, notificationFaviconPath) {

    endNotification();


    currentNotification = text;


    intervalId = setInterval(() => {
        if (document.title === defaultTitle) {
            document.title = text;
            setFavicon(notificationFaviconPath);
        } else {
            document.title = defaultTitle;
            setFavicon(defaultFavicon);
        }
    }, 1000);
}
function endNotification() {

    clearInterval(intervalId);

    document.title = defaultTitle;
    setFavicon(defaultFavicon);


    currentNotification = null;
}

function getFaviconHref() {
    const faviconElement = document.querySelector('link[rel="icon"]');
    return faviconElement ? faviconElement.getAttribute('href') : null;
}


function setFavicon(href) {
    const faviconElement = document.querySelector('link[rel="icon"]');
    if (faviconElement) {
        faviconElement.setAttribute('href', href);
    } else {

        const newFaviconElement = document.createElement('link');
        newFaviconElement.rel = 'icon';
        newFaviconElement.href = href;
        document.head.appendChild(newFaviconElement);
    }
}


