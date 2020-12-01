const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (name) => {
  rl.question('What is an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.question('What is your favourite thing to eat for that meal?', (food) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (power) => {
              console.log(`Thank you for your valuable feedback: ${name} likes to do ${activity} while listening to ${music}. Her favourite food is eating ${food} on the ${meal}. She likes doing ${sport} and her superpower is ${power}. `)
              });
            });
          });
        });
      });
    });
  });