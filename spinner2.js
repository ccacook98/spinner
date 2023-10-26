const baton = [ '|', '/', '-', '\\' ];
const reps = 1;
let timeDelay = 100;
let seq = 0;

for (let i = 0; i < (reps * 8); i++) {
  setTimeout(() => {
    process.stdout.write('\r' + baton[seq] + '    ');
  }, timeDelay);
  timeDelay += 200;
  if (seq < 3) {
    seq++;
  } else {
    seq = 0;
  }
}

