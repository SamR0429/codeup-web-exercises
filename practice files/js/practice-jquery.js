/* test to see of the pages were linked */
// $(function() {
//     alert( 'The DOM has finished loading!' );
// });

$('#codeup').click(function(e) {
    alert('h1 with the id of "codeup" was double clicked!');
});


// function changeToPointer(e) {
//     $(e.target).css('cursor', 'pointer');
// }
//
// function changeFromPointer(e) {
//     $(e.target).css('cursor', 'default');
// }
//
// $('h2')
//     .on('mouseenter', changeToPointer)
//     .on('mouseleave', changeFromPointer);

$('h2').hover(
    function() {
        $(this).css('background-color', 'blue');
    },
    function() {
        $(this).css('background-color', 'white');
    }
);

// $('p').dblclick(
//     function(){
//         $(this).css('font-size', 120);
//     },
//     function(){
//         $(this).css('font-size', 'default');
//     }
// );

/* this work cause its kinda like a loop , if you double-click it makes the font bigger , if it is already in the 120px size then it puts it back to the original size. the top code is what you wrote*/
$('p').dblclick(function() {
    if ($(this).css('font-size') === '120px') {
        $(this).css('font-size', 'initial');
    } else {
        $(this).css('font-size', '120px');
    }
});
$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);
/* if you forget to how to read this go back to the konami html and js*/
let allowedKeys ={
    83: 's',
    65: 'a',
    77: 'm',
    13: 'enter'
};
let secrectCode = [ 's','a','m','enter'];
let secrectCodePosition = 0;
 document.addEventListener('keydown', function (e) {
     let key = allowedKeys[e.keyCode];
     let requiredKey = secrectCode[secrectCodePosition];
     if (key === requiredKey) {
         secrectCodePosition++;
     if(secrectCodePosition === secrectCode.length){
         activateCheats();
         secrectCodePosition = 0;
     }
 }else{
     secrectCodePosition = 0;
 }
console.log(secrectCodePosition)
});
function activateCheats() {
    alert("that's my name dont wear it out");
}
$(document).keyup(function(event){
    console.log(event.keyCode);
});


