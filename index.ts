#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.yellow(`
╔╦╗┌─┐┬  ┬┌─┐┬  ┌─┐┌─┐┌─┐┌┬┐  ┌┐ ┬ ┬  ╦ ╦╔═╗╔═╗ ╔═╗╦═╗  ╔═╗╔═╗╦  ╔═╗╔╦╗
 ║║├┤ └┐┌┘├┤ │  │ │├─┘├┤  ││  ├┴┐└┬┘  ║║║╠═╣║═╬╗╠═╣╠╦╝  ╠═╣╚═╗║  ╠═╣║║║
═╩╝└─┘ └┘ └─┘┴─┘└─┘┴  └─┘─┴┘  └─┘ ┴   ╚╩╝╩ ╩╚═╝╚╩ ╩╩╚═  ╩ ╩╚═╝╩═╝╩ ╩╩ ╩                                                                                    
`)
);

console.log(chalk.green.bold("========== Rules of the GAME =========="));
console.log("* Guess the Number from 1 to 10.");
console.log("* You have 3 lives.");
console.log("* If you Guessed correct, You earned 10 points.");
console.log("* Your Final Score will show in the End.");
console.log(chalk.green.bold("======================================="));

async function game() {
  let guessNumber = Math.round(Math.random() * 10);
  let repeat = true;

  while (repeat) {
    let points = 0;
    for (let i = 3; i > 0; ) {
      let user = await inquirer.prompt([
        {
          type: "number",
          name: "One",
          message: "Guess the number: ",
        },
      ]);
      if (guessNumber === user.One) {
        points += 10;
        console.log(
          `${chalk.yellow.bold("Congrats!")} you earned ${points} points.`
        );
      } else {
        i--;
        if (i != 0) {
          console.log(
            `${chalk.magenta.bold.underline(
              "Try Again!"
            )} you have ${chalk.bold(i)} lives remaining`
          );
        }
      }
    }
    console.log(chalk.cyan.bold(`Your final score is ${points}`));

    let again = await inquirer.prompt([
      {
        type: "confirm",
        name: "ask",
        message: "Do you want to continue?",
      },
    ]);
    repeat = again.ask;
    if (!repeat) {
      console.log(chalk.green.bold("Thank you for playing the GAME."));
    }
  }
}
game();
