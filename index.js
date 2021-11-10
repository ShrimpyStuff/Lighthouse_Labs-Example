// Variables

/* const and let, 
 const is the variable type used if it's a constant value or variable that won't/can't be changed;
 let is used for variables that you will change the value of.

 (there is also var but that's bad practice to use)
*/

const varConst = false
console.log(varConst)
// ignore the try catch part I'll explain that later (It's literally just try what's in the try section and then if you catch an error do what's in the catch section)
try {
    varConst = true   
} catch (error) {
    console.log(error)
}
console.log(varConst)

let varLet = false
console.log(varLet)
varLet = true
console.log(varLet)

// ------------------------------------------------------------------------------------- // (I don't need the closing //. It lasts the entire line. I just thought it looked better with it)

// console.log(), the simplest function for debugging and other uses.

console.log("Test")
console.log(1)
console.log(1==2)

// operaters for math and other things.

// +, var + var. If both vars are numbers (and if 1 of the strings is just a number "1") will add together with math, otherwise will connect the 2 strings (will convert number to string if the other isn't a string that is only a number) together
// - only subtracts numbers
// * only multiplies numbers
// ** exponents
// / division
// % modulus (division remainder)
// ++ put beside var that is a number or just a number and it will return that number + 1
// -- same as last but subtraction
// = set value
// += add and also set value
// -= subtract and also set value
// *= multiply and set value
// /= division and then set value
// %= set value as remainder
// **= set value as exponent

// comparison operaters

// == equal to but different types work so 1 == "1" is true
// === equal value and equal types
// != not equal to
// != not equal value or type
// > greater than < less than
// >= greater than or equal to <= less than or equal to
// ? ternary operator (my favourite). Example: (varible or value) ? (if true set to this) : (if false set to this). (Can be used when setting values or if you need another if or else inside an if)

// logical operators

// && and
// || or
// ! not

// if, else if, else.

// if is used for if you need to run something only if a certain thing is true or false.
// else if, if but another statement that happens if the first one is false.
// else, happens whenever all if or else ifs before it are false.
// you can use ! if you need something to run when it's false
// brackets can be used inside the () as long as you have an opening and closing bracket inside. (Used to split expression)
if (!(1==2)) {
    console.log("1 does not equal 2")
} else if (true) {
    console.log("else if")
} else {
    console.log("both were somehow wrong. Won't ever run in this scenario")
}

// arrays and objects.

// arrays are variables that hold a list of unnamed values

let examplearray = [1, 2, "3", [1, 2]]

// arrays can also hold other arrays which is a called multidimensional array

// you access array values by stating the name and then adding square brackets [] beside it and inside the brackets add the index number of the value you want (array places start at 0 so you will subtract 1 from what you count).

console.log(examplearray[0]) // first value in array
console.log(examplearray[3][1]) // second value in the array that is indexed in the 4th place

// you can set the value of an object in an array by normally changing the value and calling the variable normally
examplearray[1] = 3
console.log(examplearray[1])

// objects

let exampleobject = {FirstName: "Hello", LastName: "World!"}

// objects are essentially arrays (actually it's the other way around but I already wrote the array part so I'm not changing it) but they use the name that you define to find the variable

console.log(exampleobject['FirstName']) // this is one way to access the variable using the name but most people choose the other way
console.log(exampleobject.LastName) // more popular way

// functions

// functions are ways you can call code multiple times and makes it so you don't need to write 7 lines of code just when processing a different variable

function exampleFunction(number, number2) {
    console.log(number+number2)
}

exampleFunction(1, 2) // this can be before or after you write the code for the function

// async functions
DoAfter5Seconds()

async function DoAfter5Seconds() {
    await new Promise((res) => setTimeout(res, 5000))
    console.log("5 Seconds have passed")
}