// Write a function, sumIsEqual, that takes in three inputs. The function should return
// true if the sum of the first two inputs are equal to the third input. If any of the
// inputs are not numbers, return false.


function sumIsEqual(input1,input2,input3) {
    if(typeof input1, input2, input3 = "number"){
        if (input1 + input2 === input3)
        return true
    }else
        return false
}

/*
you had the right idea for the if statment
if(typeof input1 !=="number" || input2 !=="number" || input3 !=="number")
make sure you use === instead of = on this kind of question
 */

sumIsEqual(1, 2, 3) // returns true
sumIsEqual(2, 2, 4) // returns true
sumIsEqual(10, 2, 12) // returns true
sumIsEqual(10, false, 12) // returns false
sumIsEqual('10', '2', 12) // returns false
sumIsEqual('fred', 'bob', 'hello') // returns false