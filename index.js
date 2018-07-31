const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.login('NDcxNjY0OTEwNzA3ODUxMjc0.DjoKSA.BGw2GOt7scurflS25iWQcOxsorE');
