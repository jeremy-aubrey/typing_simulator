// Get target element
const testDiv = document.getElementById("box1");

// Make text appear 
const typeOut = (phrase, target) => {
    let i = 0;
    let id = setInterval(() => {
        if(i < phrase.length) {
            console.log(phrase[i]);
            target.innerText = target.innerText + phrase[i];
            i++;
        } else {
            clearInterval(id);
        }
    }, 150); 
}

// Test
let phrase = "Hello World";
typeOut(phrase, testDiv);