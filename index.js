// 30-Sep callback

// function greet(user) {
//     console.log(`Hello ${user} welcome to guvi`)
// }

// greet("mohan");

// function foo(e) {
//     var res = "MohanR";
//     e(res);
// }
// foo(greet);


//  01-Oct promises

// var promiseRes = new Promise((resolve,reject)=>{
//     var a=8;
//     var b=10;
//     if(a<b) {
//         resolve(`This is a resolved one ${b}`)
//     }
//     else{
//         reject(`This is a rejected one ${a}`);
//     }
// })

// console.log(promiseRes);


// var voteResult = new Promise((resolve,reject)=>{
//     var age = parseInt(prompt("enter you age"));

//     if(age<=18){
//         resolve("Your are eligible for vote");
//     } else{
//         reject("your are not eligible for vote");
//     }
// })

// console.log(voteResult);


//  then & catch

// function getData() {
//     return new Promise((resolve, reject) => setTimeout(() => resolve("this is resolved after 3 sec"),3000));
// }

// function resData() {
//     return new Promise((resolve, reject) => setTimeout(() => reject("this is rejected after 5 sec"),5000));
// }

// var response = getData();
// response.then((data)=>console.log(data));

// var rejected = resData();
// rejected.then((data)=>console.log(data));



// function getData(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(5 * num), 3000);
//     })
// };
// function putData(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("This is a rejected " + 5 * num), 2000);
//     })
// };
// getData(5).then((data) => {
//     console.log(data);
//     return getData(data)
// }).then((data2) => {
//     console.log(data2);
//     // return getData(data2);
//     return putData(data2);
// // }).then((data3) => console.log(data3));
// }).catch((data3) => console.log(data3));



//                  revision for all

//   print all the prime numbers 1 to 50;
// count = 0;
// var j, i;
// for (i = 1; i <= 50; i++) {
//     for (j = 1; j <= i; j++) {
//         if (i % j === 0)
//             count++;
//     };
//     if (count == 2)
//         console.log(i);
//     count = 0;
// }


//          Map

// var arr = [2, 3, 4, 5];

// var res = arr.map(e => e * 2)
// console.log(res);

//          filter
// var arr = [12, 14, 15];
// var res = arr.filter(a => console.log(a));
// console.log(res);

//          Reduce
// var arr = [12, 14, 15];
// var c = 0;
// var res = arr.reduce((a, b) => a + b, c)
// console.log(res);


// sort

// var arr = [13, 15, 14];
// var res = arr.sort((a, b) => a - b)
// console.log(res);
// var res = arr.sort((a, b) => b - a)
// console.log(res);


//              forEach
// var arr = [13, 15, 14, 10];
// var res = arr.sort((a, b) => a - b);
// var res1 = res.forEach(e => console.log(e));
// var c = 0;
// var res2 = res.reduce((a, b) => a + b, c);
// console.log(res2);
