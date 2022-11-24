module.exports = [{
  name: "slash",
  code: `listo
$createApplicationCommand[$guildID;avatar;Manda el avatar de un usuario;true;CHAT_INPUT;{
"name": "Usuario",
"description": "Menciona a alguien",
"type": 6,
"required": false
}]
$onlyForIDs[$botOwnerID;]
`
},{
  name: "delete",
  code: `listo
$deleteApplicationCommand[$guildID;$getApplicationCommandID[$message;$guildID]]`
},{
  name: "avatar",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[;{newEmbed:{title:Avatar de $userTag[$findMember[$interactionData[options.data[0].value]]]}{image:$userAvatar[$findMember[$interactionData[options.data[0].value]]]}{color:RANDOM}}]
 `
},{
  name: "ping",
  type: "interaction",
  prototype: "slash",
  code: `
  $interactionReply[PONG! mi latencia es de $ping;;;;;true]
  `
}]