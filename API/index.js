// //          XHR - XML HTTP REQUEST

// //               4 - STEPS

// // first step
// var req = new XMLHttpRequest();

// // second step
// // req.open("GET", 'https://restcountries.com/v3.1/all');
// // req.open("GET", 'https://restcountries.com/v3.1/name/mohan');
// req.open("GET", 'https://restcountries.com/v3.1/region/asia/');

// // third step
// req.send();

// // fourth step
// req.onload = function () {
//     // var result = req.response;
//     var result = JSON.parse(req.response);

//     // mini task - 1
//     result.forEach((e) => {
//         let region = e.name;
//         let capital = e.capital;

//         console.log(`Country Name:${region.common},Region:${capital[0]}`);
//     });

//     // mini task - 2
//     //    for(var i=0; i<result.length; i++){
//     //     console.log(`Country Name:${result[i].name.common},Region:${result[i].region}`);
//     //    }
//     // console.log(result);
// }




//                           fetch()


// var res = fetch("https://restcountries.com/v3.1/all").then((data) => data.json()).then((e) => console.log(e));
// var res = fetch("https://restcountries.com/v3.1/all").then((data) => data.json()).then((e) => {
// e.forEach((log) => console.log(log));

//     e.forEach((log) => {
//         let country = log.name.common;
//         let capital = log.capital;
//         let flag = log.flag;
//         let timeZone = log.timezones;
//         console.log(`Country Name: ${country}, Capital:${capital}, Flag:${flag}, TimeZone:${timeZone}`);
//     });

// });

// res.forEach((item)=>{
//     console.log(item);
// })



//          mini task - corona count

// var res = fetch("https://data.covid19india.org/v4/min/data.min.json").then((data) => data.json()).then((ele) => {
//     var res = [];
//     res.push(ele);
//     console.log(res);
//     res.forEach((e)=>console.log(e));
//     console.log(ele);
// for (var i = 0; i < res.length; i++) {
//     console.log(res);
// }
// console.log(ele);
// let stateName = ele;
// let totalCases = ele.total;
// let totalConfirmed = ele.total.confirmed;
// let totalDecesed = ele.total.decesed;
// let totalRocovered = ele.total.recovered;
// let totalTested = ele.total.tested;
// let totalVacinated1 = ele.total.vacinnated1;
// let totalVacinated2 = ele.total.vacinnated2;
// console.log(`Statename:${stateName},TotalCases:${totalCases},TotalConfirmed:${totalConfirmed},TotalDecesed:${totalDecesed},TotalRecovered:${totalRocovered},TotalTested:${totalTested},TotalVaccinated1:${totalVacinated1},TotalVaccinated2:${totalVacinated2}`);
// ele.forEach((log) => {
// console.log(log);
// let country = log.name.common;
// let capital = log.capital;
// let flag = log.flag;
// let timeZone = log.timezones;
// console.log(`Country Name: ${country}, Capital:${capital}, Flag:${flag}, TimeZone:${timeZone}`);
// });

// });



//                      async()

// async function asyncFun(){
//     let res = await fetch("https://restcountries.com/v3.1/all");
//     let res1 = await res.json();
//     console.log(res1)
// }

// asyncFun()  



//  try - catch

// async function asyncFun() {
//     try {
//         let res = await fetch("https://restcountries.com/v3.1/all");
//         let res1 = await res.json();
//         console.log(res1)
//     } catch (error) {
//         console.log(error);
//     }
// }

// asyncFun()  



//              mini fetch task


var res = fetch("https://restcountries.com/v2/all");
res.then((data) => data.json()).then((value) => bar(value));

var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";
container.append(row);
document.body.append(container)

function bar(value) {
    for (var i = 0; i < value.length; i++) {
        console.log(value[i]);
        var name = value[i].name;
        var flag = value[i].flag;
        var capital = value[i].capital;
        var region = value[i].region;
        var code = value[i].alpha3Code;

        row.innerHTML += `
        <div class="col-md-4 p-3 h-100 w-100 m-auto">
            <div class="card border-primary mb-3" style="max-width: 18rem; text-align:center">
            <div class=" card-header p-3 mb-2 bg-dark text-white">${name}</div>
                <img style="width:100% height:100%" src="${flag}" alt="">
                    <div class="card-body text-primary">
                    <p class="card-text">Country: ${capital}</p>
                    <p class="card-text">Region: ${region}</p>
                    <p class="card-text">Country code: ${code}</p>
                    <button type="button" class="btn btn-secondary">Click for weather</button>
                </div>
            </div>
        </div>
        `
    }
}