

// let ar= [1,2,3]
// let sum = 0;
// function simpleArraySum(ar) {
//
// }
// function simpleArraySum(ar){}
// const ar = [1, 2, 3];
// let sum = 0;
// ar.forEach(number => {
//     sum += number;
// })
// console.log(sum); // Output: 100


// return 6
function simpleArray(ar) {
    let sum = 0;
    ar.forEach(item => {
        sum += item;
    });
    console.log(sum);
    return sum;
}
simpleArray([1, 2, 3]);