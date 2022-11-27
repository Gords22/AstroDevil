module.exports = (bot) => {
bot.status({
  text: "Astro || v$getVar[version]",
  type: "COMPETING",
  time: 12
})

bot.status({
  text: "$serverCount Servidores y $allMembersCount Usuarios",
  type: "WATCHING",
  time: 12
})
}