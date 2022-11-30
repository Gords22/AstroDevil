module.exports = {
  name: "user-info",
  aliases: ["userinfo"],
  code: `$title[1;Informacion de Usuario]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[$findMember[$message]]]
$addField[1;Tiene Banner?;$replaceText[$replaceText[$checkCondition[$getUserBanner[$findMember[$message]]!=null];false;No tiene banner personalizado (imagen abajo)];true;Si Tiene banner Personalizado (imagen abajo)];no]
$addField[1;Roles del Usuario;$userRoles[$findMember[$message];$guildID;mention;, ];no]
$addField[1;Fecha de creacion de la cuenta;$creationDate[$findMember[$message];date];no]
$addField[1;Miembro desde?;$formatDate[$memberJoinedDate[$findMember[$message];$guildID];MM/DD/YYYY, hh:mm:ss A];no]
$addField[1;Estado Personalizado;$replaceText[$getCustomStatus[$findMember[$message];$guildID;emoji];none;] $replaceText[$getCustomStatus[$findMember[$message];$guildID;state];none;Sin estado];no]
$addField[1;Actividad;$replaceText[$replaceText[$activity[$guildID;$findMember[$message]];Custom Status;Estado Personalizado];none;Ninguno];no]
$addField[1;Platforma;$replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;Ninguna];web;🌐 | Web];mobile;📱 | Telefono];desktop;💻 | PC];no]
$addField[1;Es bot?;$replaceText[$replaceText[$isBot[$findMember[$message]];true;🤖 | Si es bot];false;👤 | No es bot];no]
$addField[1;Estado;$replaceText[$replaceText[$replaceText[$replaceText[$status[$findMember[$message]];dnd;🔴 | No molestar];idle;🟡 | Ausente];offline;⚪ | Invisible / Desconectado];online;🟢 | En linea];no]
$description[1;**Nombre:** $username[$findMember[$message]]
**Apodo:** $replaceText[$replaceText[$checkCondition[$nickname[$findMember[$message]]==];true;Sin Apodo];false;$nickname[$findMember[$message]]]
**Tag:** #$discriminator[$findMember[$message]]
**ID:** $findMember[$message]]
$image[1;$replaceText[$replaceText[$checkCondition[$getUserBanner[$findMember[$message]]!=null];false;https://i.ibb.co/Jx7rJvK/Smart-Select-20220314-191216-Gallery.jpg];true;$getUserBanner[$findMember[$message]]]]
`
}