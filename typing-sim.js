const currentCursor = [];

const typeOut = (phrase, target) => {

    if(currentCursor[0]) {
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
        let lastCharIndex = target.innerText.length - 1;
        target.innerText[lastCharIndex] === "_" ? 
        target.innerText = target.innerText.slice(0, -1) :
        target.innerText += "_";
    }, 500)

    setCursorPosition(target, id);
}

const setCursorPosition = (target, id) => {
    currentCursor[0] = target;
    currentCursor[1] = id;
}

const removeCurrentCursor = () => {
    clearInterval(currentCursor[1]);
    let target = currentCursor[0];
    let lastCharIndex = target.innerText.length - 1;
    if(target.innerText[lastCharIndex] === "_") {
        target.innerText = target.innerText.slice(0, -1);
    }
}