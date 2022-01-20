const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("Can't find this cat breed!", null);
    }
    console.log(data[0].description);
  });
};

module.exports = { fetchBreedDescription };