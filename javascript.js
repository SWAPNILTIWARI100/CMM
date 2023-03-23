var area = "dsfsad" ;
var PI = 3.142, l=5, b=4, r=3;
switch(area){
case 'circle':
console.log("the area of the circle is : " + PI*r**2);
break;
case 'triangle':
console.log("the area of the triangle is : " + (l*b)/2);
break;
case 'rectangle':
console.log("the area of the rectangle is : " + (l*b));
break;
default:
console.log("please enter valid data");
}


const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
// accept the number from the user through prompt box  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; // declaration of the variable.  
  
// use if, elseif and else keyword to define the calculator condition in JavaScript.  
if (operator == '+') { // use + (addition) operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = number1 - number2;  
}  
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; // use / (division) operator to divide two numbers  
}  
  
// display the result of the Calculator  
window.alert(" Result is" + result);  
