module.exports = {
  name: "ban",
  uso: "ban <@usuario> <razon (opcional)>",
  des: "Banea a un usuario",
  code: `$ban[$findMember[$message[1]];$guildID;;$replaceText[$replaceText[$checkCondition[$messageSilce[1]!=];true;$messageSlice[1]];false;Sin Razon]]
$title[1;Nuevo Baneo]
$color[1;ff0000]
$addTimeStamp[1]
$thumbnail[1;$userAvatar[$findMember[$message[1]]]]
$addField[1;Razon:;$replaceText[$replaceText[$checkCondition[$messageSilce[1]!=];true;$messageSlice[1]];false;Sin Razon especifica];no]
$addField[1;Moderador:;$userTag[$authorID];no]
$addField[1;Baneado:;$userTag[$findMember[$message[1]]];no]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];**⚠️ | Este usuario es mas alto en roles que tu**]
$onlyPerms[admin;⚠️** | No eres administrador**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1]]]];**⚠️ | Este usuario es mas alto que yo en roles**]
$onlyBotPerms[admin;** ⚠️ | No tengo suficientes permisos**]
$onlyIf[$findMember[$message[1]]!=$clientID;⚠️** | No puedes banearme a mi**]
$onlyIf[$findMember[$message[1]]!=$ownerID;**⚠️ | No puedes banear al creador del servidor**]
$onlyIf[$findMember[$message[1]]!=$authorID;**⚠️ | No puedes banearte a ti mismo**]
$onlyIf[$findMember[$message[1];no]!=;**⚠️ | Menciona a un usuario**]
`
}