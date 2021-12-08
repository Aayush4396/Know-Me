var readlineSync=require('readline-sync');

var userName=readlineSync.question("What's your name? ");
var score=0;

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(answer == userAnswer){
    console.log("Great");
    score++;
  }
  else{
    console.log("Better Luck next time!");
  }
}

var questions=[{
  question: "What is my fav movie?",
  answer: "DDLJ"
},{
  question: "What is my fav colour?",
  answer: "Blue"
}]

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}
console.log(userName+"'s score: "+score);

// var readlineSync = require('readline-sync');

// console.log("Welcome to the Math quiz!!");
// var userName = readlineSync.question("What's your name? ");
// var score = 0;

// function play(question, answer) {
//   var userAnswer = readlineSync.question(question);
//   if (answer == userAnswer) {
//     console.log("Great");
//     score++;
//   }
//   else {
//     console.log("Better Luck next time!");
//   }
// }

// var questions = [{
//   question: "3*3 = ",
//   answer: "9"
// }, {
//   question: "4+8+0*5 = ",
//   answer: "12"
// }, {
//   question: "10% of 10 = ",
//   answer: "1"
// }, {
//   question: "4/8+2*1.75 = ",
//   answer: "4"
// }]

// for (var i = 0; i < questions.length; i++) {
//   play(questions[i].question, questions[i].answer);
// }
// console.log(userName + "'s score: " + score);