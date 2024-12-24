import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL Object
const urlObject = new URL(urlString);
console.log("urlObject :>> ", urlObject);

// format() -> takes an object and converts it back to string
console.log("url.format(urlObject) :>> ", url.format(urlObject));

// import.meta.url -> gives us file URL
console.log("import.meta :>> ", import.meta);
console.log("import.meta.url :>> ", import.meta.url);

// fileURLToPath()
console.log(
  "url.fileURLToPath(import.meta.url) :>> ",
  url.fileURLToPath(import.meta.url)
);

// How to get search params/query params
console.log("urlObject.search :>> ", urlObject.search); // -> ?q=hello+world
const params = new URLSearchParams(urlObject.search);
console.log("params :>> ", params); // -> { 'q' => 'hello world' }
console.log("params.get('q') :>> ", params.get("q")); // -> hello world
params.append("limit", "5"); // -> adds query
console.log("params :>> ", params); // -> { 'q' => 'hello world', 'limit' => '5' }
params.delete("limit");
console.log("params :>> ", params); // -> { 'q' => 'hello world' }
