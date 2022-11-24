module.exports = {
  name: "kick",
  code: `$kick[$mentioned[1]]
$description[1;**$username[$mentioned[1]]** a sido expulsado]
$color[1;RANDOM]
$addTimestamp[1]
$addField[1;Moderador:;$userTag[$authorID];no]
$addField[1;Razon:;$replaceText[$replaceText[$checkCondition[$messageSilce[1]==];false;$messageSlice[1]];true;Sin Razon especifica];no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];**⚠️ | Este usuario es mas alto en roles que tu**]
$onlyPerms[admin;⚠️** | No eres administrador**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];**⚠️ | Este usuario es mas alto que yo en roles**]
$onlyBotPerms[admin;** ⚠️ | No tengo suficientes permisos**]
$onlyIf[$mentioned[1]!=$clientID;⚠️** | No puedes expulsarme a mi**]
$onlyIf[$mentioned[1]!=$ownerID;**⚠️ | No puedes expulsar al creador del servidor**]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | No puedes expulsarte a ti mismo**]
`
} 