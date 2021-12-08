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