var readlineSync=require('readline-sync');
var chalk=require('chalk');

var score=0;

// function to capitalise

function capitalise(str){
  var word = str.charAt(0).toUpperCase()+str.slice(1);
  return word;
}

// function to play
function play(que, ans){
  var userAnswer=readlineSync.question(que);
  if(capitalise(userAnswer)===ans){
    console.log(chalk.green("You are correct!\n"));
    score++
  }
  else{
    console.log(chalk.red("You are wrong!\n"));
  }
  
}

// User name entry
var userName=readlineSync.question(chalk.yellow("Please enter your name: "));
console.log('Hello ' +chalk.blue.bgWhite.bold(capitalise(userName))+ ", Let's play a quiz on how well do you know me!");

// Initiating game message
console.log(chalk.red.bgWhite.bold("\nHere we go!\n"));

// question array
var questions=[{
  question:"How old am i?  ",
  answer:"19",
}, {
  question:"What instrument do I play most? ",
  answer:"Piano",
}, {
  question:"Where do I live? ",
  answer:"Assam",
}, {
  question:"What subject am I majoring in? ",
  answer:"Computer science",
}, {
  question:"Do I wear glasses (Yes or No)? ",
  answer:"Yes",
}, {
  question:"What is my favorite game on phone? ",
  answer:"Clash royale",
}, {
  question:"What is my surname? ",
  answer:"Borah",
}, {
  question:"What instrument have I started learning recently? ",
  answer:"Guitar",
}, {
  question:"What animal as a pet am I likely to get? ",
  answer:"Dog",
}, {
  question:"Do I have braces (Yes or No)? ",
  answer:"Yes",
}]

// loop for  serving questions
for(var i=0;i<questions.length;i++){
  play(questions[i].question, questions[i].answer);
}

if(score<=3){
  console.log(chalk.red("\nYou barely know me.\n"));
}
else if(score<=6){
  console.log(chalk.orange("\nYou somewhat know me.\n"));
}
else if(score<=9){
  console.log(chalk.yellow("\nYou know me well!\n"));
}
else{
  console.log(chalk.red.bgWhite.bold("\nYou got all the answers correct, which says you really know me well! Take a screenshot of your score and send it to me!\n"));
}

// score
console.log("\n"+chalk.blue.bgWhite.bold(capitalise(userName))+", your total score is: "+ chalk.blue(score));