let helloDay_2 = "=== Valid palindrom ===" ;
console.log(helloDay_2) ;

// ===========================================
// first practice symmetry test
// const mess0 = "level" ;

// function checkSymmetry(str) {
//     let left = 0 ;
//     let right = str.length - 1;

//     while(left > right) {
//         console.log(`Comparing : ${str[left]} and ${str[right]}`) ;

//         if(str[left] != str[right]) {
//             return "Data_Corrupted: Not symmetric " ;
//         }

//         left++;
//         right++;

//     }

//     return "Data_symmetric" ;
// }

// console.log("Result :", checkSymmetry(mess0)) ;

// no loop check because the left > right its should be left < right 

// second practice 

// const word = "radar" ;
// let l = 0 ;
// let r = word.length -1 ;

// // l++ ;
// // r-- ;
// function testing(dummy) {
//     for(let i=0; i< word.length; i++){
//         for(let j= i - word.length; j<0 ; j--) {
//             if(i<j) {
//                 return `error_assessment ${dummy[i]} and ${dummy[j]}` ;
//             }
//         }

//         return `Test done...closure` ;
//         exit;
//     }
// }

// console.log("Start L: ", word[l]) ;
// console.log("Start R: ", word[r]) ;

// console.log(testing(word)) ;

// third exercice

const radar = "radar" ;

function manualTest(str) {
    let l = 0 ;
    let r = str.length -1 ;

    // use the while loop to say : while the pointer arent crossed ...
    while(l < r) {
        console.log(`Checking : Index ${l}(${str[l]}) vs Index ${r}($r[r])`) ;

        if (str[l] != str[r]) {
            return "MATCH_FAILED..."

        }

        l++;
        r++;
    }
    return "MATCH_SUCCESS" ;
}

console.log(manualTest(radar)) ;