//importing Bot class
const keepAlive = require("../server");
const { Bot } = require("./Structures/Client");


//client
const client = new Bot();



//initialising client
client._init();




keepAlive();