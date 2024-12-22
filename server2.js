import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
];

// Middleware - modules of functions that have access to req and res object
// - they sit in the middle of incoming reqests and outcoming responses

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for GET /api/users/:id
const getUserByIDHandler = (req, res) => {
  // to get the user by it's ID:
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    // if user exists
    res.write(JSON.stringify(user));
  } else {
    // if user doesn't exist
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found" }));
  }
  res.end();
};

// Not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};

// Route handler fro POST /api/users
// creat new user
const createUserHandler = (req, res) => {
  let body = "";
  // Listen for data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201; // 201 -> Successful and something was created
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

// Building a simple API
// const server = createServer((req, res) => {
//   logger(req, res, () => {
//     if (req.url === "/api/users" && req.method === "GET") {
//       res.write(JSON.stringify(users));
//       res.end();
//     } else if (
//       req.url.match(/\/api\/users\/([0-9]+)/) &&
//       req.method === "GET"
//     ) {
//       // to get the user by it's ID:
//       const id = req.url.split("/")[3];
//       const user = users.find((user) => user.id === parseInt(id));
//       if (user) {
//         // if user exists
//         res.write(JSON.stringify(user));
//       } else {
//         // if user doesn't exist
//         res.statusCode = 404;
//         res.write(JSON.stringify({ message: "User not found" }));
//       }
//       res.end();
//     } else {
//       res.statusCode = 404;
//       res.write(JSON.stringify({ message: "Route not found" }));
//       res.end();
//     }
//   });
// });

// API cleanup
const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIDHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
