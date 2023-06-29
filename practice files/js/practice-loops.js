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
// Use the following array for these practice exercises
const cars = ["Charger", "Equinox", "Malibu", "Soul", "Fusion", "Focus", "Avenger", "Town and Country"];
//Using the cars array, log the car with the fewest letters in it's name


console.log(cars);
const fewestLetters = (cars) => {
    const smallToBig = cars.sort(function (a, b) {
return a.length - b.length;
    });
    return smallToBig[0];
};
console.log(fewestLetters(cars));




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