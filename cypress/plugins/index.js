module.exports = (on, config) => {
    // Define a custom task to log in the terminal
    on('task', {
      log(message) {
        console.log(message);  // This will print to the terminal
        return null;  // Return null as it's not required to return anything
      }
    });
  };