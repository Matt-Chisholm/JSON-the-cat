const url = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

const request = require('request');
request(url, (error, response, body) => {

  if (error) {
    console.log("Error!");
  }  
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("Can't find this cat breed!");
    }
      console.log(data[0].description);
});
