let fruits=["Apple","banana","Mango","5"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "Orange";  
console.log(fruits); 
fruits.push("Grapes");   // Add at end
fruits.unshift("Berry"); // Add at start
console.log(fruits);

fruits.pop();     // Removes last element
fruits.shift();   // Removes first element
console.log(fruits);

//array methods
console.log(fruits.length);         // Get length
console.log(fruits.indexOf("Mango")); // Find index
console.log(fruits.includes("Apple")); // Check if exists
console.log(fruits.join(" - "));    // Convert to string
