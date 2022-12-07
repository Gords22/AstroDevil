const aoijs = require("aoi.js")
const Discord = require("discord.js")
const levels = require("discord-xp")
const mongoose = require("mongoose")
const megadb = require("megadb")
const express = require('express');
const app = express();
const port = 3000; 
require("dotenv").config()
const aoimongo = require("aoi.mongo")
let encode = "utf8"
const fss = require('fs')
const { NekoBot } = require("nekobot-api")
 
const api = new NekoBot()

app.get('/', function (req, res) { 
res.send('Hello World') 
})

app.listen(port, () => console.log(`Bot Listo en http://localhost:${port}`));

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
  mobilePlataform: true,
  sharding: true,
  events: {
    timeout: true,
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
    db: aoimongo,
    type: "aoi.mongo", 
    path: process.env.uri,
    tables: ["main"]
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

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./comandos/")
loader.load(bot.cmd, "./Interacciones/")

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
 require(`./eventos/${x}`)(bot, voice)
}); 

bot.functionManager.createCustomFunction({
  name: '$authorOnlyButton',
  params: ['index', 'label', 'style', 'customID', 'disabled', 'emoji'],
  type: 'aoi.js',
  code: ` 
$addButton[{index};{label};{style};{customID}_$authorID;{disabled};{emoji}]`
})

bot.readyCommand({
 channel: '',
 code: `$log[Estoy listo :D]`
})

console.log(`Hello from Node.js ${process.version}!`)