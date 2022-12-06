module.exports = {
  name: "bug",
  usage: "bug <Reporte detallado del bug>",
  code: `
$dm[$botOwnerID]
$title[1;Nuevo Bug]
$addField[1;Bug:;$message;no]
$color[1;0000ff]
$thumbnail[1;$authorAvatar]
$addField[1;Servidor:;$serverName[$guildID];no]
$addField[1;Mandado por:;$userTag;no]
$addField[1;Hora de envio:;<t:$truncate[$divide[$dateStamp;1000]]:D>;no]
$channelSendMessage[$channelID;**✅ | Tu reporte a sido enviado a mi equipo de soporte, puede ser que recibas un DM, Contestado por mi creador**;no]
$cooldown[5m;$replaceText[⚠️** | Puedes volver a usar este comando en \`%min%m, %sec%s\`**;0m;]]
$onlyIf[$message!=;⚠️** | Escribe un reporte o bug**]

`
}