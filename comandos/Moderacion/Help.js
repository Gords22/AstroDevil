module.exports = [{
  name: "help", 
  code: `$reply[$messageID;no]
$title[1;❔ | Comandos de Ayuda]
$description[1;Por Favor Selecciona una de las Categorias]
$color[1;0000ff]
$image[1;https://i.ibb.co/8jvttr8/GS20220105203811.gif]
$addTimeStamp[1]
$addSelectMenu[1;menu;📑 Encuentra lo que buscas aqui;1;1;no;Pagina Principal:Regresa a la pagina Principal:men0::$customEmoji[setzofino;808808003645079552];Diversion:Lista de Comandos de Diversion:men1::$customEmoji[risaXd;808808003645079552];Moderacion:Lista de Comandos de Moderacion:men2::$customEmoji[catBan;808808003645079552];Interaccion o Emociones:Lista de Comandos de Interaccion:men3::🤝;NSFW:Lista de comandos NSFW:men4::$customEmoji[mmSetso;808808003645079552];Utilidad:Lista de Comandos de Utilidad:men5::$customEmoji[11;808808003645079552];Niveles:Lista de Comandos de Niveles:men6::$customEmoji[level;808808003645079552]]`
},{
  type: "interaction",
  name: "menu",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{description:Por Favor Selecciona una de las Categorias}{color:0000ff}{title: ❔ | Comandos de Ayuda}{image:https://i.ibb.co/8jvttr8/GS20220105203811.gif}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men0;] `
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
magik         |  \`}{color:RANDOM}{author: | Comandos de Diversion:$authorAvatar}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men1;] 
`
},{
  type: "interaction", 
  name: "menu", 
  prototype: "selectMenu", 
  code: `$interactionUpdate[;{newEmbed:{description:
\`nuke         |   ping    |    ban
unban        |   kick    |    clear
set-welcome\`}{color:RANDOM}{author: | Comandos de Moderacion:$userAvatar[$authorID]}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men2;] 
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
tickle    |   tsundere   |\`}{color:RANDOM}{author: | Comandos de Interaccion o Emociones:$userAvatar[$authorID]}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men3;]
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
suck       |\`}{color:RANDOM}{author: | Comandos NSFW:$userAvatar[$authorID]}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:🤝}
{selectMenuOptions:NSFW:men4:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$channelNSFW[$channelID]!=false;{
 "content" : "⚠️** | Esta categoria solo puede verse en canal NSFW**",
 "ephemeral" : true,
 "options" : {"interaction" : true}
}]
$onlyIf[$interactionData[values[0]]==men4;]
`
},{
  type: "interaction",
  name: "menu",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{description:\`server-info   |   user-info   |   stats
afk           |   invite      |   bug\`}{color:RANDOM}{author: | Comandos de Utilidad:$userAvatar[$authorID]}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men5;] `
},{
  type: "interaction",
  name: "menu",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{description:\`set-background  |   lb   |  set-levels
rank\`}{color:RANDOM}{author: | Comandos de Niveles:$userAvatar[$authorID]}{timestamp:ms}};{actionRow:{selectMenu:menu:📑 Encuentra lo que buscas aqui:1:1:no:{selectMenuOptions:Pagina Principal:men0:Regresa a la pagina Principal:false:<:setzofino:932084981637996634>}{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:risaXd:924825419377700924>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<a:catBan:924829707898351706>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:🤝}{selectMenuOptions:NSFW:men4:Lista de Comandos NSFW:false:<a:mmSetso:924830250267988059>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<a:11:852227236631412756>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men6;]`
}] 
