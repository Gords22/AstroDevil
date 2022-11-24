module.exports = {
  name: "reverse",
  code: `$title[1;Texto revertido]
$addField[1;Texto revertido:;$jsonRequest[https://luminabot.xyz/api/text/reverse?text=$uri[$message;encode];reversed;⚠️** Oh oh a ocurrido un error**];no]
$addField[1;Texto original:;$message;no]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]`
}