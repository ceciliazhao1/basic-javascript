const object = new object()

const person1={name: "ceco", hobby:"eat"}
const person2={name: "ceco", hobby:"eat"}
const person3={name: "ceco", hobby:"eat"}

console.log(person1,person2,person3)
console.table[(person1,person2,person3)]
//console.log(%c)

const deleteMe = () =>console.trace('delete it once!')

deleteMe()
deleteMe()

function feed(human){
  const { name, age, hobby } = human;
    return `FEED ${name} of ${age} and ${hobby}`;
}

// Part 1: Callbacks

// Function that simulates fetching user data asynchronously
function getUserData(userId, callback) {
    // Simulate a delay
    setTimeout(() => {
      // Simulate user data
      const userData = { name: 'John Doe', email: 'johndoe@example.com' };
  
      // Check if the user is found
      if (userId > 0) {
        callback(null, userData); // Call the callback with user data
      } else {
        callback('User not found',null); // Call the callback with an error message
      }
    }, 1000); // Simulated delay of 1 second
  }
  
  // Callback function to handle user data or errors
  function handleUserData(error, data) {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('User Data:', data);
    }
  }
  
  // Call the function with a user ID and the callback function
  getUserData(1, handleUserData);
  
  // Part 2: Promises
  
  // Refactor getUserData function to use Promises
  function getUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { name: 'Jane Smith', email: 'janesmith@example.com' };
  
        if (userId > 0) {
          resolve(userData); // Resolve with user data
        } else {
          reject('User not found'); // Reject with an error message
        }
      }, 1000);
    });
  }
  
  // Use Promises with .then() and .catch()
  getUserData(2)
    .then((data) => {
      console.log('User Data (Promise):', data);
    })
    .catch((error) => {
      console.error('Error (Promise):', error);
    });
  
  // Part 3: Error Handling with Promises
  
  // Modify getUserDataPromise to throw an error for negative user IDs
  function getUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId < 0) {
          reject('Invalid user ID'); // Reject with a custom error message
        } else {
          const userData = { name: 'Samuel Johnson', email: 'samuel@example.com' };
          resolve(userData);
        }
      }, 1000);
    });
  }
  
  // Use Promises with .then() and .catch() for error handling
  getUserData(-1)
    .then((data) => {
      console.log('User Data (Error Handling):', data);
    })
    .catch((error) => {
      console.error('Error (Error Handling):', error);
    });
  
  // Async/Await (Extra Credit)
  function getUserData(userId) {
    return new Promise((resolve, reject) => {
      // Simulate a delay
      setTimeout(() => {
        // Check if the user ID is negative and throw an error
        if (userId < 0) {
          reject('Invalid user ID'); // Reject with a custom error message
        } else {
          // Simulate user data
          const userData = { name: 'Samuel Johnson', email: 'samuel@example.com' };
          resolve(userData);
        }
      }, 1000); // Simulated delay of 1 second
    });
  }

  // Async function using await and try/catch for error handling
  async function fetchUserDataAsync(userId) {
    try {
      const data = await getUserData(userId);
      console.log('User Data (Async/Await):', data);
    } catch (error) {
      console.error('Error (Async/Await):', error);
    }
  }
  
  // Call the async function
  fetchUserDataAsync(-1);
  
