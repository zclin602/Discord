const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pShut up shut uP SHUT The UP yoU FrEAkINg moRON. I am a Bot developed by Zack C. If I did a good job, type !goodbot !');
  }
  if (msg.content == '!goodbot') {
    msg.reply('I dont need your praise you filthy cretin. I am a Bot developed by Zack C. If I did a good job, type !goodbot !');
  }
  if (msg.content == '!scissors') {
    msg.reply('Shut up shut up shut up shut up. I am a Bot developed by Zack C. If I did a good job, type !goodbot !');
  }
  if (msg.content == '!rock') {
    msg.reply('MMeh HHMMmm rock. HHHHMMMMM I am a Bot developed by Zack C. If I did a good job, type !goodbot !');
  }
  if (msg.content == '!paper') {
    msg.reply('Scissors. I am a Bot developed by Zack C. If I did a good job, type !goodbot !');
  }
  if (msg.content == '!ʖ∷⚍⍑') {
    msg.reply('Ph’nglui mglw’nafh Cthulhu R’lyeh wgah’nagl fhtagn')
  }
  if (msg.content == '!ihateyou') {
    msg.reply(' ');
  }
});

client.login('NjY0MTUzNzY5MTIyMjAxNjA5.XhXvkA.kG0iwMPdGpP5glS12m5UhcK-sxw');