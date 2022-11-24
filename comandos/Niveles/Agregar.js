module.exports = {
  name: "$alwaysExecute",
  code: `$djsEval[(async () => {
const levels = require("discord-xp")

let user = await levels.fetch("$authorID", "$guildID", true)

let hasLeveledUp = await levels.appendXp("$authorID", "$guildID", $random[5;40])

if(hasLeveledUp) {
let user = await levels.fetch("$authorID", "$guildID", true)

message.client.channels.cache.get("$getServerVar[levels]").send({ content: \`$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[msglevel];(user.mention);<@$authorID>];(user.tag);$userTag];(level);\${user.level}];(user.name);$username]\` })
}

})()]
$onlyIf[$getServerVar[level]!=false;]
$onlyIf[$toLowercase[$message]!=$getServerVar[prefix]rank;]
$cooldown[4s;]
`
}
