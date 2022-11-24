module.exports = {
  name: "leaderboard",
  aliases: ["lb"],
  code: `$djsEval[(async () => {
const levels = require("discord-xp")
const { MessageEmbed } = require('discord.js')

const rawLeaderboard = await levels.fetchLeaderboard("$guildID", 10)

if (rawLeaderboard.length < 1){
return message.channel.send("⚠️** | Este servidor no tiene tabla de clasificaciones**")
}

const leaderboard = await levels.computeLeaderboard(client, rawLeaderboard, true)

const lb = leaderboard.map(e => \`\${e.position}.\\\`\${e.username}#\${e.discriminator}\\\` | Nivel: \\\`\${e.level}\\\` | XP: \\\`\${e.xp.toLocaleString()}\\\`\`).join(\`

\`)

const embed = new MessageEmbed()
.setColor('#0000FF')
.setTimestamp()
.setDescription(\`**Top 10:**
\${lb}\`)
.setTitle('📊 | Tabla de clasificaciones')
.setThumbnail("$serverIcon")

message.channel.send({ embeds: [embed] })
})()
]
`
}