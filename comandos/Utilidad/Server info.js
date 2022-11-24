module.exports = {
  name: "server-info",
  aliases: ["serverinfo"],
  code: `$title[1;Informacion del servidor]
$color[1;RANDOM]
$thumbnail[1;$serverIcon]
$addField[1;Fecha de creacion del servidor;$creationDate[$guildID;date];no]
$addField[1;Propietario;<@$ownerID>;no]
$addField[1;Nivel de Verificacion del servidor;$replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;NONE;⚪ | Ninguna];LOW;🟢 | Baja];HIGH;🟡 | Alta];VERY_HIGH;🔴 | Muy Alta];no]
$addField[1;Numero de Canales:;Total: $channelCount[$guildID]
Texto: $channelCount[$guildID;Text]
Voz: $channelCount[$guildID;Voice]
Categorias: $channelCount[$guildID;Category];no]
$addField[1;Numero de Usuarios:;Total: $membersCount
Humanos: $membersCount[$guildID;all;no]
Bots: $botCount;no]
$addField[1;Numero de Roles:;$roleCount[$guildID;yes];no]
$addField[1;Numero de Emojis:;$emojiCount[$guildID]]
$addField[1;General:;Nombre: $serverName
ID: $guildID;no]
$addTimeStamp[1]
`
} 