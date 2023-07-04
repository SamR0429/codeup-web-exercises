//1.
// const students = [
//     {
//         name: 'Alice',
//         age: 18,
//         grade: 'A'
//     },
//     {
//         name: 'Bob',
//         age: 17,
//         grade: 'B'
//     },
//     {
//         name: 'Charlie',
//         age: 19,
//         grade: 'A'
//     },
//     {
//         name: 'David',
//         age: 16,
//         grade: 'C'
//     }
// ];
//
//
//
// for (let student of students){
//      console.log(student.name,student.grade);
//  }
//
// for (let student of students){
//     console.log(student.age);
// }
//
// let totalAge=0
// for (let student of students){
//     totalAge= totalAge + student.age
// }
// console.log(totalAge);

//2.
// // Use the following array for these practice exercises
// const cars = ["Charger", "Equinox", "Malibu", "Soul", "Fusion", "Focus", "Avenger", "Town and Country"];
// //Using the cars array, log the car with the fewest letters in it's name
//
//
// console.log(cars);
// const fewestLetters = (cars) => {
//     const smallToBig = cars.sort(function (a, b) {
// return a.length - b.length;
//     });
//     return smallToBig[0];
// };
// console.log(fewestLetters(cars));
//
//
//

//log the car with the most letters

//Use a loop to output the following text in the console:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

//3.
//You are given an array of student objects, where each object represents a student with properties name, age, and grades. Write a function called getTopStudents that takes the student array as input and returns an array of top students. A student is considered top if their average grade is 85 or higher.

// BONUS: Each student in the resulting array should be represented as an object containing only the name and age properties. If there are no top students in the input array, the function should return an empty array.

// Input:
    const studentsArray = [
    {
        name: "Alice",
        age: 18,
        grades: [90, 85, 95, 87]
    },
    { name: "Bob", age: 17, grades: [78, 88, 92, 84] },
    { name: "Charlie", age: 19, grades: [95, 92, 91, 88] },
    { name: "David", age: 18, grades: [80, 85, 88, 82] },
    { name: "Eve", age: 17, grades: [90, 91, 89, 87] },
];


// Expected Output:
// [
//     { name: "Alice", age: 18, grades: [90, 85, 95, 87] },
//     { name: "Charlie", age: 19, grades: [95, 92, 91, 8] },
//     { name: "Eve", age: 17, grades: [90, 91, 89, 87] }
// ]

//write a function
//need an empty array for top students
//something to find the average of the students grade
//need a loop to go through the object list of students


// function calculateAverage(studentsArray) {
//     let total = 0;
//     let count = 0;
//
//     studentsArray.forEach(function (item, index) {
//         total += item;
//         count++;
//     });
//
//     return total / count;
// }
//
// console.log(calculateAverage(studentsArray.grades));


// does the new array need to be outside of the function so that the calculate function have access to it?

//

// //this is to find the average number of an arrayfunction getTopStudents(students) {
// //     const topStudents = [];
// //     for (let student of students) {
// //         if (student.grades >= 85) {
// //             topStudents.push(student);
// //         }
// //     }
// //     return topStudents;
// // }
// //
// // console.log(getTopStudents(studentsArray));

// function returnTopAverage(studentsArray){
//     let studentsGrades = 0;
//     for (let student of students){
//         if (studentsGrades average < 85){
//
//         }
//     }
//}






// arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// function calculateAverage(array) {
//     let total = 0;
//     let count = 0;
//
//     array.forEach(function (item, index) {
//         total += item;
//         count++;
//     });
//
//     return total / count;
// }
//
// console.log(calculateAverage(arry));


// let myObject = {
//     name: "John",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "Exampleville",
//         country: "Wonderland"
//     },
//     hobbies: ["reading", "coding"],
//     friends: [
//         {
//             name: "Alice",
//             age: 28
//         },
//         {
//             name: "Bob",    //this is index one that steve was calling in the console
//             age: 32
//         },
//         {
//             name: "Charlie",
//             age: 29
//         }
//     ]
// };
//
// console.log(myObject.friends[1].age);
//
// for (let friend of myObject.friends) {
//     console.log(friend.name);
// }
