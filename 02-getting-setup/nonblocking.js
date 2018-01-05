// Fetching function
var getUser = require("./getUser");

/*
    Starting getuser for user, not waiting until processed.

    Callback will be called later and running at the same time with another request. 
*/
getUser("123", function(user1) {
  console.log("user1", user1);
});

getUser("123", function(user2) {
  console.log("user2", user2);
});

var sum = 1 + 2;
console.log("This sum is " + sum);
