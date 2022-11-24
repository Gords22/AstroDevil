module.exports = {
  name: "command-info",
  aliases: ["info", "command"],
  code: `$title[1;❔ | Ayuda de Comandos]
$color[1;0000ff]
$thumbnail[1;$userAvatar[$clientID]]
$addField[1;Uso:;\`$getServerVar[prefix]$commandInfo[$message;uso]\`;no]
$addField[1;Alias:;\`$replaceText[$replaceText[$checkCondition[$commandInfo[$message;aliases]==];true;No tiene alias];false;$commandInfo[$message;aliases]]\`;no]
$addField[1;Descripcion:;\`$replaceText[$replaceText[$checkCondition[$commandInfo[$message;des]==];true;Sin descripcion aun];false;$commandInfo[$message;des]]\`;no]
$addField[1;Nombre:;\`$commandInfo[$message;name]\`;no]
$addTimeStamp[1]
$onlyIf[$commandInfo[$message;name]!=;⚠️** | Ese comando no existe**]`
} 