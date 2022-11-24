module.exports = {
	name: 'hole',
  aliases: ["blackhole","nuke"],
	code: `$deleteChannel[$findChannel[$message[1];yes]]
$channelSendMessage[$cloneChannel[$findChannel[$message[1]];$channel[$findChannel[$message[1]];name];yes];$randomText[Un agujero negro a absorvido el canal;Oh-oh un agujero negro a limpiado el canal;Un agujero negro a vaciado el canal]
https://c.tenor.com/UFs5ZjVTqlIAAAAM/black-hole-universe.gif;no]
$onlyBotPerms[admin;**⚠️ | No tengo suficientes permisos]
$onlyPerms[admin;**⚠️ | No puedes usar este comando, no eres administrador**]
`
}