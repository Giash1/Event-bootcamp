// result does not come
const text= document.querySelector("h1");
var allButtons= document.querySelectorAll(".myButton");
var len =allButtons.length; // len helps to reduce the exercise for three times
for(var i=0; i<len; i++){
allButtons[i].addEventListener("click", function(e){     // e == event
text.innerText = e.target.innerText +" " + "is clicked";    // e.target.innertext == button 1 or button 2 ...that is targeted

});
};


/*Document.querySelector()
The Document method querySelector() returns the first Element within 
the document that matches the specified selector, or group of selectors. 
If no matches are found, null is returned.*/

/* const:
 Constants are block-scoped, much like variables declared using 
the let keyword. The value of a constant can't be changed 
through reassignment, and it can't be redeclared.*/

/* i    
So i is a value being passed into the function 
(which is being declared inline as an anonymous function) as its 
first parameter, presumably by the inner 
 of the retarder method that you're passing the function into
*/