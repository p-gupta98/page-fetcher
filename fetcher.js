const request = require('request');

const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];

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
