import http from "http";

// const PORT = 5000;
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  //   res.writeHead(500, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify({ message: "Server Error" }));
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello world</h1>");

  //   res.write("hello world");
  //   res.end("<h1>Hello world</h1>");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
