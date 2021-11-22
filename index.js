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
//

//ITEMS//
//creates class of items that are
//readable
class inventory {
  constructor(item, descriptionText, takeable, taken, fillable, filled) {
    this.item = item;
    this.descriptionText = descriptionText;
    this.takeable = takeable;
    this.taken = taken;
    this.fillable = fillable;
    this.filled = filled;
  }
  //reads description attached to items
  look() {
    return this.descriptionText;
  }
  //if the boolean is true for the item being takeable, player adds it to inventory
  take() {
    if (this.takeable) {
      player.inventory.push(this.item);
      this.taken = true;
      return "You have picked up " + this.name + ".";
    } else if (this.taken === true) {
      return `${this.item} is already in your inventory.`;
    } else {
      return "You can't take " + this.item + ".";
    }
  }
  //fills item with liquid
  fill() {
    if (this.fillable) {
      this.filled = true;
      return (
        "You have filled " + this.item + " with water from Lake Champlain."
      );
    } else {
      return "You can't fill a" + this.item + " silly.";
    }
  }
  //empties a filled item
  empty() {
    if (this.filled === true) {
      this.filled = false;
      return "You have emptied the " + this.item + ".";
    } else {
      return this.item + "isn't full of anything. It can't be emptied.";
    }
  }
  //drop item
  drop() {
    player.inventory.splice(player.inventory.indexOf(this.item), 1),
      console.log("You have dropped " + this.name + ".");
    if (player.inventory.length < 1) {
      return "Your inventory is currently empty.";
    } else {
      return "Here is what you have left" + player.inventory;
    }
  }
}

let bag = new inventory(
  "Ziploc baggy",
  "When you talked to the skate bros at the skate park, they gave you this bag from the bottom of their backpack.",
  true,
  false,
  true,
  false
);

let fish = new inventory(
  "Rare Sentient Lake Fish",
  "A fish who speaks English somehow? Their name is Fido.",
  false,
  false,
  false,
  false
);

let ethanAllen = new inventory(
  "Spirit of Ethan Allen",
  "Old timey guy who haunts a boat in Lake Champlain for some reason.",
  true,
  false,
  false,
  false
);

//include a lookup table for inventory items
let inventoryKey = {
  bag: bag,
  bag: bag,
  ziploc: bag,
  "ziploc bag": bag,
  baggy: bag,
  fish: fish,
  fish: fish,
  ethanAllen: ethanAllen,
  "Ethan Allen": ethanAllen,
  "ethan allen": ethanAllen,
  "Ethan allen": ethanAllen,
  "ETHAN ALLEN": ethanAllen,
  "ethan Allen": ethanAllen,
};

//Locations//
//defines class of locations with constructors
//-Unlocked(boolean)
//-roomDescription
//-roomContents (room inventory)
// - directionals - which way you can go, boolean
//NPC - non player character to interact with (boolean)
class Location {
  constructor(
    unLocked,
    roomDescription,
    roomContents,
    north,
    south,
    east,
    west,
    NPC
  ) {
    (this.unLocked = unLocked),
      (this.roomDescription = roomDescription),
      (this.roomContents = roomContents),
      (this.north = north),
      (this.south = south),
      (this.east = east),
      (this.west = west),
      (this.NPC = NPC);
  }
  //when entering a new room, returns room description
  enter() {
    return this.roomDescription;
  }
  //function to move character into a new room
  move(directional) {
    //declares variable to hold user input
    let direction = directional;
  }
}

start();

async function start() {
  const welcomeMessage = `ECHO Aquarium.
  The aquarium is on the edge of Lake Champlain. There is a door here, 
  and behind it, you see the vague outline of a ticket booth.
  On the door is a handwritten sign.`;
  let answer = await ask(welcomeMessage);
  while (answer !== "enter" || answer !== "go in") {}
  console.log("Now write your code to make this work!");
  process.exit();
}
