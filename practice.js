

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


// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.
var age;
if (age >=14 && age<=90); 

// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
if (age<14 && age>90);



// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

var ans = prompt("Enter any value");
if(ans === "Admin"){
  var pass = prompt("Enter Password")

  if(pass === "TheMaster"){
    alert("Welcome")
  }
}
else if(ans == '' || ans == null){
  alert("Cancelled")
}
else{
  alert("I dont know you!")
}

// Rewrite the "switch" into an "if"

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}


// Rewrite "if" into "switch"

let a = +prompt('a?', '');
  switch(a)
  {
    case 0:
      alert(0);
      break;
    case 1:
      alert(1);
      break;
    case 2:
    case 3:
      alert("2,3")
}

// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||

function checkage(age){
  return (age>18) ? true: confirm('Did parents allow you?')
  }
  
function checkAge(age) {
return (age > 18) || confirm('Did parents allow you?');
}



// Write a function min(a,b) which returns the least of two numbers a and b.

function min(a,b){
  return a<b? a : b
}
console.log(min(1,1))


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
const x = prompt("");
const y = prompt("");
pow(x,y)
function pow(x,y){
	console.log(Math.pow(x,y))
}


// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
const user={
  name : "Daya",
  surname : "Yadav",
};
user.name = "Kiran";
delete user.name;
alert(user)


// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. Should work like that:

let schedule = {};
function isEmpty(obj) {
  for (let key in obj) {
    return true;
  }
  return false;
}
alert(isEmpty(schedule))



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
sum = 0;
for(let key in salaries){
    sum += salaries[key]
}
alert(sum)


// Objects
// Task 1
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

user = {}
user.name = "Daya"
user.surname= "Yadav"
user.name = "Kiran"
alert(user)
delete(user.name)
alert(user)



// Class 
class Human{
  
  gender = "Male"
  
  printGender(){
    console.log(this.gender)
  }
}
class Person extends Human{
    name= "Daya"
    age = 25
    gender = "Female"
  
  printName(){
    console.log(this.name, this.age)
  }
}
const p = new Person();
const h = new Human();
p.printName()
p.printGender();



