module.exports = {
  name: "magik",
  code: `
$image[1;$jsonRequest[https://nekobot.xyz/api/imagegen?type=magik&image=$replaceText[$userAvatar[$findMember[$message[1]]];webp;png];message;⚠️** | Ah ocurrido un error**]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
$sendMessage[**<a:loading:859418130820759595> | Generando imagen por favor espere (tiempo estimado 18s)...**{delete:18s}]`
} 