const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }
  if (response.statusCode !== 200) {
    console.log(`Error: ${response.statusCode}`);
    return;
  }

  fs.writeFile(path, body, (err) => {
    if (err) {
      console.log(`Error: ${err}`);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});
