module.exports = {
  name: "dep",
  code: `$djsEval[(async () => {
const Discord = require("discord.js")
const megadb = require("megadb")
const eco = new megadb.crearDB("economia")

const efectivo = await eco.obtener("$guildID.$authorID.efectivo")

const banco = await eco.obtener("$guildID.$authorID.banco"); 
if(isNaN(args[0])){ 
let solonumeros = new Discord.MessageEmbed() 
.setAuthor(message.author.username, message.author.avatarURL({ dynamic:true })) 
.setDescription(" \`? | Pon la cantidad que quieres depositar a tu Cuenta Bancaria.\`") 
.setColor("RANDOM") 
.setFooter("Cuentas con un saldo de "+ efectivo) 
return message.channel.send({ embeds: [solonumeros] }) 
} 

if(args[0] > efectivo){ 
let nomayorque = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({ dynamic:true })) 
.setDescription(" \`?\` | No puedes depositar mas de lo que tienes") 
.setColor('RANDOM') 
.setFooter("Cuentas con un saldo de "+ efectivo) 
return message.channel.send({ embeds: [nomayorque] }) 
} 

eco.sumar("$guildID.$authorID.banco", args[0]); 
eco.restar("$guildID.$authorID.efectivo", args[0]); 
const banco2 = await eco.obtener("$serverID.$authorID.banco")

let suma = banco + $message[1]

let embed = new Discord.MessageEmbed() 
.setAuthor(message.author.username, message.author.avatarURL({ dynamic:true })) 
.addField(" \`??\` | Depositaste: " + args[0] + "? en tu Cuenta Bancaria.","Tu Saldo bancario es "+suma) 
.setColor("RANDOM") 
return message.channel.send({ embeds: [embed] })

})()]
$onlyIf[$isNumber[$message[1]]!=false;⚠️** | Solo se permiten numeros**]
$onlyIf[$message[1]!=;⚠️** | Debes poner un numero o cantidad que quieras depositar**]`
}