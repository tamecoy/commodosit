var out = "Hello";
var key = "World";
console.log(out || key); // Output: Hello

out = "";
console.log(out || key); // Output: World

out = null;
console.log(out || key); // Output: World

out = 0;
console.log(out || key); // Output: World
