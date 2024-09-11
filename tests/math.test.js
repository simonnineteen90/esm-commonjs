// tests/math.test.js
import assert from 'assert';

import { multiply, divide } from '../functions/math.js';
import add from '../functions/add.js';
import subtract from '../functions/subtract.js';

// Test the 'add' function
assert.strictEqual(add(1, 2), 3, '1 + 2 should equal 3');
assert.strictEqual(add(-1, -2), -3, '-1 + -2 should equal -3');

// Test the 'subtract' function
assert.strictEqual(subtract(5, 3), 2, '5 - 3 should equal 2');
assert.strictEqual(subtract(10, 20), -10, '10 - 20 should equal -10');

// Test the 'multiply' function
assert.strictEqual(multiply(4, 5), 20, '4 * 5 should equal 20');
assert.strictEqual(multiply(0, 5), 0, '0 * 5 should equal 0');

// Test the 'divide' function
assert.strictEqual(divide(10, 2), 5, '10 / 2 should equal 5');
assert.throws(() => divide(10, 0), /Division by zero/, 'Dividing by zero should throw an error');

console.log("All tests passed successfully!");
