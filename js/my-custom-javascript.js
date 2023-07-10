"use strict";

// $(function() {
//
//     // INSERT JAVASCRIPT CODE SAMPLE HERE
//
// });


//SELECTORS EXERCISE
/* you wrote these */
// $(function() {
//     alert( 'The DOM has finished loading!' );
// });
// $("li").css("fontSize", 20);

//EVENTS EXERCISE
// $("h1").ready(function(){
//     $("h1").on({
//         click: function(){
//             $(this).css("background-color", "gray");
//         }
//     });
// });

// $("p").ready(function() {
//     $("p").on({
//         dblclick: function(){
//             $(this).css("fontSize", 20);
//         }
//     });
// });
/* this was the walk through */
$('h1').on('click' ,(e) => {
    $(e.target).css('background' , 'gray');
});

$('p').on('dblclick' , (e) => {
    $(e.target).css('fontSize' , 18);
});
/* these could be combined */
$('li').on('mouseenter' , (e) => {
    $(e.target).css('color' , 'red');
});
$('li').on('mouseleave' , (e) => {
    $(e.target).css('color' , 'black');
});