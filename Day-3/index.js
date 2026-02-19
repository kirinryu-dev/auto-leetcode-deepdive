const hello = "=== Remove duplicate from sorted array ===" ;
console.log(hello) ;

// ============================================================

// let nums = [1, 2, 3, 4, 5] ;
// let words = "was it a car or a cat i saw" ;

// let trimmedNums = nums.length ;
// console.log(trimmedNums) ;

// function checkingtape(str) {
//     let left = 0 ;
//     let right = str.length - 1 ;

//     while(left < right) {
//         if(str[left] != str[right]) {
            
//             console.log(` Comparing ${str[left]} and ${str[right]}`) ;
//             return false ;
//         }

//         left++;
//         right--;
//     }

//     return true `DATA_PROCESSING SUCCESS...` ;
// }

// console.log(checkingtape(words)) ;

// let aMess = "Was it a car or a cat i saw" ;

// === next practice ===

// let isbasic = "i saw a car  or a cat " ;
// let isBasicArray = [1, 2, 3, 4] ;

// function isBasicPalindrome(str) {
//     let left = 0 ;
//     let right = str.length - 1 ;

//     while(left < right) {
//         if(str[left] !== str[right]) {
//             return `${str[left]} !== ${str[right]}` ;
//         }
//     }

//     left++;
//     right--;

//     return true ;
// }

// console.log(isBasicPalindrome(isbasic)) ;
// console.log(isBasicPalindrome(isBasicArray)) ;
// console.log(isBasicPalindrome("Madam")) ;

// lets keep going with index 


    // return `${str[left]} && ${str[right]}` ;
    // response is 1 && 4 
    // so while left < right

    // while(left < right) { // this compare only the index
    //     if(left !== right) {
    //         return `Missmatch found: left=${str[left]} && right=${str[right]}`

    //     }
    //     left++;
    //     right--;
    // }
//     while(left < right) {
//         if(str[left] !== str[right]) {
//             return`Missmatch ${str[left]} and ${str[right]}`
//         }



//         left++;
//         right--;
//     }

//     return`All_MATCHED` ;



// }

// console.log(simplePalindrom(arraySample)) ;
// console.log(simplePalindrom("radar")) ;
// console.log(simplePalindrom("madam")) ;
// console.log(simplePalindrom("mom"));
// console.log(simplePalindrom(1));

// now checker of alpha numerique or not 

// function isPalindrome(s) {
//     let left = 0 ;
//     let right = s.length -1 ;

//     while(left < right) {
//         if(!isAlphanumerique(s[left])) {
//             left++;
//             continue ;
//         }

//         if(!isAlphanumerique(s[right])) {
//             right--;
//             continue ;
//         }

//         if(s[left].toLowerCase() !== s[right].toLowerCase()) {
//             return false;
//         }

//         return true;
//     }
// }

// console.log(isPalindrome("is a car i saw or a cat")) ;

// function isAlphanumerique(c) {
//     return true;
// }

// now remove duplicate 

let sensorReading = [1, 1, 2, 2, 3, 4, 4] ;

// using pointer differently
// writer for single unique
// explorer for different number

// function removeDuplicate(nums) {
//     if(nums.length === 0) {
//         return 0;
//     }

//     let writer = 0 ;
    
//     for(let explorer=1; explorer < nums.length; explorer++) {
//         // if explorer find a new value 
//         if(nums[explorer] != nums[writer]) {
//             writer++ // moves the writer in another spot
//             nums[writer] = nums[explorer] ; // write the new value here 
//         }
//     }

//     // the number of unique element is writer + 1
//     return writer + 1 ;
// }
// const uniqCount = removeDuplicate(sensorReading);
// console.log(`Unique Count: ${uniqCount}`) ;
// console.log("Modified Array: ", sensorReading.slice(0, uniqCount));
// console.log(sensorReading.slice()) ;

let data = [10, 10, 20] ;


// step 1 : comparison 
// function comparison(s){
//     let writer = 0 ;
//     let explorer = 2 ;
//     let mess_0 = "--- Start ---" ;
//     console.log(mess_0) ;

//     console.log("Initial array:", data);
//     console.log(`Writer is at index ${writer}, value ${data[writer]}`);
//     console.log(`Explorer is at index ${explorer}, value ${data[explorer]}`);

//     if(data[writer] === data[explorer]) {
//         return true ;
//     }

//     if(data[writer] !== data[explorer]) {
//         return false ;
//         writer++;
//     }
// }

// console.log(comparison(data)) ;

// remove duplicate with steps 

function removeDuplicateWithSteps(nums) {
    if(nums.length ===0) {
        return 0; // end and out 
    }

    // now then the actual comparison 
    let writer = 0;
    console.log`Starter writer:${writer}, numWriter= ${nums[writer]}` ;

}

console.log(removeDuplicateWithSteps(1,2,3,4)) ;