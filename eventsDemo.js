import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

const greetHandler = (name) => {
  console.log(`Hello world ${name}`);
};
const goodbyeHandler = () => {
  console.log("Goodbye World");
};

// Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit events
myEmitter.emit("greet", "John"); // -> we can also pass data with the event
myEmitter.emit("goodbye");

// Error events
myEmitter.on("error", (err) => console.log("An Error Occured: ", err));
// Similate error
myEmitter.emit("error", new Error("Something went wrong"));
