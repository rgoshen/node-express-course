const EventsEmitter = require("events");

const customEmitter = new EventsEmitter();

// on - listen for an event
// emit - emit an event
// order matters - listen for even first and then emit it
// can have as many listeners as you want

// listener
customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id ${id}`);
});

// listener
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

// emitter
customEmitter.emit("response", "john", 34);
