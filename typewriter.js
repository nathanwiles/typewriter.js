const typewriter = function(text, step = 50, initialDelay) {
  let delay = initialDelay || 0;
  // loop through each character in the string
  for (const char of text) {
    setTimeout(() => {
      process.stdout.write(char); // print the chars on same line.
    }, (delay += step)); // set and increase the delay by 50ms for each character
  }
  setTimeout(() => {
    process.stdout.write("\n"); // move to new line when done.
  }, delay); // delay is the total time it takes to print the string.
  return delay;
};


const string = "hello there from lighthouse labs";


const thisTextFirst = typewriter(string); // default 50ms delay
const thisTextSecond = typewriter("this is an example of a different string, a little slower", 75, thisTextFirst);
const thisTextThird = typewriter("this is an example of yet another string, faster.", 40, thisTextSecond);
//typewriter(string, 100, thisTextSecond); // default 50ms delay); // optional custom delay
