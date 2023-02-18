const loaderWrapper = document.getElementById("loaderWrapper");
const loaderBefore = document.getElementById("loaderBefore");
const loaderAfter = document.getElementById("loaderAfter");
const loaderText = document.getElementById("loaderText");
const loaderTextSub = document.getElementById("loaderTextSub");
const loaderBar = document.getElementById("loaderBar");
const loaderPercent = document.getElementById("loaderPercent");
const loaderSub = document.getElementById("loaderSub");

let percentValue = 1;
let documentLoaded = false;

window.addEventListener("DOMContentLoaded", (event) => {
    documentLoaded = true;
});

const isLoaded = () => {
    let loadInterval = setInterval(() => {
    if (documentLoaded){
            exitLoader();
            clearInterval(loadInterval);
        } else if (percentValue < 100) {
            loaderBar.style.width = percentValue + "%";
            loaderPercent.textContent = percentValue;
            percentValue++;
        }
    }, 500);
};

const percentAnimation = (interval, limit) => {
    let percentInterval = setInterval(() => {
        if (percentValue > limit) {
            clearInterval(percentInterval);
        } else {
            loaderBar.style.width = percentValue + "%";
            loaderPercent.textContent = percentValue;
            percentValue++;
        }
    }, interval);
};

function animationDelay(time){
    return new Promise ((resolve) => {
        setTimeout(resolve, time);
    })
}

async function animateLoader() {
    try {
        await animationDelay(500)
        loaderSub.style.maxWidth = "12.9rem"
        loaderText.style.opacity = "1"
        loaderText.style.transform = "translateY(0)"

        await animationDelay(1000)
        loaderSub.style.opacity = "1"

        await animationDelay(500)
        percentAnimation(30, 75)

        await animationDelay(2300)
        isLoaded()

    } catch(err){
        console.log(err);
    }
}

async function exitLoader () {
    try {
        await animationDelay(0)
        percentAnimation(80, 100)

        await animationDelay(2000)
        loaderText.style.transform = "translateY(5rem)"

        await animationDelay(500)
        loaderText.textContent = "Welcome to my portfolio."
        loaderText.style.transform = "translateY(0)"

        await animationDelay(500)
        loaderSub.style.opacity = "0"

        await animationDelay(500)
        loaderTextSub.style.overflow = "visible"
        loaderText.style.transform = "translateY(2rem)"

        await animationDelay(2000)
        loaderBefore.style.transition = "width 800ms ease-in-out"
        loaderAfter.style.transition = "width 800ms ease-in-out"
        loaderBefore.style.width = "50%"
        loaderAfter.style.width = "50%"
        loaderWrapper.style.clipPath = "circle(100%)"

        await animationDelay(500)
        loaderWrapper.style.transition = "all 1000ms ease-in-out"
        loaderWrapper.style.clipPath = "circle(3%)"
    } catch(err) {
        console.log(err)
    }
};

animateLoader();