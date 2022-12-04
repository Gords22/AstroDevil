module.exports = [{
  name: "set welcome",
  aliases: ["welcome","set-welcome"],
  code: `$setTimeout[welcomer;3m;{
    "messageId": "$get[msgId]"
  };false;false]
$setServerVar[messageId;$get[msgId]]
$let[msgId;$sendMessage[{
  "embeds": "{newEmbed:{title:Configuracion de Bienvenida}{description:Que deseas configurar?}{footer:Selecciona un Boton}{color:RANDOM}}",
  "components": "{actionRow:{button:Canal:3:canal_$authorID}{button:Mensaje:3:mensaje_$authorID}{button:Fondo:3:fondo_$authorID}}"
};yes]]
$onlyPerms[admin;⚠️** | No eres administrador**]`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Configuracion de canal}{description:Menciona un canal a continuacion}{footer:Tienes 1 minuto para responder}
{color:RANDOM}}]
$awaitMessages[$channelID;$authorID;1m;everything;set-canal;⚠️** | Tu tiempo se acabo $username**{delete:5s}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
  "content": "⚠️** | Tu no puedes usar los botones**",
  "ephemeral": true,
  "options": {
    "interaction": true
  }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==canal;]`
}, {
  name: "set-canal",
  type: "awaited",
  code: `$editMessage[$getServerVar[messageId];{newEmbed:{title:✅ | Canal configurado correctamente}{description:Canal configurado como: 
<#$findChannel[$message]>}{color:RANDOM}}]
$setServerVar[canalWel;$findChannel[$message[1]]]
$deleteCommand
$onlyIf[$serverChannelExists[$findChannel[$message;false]]!=false;⚠️** | Ese canal no es valido**]`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Configuracion del mensaje}{description:Escribe un mensaje para las bienvenidas
**Puedes usar estas siglas para tu comando:**
\`user.tag, user.mention, server.name, user.name, members.count\`}{color:RANDOM}{footer:Tienes 2 minutos para responder}}]
$awaitMessages[$channelID;$authorID;2m;everything;set-mensaje;⚠️** | Tu tiempo se acabo $username**]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
  "content": "⚠️** | Tu no puedes usar los botones**",
  "ephemeral": true,
  "options": {
    "interaction": true
  }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mensaje;]
`
}, {
  name: "set-mensaje",
  type: "awaited",
  code: `$setServerVar[mensajeWel;$message]
$editMessage[$getServerVar[messageId];{newEmbed:{title:✅ | Mensaje configurado correctamente}{description:Mensaje configurado como: 
$message}{color:RANDOM}}]
$deleteCommand
`
},{
  name: "fondo",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Configuracion del fondo}{description:Proporciona un link de alguna imagen para el fondo}{field:Formatos validos:\`png, jpg, jpeg\`:no}{color:RANDOM}{footer:Debes responder en 1 minuto}}]
$awaitMessages[$channelID;$authorID;1m;everything;set-fondo;⚠️** | Tu tiempo se acabo $username**]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
  "content": "⚠️** | Tu no puedes usar los botones**",
  "ephemeral": true,
  "options": {
    "interaction": true
  }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==fondo;]`
}, {
  name: "set-fondo",
  type: "awaited",
  code: `$setServerVar[fondoWel;$message]
$editMessage[$getServerVar[messageId];{newEmbed:{title:✅ | Fondo configurado correctamente}{description:Vista previa abajo}{image:$message[1]}{color:RANDOM}}]
$onlyIf[$isValidImageLink[$messge[1]]!=false;⚠️** | Debes poner un link de imagen valido**]
$onlyIf[$isValidLink[$message[1]]!=false;⚠️** | Debe ser un link $username**]`
},{
  name: "welcomer",
  type: "timeout",
  code: `$deleteServerVar[messageId]`
}]