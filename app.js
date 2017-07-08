'user strict';
//setting up interface
const Readline=require('readline');
//creating interface
const rl=Readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    terminal:false
});

//creating prompt
rl.setPrompt('> ');
rl.prompt();

//creating event listener
rl.on('line',reply=>{
    console.log(`You said ${reply}`);
})