var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var kermit = chalk.green("It's not easy being green");
console.log(kermit);

var rainbow = chalk.bgRed("Some") + chalk.yellow("where") + chalk.green(" over") + chalk.blue(" the") + chalk.magenta.bgRed(" rainbow");
console.log(rainbow);

