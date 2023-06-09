"use strict";

// https://developer.mozilla.org/en-US/docs/Web/Events

// ==========================  Simple Example

// When a user clicks the test button, log "test" in the console. (with pre-built function or anon function)
const testBtn= document.getElementById('test-btn');
testBtn.addEventListener('mousedown', () =>{
    console.log('test');
});

// remove event listener

// testBtn.removeEventListener("click", logTest);
// testBtn.removeEventListener('mousedown',);


// ==========================  Register Additional Events

/* When a cursor hovers over the h1, change the text color, font-family, and make larger.

    1.  target the node
    2.  add event listener for mouseover event to target
    3.  in listener change styling for paragraph

 */
const h1= document.getElementsByTagName('h1')[0];
function changeStyle(){
    h1.style.color ='red';
    h1.style.fontFamily ='fantasy';
    h1.style.fontSize = '10em';
}
h1.addEventListener('mouseover', changeStyle);

// When double-clicking the restore text button, make the h1 font size 2em
const textBtn = document.getElementById('shrink-btn');

textBtn.addEventListener('dblclick', () =>{
    h1.style.fontSize ='2em';
    h1.style['color']= 'blue';
});
//you could change the eventlistener to restore to normal font size with just one click instead of two aka "dblclick", you would just write "click" instead

// ==========================  Event Object

// document.addEventListener('click',(e) => {
//     console.log(e);
// });

// document.addEventListener("click", (e) => {
//    console.log(e);
// });






//this is changing the color of the background color of the site, below
document.addEventListener("click", (e) => {

   let red = e.screenX % 256;
   let green = e.screenY % 256;
   let blue = "ff";

   console.log(e.screenX);
   console.log(e.screenY);

   red = red.toString(16);
   green = green.toString(16);

   document.body.style['background-color'] = "#" + red + green + blue;

});

// ==========================  Keyboard Events and Prevent Default

document.addEventListener("keypress", (e) => {
    console.log(e.code);
    if (e.code === "Space") {
        alert('HELLO!');
        // e.preventDefault();
    }
});


// ==========================  e.target

// *** see additional example