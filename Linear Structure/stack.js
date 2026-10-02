const stack = [];

// Add items
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);
// [10, 20, 30]

// Top item
console.log(stack[stack.length - 1]);
// 30

// Remove top item
stack.pop();

console.log(stack);
// [10, 20]
