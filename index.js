const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    const Guilds = client.guilds.cache.map(guild => guild.id);
    console.log(Guilds);
});


client.login(process.env.token);