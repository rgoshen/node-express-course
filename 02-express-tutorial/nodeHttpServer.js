const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homePageStyles = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeBrowserApp = readFileSync("./navbar-app/browser-app.js");

// server - node http module only
const host = "127.0.0.1";
const port = 5001;
const server = http.createServer((req, res) => {
  console.log("server hit");
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  const url = req.url;
  console.log(url);

  // home page
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
    // home page styles
  } else if (url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });
    res.write(homePageStyles);
    res.end();
    // home page logo
  } else if (url === "/logo.svg") {
    res.writeHead(200, {
      "content-type": "image/svg+xml",
    });
    res.write(homeLogo);
    res.end();
    // home page logic
  } else if (url === "/browser-app.js") {
    res.writeHead(200, {
      "content-type": "text/javascript",
    });
    res.write(homeBrowserApp);
    res.end();
    // about page
  } else if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>ABOUT PAGE</h1>");
    res.end();
    // 404
  } else {
    res.writeHead(404, {
      "content-type": "text/plain",
    });
    res.write("page not found");
    res.end();
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
