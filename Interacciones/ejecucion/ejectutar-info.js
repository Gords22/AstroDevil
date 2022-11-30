module.exports = [{
    name: "user-info",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{color:RANDOM}{title:Informacion de Usuario}{thumbnail:$userAvatar[$findMember[$message]]}{field:Estado:$replaceText[$replaceText[$replaceText[$replaceText[$status[$findMember[$message]];dnd;🔴 | No molestar];idle;🟡 | Ausente];offline;⚪ | Invisible / Desconectado];online;🟢 | En linea]:no}{field:Es bot?:$replaceText[$replaceText[$isBot[$findMember[$message]];true;🤖 | Si es bot];false;👤 | No es bot]:no}{field:Platforma:$replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;Ninguna];web;🌐 | Web];mobile;📱 | Telefono];desktop;💻 | PC]:no}{field:Actividad:$replaceText[$replaceText[$activity[$guildID;$findMember[$message]];Custom Status;Estado Personalizado];none;Ninguno]:no}{field:Estado Personalizado:$replaceText[$getCustomStatus[$findMember[$message];$guildID;emoji];none;] $replaceText[$getCustomStatus[$findMember[$message];$guildID;state];none;Sin estado]:no}{field:Miembro desde?:$formatDate[$memberJoinedDate[$findMember[$message];$guildID];MM/DD/YYYY, hh:mm:ss A]:no}{field:Fecha de creacion de la cuenta:$creationDate[$findMember[$message];date]:no}{field:Roles del Usuario:$userRoles[$findMember[$message];$guildID;mention;, ]:no}{field:Tiene Banner?:$replaceText[$replaceText[$checkCondition[$getUserBanner[$findMember[$message]]!=null];false;No tiene banner personalizado (imagen abajo)];true;Si Tiene banner Personalizado (imagen abajo)]:no}{description:**Nombre:** $username[$findMember[$message]]
**Apodo:** $replaceText[$replaceText[$checkCondition[$nickname[$findMember[$message]]==];true;Sin Apodo];false;$nickname[$findMember[$message]]]
**Tag:** #$discriminator[$findMember[$message]]
**ID:** $findMember[$message]}{image:$replaceText[$replaceText[$checkCondition[$getUserBanner[$findMember[$message]]!=null];false;https://i.ibb.co/Jx7rJvK/Smart-Select-20220314-191216-Gallery.jpg];true;$getUserBanner[$findMember[$message]]]}}]`
},{
    name: "avatar",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{title:Avatar de $userTag[$findMember[$interactionData[options.data[0].value]]]}{image:$userAvatar[$findMember[$interactionData[options.data[0].value]]]}{color:RANDOM}}]
   `
}]