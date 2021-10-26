const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>Oooops!</h1>
  <p>We could not locate that page.</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
