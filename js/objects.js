// MINI EXERCISE
// const sam = {
//     vision: "shit",
//     height:"short",
//     ethnicty:"hispanic"
// };
// console.log(sam.vision);
// console.log(sam.height);
// console.log(sam.ethnicty);


/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */
// const person = {
//     firstName: "sam",
//     lastName: "ramos"
// };
// console.log(person.firstName)
// console.log(person.lastName)
//
//
/*
another way is to have your code all on one line
const person ={ firstName: "sam", lastname: "ramos"};
 */
/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */
// function sayHello(name){
//     // console.log("Hello, " + name);
//     return "Hello, " + name;
// }
// sayHello()

// person.sayHello= function (){
//     return `hello from ${this.firstName} ${this.lastName}`;
// }


//another way
// const person= {
//     firstName: "sam",
//     lastName: "ramos",
//     sayHello
//     return `hello from ${this.firstName} ${this.lastName}`;
//
// }
//
// console.log(person.sayHello());


/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */


// const shoppers= [
//     {name: 'Cameron', amount: 180},
//     {name: 'Ryan', amount: 250},
//     {name: 'George', amount: 320}
// ];
//
// shoppers.forEach((shopper) => {
//     console.log(`${shopper.name}spent ${shopper.amount}.${shopper.amount > 200 ? shopper.amount * 0.88: shopper.amount}`)
//
//     if(shopper.amount > 200){
//         console.log(`${shopper.name}spent ${shopper.amount}. you got the discount. your new total is: ${shopper.amount * 0.88).tofixed(2)}
//
//
// })
/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */
// let books =[
//     {
//         title:"The Salmon of Doubt",
//         author: {
//             FN: "Douglas",
//             LN: "Adams"
//         }
//     },
//     {
//        title:"To Kill A Mockingbird",
//        author: {
//            FN: "Harper",
//            LN: "Lee"
//        }
//     },
//     {
//        title:"Pride and Prejudice",
//        author: {
//            FN: "George",
//            LN: "Orwell"
//        }
//     },
//     {
//       title:"Lessons in Chemistry",
//       author: {
//           FN: "Bonnie",
//           LN: "Garmus"
//       }
//     },
//     {
//       title:"The Catcher in the Rye",
//       author: {
//           FN: "J.D",
//           LN: "Salinger"
//       }
//     }
// ]
//
// console.log(books[0].title); // "The Salmon of Doubt"
// console.log(books[0].author.FN); // "Douglas"
// console.log(books[0].author.LN); // "Adams"
// console.log(books[1].title);
// console.log(books[1].author.FN);
// console.log(books[1].author.LN);
// console.log(books[2].title);
// console.log(books[2].author.FN);
// console.log(books[2].author.LN);
// console.log(books[3].title);
// console.log(books[3].author.FN);
// console.log(books[3].author.LN);
// console.log(books[4].title);
// console.log(books[4].author.FN);
// console.log(books[4].author.LN);


/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */
//     books.forEach((book,index) =>{
//         console.log(`book #${index + 1}`);
//         console.log(`title: ${book.title}`)
//         console.log(`author: ${book.author.FN} ${book.author.LN}`);
//         if(index < books.length - 1)
//         console.log("---");
// })


/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */
