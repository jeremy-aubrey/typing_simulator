// Get target element
const testDiv = document.getElementById("box1");

const typeOut = (phrase, target) => {
    for(let i = 0; i < phrase.length; i++) {
        setTimeout(() => {
            if(phrase[i] === " ") {
                target.innerHTML += "&nbsp;";
            }
            target.innerText = target.innerText + phrase[i];
        }, randDelay(i))
        // target.innerText = target.innerText + phrase[i];
    }
}

// Random delay function
const randDelay = (multiplier) => {
    let delay = (Math.random() + multiplier) * 75;
    console.log(delay);
    return delay;
}

// Test
let phrase = "Hello World, finally this thing is working...";
typeOut(phrase, testDiv);