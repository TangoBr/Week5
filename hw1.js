var food = ["okra", "carrots", "kale", "spinach", "onion",  "apples", "bananas", "grapes", "oranges"];
console.log(food);
food.pop();
food.push("strawberries");
food.shift();
food.unshift("broccoli");
console.log(food);

var veggies = food.slice(0,5);
console.log (veggies);

var fruit= food.slice(5,9);
console.log (fruit);

food.splice(4,1);
console.log(food);

food.splice(2,2, "brussel sprouts");
console.log(food);

var text = "lorem, ipsum dolor sit amet consectetur adipicing elit.";
console.log(text[5]);

var pos = text.indexOf(".");
console.log(pos);

console.log(text[54]);

var lorem = text.slice(0,5);
console.log(lorem);

var chores1 = "clean, pay bills, groceries";

var chores2 = "learn JS, doctors office, pick up kids";

var allchores = chores1 + "," +chores2;
console.log(allchores);

var allchores = allchores.split(",");
console.log(allchores);