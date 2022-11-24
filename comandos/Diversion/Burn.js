module.exports = {
  name: "burn",
  code: `$image[1;https://luminabot.xyz/api/image/burn?text=$uri[$message;encode]]
$color[1;RANDOM]
$addTimestamp[1]
$onlyIf[$message!=;**⚠️ | Escribe un texto**]`
} 