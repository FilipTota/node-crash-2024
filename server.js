import http from "http";

// import fs module, for files
import fs from "fs/promises";
import url from "url";
import path from "path";

// const PORT = 5000;
const PORT = process.env.PORT;

// Get current path
const __filename = url.fileURLToPath(
  import.meta.url /* this will give us a file url to whatever this file is in */
); // fileURLToPath will convert this file url into a path
const __dirname = path.dirname(__filename);
// console.log("__filename :>> ", __filename);
// console.log("__dirname :>> ", __dirname);

const server = http.createServer(async (req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  //   res.writeHead(500, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify({ message: "Server Error" }));

  // console.log("req.url :>> ", req.url);
  // console.log("req.method :>> ", req.method);

  // ROUTER example
  try {
    //  check if GET, POST...
    // if (req.method === "GET") {
    //   if (req.url === "/") {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.end("<h1>Homepage</h1>");
    //   } else if (req.url === "/about") {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.end("<h1>About</h1>");
    //   } else {
    //     // any other page will be Not Found
    //     res.writeHead(404, { "Content-Type": "text/html" });
    //     res.end("<h1>Not Found</h1>");
    //   }

    // with files
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        // __dirname/public/index.html -> using join()
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Tyhpe", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server error");
  }

  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.end("<h1>Hello world</h1>");

  //   res.write("hello world");
  //   res.end("<h1>Hello world</h1>");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
