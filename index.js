const aoijs = require("aoi.js")
const Discord = require("discord.js")
const levels = require("discord-xp")
const mongoose = require("mongoose")
const megadb = require("megadb")
const express = require('express');
const app = express();
const port = 3000; 
require("dotenv").config()

app.get('/', function (req, res) { 
res.send('Hello World') 
})

app.listen(port, () => console.log(`Bot Listo en http://localhost:${port}`));

let encode = "utf8"
const fss = require('fs')
function backup() {
 fss.writeFileSync('./db backup/db.sql', fss.readFileSync('./database/main/main_scheme_1.sql', {
 encode,
 undefined
 }), 
 {encoding: encode})
}
setInterval(backup, 60000)

levels.setURL(process.env.uri)

mongoose.connect(process.env.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true
}).catch((error) => {
  console.log(error)
}).then(() => {
  console.log("No hubo problema al conectar a la base de datos :D")
})

const bot = new aoijs.AoiClient({
  token: process.env.token,
  prefix: ["$getServerVar[prefix]"],
  intents: "all",
  autoUpdate: false,
  mobilePlataform: false,
  sharding: true,
  events: {
    timeout: true, 
    errorMessage: true,
    functionError: true
  },
  suppressAllErrors: false,
  fetchInvites: { 
    enabled: false, 
    cacheInviters: false 
  },
  respondOnEdit: { 
    commands: true,  
  },
  database: { 
    db: require("dbdjs.db"),
    type: "dbdjs.db", 
    path: "./database/",
    tables: ["main", "level"]
  }
})

const voice = new aoijs.Voice(bot, {
  cache: {
    cacheType: "Memory",
    enabled: true,
  },
  soundcloud : {
     likeTrackLimit : 200
   },
});

voice.onAudioError()
voice.onTrackStart()
voice.onTrackEnd()
voice.onTrackPause()
voice.onTrackResume()
voice.onQueueStart()
voice.onQueueEnd()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./comandos/")

loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
    text: ["gray", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgGreen"],
    type: ["bright", "fgWhite"],
    text: ["bright", "fgBlue"]
  },
})

const files = fss.readdirSync('./eventos').filter(file => file.endsWith('.js'))
files.forEach(x => {
 require(`./eventos/${x}`)(bot)
}); 

bot.onGuildJoin({
  channel: "",
  code: `$createApplicationCommand[$guildID;avatar;Manda el avatar de un usuario;true;CHAT_INPUT;{
"name": "Usuario",
"description": "Menciona a alguien",
"type": 6,
"required": false
}]
$suppressErrors`
})

bot.functionManager.createCustomFunction({ 
  name: "$emojify", 
  type: "djs", code: async d => { 
    const data = d.util.openFunc(d) 
      const [args] = data.inside.splits 
        if(!args) return d.aoiError.fnError(d,"custom",{ inside:data.inside }, "please provide text") 
const specialCodes = { 
  '0': ':zero:', 
  '1': ':one:', 
  '2': ':two:', 
  '3': ':three:', 
  '4': ':four:', 
  '5': ':five:', 
  '6': ':six:', 
  '7': ':seven:', 
  '8': ':eight:', 
  '9': ':nine:', 
  '#': ':hash:', 
  '*': ':asterisk:', 
  '?': ':grey_question:', 
  '!': ':grey_exclamation:', 
  ' ': ' ' 
} 
const text = args.toLowerCase().split('').map(letter => { 
  if(/[a-z]/g.test(letter)) { 
    return `:regional_indicator_${letter}:` 
  } else if (specialCodes[letter]) { 
    return `${specialCodes[letter]}` 
  } 
  return letter 
}).join('') 
  data.result = text 
    return { 
  code: d.util.setCode(data) 
} 
  } 
})

bot.functionManager.createCustomFunction({
  name: '$authorOnlyButton',
  params: ['index', 'label', 'style', 'customID', 'disabled', 'emoji'],
  type: 'aoi.js',
  code: ` 
$addButton[{index};{label};{style};{customID}_$authorID;{disabled};{emoji}]`
})

bot.functionManager.createCustomFunction({
  name: "$httpStatus",
  type: "djs",
  code: async d => {
 const data = d.util.openFunc(d)
 const [url] = data.inside.splits
 var request = require('axios');
await request.get(url).then((response) => {
 data.result = response.status
 }).catch(function(error) {
 if(error.response) {
 data.result = error.response.status
 }
 else {
 data.result = error
 }
 })
return {
 code: d.util.setCode(data)
 }
 }
 }) 

bot.readyCommand({
 channel: '',
 code: `$log[$djseval[
 require("table").table([["Ping", "$pingms"], 
 ["Desarrollador", $userTag[$botOwnerID]],
 ["Bot", $userTag[$clientID]], 
 ["Comandos cargados", client.cmd.default.size],
 ["Ping de WebSocket", client.ws.ping+"ms"], 
 ["Version", "v$packageVersion"], 
 ["Node.js","$nodeVersion"]]);yes]]`
})

console.log(`Hello from Node.js ${process.version}!`)