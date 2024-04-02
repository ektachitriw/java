// Using a while loop
let sum = 0;
let count = 0;

while (count < 6) {
    let number = parseFloat(prompt("Enter a number:"));
    if (!isNaN(number)) {
        sum += number;
        count++;
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}

console.log("The sum of the numbers is: " + sum);

// Using a for loop
sum = 0;

for (let i = 0; i < 6; i++) {
    let number = parseFloat(prompt("Enter a number:"));
    if (!isNaN(number)) {
        sum += number;
    } else {
        console.log("Invalid input. Please enter a valid number.");
        i--; // Decrement i to repeat the current iteration
    }
}

console.log("The sum of the numbers is: " + sum);