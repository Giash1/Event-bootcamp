/*document.querySelector("button").addEventListener("click",myFunction);
function myFunction(){
    alert("hello");
}*/

//annonymus function 
//document.querySelector("button" /* button id*/).addEventListener("click",function(){ alert("hello");
// });

/*var myVar = document.querySelector("h1");
myVar.addEventListener("click",function(){
    alert("hi");
});
*/


/*
var myVar =document.querySelector("h2");
myVar.addEventListener("mouseover", function(){
    alert ("helllllllll");
});

myVar.addEventListener("mouseout", function(){

    alert("gt");
});
*/


const btn = document.querySelector('button');
btn.addEventListener('onclick', function(){
    alert("Hello");
    console.log("I am a simple man");
});
