module.exports = ({
  name: "eval",
  aliases: "e",
  error: `$channelSendMessage[$channelID;error: $error]
$title[1;Ocurrio un error]
$description[1;__Interpretador del error__
$error]
$color[1;RED]
$addTimeStamp[1]`,
  code: `$eval[$message;no]
 $onlyif[$message!=;Escribe algo]
$onlyForIDs[$botOwnerID;]`
})