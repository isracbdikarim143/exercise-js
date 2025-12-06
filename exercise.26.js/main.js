// 1. BLOCKING EXAMPLE
console.log("--- BLOCKING START ---");
console.log("Step 1: Start");

const startTime = Date.now();
// This loop freezes the code for 2 seconds
while (Date.now() - startTime < 2000) {
    // Waiting...
}

console.log("Step 2: Blocking task finished (2 seconds later)");
console.log("Step 3: End");
console.log("----------------------\n");


// 2. NON-BLOCKING EXAMPLE
console.log("--- NON-BLOCKING START ---");
console.log("Step 1: Start");

setTimeout(() => {
    console.log("Step 2: Non-Blocking task finished (Inside Timeout)");
}, 2000);

console.log("Step 3: End (Happens before Step 2)");s