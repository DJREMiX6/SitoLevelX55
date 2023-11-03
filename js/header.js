const HOME_FILE_NAME = "index.html";

(() => {
    startup()
})()

function startup() {
    setHeaderBackButtonLinkBehaviour()
}

function setHeaderBackButtonLinkBehaviour() {
    if(!isPathInIndex()) {
        const backButtonLinkElement = document.querySelector(".lvlx-header-back-button-link");
        backButtonLinkElement.addEventListener("click", goBackOnPage)
        backButtonLinkElement.classList.add("visible")
    }
}

function getLastPathNameSection() {
    return window.location.pathname.split('/');
}

function isPathInIndex() {
    const pathnameSections = getLastPathNameSection()
    return pathnameSections[pathnameSections.length - 1] == HOME_FILE_NAME
}

function goBackOnPage() {
    history.back();
}