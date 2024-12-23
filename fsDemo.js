// import fs from "fs";
import fs from "fs/promises";

// readFile() - callback version (there is also Promise version), this is asynchronous
// fs.readFile("./test.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log("data1 :>> ", data);
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log("data :>> ", data);

// readFile() - Promise version
// fs.readFile("./test.txt", "utf-8")
//   .then((data) => console.log("data :>> ", data))
//   .catch((error) => console.log("error :>> ", error));

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log("data :>> ", data);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, I'm writing to this file");
    console.log("File written to...");
  } catch (error) {
    console.log("error :>> ", error);
  }
};

// appendFile() - to add somethinf to a file and not overwrite it we use appendFile
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended text");
    console.log("File appended to...");
  } catch (error) {
    console.log("error :>> ", error);
  }
};

writeFile(); // writeFile will overworte what was there
appendFile();
readFile();
