//let element  = document.getElementById("demo");
//element.innerHTML = "DOM"
//console.log(element);

//let test = document.getElementById("test");
//test.innerText = "Header"
//test.innerHTML = "<h1>Header</h1>"
//console.log(test);

//let ele = document.getElementsByName("test");
//ele[0].style.backgroundColor="dodgerblue"
//console.log(ele);
//console.log(Array.isArray(ele));//this method is used to check whether the array is pure or not

//!spread operator :- this operator is used to take out each and every value from
//original array and store it in one more new array(pure array)
//syntax:- [...variable]


//let x = [...ele];
//console.log(x, Array.isArray(x));
//x.map(element=>{
  //  element.style.backgroundColor="tomato";
   // element.style.color="White";
    //element.style.textTransform = "uppercase";
//})

//let ele = document.querySelector("#demo");
//console.log(ele);
//let ele = document.querySelector(".test");
//console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);

// let demo =document.getElementById("demo");
// demo.addEventListener("click",()=>{
//     // console.log("button clicked");
//     // alert("hi")
//     document.body.style.backgroundColor="orange"
// });

// let demo =document.getElementById("demo");

// demo.addEventListener("dblclick",()=>{
//     console.log("double click");
// })

//let demo =document.getElementById("demo");

//demo.addEventListener("mouseover",()=>{
  //  document.body.style.backgroundColor="red";
//})

//demo.addEventListener("mouseleave",()=>{
 //   document.body.style.backgroundColor="teal";
//})
let bgColor = document.querySelectorAll(".bgcolor");
//console.log(bgColor);
[...bgColor].map(element=>{
  //  console.log(element);
    element.addEventListener("mouseover",()=>{
    //    console.log(element.innerText);
        element.Style.backgroundColor = element.innerText;

    });
    element.addEventListener("mouseleave",()=>{
      //  console.log(element.innerText);
        element.style.backgroundColor = "transparent";
    });
})
