// User data
const userDataDB = {
    userId1: { name: "Andy", email: "andy@example.edu" },
    userId2: { name: "Lucy", email: "lucy@example.com" },
  };
    
  // Function to fetch user data asynchronously using Promises
  function getUserData(userId) {
    return new Promise((resolve, reject) => { // Promise object
      setTimeout(() => { 
        if (userDataDB[userId]) {
          resolve(userDataDB[userId]); //resolve() method returns a Promise object 
                                      //that is resolved with a given value
        } else {
          reject("User not found"); //reject() method returns a Promise object that 
                                    //is rejected with a given reason
        }
      }, 1000); // Simulating a delay of 1 second
    });
  }
    
  // Test
  // Valid user ID
  console.log("Test Promises");
  console.log("-------------");
  getUserData("userId1")
    .then((data) => { // The then() method returns a Promise. 
                      // It takes up to two arguments: callback functions for the success 
                      // and failure cases of the Promise.
      console.log("User Data:", data);
    })
    .catch((err) => { // The catch() method returns a Promise and deals with rejected cases only.
      console.error("Error:", err);
    });
  
  // Invalid user ID
  getUserData("userId3")
    .then((data) => {
      console.log("User Data:", data);
    })
    .catch((err) => {
      console.error("Error:", err);
    });