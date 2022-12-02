module.exports = {
  name: "emojis",
  aliases: ["all-emojis"],
  code: `$title[1;Emojis del servidor]
$description[1;$serverEmojis[ | ;$guildID]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
$onlyIf[$emojiCount[$guildID]!=0;**⚠️ | Este servidor no tiene emojis**]`
} 