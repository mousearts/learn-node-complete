const request = require("request");

var getWeather = (latitude, longitude, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/a6c9a8d674f254a88efb93132c76c965/${latitude},${longitude}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      } else {
        callback("Unable to fetch weather.");
      }
    }
  );
};

module.exports = {
  getWeather
};
