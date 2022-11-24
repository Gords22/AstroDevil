module.exports = {
  name: "baguette",
  code: `$image[1;$jsonRequest[https://nekobot.xyz/api/imagegen?type=baguette&url=$replaceText[$userAvatar[$findMember[$message]];webp;png];message;⚠️** | Oh oh a ocurrido un error**]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
$sendMessage[**<a:loading:859418130820759595> | Generando imagen por favor espere (tiempo estimado 3s - 5s)...**{delete:4s}]`
} 