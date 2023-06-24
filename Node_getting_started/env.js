// node -r dotenv/config env.js can be run at prompt if require is omitte
require("dotenv").config();

console.log(process.env.NAME);
console.log(process.env.PROFESSION);
console.log("I am learning the fundamentals of", process.env.COURSE);

/*
ubuntu@ubuntu-HP:~/Desktop/environments/Node_JS_Fundamentals/Node_getting_started$ node env.js
Joab
Software Engineer
I am learning the fundamentals of Node.js
ubuntu@ubuntu-HP:~/Desktop/environments/Node_JS_Fundamentals/Node_getting_started$ 
*/