module.exports = {
  name: "work",
  code: `$djsEval[(async () => {
const megadb = require("megadb");let eco = new megadb.crearDB("economia");
const Discord = require("discord.js")

let server = message.guild.id 
let user = message.author.id 
let usuario = message.author.tag 

if(!eco.tiene("$guildID.$authorID.efectivo")){ eco.establecer("$guildID.$authorID",{efectivo: "0" , banco: "0"}); 
} 
var random = Math.floor(Math.random() * 180) 

console.log("se ha agregado "+ random + " a la cuenta de "+ user)

const embed = new Discord.MessageEmbed()
.setTitle("Comando Work!") 
.setDescription( usuario +" Ha trabajo y gano un monto de "+ random) 
.setColor("GREEN")

await eco.sumar("$guildID.$authorID.efectivo", random)

message.channel.send({ embeds: [embed] })
})()
]`
}