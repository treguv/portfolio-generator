const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      //if we  have an error promise is rejected
      if (err) {
        reject(err);
        //return to make sure we dont accidentally resolve the promise
        return;
      }
      //if we made it here everything went well
      resolve({
        ok: true,
        message: "File Created",
      });
    });
  });
};

//make function to copy files
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "file created",
      });
      console.log("copied successfully");
    });
  });
};

//Export functions for yse elsewhere
module.exports = {
  writeFile: writeFile,
  copyFile: copyFile,
};
