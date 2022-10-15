const currentCursor = {};

const typeOut = (phrase, target) => {

    if(currentCursor.position) {
        removeCurrentCursor();
    }

    for(let i = 0; i < phrase.length; i++) {
        setTimeout(() => {
            if(phrase[i] === " ") {
                target.innerHTML += "&nbsp;";
            } else {
                target.innerText = target.innerText + phrase[i];
            }

            if(i === phrase.length - 1) {
                toggleCursor(target);
            }
        }, randDelay(i))
    }
}

// Random delay function
const randDelay = (multiplier) => {
    let delay = (Math.random() + multiplier) * 130;
    return delay;
}

// Displays a blinking cursor
const toggleCursor = (target) => {

    let id = setInterval(() => {
        let lastCharIdx = target.innerText.length - 1;
        target.innerText[lastCharIdx] === "_" ? 
        target.innerText = target.innerText.slice(0, -1) :
        target.innerText += "_";
    }, 500)

    setCursorPosition(target, id);
}

const setCursorPosition = (target, id) => {
    currentCursor.position = target;
    currentCursor.intervalId = id;
}

const removeCurrentCursor = () => {
    clearInterval(currentCursor.intervalId);
    let target = currentCursor.position;
    let lastCharIdx = target.innerText.length - 1;
    if(target.innerText[lastCharIdx] === "_") {
        target.innerText = target.innerText.slice(0, -1);
    }
}