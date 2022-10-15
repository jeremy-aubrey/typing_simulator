// Test

const type1 = document.getElementById("type1");
const phrase1 = "Hello World...";

const type2 = document.getElementById("type2");
const phrase2 = "My name is Jeremy"
const phrase3 = ", and I'm a web developer"

setTimeout(() => {
    typeOut(phrase1, type1)
}, 1000)

setTimeout(() => {
    typeOut(phrase2, type2)
}, 4000)

setTimeout(() => {
    typeOut(phrase3, type2)
}, 8000)

setTimeout(() => {
    clearText(type1, type2)
}, 15000)