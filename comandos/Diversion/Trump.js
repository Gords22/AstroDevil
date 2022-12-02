module.exports = {
  name: "trump",
  code: `$description[1;Donald Trump a tweeteado algo!]
$image[1;$jsonRequest[https://nekobot.xyz/api/imagegen?type=trumptweet&text=$uri[$message;encode];message;⚠️** | Oh oh ah ocurrido un error**]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
$onlyIf[$message!=;**⚠️ | Escribe un mensaje**]`
} 