const request = require('request');

const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];

// console.log('BEFORE writeFile call');

// fs.writeFile("./test_async.txt", "h3ll0 file!\n", (error) => {
//   if (error) {
//     // Handle error
//     console.log("Failed to write to file");
//     return;
//   }
//   // Success!
//   console.log("Successfully wrote to file");
// });

// console.log('AFTER writeFile call');


// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


//Downloaded and saved 1235 bytes to ./index.html.

const fetcher = function(url, filePath) {

  request(url, function (error, response, body) {
    if (error) {
      console.log('error', error);
    } else {
      fs.writeFile(filePath, body, (errorTwo) => {
        if(errorTwo) {
          console.log('Failed to write to File');
        }
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      });
    }
  });

};

fetcher(url, filePath);
