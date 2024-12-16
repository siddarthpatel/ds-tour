function MyObject(name) {
    this.name = name; // Instance property
}

// Correctly add the method to the prototype
MyObject.prototype.sayHello = function() {
    return `Hello, my name is ${this.name}`;
};

// Create an instance
const obj = new MyObject('Siddarth');

console.log(obj.sayHello()); // Output: "Hello, my name is Siddarth"
