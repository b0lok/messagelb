const { green } = require("chalk");
const { Bot } = require("../Structures/Client");

/**
 *
 * @param { Bot } client
 */
module.exports = (client) => {

const Guilds = client.guilds.cache.map(guild => guild.id);
    console.log(Guilds);
  
client.user.setPresence({ activities: [{ name: `=help | ${client.guilds.cache.size} Guilds` }], status: "dnd" });
  //logging
  console.log(
    green(
      `[API]: Logged as ${client.user.username} | ${client.config.Embed.footer}`
    )
  );

console.log(`${client.guilds.cache.size} Guilds`);
};


