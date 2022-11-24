module.exports = {
  name: "unban",
  uso: "unban <Usuario ID>",
  des: "Desbanea a un usuario del servidor",
  code: `$title[1;Nuevo Desbaneo]
$thumbnail[1;$userAvatar[$findUser[$message]]]
$addTimeStamp[1]
$addField[1;Moderador:;$userTag[$authorID];no]
$addField[1;Desbaneado:;$userTag[$findUser[$message]];no]
$color[1;ff0000]
$onlyIf[$isBanned[$findUser[$message]]!=false;⚠️** | Este usuario no a sido baneado**]
$onlyIf[$userExist[$findUser[$message]]!=false;⚠️** | Ese usuario no existe**]
$onlyIf[$findUser[$message;no]!=;⚠️** | Menciona un usuario**]
$onlyPerms[ban;⚠️** | No tienes suficientes permisos**]
$onlyBotPerms[ban;⚠️** | Yo no tengo suficientes permisos]
`
} 