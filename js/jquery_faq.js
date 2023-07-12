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
const dtElements =document.querySelectorAll('dt');
dtElements.forEach((dtElement) =>{
    dtElement.addEventListener('click', () =>{
        dtElement.classList.toggle('highlight');
    });
});
/*
youre going to need .last
maybe a loop to go through each ul list and get the last one
have a yellow background when it finds it
need to go down from the parent (ul) down to the child (li) then from there select the last of the children use .last
  */
const ulParent = document.getElementsByTagName('ul');
let listener1 = function (event){
    for (let ulElement of ulParent){
        const lastLiChild = ulElement.lastElementChild
        lastLiChild.classList.toggle('highlight');
        // ulElement.classList.toggle('highlight');
    }
}
document.getElementById('btn3').addEventListener('click', listener1);

/* ===================================================================================== */
const ulLists = document.getElementsByTagName("ul");

let listener2 = function (event) {
    for(let ulElement of ulLists) {
        ulElement.classList.toggle('bold');
    }
}
document.getElementById('btn4').addEventListener('click', listener2);


// this needs .first somewhere in here to select the first li not every single one
// const liElements =document.querySelectorAll('li');
// liElements.forEach((liElement) =>{
//     liElement.addEventListener('click', () =>{
//         liElement.classList.toggle('blue');
//     });
// });

/*
this doesnt need a loop? cause each one is independent of the next h3
maybe needs something to do with .siblings ? for sure needs .first
 */

const liElements = document.getElementsByTagName('li');

for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener('click', function(event) {
        const parentUl = this.parentNode;
        const firstLi = parentUl.querySelector('li:first-child');
        firstLi.style.color = 'blue';
    });
}


const allPhotosContainer =document.querySelector('.container');
const swapButtons = document.querySelectorAll('.swap-btn');

function handleSwapClick(e){
    const clickButton = e.target;
    const swapImageDiv = clickButton.parentElement;
    if(singleImageDiv === allPhotosContainer.firstElementChild){
        swapLeftTwoPhots();
    }
    else if(singleImageDiv === allPhotosContainer.lastElementChild){
        swapRightTwoPhotos();
    }
    else{
        Math.random() < 0.5 ? swapLeftTwoPhots() : swapRightTwoPhotos();
    }
}
function swapLeftTwoPhotos(){
    const leftPhoto = allPhotosContainer.querySelector('div:first-child img');
    const middlePhoto = allPhotosContainer.querySelector('div:nth-child(2) img');
    const tempPhotoSrc = leftPhoto.src;

    leftPhoto.src=middlePhoto.src;
    middlePhoto.src=tempPhotoSrc;
}
function swapRightTwoPhotos(){
    const rightPhoto = allPhotosContainer.querySelector('div:first-child img');
    const middlePhoto = allPhotosContainer.querySelector('div:nth-child(2) img');
    const tempPhotoSrc = rightPhoto.src;

    rightPhoto.src=middlePhoto.src;
    middlePhoto.src=tempPhotoSrc;
}


swapButtons.forEach((swapButton) => {
    swapButton.addEventListener('click', handleSwapClick);
});