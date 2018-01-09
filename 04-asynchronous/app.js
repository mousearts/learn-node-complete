// const request = require("request");

const yargs = require("yargs");

const geocode = require("./geocode/geocode");

const weather = require("./weather/weather");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      // To insert as string
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

// console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);

    weather.getWeather(
      results.latitude,
      results.longitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(
            `It's currently ${weatherResults.temperature}. It feels like ${
              weatherResults.apparentTemperature
            }.`
          );
          //   console.log(JSON.stringify(weatherResults, undefined, 2));
        }
      }
    );
    // console.log(JSON.stringify(results, undefined, 2));
  }
});

// weather.getWeather(
//   -6.212558599999999,
//   106.851763,
//   (errorMessage, weatherResults) => {
//     if (errorMessage) {
//       console.log(errorMessage);
//     } else {
//       console.log(JSON.stringify(weatherResults, undefined, 2));
//     }
//   }
// );

// a6c9a8d674f254a88efb93132c76c965

// var encodedAddress = encodeURIComponent(argv.a);

// // console.log(encodedAddress);
// // 1301 lombard street

// request(
//   {
//     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//     json: true
//   },
//   (error, response, body) => {
//     if (error) {
//       console.log("Unable to connect to Google servers.");
//     } else if (body.status === "ZERO_RESULTS") {
//       console.log("Unable to find that address.");
//     } else if (body.status === "OVER_QUERY_LIMIT") {
//       console.log("Query limit");
//     } else if (body.status === "OK") {
//       console.log(`Address: ${body.results[0].formatted_address}`);
//       console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
//       console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
//     }
//     // console.log(JSON.stringify(body, undefined, 2));
//   }
// );
