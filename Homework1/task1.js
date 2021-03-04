import readline from 'readline';

console.log("Type your input:");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    console.log(`Your input: ${line}`);
})