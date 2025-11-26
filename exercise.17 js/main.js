let temperature = 90; 

if (temperature < 0) {
    console.log("Very cold");
} else if (temperature >= 0 && temperature < 15) {
    console.log("Cold");
} else if (temperature >= 15 && temperature < 25) {
    console.log("Warm");
} else if (temperature >= 25) {
    console.log("Hot");
}
