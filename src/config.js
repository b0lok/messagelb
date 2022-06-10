module.exports = {
  //bot token
  token: process.env.token,

  //bot prefix
  prefix: "=",

  //devs String[]
  devs: ["576511424554205186"],

  /* Embeds */
  Embed: {
    Color: "#FFFFFF",
    Error: "<:no:983942876411093032>",
    Succes: "<:yes:983942875421229106>",
    Denied: "<:no:983942876411093032>",
    Stuck: "<:unknown:983942877086367765>",
    Arrow: "",
    Dot: "",
    footer: "test",
  },

  /* Leaderboard */
  Leaderboard: {
    interval: 60000, //5 minutes = 300,000 | default is 5 mins
  },

  //mongodb url
  mongoDB: "mongodb+srv://youraverageuser:Password123@cluster0.jazo1.mongodb.net/Cluster0?retryWrites=true&w=majority",

  //repo url
  src: "https://github.com/Sahil1337/MessagesTracker",
};
