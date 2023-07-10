"use strict";
/* test to see of the pages were linked */
// $(function() {
//     alert( 'The DOM has finished loading!' );
// });


// a key map of allowed keys
let allowedKeys = {
    38: 'up',
    40: 'down',
    37: 'left',
    39: 'right',
    65: 'a',
    66: 'b',
    13: 'enter'
};

// the 'official' Konami Code sequence
let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

// a variable to remember the 'position' the user has reached so far.
let konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    let key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    let requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key === requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition === konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
    console.log(konamiCodePosition)
});

function activateCheats() {
    alert("cheats activated");
}
$(document).keyup(function(event){
    console.log(event.keyCode);
});

