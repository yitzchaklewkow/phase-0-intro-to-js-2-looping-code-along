/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birhtday to me!`);
}
*/

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i =0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  
  return gifts;
}

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }

    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countDown(10);

//wrapGifts(gifts);

console.log(writeCards(["Man1", "Man2", "Woman1", "Woman2"], "wedding"));

