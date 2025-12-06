// ==========================================
// EXERCISE 1: Spread Operator
// ==========================================
console.log("------ EXERCISE 1 START ------");

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// 1. Show the original arrays
console.log("Original Array 1:", array1);
console.log("Original Array 2:", array2);

// 2. Combine them using spread operator
const combinedArray = [...array1, ...array2];

// 3. Show the final result
console.log("Final Combined Result:", combinedArray);

console.log("------ EXERCISE 1 END ------\n");



// ==========================================
// EXERCISE 2: Rest Parameter & Multiply
// ==========================================
console.log("------ EXERCISE 2 START ------");

function multiply(...numbers) {
    console.log("Received numbers:", numbers);
    
    // Using reduce to multiply and show steps
    const result = numbers.reduce((accumulator, currentValue) => {
        let calculation = accumulator * currentValue;
        
        // Show the step-by-step calculation
        console.log("Step: " + accumulator + " * " + currentValue + " = " + calculation);
        
        return calculation;
    });

    return result;
}

// Calling the function
const finalResult = multiply(1, 2, 3, 4);

// Show the final result
console.log("Final Product Result:", finalResult);

console.log("------ EXERCISE 2 END ------");