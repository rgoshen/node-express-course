const { readFile } = require("fs");

//option 2 - promises
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

//option 3 = async await
const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.error(error);
  }
};

start();

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

// option 1 - if wanted to due multiple actions like read in another file and write to a file this creates callback hell
// readFile("./content/first.txt", "utf8", (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   } else {
//     console.log(res);
//   }
// });
