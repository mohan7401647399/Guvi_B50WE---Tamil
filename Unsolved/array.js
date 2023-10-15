//              array - 05

// const arr = userInput[0];
// const arr = ["I", "am", "John", "cena", "John", "cena"];

// // method - 1
// const uniEle = arr.filter((ele, index, self) => {
//     return self.indexOf(ele) === index
// });
// console.log(uniEle);


// method - 2
// function uniEle(arr) {
//     return [...new Set(arr)]
// }
// console.log(uniEle(arr));



//           array  -     01

// ans
// const arr1 = [7];
// const arr = [1, 1, 11, 121, 131, 141, 98];

// for (var i = 1; i <= arr1; i++) {
//     const uniEle = arr.filter((ele, index) => {
//         return arr.indexOf(ele) !== index;
//     });
//     console.log(uniEle);
// }

// method - 1
// const uniEle = arr.filter((ele, index, self) => {
//     return self.indexOf(ele) !== index
// });
// console.log(uniEle);


// method - 2
// function uniEle(arr) {
//     return [...new Set(arr)]
// }
// console.log(uniEle(arr));




//                  array - 02

//          ans
// var a = [3, 3];
// var b = [23, 15, 16];
// var c = [357, 65, 10];

// function concatArr(arr1, arr2) {
//     arr1.sort((a, b) => a - b);
//     arr2.sort((a, b) => b - a);
//     return arr1.concat(arr2);
// }

// var res = concatArr(b, c);
// console.log(res);



//              array  -  06

// const arr1 = [5];
// const arr = ["A23", "B56", "B56", "C79", "D16"];

// for (var i = 1; i <= arr1; i++) {
//     const uniEle = arr.filter((ele, index) => {
//         return arr.indexOf(ele) === index;
//     });
//     console.log(uniEle);
// }