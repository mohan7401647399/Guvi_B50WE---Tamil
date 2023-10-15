//          BASE

//Syntax:document.createElement("element name")
// var ele = document.createElement("div");
//Add the content inside the Tag
// ele.innerHTML="this is div tag via DOM";
//Add the element to the body tag
// document.body.append(ele);


//    add selectors  

// How to add the selectors (class,id..)
// element.setAttribute("attributename","attributevalue")  //: it says that it has attribute name as well as the value
// ele.setAttribute("class","main")
// ele.setAttribute("id","main2")


//          add nested structure

// How to create the nested structure?
 //Step 01:create a Child element

// var p = document.createElement("p");
// p.setAttribute("class","main1");
// p.innerHTML= "this is p";
// document.body.append(p);

//Step 02:create a parent element
// var div = document.createElement("div")
// div.setAttribute("class","main");

//Step 03: append child to parent
// div.append(p);
// document.body.append(div);




//          bootstrap add

// var container = document.createElement("div");
// container.setAttribute("class","container");

// var row = document.createElement("div");
// row.setAttribute("class","row");

// var col =document.createElement("div");
// col.setAttribute("class","col-1");

// second col-2
// var col2 =document.createElement("div");
// col.setAttribute("class","col-2");

// row.append(col);
// container.append(row);
// document.body.append(container);

// double dol insert

// row.append(col,col2);
// container.append(row);
// document.body.append(container);

//          shortcut


// var container = document.createElement("div");
// container.setAttribute("class","container");
// container.innerHTML=`<div class="row">
// <div class="col-1">
//   this is col
// </div>
// </div>`
// document.body.append(container);


//              CSS



// var div = document.createElement('div');
// div.style.color = 'green';
// div.style.backgroundColor = 'orange';
// div.style.textAlign = 'center'
// div.innerHTML = 'this is div';
// document.body.append(div);

// var div = document.createElement('div');
// div.className = 'main';
// div.innerHTML = 'this is main';
// document.body.append(div);


//          id create

// var div = document.createElement('div');
// div.className = 'main';
// div.id = 'main1';
// div.innerHTML = 'this is main';
// document.body.append(div);


//              get and query
// var main = document.getElementById('main');
// console.log(main);

// var main = document.getElementsByClassName('main');
// console.log(main);

// var main = document.querySelector('main');
// console.log(main);

// var main = document.querySelectorAll('.main');
// console.log(main);