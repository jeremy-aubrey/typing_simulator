// Get target element
const testDiv = document.getElementById("box1");

const typeOut = (phrase, target) => {
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
    setInterval(() => {
        let lastCharacterIndex = target.innerText.length - 1;
        target.innerText[lastCharacterIndex] === "_" ? 
        target.innerText = target.innerText.slice(0, -1) :
        target.innerText += "_";
    }, 500)
}

// Test
let phrase = "Hello World, my name is Jeremy";
typeOut(phrase, testDiv);