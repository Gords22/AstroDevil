module.exports = {
  name: "prefix",
  code: `$setServerVar[prefix;$message[1]]
$title[1;⚠️ | Cambio de prefix]
$description[1;Si olvidas tu prefix puedes mencionarme y yo te mostrare los datos que necesitas 🙃]
$addField[1;Antiguo prefix:;\`$getServerVar[prefix]\`;no]
$addField[1;Nuevo Prefix:;\`$message[1]\`;no]
$addTimeStamp[1]
$footer[1;Cambiado por $userTag]
$color[1;YELLOW]
$onlyPerms[admin;⚠️** | No tienes suficientes permisos para realizar esta accion]
$cooldown[5m;⚠️** | Puedes volver a usar este comando en \`%min%m, %sec%s\`, por favor ten paciencia**]
$onlyIf[$message[1]!=;**🙂 Holaaa <@$authorID>, mi prefix para este servidor es \`$getServerVar[prefix]\`, puedes usar el siguiente formato para cambiarlo:** 
\`\`\`
$getServerVar[prefix]prefix <prefijo>
\`\`\`]
$onlyIf[$message[1]!=$getServerVar[prefix];⚠️** | Ese ya es mi prefijo**]
`
}