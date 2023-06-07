


//2.this is right and you wrote it by yourself :)
//function showMultiplicationTable(x) {

    //const number = parseInt(prompt('Enter an integer: '));
    //for (let i = 1; i <= 10; i++) {
    //    const result = i * number;
    //    console.log(`${number} * ${i} = ${result}`);
    //}
//}
//showMultiplicationTable();


//3. done
//for (let i =20;i <= 200;i ++){
//let i = Math.floor(Math.random()* 200)+ 20;
//the one below was right cause the top one went over 200
// Math.floor(Math.random() * (200 -20) +1) +20;
//if (i % 2 === 0){
//    console.log(i +' is even');
//}else{
//console.log(i +' is odd');
//}
//}




//4.
function numPyramid(){
    for(let i =1; i<10; i++){
        console.log(`${i.toString().repeat(i)}`);
    }
}

function numPyramidInADiffWay(){
    for(let i = 1; i <= 9; i ++){
        let oneLevelOfMyPyramid ='';
        for(let j = 1; j <= i; j++) {
            oneLevelOfMyPyramid = oneLevelOfMyPyramid + i;
        }
            console.log(i)

    }
}

//for (let i = 1, j = 999999999; i < 10; ++i, --j) {
//    console.log("value of i:" + i + " and value of j: " + j);
//}
//for (let i =1; i <= 999999999; i ){
  //  console.log(1);
//}



//5.
//for (let i = 5;i <= 100; i += 5){
//    console.log(i);
//}

//the bottom one was technically right , yours was one too BUT they were going in the wrong direction

for(let i = 100; i >= 5; i -=5){
    console.log(i)
}