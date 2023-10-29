const baton = [ '|', '/', '-', '\\' ];
const reps = 1;
let timeDelay = 100;
let seq = 0;
let output = "";

const setTimer = function (string, delay) {
  setTimeout(() => {
    process.stdout.write(string);
  }, delay);
};

for (let i = 0; i <= (reps * 8); i++) {
  seq = i % 4;
  output = '\r' + baton[seq] + '    ';
  setTimer(output, timeDelay);
  timeDelay += 200;
}
