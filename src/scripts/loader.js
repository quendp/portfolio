const loaderWrapper = document.getElementById("loaderWrapper");
const loaderContainer = document.getElementById("loaderContainer");
const loaderBefore = document.getElementById("loaderBefore");
const loaderAfter = document.getElementById("loaderAfter");
const loaderText = document.getElementById("loaderText");
const loaderBar = document.getElementById("loaderBar");
const loaderPercent = document.getElementById("loaderPercent");
const loaderSub = document.getElementById("loaderSub");


let percentValue = 1;
let documentLoaded = false;
const loadScreen = () => {
    loaderSub.style.maxWidth = "12.9rem"
    setTimeout(() => {
        loaderText.style.opacity = "1";
        loaderText.style.transform = "translateY(0)";  
    }, 500);
    setTimeout(() => {
        loaderSub.style.opacity = "1";
    }, 1500);
    setTimeout(() => {
        let percentInterval = setInterval(() => {
            if (percentValue == 100) {
                clearInterval(percentInterval);
                if (documentLoaded){
                    exitLoader();
                };
            } else {
                loaderBar.style.width = percentValue + "%";
                loaderPercent.textContent = percentValue;
                percentValue++;
            };
        }, 50);
    }, 2000);
};

const exitLoader = () => {
    loaderBar.style.width = "100%";
    loaderPercent.textContent = "100";
    loaderText.style.transform = "translateY(5rem)";
    setTimeout(() => {
        loaderText.textContent = "Welcome to my portfolio.";
        loaderText.style.transform = "translateY(0)";
    }, 500);
    setTimeout(() => {
        loaderText.style.transform = "translateY(5rem)";
    }, 2000);
    setTimeout(() => {
        loaderBefore.style.transition = "width 800ms ease-in-out";
        loaderAfter.style.transition = "width 800ms ease-in-out";
        loaderBefore.style.width = "50%";
        loaderAfter.style.width = "50%";
        loaderWrapper.style.clipPath = "circle(100%)";
    }, 2500);
    setTimeout(() => {
        loaderWrapper.style.transition = "all 1000ms ease-in-out";
        loaderWrapper.style.clipPath = "circle(3%)";
    }, 3000);
    
};

window.addEventListener("DOMContentLoaded", (event) => {
    documentLoaded = true;
    console.log(documentLoaded)
    if (percentValue == 100) {
        exitLoader();
    }
});

loadScreen();