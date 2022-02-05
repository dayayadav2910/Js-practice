

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
