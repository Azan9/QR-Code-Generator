/* 
1. Importing inquirer npm package to get user input.
2. Importing the qr-image npm package to turn the URL entered by the user into a QR image.
3. Using the fs module to create a text file and save the user input
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_img = qr.image(url)
    qr_img.pipe(fs.createWriteStream('url_to_qr.png'));
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

