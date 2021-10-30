// basic express server

const express = require("express");
const app = express();
// or
// const app = require("express")();

const PORT = 5001;

app.get("/", (req, res) => {
  res.status(200).send(`<h1>HOME PAGE</h1>`);
});

app.get("/about", (req, res) => {
  res.status(200).send(`<h1>ABOUT PAGE</h1>`);
});

app.all("*", (req, res) => {
  res.status(404).send(`
  <h1>404</h1>
  <p>Could not find the page you are looking for.</p>
  <a href="/">Return home</a>
  `);
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}...`);
});
