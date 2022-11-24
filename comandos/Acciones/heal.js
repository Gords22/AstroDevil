module.exports = {
  name: "heal",
  des: "Cura a un usuario o lo curo yo ;)",
  uso: "heal <@usuario> (opcional)",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;Soy una ambulancia /o];false;$username ha curado a $username[$mentioned[1]]]]
$image[1;$randomText[https://nekocdn.com/images/8Yf2pAFE.gif;https://nekocdn.com/images/918iQUkV.gif;https://nekocdn.com/images/_vNzlS1T.gif;https://nekocdn.com/images/zoXUg4GG.gif;https://nekocdn.com/images/XWEARdsM.gif;https://nekocdn.com/images/XxJVnvt5.gif;https://nekocdn.com/images/pyS4nHIg.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;Gracias casi me voy ala luz $username :D]
`
} 