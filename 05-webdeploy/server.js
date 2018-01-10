const express = require("express");

/* 
    Handle bar view engine for express
*/
const hbs = require("hbs");

var app = express();

// Support Partial Rendering
hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

// Middleware of express
app.use(express.static(__dirname + "/public"));

/*
    Creating route for express,
    Need two arguments,
    1.  Route
    2.  Function to run, what will they get from request.

*/
app.get("/", (req, res) => {
  // Send as HTML
  //   res.send("<h1>Hello Express!</h1>");
  // Send as JSON
  //   res.send({
  //     name: "David",
  //     likes: ["A", "B"]
  //   });

  res.render("home.hbs", {
    pageTitle: "Homepage",
    welcomeMessage: "Welcome to my website",
    currentYear: new Date().getFullYear()
  });
});

app.get("/about", (req, res) => {
  // send request as HTML
  //   res.send("About page");

  // rendering HBS file
  res.render("about.hbs", {
    pageTitle: "About Page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Unable to handle request"
  });
});

/*
    Listen argument have two arguments
    1. Port Number (required),
    2. Function (optional)
*/

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
