// lists an array of arguments passed at CL
console.log(process.argv);

// fetches the arg at the named index
console.log(process.argv.slice(2)[0]);

// fetches the arg at the named index as key value pairs
process.argv.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

// read arguments from CL and print them using minimist package
const minimist = require('minimist');

const argOne = minimist(process.argv.slice(2));
console.log(argOne.name);

const argTwo = minimist(process.argv.slice(3));
console.log(argTwo.course);


/*
ubuntu@ubuntu-HP:~/Desktop/environments/Node_JS_Fundamentals/Node_getting_started$ node argument.js --name=Joab --course=nodejs
[
  '/usr/bin/node',
  '/home/ubuntu/Desktop/environments/Node_JS_Fundamentals/Node_getting_started/argument.js',
  '--name=Joab',
  '--course=nodejs'
]
--name=Joab
0: /usr/bin/node
1: /home/ubuntu/Desktop/environments/Node_JS_Fundamentals/Node_getting_started/argument.js
2: --name=Joab
3: --course=nodejs
Joab
nodejs
ubuntu@ubuntu-HP:~/Desktop/environments/Node_JS_Fundamentals/Node_getting_started$ 
*/