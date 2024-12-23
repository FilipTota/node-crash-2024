import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

// basename() - it will return last portion of a path
console.log(path.basename(filePath));

// dirname() - it will return dir name
console.log(path.dirname(filePath));

// extname() = returns extension name
console.log(path.extname(filePath));

// parse() - give us object with all the stuff above
console.log(path.parse(filePath));

// get dirname and filename of the current file
const __filename = url.fileURLToPath(import.meta.url);
// import.meta.url ->  file:///C:/Users/Filip/Desktop/node-crash-2024/pathDemo.js
const __dirname = path.dirname(__filename);

console.log("__filename :>> ", __filename); // -> C:\Users\Filip\Desktop\node-crash-2024\pathDemo.js
console.log("__dirname :>> ", __dirname); // -> C:\Users\Filip\Desktop\node-crash-2024

// join() -> it will create a file path based on arguments passed in
// -> the reason for that that on differrent operating systems we have different delimeters
// -> Linux and Mac have paths like this: users/name
// -> and Windows has path like: users\name
// -> and join() will put correct delimeters based on arguments passed in
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log("filePath2 :>> ", filePath2);
// -> joins and constructs the path

// resolve() - same as join but it wil always be an apsolute path
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log("filePath3 :>> ", filePath3);
