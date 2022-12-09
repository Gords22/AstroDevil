module.exports = [{
  name: "help", 
  code: `$editMessage[$get[ID];{
    "embeds": "{newEmbed:{description:Menu cerrado!}{color:0000ff}{title:❔ | Comandos de Ayuda}{timestamp:ms}}",
    "components": "{actionRow:{selectMenu:menu:Tiempo Agotado ⏱️:1:1:yes:{selectMenuOptions:Pagina Principal:men0_$authorID:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1_$authorID:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2_$authorID:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3_$authorID:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4_$authorID:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5_$authorID:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6_$authorID:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}"
  }]
  $wait[5m]
  $let[ID;$sendMessage[{
  "embeds": "{newEmbed:{description:Por Favor Selecciona una de las Categorias}{color:0000ff}{title:❔ | Comandos de Ayuda}{image:https://i.ibb.co/8jvttr8/GS20220105203811.gif}{timestamp:ms}}",
  "components": "{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0_$authorID:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1_$authorID:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2_$authorID:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3_$authorID:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4_$authorID:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5_$authorID:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6_$authorID:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}"
};yes]]
`
},{
  type: "interaction",
  name: "menu",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{description:Por Favor Selecciona una de las Categorias}{color:0000ff}{title:❔ | Comandos de Ayuda}{image:https://i.ibb.co/8jvttr8/GS20220105203811.gif}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0_$authorID:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1_$authorID:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2_$authorID:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3_$authorID:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4_$authorID:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5_$authorID:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6_$authorID:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;2]==$interactionData[author.id];{
  "content": "⚠️** | Tu no puedes usar el menu**",
  "ephemeral": true,
  "options": {
    "interaction": true
  }
}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;1]==men0;] `
},{
  type: "interaction", 
  name: "menu", 
  prototype: "selectMenu", 
  code: `$interactionUpdate[;{newEmbed:{description:
\`say           |   gay      |  wasted
grey          |  stonk     |  tictactoe
connect4      |  snake     |  simp
aki-character | aki-object |  invert
aki-animal    |  triggered |  pixelate
sepia         |  invert    |  blur
passed        |  communist |  ascii
clyde         |  horny     |  trump
magik         |  emojify   |  reverse\`}{color:RANDOM}{author: | Comandos de Diversion:$authorAvatar}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0_$authorID:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1_$authorID:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2_$authorID:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3_$authorID:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4_$authorID:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5_$authorID:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6_$authorID:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;2]==$interactionData[author.id];{
  "content": "⚠️** | Tu no puedes usar el menu**",
  "ephemeral": true,
  "options": {
    "interaction": true
  }
}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;1]==men1;]
`
},{
  type: "interaction", 
  name: "menu", 
  prototype: "selectMenu", 
  code: `$interactionUpdate[;{newEmbed:{description:
\`nuke         |   ping    |    ban
unban        |   kick    |    clear
set-welcome\`}{color:RANDOM}{author: | Comandos de Moderacion:$userAvatar[$authorID]}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0_$authorID:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1_$authorID:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2_$authorID:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3_$authorID:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4_$authorID:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5_$authorID:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6_$authorID:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;2]==$interactionData[author.id];{
  "content": "⚠️** | Tu no puedes usar los botones**",
  "ephemeral": true,
  "options": {
    "interaction": true
  }
}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;1]==men2;] 
`
},{
  type: "interaction",
  name: "menu",
  prototype: "selectMenu",
  code: `
$interactionUpdate[;{newEmbed:{description:
\`hi/hello  |   deredere   |   drunk
confused  |   hug        |   fail
banghead  |   kiss       |   facepalm
vomit     |   boom       |   nope
sleep     |   bored      |   jump
blush     |   cry        |   like
kill      |   dance      |   pout
scream    |   disgust    |   lewd
spank     |   eat        |   peek
slap      |   run        |   sing
psycho    |   sad        |   happy
slime     |   smung      |   spank
teehee    |   think      |   wag
wasted    |   yandere    |   thinking
sip       |   dab        |   fly
baka      |   bye        |   bite
cheeks    |   claps      |   cook
cuddle    |   feed       |   gaming
glare     |  handholding |   heal
highfive  |   kickbutt   |   kisscheeck
laugh     |   lick       |   pat
punch     |   scared     |   shoot
splash    |   spray      |   stare
tickle    |   tsundere   |\`}{color:RANDOM}{author: | Comandos de Interaccion o Emociones:$userAvatar[$authorID]}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0_$authorID:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1_$authorID:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2_$authorID:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3_$authorID:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4_$authorID:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5_$authorID:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6_$authorID:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;2]==$interactionData[author.id];{
  "content": "⚠️** | Tu no puedes usar el menu**",
  "ephemeral": true,
  "options": {
    "interaction": true
  }
}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;1]==men3;]
  `
},{
  type: "interaction",
  name: "menu",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{description:
\`booblob    |   boobs      |   cum
fap        |   fuck       |   pussy
anal       |   happyend   |   hentai
lewdneko   |   kuni       |   lewdkisune
suck       |\`}{color:RANDOM}{author: | Comandos NSFW:$userAvatar[$authorID]}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0_$authorID:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1_$authorID:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2_$authorID:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3_$authorID:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4_$authorID:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5_$authorID:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6_$authorID:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$channelNSFW[$channelID]!=false;{
 "content" : "⚠️** | Esta categoria solo puede verse en canal NSFW**",
 "ephemeral" : true,
 "options" : {"interaction" : true}
}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;2]==$interactionData[author.id];{
  "content": "⚠️** | Tu no puedes usar el menu**",
  "ephemeral": true,
  "options": {
    "interaction": true
  }
}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;1]==men4;]
`
},{
  type: "interaction",
  name: "menu",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{description:\`server-info   |   user-info   |   stats
afk           |   invite      |   bug\`}{color:RANDOM}{author: | Comandos de Utilidad:$userAvatar[$authorID]}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0_$authorID:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1_$authorID:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2_$authorID:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3_$authorID:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4_$authorID:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5_$authorID:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6_$authorID:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;2]==$interactionData[author.id];{
  "content": "⚠️** | Tu no puedes usar el menu**",
  "ephemeral": true,
  "options": {
    "interaction": true
  }
}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;1]==men5;]`
},{
  type: "interaction",
  name: "menu",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{description:\`set-background  |   lb   |  set-levels
rank\`}{color:RANDOM}{author: | Comandos de Niveles:$userAvatar[$authorID]}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0_$authorID:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1_$authorID:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2_$authorID:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3_$authorID:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4_$authorID:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5_$authorID:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6_$authorID:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;2]==$interactionData[author.id];{
  "content": "⚠️** | Tu no puedes usar el menu**",
  "ephemeral": true,
  "options": {
    "interaction": true
  }
}]
$onlyIf[$advancedTextSplit[$interactionData[values[0]];_;1]==men6;]`
}] 
