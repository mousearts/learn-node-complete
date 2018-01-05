// Fetching function
var getUserSync = require("./getUserSync");

/*
    Fetch the user,
    require to go to the database, not I/O operation to fetch user by ID.


*/
var user1 = getUserSync("123");
console.log("user1", user1);

/*
    Waiting till user 1 Complete
    Fetch the user,
    require to go to the database, not I/O operation to fetch user by ID.

    
*/

var user2 = getUserSync("321");
console.log("user2", user2);

/*
    Process will wait until user2 are processed
        
*/

var sum = 1 + 2;
console.log("The sum is " + sum);

/*
    It's called blocking because application cannot do anything else, and idle.
*/
