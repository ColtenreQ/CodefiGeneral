// Exercise 1

const ex1div = document.querySelector('.exercise1div');
ex1div.style.backgroundColor = "lightblue";

const ex1p = document.querySelectorAll('p');
for (const p of ex1p) {
    console.log(p.innerText);
}



// Exercise 2
/* This exercise is within dom.html */



//Exercise 3
/* This exercise is within multiple_buttons.html */



//Exercise 4
const newButton = document.createElement('button');
const ex4div = document.querySelector('.exercise4div');

newButton.textContent = "Click me";
ex4div.appendChild(newButton);



//Exercise 5
const input = document.querySelector('#textInput');
const display = document.querySelector('#textDisplay');

input.addEventListener('input', logInput);

function logInput() {
    console.log(input.value);
    display.innerHTML = input.value;
}



// Exercise 6
const uList = document.querySelector("#itemList")
const items = [
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'}
];

for (const item of items) {
    const lItem = document.createElement('li');
    lItem.textContent = item.name;
    uList.appendChild(lItem);
}