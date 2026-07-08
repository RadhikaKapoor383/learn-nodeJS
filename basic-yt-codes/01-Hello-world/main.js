const math = require("./math");
const num1 = 1, num2 = 3;
console.log(`Addition of ${num1} and ${num2}:`, math.add(num1, num2));
console.log(`Subtraction of ${num1} and ${num2}:`, math.subtract(num1, num2));
console.log(`Multiplication of ${num1} and ${num2}:`, math.multiply(num1, num2));
console.log(`Division of ${num1} and ${num2}:`, math.divide(num1, num2));
console.log(`Modulus of ${num1} and ${num2}:`, math.moduler(num1, num2));