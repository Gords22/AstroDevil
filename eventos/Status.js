module.exports = (bot) => {
bot.status({
  text: "Astro || v$getVar[version]",
  type: "COMPETING",
  status: "dnd",
  time: 12
})

bot.status({
  text: "$serverCount Servidores y $allMembersCount Usuarios",
  type: "WATCHING",
  status: "dnd",
  time: 12
})
}