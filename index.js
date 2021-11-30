const { lookup } = require("dns");
const readline = require("readline");
const { takeCoverage } = require("v8");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
//PLAYER INFO//
//basic class to hold info about the player, including an array that holds inventory and empty string to hold the current room info
let player = {
  name: Player1,
  inventory: [],
  currentRoom: "",
};
//ITEMS
class Inventory {
  constructor(object, takeable, objDesc){
    this.object = object,
    this.takeable = takeable,
    this.objDesc = objDesc
  }
}

let sign = new Inventory(
  "sign",
  true, 
  "A scrawled handwritten sign.\nYou have to get closer to read it."
);



start();

async function start() {
  const welcomeMessage = `ECHO Aquarium.
  The aquarium is on the edge of Lake Champlain. There is a door here, 
  and behind it, you see the vague outline of a ticket booth.
  On the door is a handwritten sign.`;
  let answer = await ask(welcomeMessage);
  console.log("Now write your code to make this work!");
  process.exit();
}
