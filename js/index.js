// Iteration 1: Names and Input
let hacker1 = "Willise";
let hacker2 = "Berta";


console.log(`The driver's name is ${hacker1} and it has ${hacker1.length} characters`);
console.log(`The navigator name is ${hacker2} and it has ${hacker2.length} characters`);


// Iteration 2: Conditionals

if (driver > navigator) {
    console.log(`Driver has the longest name, with ${driver} characters.`);
} else if (driver < navigator) {
    console.log(`It seems that the navigator has the longest name, with ${navigator} characters.`)
} else {
    console.log(`Wow, you both have equally long names,with ${driver} characters. `)
}


// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
    let chart = hacker1.charAt(i)
    console.log(chart);
}