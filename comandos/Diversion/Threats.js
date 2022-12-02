module.exports = {
  name: "threats",
  code: `$image[1;$jsonRequest[https://nekobot.xyz/api/imagegen?type=threats&url=$replaceText[$userAvatar[$findMember[$message]];webp;png];message;⚠️** | Oh oh ah ocurrido un error**]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]`
} 