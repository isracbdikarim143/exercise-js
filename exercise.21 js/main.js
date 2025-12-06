const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((accumulator, currentValue) => {
    let calculation = accumulator * currentValue;
    

    console.log(accumulator + " * " + currentValue + " = " + calculation);
    
    return calculation;
});

console.log("Final Result:", total);