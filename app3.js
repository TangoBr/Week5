var game = {win:0 , loss:0};

var choices = ["rock", "paper", "scissors"]

var random1 = Math.floor(Math.random() * 3);
var random2 = Math.floor(Math.random() * 3);

// console.log(random1, random2);

var bot1 =choices[random1];
var bot2 =choices[random2];
console.log(bot1, bot2);

if (bot1 === "rock")  {
    if (bot2 === "scissors") {
        game.win++;
    } else if (bot2 === "paper") {
        game.loss++;
    }
} else if (bot1 === "paper"){
    if (bot2 === "rock") {
        game.win++;
    } else if (bot2 === "scissors") {
        game.loss++;
    }
} else {
    if (bot2 === "rock") {
        game.loss++;
    } else if (bot2 === "paper") {
        game.win++;
    }
}

var results = "" ;

if (game.win >= 1){
    results = "bot1" + " " + "beats" + " " + "bot2";
} else if (game.loss >= 1) {
    results = "bot2" + " " + "beats" + " " + "bot1";
} else {
    results = "tie game";
}

console.log(results);

// if (random1 === 0) {
//     random1 = "rock"
// } else if (random1 === 1) {
//     random1 = "paper"
// }else {
//     random1 = "scissors"
// };

// if (random2 === 0) {
//     random2 = "rock"
// } else if (random2 === 1) {
//     random2 = "paper"
// }else {
//     random2 = "scissors"
// };


// console.log(random1)

var compare = function(bot1, bot2){
    if(bot1 === bot2)
    return "Result is a tie"
};