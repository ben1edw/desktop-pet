
import carnotaurus from "./classes/carnotaurus.js";
import raptor from "./classes/raptor.js";
import Rex from "./classes/Rex.js";
import inquirer from "inquirer";
let myPet;

const start = async () => {
  const { typeOfPet } = await inquirer.prompt({
    type: "list",
    name: "typeOfPet",
    message: "please choose what type of phreastoric pet would you like ",
    choices: [
      {
        key: "a",
        name: "carnotaurus",
        value: "carnotaurus",
      },
      {
        key: "b",
        name: "raptor",
        value: "raptor",
      },
      {
        key: "c",
        name: "Rex",
        value: "Rex",
      },
    

    ],
  });
  const { petName } = await inquirer.prompt({
    type: "input",
    name: "petName",
    message: "what is you pet called?",
  });

  if (typeOfPet === "carnotaurus") {
    myPet = new carnotaurus(petName);
  } else if (typeOfPet === "raptor") {
    myPet = new raptor(petName);
  }else if (typeOfPet === "Rex") {
    myPet = new Rex(petName);
   }

  console.log(`you have a ${myPet.name}`);
  userChoice();
};

let userChoice = async () => {
  const { choice } = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: "what would you like to do?",
    choices: [
      {
        key: "a",
        name: "play with your pet(be carefull!)",
        value: "play",
      },
      {
        key: "b",
        name: "let your pet hunt !",
        value: "feed",
      },
      {
        key: "c",
        name: "give your pet a drink",
        value: "drink",
      },
      {
        key: "d",
        name: "view your pet stats",
        value: "stats",
      },
      {
        key: "e",
        name: "quit the game",
        value: "quit",
      },
    ],
  });


  if (choice === "hunt") await myPet.eats();
  if (choice === "play") await myPet.play();
  if (choice === "stats") await myPet.stats();
  if (choice === "drink") await myPet.drinks();
  if (choice === "quit") {
    const quitChoice = await confirmQuit();
    if (quitChoice) return;
  }

  myPet.stats();
  userChoice();
};

let confirmQuit = async () => {
  const { quitChoice } = await inquirer.prompt({
    type: "list",
    name: "quitChoice",
    message: "are you sure you want to quit? your dinosaur will be hit by an asteroid",
    choices: [
      {
        key: "a",
        name: "yes i'm sure",
        value: "yes",
      },
      {
        key: "b",
        name: "no i'll keep playing",
        value: "no",
      },
    ],
  });
  if (quitChoice === "yes") return true;
  else return false;
};

start();