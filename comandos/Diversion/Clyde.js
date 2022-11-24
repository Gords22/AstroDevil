module.exports = {
  name: "clyde",
  code: `$image[1;$jsonRequest[https://nekobot.xyz/api/imagegen?type=clyde&text=$uri[$message;encode];message;⚠️** | Oh oh a ocurrido un error**]]
$addTimestamp[1;$dateStamp]
$color[1;RANDOM]`
} 