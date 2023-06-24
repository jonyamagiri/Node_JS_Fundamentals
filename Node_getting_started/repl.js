const repl = require("repl");

const local = repl.start(">> ");

local.on("exit", () => {
    console.log("... exiting REPL. Bye!");
    process.exit();
});

/*
ubuntu@ubuntu-HP:~/Desktop/environments/Node_JS_Fundamentals/Node_getting_started$ node repl.js
>> 
(To exit, press ^C again or ^D or type .exit)
>> 
... exiting REPL. Bye!
ubuntu@ubuntu-HP:~/Desktop/environments/Node_JS_Fundamentals/Node_getting_started$ 
*/