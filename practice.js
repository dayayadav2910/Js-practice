

// diffrence between let and var 

let txt ="daya";
let txt = "kiran";
console.log(txt,txt);
// output(// SyntaxError: 'message' has already been declared)

let message = "hello";
message = 123456;
// This will not give error


var txt = "daya";
var txt = 34;
console.log(txt,34);  // 2nd txt var override the  value of 1st txt variable
// output(34)


// variable 

const name1 = "john";
const admin = name1 ;
alert(admin)


// Create a web-page that asks for a name and outputs it.
const name1  = prompt("Enter your name");
console.log(name1);

// nullish coalescing operator ??,
function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
  }
  
  showCount(0); // 0
  showCount(null); // unknown
  showCount(); // unknown

//   Arrays

let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );


// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

let styles = ["jazz","blue"];
styles.push("rock-n-roll");
var len = Math.floor((styles.length - 1) / 2)
console.log(len)
console.log(styles);
styles[len] = "classic";
console.log(styles);
console.log(styles.shift());
console.log(styles.unshift("Rep", "Preprep"));
console.log(styles);

