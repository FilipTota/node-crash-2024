console.log("process :>> ", process);

// argv property
console.log("process.argv :>> ", process.argv);
console.log("process.argv[3] :>> ", process.argv[3]);

// process.env
console.log("process.env :>> ", process.env);
console.log("process.env.USERNAME :>> ", process.env.USERNAME);

// pid -> nodejs process id
console.log("process.pid :>> ", process.pid);

// cwd -> current working directory
console.log("process.cwd() :>> ", process.cwd());

// title -> string that represents the title of nodejs process
console.log("process.title :>> ", process.title);

// memoryUsage()
console.log("process.memoryUsage() :>> ", process.memoryUsage());

// uptime() -> time from when you run the command to the sript executing
console.log("process.uptime() :>> ", process.uptime());

// on() -> register process event listeners
process.on("exit", (code) => console.log(`About to exit with code: ${code}`));

// exit() ->
process.exit(0);
console.log("Hello from after exit"); // -> does not get logged because it exits the process
