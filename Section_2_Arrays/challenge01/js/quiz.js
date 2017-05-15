/*jslint white: true, sloppy: true, maxerr: 1000*/
//ask series of 3 questions and evaluate answer
//keep track of questions answered
//keep track of questions answered wrong -- "You answered *userAnswer*, the correct answer is *correctAnswer*"
var qa = [
    ['How many states are there in the USA?', '50'],
    ['How many letters are there in the alphabet?', '26'],
    ['What is 10 x 10?', '100']
];
var i;
var userAnswer = [];
function print(message) {
    document.write(message);
}
print(userAnswer);

for (i = 0 ; i <3; i+=1){
    userAnswer.push(prompt(qa[i][0]));
    print(userAnswer);

}
