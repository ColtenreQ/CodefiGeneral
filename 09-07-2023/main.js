// Exercise 1
function outerFunction() {
    /* The variable that is declared below has a
     local scope that is kept within this function.*/
	let outerVar = "I'm outside!";

	function innerFunction() {
        /* The variable that is declared below also has a 
        local scope that is kept within this function. */
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
        /* Yes this console log can access the outerVar due to Closure */
		console.log(innerVar); // Can we access innerVar?
        /* Yes this console log can access innVar 
        Due to it being within the same scope.*/
	}
	innerFunction();
}
outerFunction();



// Exercise 2
function mainFunction() {
	hoistedFunction();
    /* Above, I am calling a function that has yet to be declared.
    It is declared after the main function is called. */
}

mainFunction();

/* Below is where the hoisted function is declared and given a console
log so I can check it in the browser. */
function hoistedFunction() {
    console.log("Hello, I am a hoisted function.");
}



// Excercise 3
function addAndSquare(x, y) {
    let sum = x + y;

    function square(){
        /* This function uses closure to use the variables sum
        to more easily create the square. */
        return sum * sum;
    }
    
    return square();
}
console.log(addAndSquare(3, 3));



// Exercise 4
let six = 6;
console.log("Before the functions, six is " + six);
function modifyGlobal() {
    six = 7;
    console.log("Inside the function modifyGlobal, six is " + six);
}

function localVariable() {
    let six = 8;
    console.log("Inside the function localVariable, six is " + 8);
}

modifyGlobal();
localVariable();
console.log("After the functions, six is " + six);
/* These two functions can be run without problem, because whenever the
second function creates a new variable with the same name, it is locally scoped, 
so it does not affect the original six. However, the first function did change six,
because it modified a global variable. */



// Exercise 5
function functionFactory(param) {
    function innerFunction(innerParam) {
        return param * innerParam;
    }
    return innerFunction
}

multiplyBy3 = functionFactory(3);
console.log("The number 4 multiplied by 3 is " + multiplyBy3(4));
/* This function factory allows you to create a function that multiplies 
the next parameter with a number of your choosing. In this case, it creates
a new function that will multiply your next parameter by 3. */



// Exercise 6
function hoistingTest() {
    let name = "Colten";
    console.log("Hello my name is " + name);
}

hoistingTest();
/* This does not work with the variables in the order given,
as let and cost do not hoist the initialization of the variable. 
You would have to declare the variable before the log in the function, 
or outside the log before the calling of the function. The given code
is corrected to resolve errors.*/



// Exercise 7
function setupCounter() {
    let count = 0;

    return function() {
        count += 1;
        console.log("The count is " + count);
    }
}
let newCounter = setupCounter();
newCounter();
newCounter();
newCounter();
/* This function allows the user to create a new function that acts
as a counter. Each invokation of the new function will increase the count.*/



// Exercise 8
function counterTwo() {
    let count = 0;

    return function() {
        if (count >= 10) {
            count = 0;
            console.log(count);
        } else {
            count += 1;
            console.log(count);
        }
    }
}
let counterTest = counterTwo();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
counterTest();
/* Closure is necessary because without it, the inner function that is attached to
this variable, would not be able to check the count variable in the conditional, and 
also could not increment it. It allows the inner variable to communicate with 
the outer variable. Its similar to how a function can communicate with 
a globally scoped variable. */



// Exercise 9
let globalVariable = 9;
console.log("Before the functions, global variable is " + globalVariable);

let finalFunction = modifyGlobalVar();
finalFunction();

function modifyGlobalVar() {
    globalVariable = 10;
    let localVariable = 13;
    console.log("Before the inner function, local variable is " + localVariable);
    return function innerFunction() {
        localVariable = 17;
        console.log("After the inner function, local variable is " + localVariable);
    }
}

