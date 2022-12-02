module.exports = {
  name: "clyde",
  code: `$description[1;Clyde ha hecho un anuncio!]
  $image[1;$jsonRequest[https://nekobot.xyz/api/imagegen?type=clyde&text=$uri[$message;encode];message;⚠️** | Oh oh ah ocurrido un error**]]
$addTimestamp[1;$dateStamp]
$color[1;RANDOM]
$onlyIf[$message!=;**⚠️ | Escribe un mensaje**]`
} 