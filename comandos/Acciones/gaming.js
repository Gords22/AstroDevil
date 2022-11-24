module.exports = {
  name: "gaming",
  des: "Juega o Juega con alguien mas (muestra nada mas)",
  uso: "gaming <@usuario> (opcional)",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;$username está jugando];false;$username está jugando con $username[$mentioned[1]]]]
$image[1;$randomText[https://nekocdn.com/images/w8O-7R_z.gif;https://nekocdn.com/images/thmD2t9R.gif;https://nekocdn.com/images/6bwZU_VP.gif;https://nekocdn.com/images/thmD2t9R.gif;https://nekocdn.com/images/Vvf2FjCm.gif;https://nekocdn.com/images/wCogSYL2.gif;https://nekocdn.com/images/iaeeFyZq.gif;https://nekocdn.com/images/_IjiTuQw.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;Si vamos a jugar :D, te ganare $username >:)]
`
} 