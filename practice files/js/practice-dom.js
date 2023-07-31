/*
* its easier if you declare stuff as a const, declare everything as a const so that way you dont have to write complicated code , makes it easier to write
*
*
*
*
*
*
*
*
*
*
*/






//////////////////////////////////const
//2.
const body = document.querySelector('body')
const problem2zBtn = document.querySelector('#problem-2-btn')
const problem2Input = document.querySelector('#problem-2-input')
//5.
const problem5P = document.querySelector('#problem-5-p')
//6.
const problem6PInput = document.querySelector('#problem-6-input')
const problem6Span = document.querySelector('#problem-6-span')
//8.
const h4List = document.querySelectorAll('h4')
//------------------------------------------------------------------------------------
const ddList = document.querySelectorAll('dd')
const ddButton = document.querySelector('#btn1')


//////////////////////////////////functions
//2.
function problem2() {
    body.style.backgroundColor = problem2Input.value;
}
//5.
function problem5() {
    problem5P.classList.toggle('problem-5-color')
}
//6.
function problem6() {
    problem6Span.innerText = problem6PInput.value
}
//8.
function problem8 (){
    for(let h4 of h4List){
        h4.classList.toggle('problem-8-color')
    }
}
//-------------------------------------------------------------------------------------
function listener(){
    for(let ddElement of ddList){
        ddElement.classList.toggle('invisible') /// ask steve why can you can put this here and it works? i thought you could only do calling of classes or ids?
    }
}

//////////////////////////////////event listeners

problem2zBtn.addEventListener('click', problem2);

problem5P.addEventListener('dblclick', problem5)

problem6PInput.addEventListener('keyup',problem6)

for(let h4 of h4List){
    h4.addEventListener('click', problem8)
}
//-------------------------------------------------------------------------------------
ddButton.addEventListener('click', listener)
