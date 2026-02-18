const hello = "=== Remove duplicate from sorted array ===" ;
console.log(hello) ;

// ============================================================

let nums = [1, 2, 3, 4, 5] ;
let words = "was it a car or a cat i saw" ;

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

let isbasic = "i saw a car  or a cat " ;
let isBasicArray = [1, 2, 3, 4] ;

function isBasicPalindrome(str) {
    let left = 0 ;
    let right = str.length - 1 ;

    while(left < right) {
        if(str[left] !== str[right]) {
            return `${str[left]} !== ${str[right]}` ;
        }
    }

    left++;
    right--;

    return true ;
}

// console.log(isBasicPalindrome(isbasic)) ;
// console.log(isBasicPalindrome(isBasicArray)) ;
console.log(isBasicPalindrome("Madam")) ;


