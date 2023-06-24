// node -r dotenv/config env.js can be run at prompt if require is omitte
require("dotenv").config();

console.log(process.env.NAME);
console.log(process.env.PROFESSION);
console.log("I am learning the fundamentals of", process.env.COURSE);

