// Test
const box1 = document.getElementById("box1");
let phrase1 = "Hello World, my name is Jeremy...";

const box2 = document.getElementById("box2");
let phrase2 = "and I'm a web developer...";

box1.addEventListener('click', function() {
    console.log(this);
    typeOut(phrase1, this);
})

box2.addEventListener('click', function() {
    console.log(this);
    typeOut(phrase2, this);
})