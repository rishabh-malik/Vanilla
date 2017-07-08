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
const weather= require('./weather')

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
                //get weather from api
                weather(data.entities.city,'current')
                .then(response=>{
                    console.log(response);
                    rl.prompt();
                })
                .catch(error=>{
                    console.log("There seems to be a problem");
                    rl.prompt();
                });
                break;

            case 'Exit':
                console.log("Have a great day ahead");
                process.exit(0);
                break;    
            default:{
                console.log("I didnot understand what you said")
                rl.prompt();

            }    
        }
    });
   });
