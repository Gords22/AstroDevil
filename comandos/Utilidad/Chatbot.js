module.exports = [{
  name: '$alwaysExecute',
  code: `$reply[$messageID;no]
$httpRequest[https://api.simsimi.net/v2/?text=$message&lc=es;GET;;success]
$botTyping
$onlyIf[$checkContains[$message;@everyone;@here]==false;⚠️** | No debes hacer eso $userTag :/**]
$onlyIf[$checkContains[$message;$getServerVar[prefix]]!=true;⚠️** | No puedo responderte si usas comandos**{delete:5s}]
$cooldown[3s;⚠️** | Un mensaje a la vez $userTag**{deletecommand}{delete:3s}]
$onlyIf[$getServerVar[chatbot]!=false;]
$onlyForChannels[$getServerVar[chatC];]`
},{
  name: "set-chatbot",
  aliases: ["chatbot"],
  $if: "v4",
  code: `$if[$message[1]==false]
$setServerVar[chatbot;false]
✅** | Chatbot desactivado**
$elseIf[$channelExists[$findChannel[$message;no]]!=true]
⚠️** | Ese canal no existe**
$endElseIf
$else
$title[1;✅ | Chatbot establecido]
$setServerVar[chatbot;true]
$setServerVar[chatC;$findChannel[$message]]
$description[1;Canal de Chat: <#$findChannel[$message]>]
$color[1;GREEN]
$addTimeStamp[1]
$endIf
$onlyIf[$message[1]!=;**El canal chatbot $replaceText[$replaceText[$checkCondition[$getServerVar[chatC]==];true;no se ah configurado];false;es <#$getServerVar[chatC]>]**]
`
}]