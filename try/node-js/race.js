const { fork } = require("child_process");

let total = 0;

for (let i = 0; i < 2; i++) {
  const child = fork("./race.js");
  child.on("message", n => total += n);
}

setTimeout(() => {
  console.log("Final total:", total);
}, 1000);
