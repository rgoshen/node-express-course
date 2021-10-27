//option 5 - fs.promises
const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    // second argument is the data you want written into the file
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.error(error);
  }
};
//option4 - util promisify

// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf8");
//     const second = await readFilePromise("./content/second.txt", "utf8");
//     // second argument is the data you want written into the file
//     await writeFilePromise(
//       "./content/result-mind-grenade.txt",
//       `THIS IS AWESOME: ${first} ${second}`
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.error(error);
//   }
// };

start();

// option 1 - if wanted to due multiple actions like read in another file and write to a file this creates callback hell
// readFile("./content/first.txt", "utf8", (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   } else {
//     console.log(res);
//   }
// });

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

//option 2 - promises
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// };

//option 3 = async await
// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first, second);
//   } catch (error) {
//     console.error(error);
//   }
// };
