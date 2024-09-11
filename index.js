// index.js
import { multiply, divide } from './functions/math.js';
import add from './functions/add.js';
import subtract from './functions/subtract.js';

// Get command-line arguments
const [, , operation, num1, num2] = process.argv;

const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)) {
  console.log("Please provide two valid numbers.");
  process.exit(1);
}

switch (operation) {
  case 'add':
    console.log(`Result of adding: ${add(a, b)}`);
    break;
  case 'subtract':
    console.log(`Result of subtracting: ${subtract(a, b)}`);
    break;
  case 'multiply':
    console.log(`Result of multiplying: ${multiply(a, b)}`);
    break;
  case 'divide':
    try {
      console.log(`Result of dividing: ${divide(a, b)}`);
    } catch (error) {
      console.log(error.message);
    }
    break;
  default:
    console.log("Please specify a valid operation: add, subtract, multiply, divide");
}
