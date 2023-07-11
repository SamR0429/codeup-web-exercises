// $(function() {
//     alert( 'The DOM has finished loading!' );
// });

//jquery
// $('body').append(`
//     <a href="#"> toggle invisibility</a>
// `);
// $('a').on('click',() =>{
//     $('dd').toggleClass('invisible');
// });

//js
const ddList = document.getElementsByTagName("dd"); //declaring the dd and targeting it through out the document, and were telling it that it's a tag and what that tag is called so it can find it

let listener = function (event) {                   //starting the function
    // alert('You clicked the button!');
    for(let ddElement of ddList) {          //a for loop so that way we can tell it to target each element of that list, and keep doing it till it gets tot the end and while going through the list making the invisible
        ddElement.classList.toggle('invisible');
    }
}
document.getElementById('btn1').addEventListener('click', listener); //this is telling the function to have an event listener and execute once clicked

/*
do the const
get the class by name
write the code to make it disappear
add event listener ? to show when to execute code
and maybe a loop to have it revert back if already clicked
 */




/* BONUS */
//jquery
// $('dt').click(
//     function() {
//     if ($(this).css('background-color') === 'yellow') {
//         $(this).css('background-color', 'initial');
//     } else {
//         $(this).css('background-color', 'yellow');
//     }
// });

//vanilla js
// const dtElements =document.querySelectorAll('dt');
// dtElements.forEach((dtElement) =>{
//     dtElement.addEventListener('click', () =>{
//         dtElement.classList.toggle('highlight');
//     });
// });
