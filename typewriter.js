const typewriter = function(text) {
  let delay = 0;
  // loop through each character in the string
  for (const char of text) {
    setTimeout(() => {
      process.stdout.write(char); // print the chars on same line.
    }, (delay += 50)); // set and increase the delay by 50ms for each character
  }
  setTimeout(() => {
    process.stdout.write("\n"); // move to new line when done.
  }, delay); // delay is the total time it takes to print the string.
};

const string = "hello there from lighthouse labs";


typewriter(string);
