import os from "os";
// -> we can get information about the system

// userInfo() -> gives the information about the current system user
console.log(os.userInfo());
console.log(os.userInfo().username);

// totalmem()
console.log(os.totalmem());

// freemem()
console.log(os.freemem());

// cpus() -> array with objects of every core of your system
console.log(os.cpus());
