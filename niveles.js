const megadb = require("megadb")
const db = new megadb.crearDB("niveles")
const discord = require("discord.js")

module.exports = {
  getRank: (users, message) => {

let userlist = []

for(var key in users){
let usuarios = message.guild.members.has(key) ? message.guild.members.get(key).user.tag : `salio (${key})`
}

userlist.push([usuarios, users[key].level, users[key].xp])

userlist.sort((user1, user2) => {
return user2[1] - user1[1] || user2[2] - user1[2]
})
    
return userlist

}
}