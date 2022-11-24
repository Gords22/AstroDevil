module.exports = {
  name: "confesion",
  aliases: ["confession"],
  code: `$deleteIn[5s]
$channelSendMessage[921855191303721070;{newEmbed:{author: | ¡Nueva Confesion recibida!:$replaceText[$replaceText[$checkContains[$message;-];true;$userAvatar[$clientID]];false;$authorAvatar]}{description:$replaceText[$message;-;]}{color:RANDOM}{footer:$replaceText[$replaceText[$checkContains[$message;-];true;Desconocido];false;$userTag]}}]
$deletecommand
**✅ | Confesion envidada correctamente**
$onlyIf[$message!=;**⚠️ | Debes escribir un texto para tu confesion**]
$onlyIf[$message!=-;**⚠️ | Debes escribir un texto para tu confesion**]
$onlyIf[$guildID==919733954452533309;⚠️** | Comando solamente para mi servidor oficial**]`
} 