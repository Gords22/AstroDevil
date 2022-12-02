module.exports = {
  name: "trump",
  code: `$image[1;$jsonRequest[https://nekobot.xyz/api/imagegen?type=trumptweet&text=$uri[encode;$message];message;⚠️** | Oh oh a ocurrido un error**]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]`
} 