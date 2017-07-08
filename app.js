'user strict';
//setting up interface
const Readline=require('readline');
//creating interface
const rl=Readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    terminal:false
});

const matcher= require('./matcher')

//creating prompt
rl.setPrompt('> ');
rl.prompt();

//creating event listener
rl.on('line',reply=>{
    matcher(reply,data=>{
        switch(data.intent){
            case 'Hello':
                console.log(`${data.entities.greeting} to you to`);
                rl.prompt();
                break;

            case 'CurrentWeather':
                console.log("Let me check....");
                
                rl.prompt();
                break;

            case 'Exit':
                console.log("Have a great day ahead")
                process.exit(0);
                break;    
            default:{
                console.log("I didnot understand what you said")
                rl.prompt();

            }    
        }
    });
   });
