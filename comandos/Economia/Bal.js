module.exports = {
  name: "bal",
  code: `$djsEval[(async () => {
const megadb = require("megadb")
const eco = new megadb.crearDB("economia")
const Discord = require("discord.js")

const wallet = await eco.obtener("$guildID.$findMember[$message].efectivo")

const bank = await eco.obtener("$guildID.$findMember[$message].banco");

const existe = await eco.tiene("$guildID.$findMember[$message]")
if(!existe){
message.channel.send("⚠️** | Este usuario aun no esta en la economia**")
}else{
let embed = new Discord.MessageEmbed()
.setAuthor("$userTag[$findMember[$message]]", "$userAvatar[$findMember[$message]]")
.addField("Efectivo:", "$"+wallet, false)
.addField("Banco:", "$"+bank, false)
.addField("Total:", "$"+parseInt(wallet+bank))
.setColor("RANDOM")

message.channel.send({ embeds: [embed] })
}

})()]
$onlyIf[$isBot[$findMember[$message]]!=true;⚠️** | Los bots no tienen economia**]
`
}