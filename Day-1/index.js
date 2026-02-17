let hello = "Day-1 practice" ;
console.log(hello) ;
// ==============================

const nums = [2, 7, 11, 15] ;
const target = [9] ;

// function twoSum(nums, target) {
//     let mess0 = "Loading process..." ;
//     console.log(mess0) ;

//     for(let i = 0; i < nums.length; i++ ) {
//         for(let j = i + 1 ; j < nums.length ; j++) {
//             if (nums[i] + nums[j] === target ) {
//                 return [i , j] ;
//             }
//         }
//     }
// };

// console.log("Results: ", twoSum(nums,target)) ;

// for(let i=0; i <5; i++) {
//     for(i=0; i= 10 ; i++) {
//         console.log("Results: `${i}`");
//     }
// }

// for(let i=0; i<10 ; i++){
//     console.log(`Results: ${i}`)
// }

// const sensor = [5, 6, 10, 12, 99] ;

// for(let i=0; i<sensor.length ; i++){
//     console.log(sensor[i])
// }

// for(let i=0; i<sensor.length ; i++) {
//     const reading= sensor[i] ;
//     // ========
//     if(reading % 2 === 0) {
//         console.log(`reminder ${reading}`) ;
//     }

// }

// Day-1 target 

const currentSensor = [5, 6, 10, 12, 99];
const targetMark = 16 ;

for(let i=0; i<currentSensor.length; i++){
    for(let j = i+1; j < currentSensor.length; j++) {
        let reportSum = currentSensor[i] + currentSensor[j] ;

        if(reportSum === targetMark){
            console.log(`Targetmark found ${currentSensor[i]} and
                 ${currentSensor[j]} equal to ${targetMark}`)

            console.log(`indices: [${i}], [${j}]`) ;
        }
    }
}