module.exports = {
  name: "set-background",
  code: `$title[1;✅ | Fondo cambiado correctamente]
$description[1;Tipo: \`$toUppercase[$message[1]]\`
Datos: $replaceText[$replaceText[$checkCondition[$message[1]==image];true;$replaceText[$replaceText[$isValidImageLink[$message[2]];false;⚠️** | El link de la imagen no es valida**];true;\`$message[2]\`]];false;\`$message[2]\`]]
$color[1;RANDOM]
$addTimeStamp[1]
$onlyIf[$getServerVar[level]!=false;⚠️** | El sistema de niveles esta desactivado**]
$onlyForIDs[$botOwnerID;]`
}