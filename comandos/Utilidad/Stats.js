module.exports = {
  name: "stats",
  code: `$author[1;Astro Estadisticas;$userAvatar[$clientID]]
$addTimeStamp[1]
$image[1;https://i.ibb.co/8jvttr8/GS20220105203811.gif]
$addField[1;General:;ID: \`$clientID\`
Nombre: \`$username[$clientID]\`
Tag: \`#$discriminator[$clientID]\`
Apodo: \`$replaceText[$replaceText[$checkCondition[$nickname[$clientID]==];true;Sin apodo];false;$nickname[$clientID]]\`
Servidores: \`$ServerCount\`
Usuarios: \`$allMembersCount\`
Cumpleaños: \`14/12/2021\`
Activo: \`$uptime[humanize]\`
Creado por: \`$userTag[710941335510712342], $userTag[919043602884214784]\`;no]
$addField[1;Versiones:;Node.js: \`$nodeVersion\`
Astro: \`v$getVar[version]\`;no]
$addField[1;Base de datos:;Ping: \`$pingms\`
Ram: \`$truncate[$ram]MB/$replaceText[$abbreviate[$maxRam];K;GB]\`
Cpu: \`%$cpu/%100\`
Plataforma: \`$replaceText[$djsEval[require ('os').platform();yes];linux;Linux]\`;no]
$color[1;0000ff]
$addButton[1;Vota por mi;5;https://top.gg/bot/920437466178142208;no;❤]
$addButton[1;Invitame Aqui;5;https://discord.com/api/oauth2/authorize?client_id=920437466178142208&permissions=8&scope=bot%20applications.commands;no;🧐]
`
} 