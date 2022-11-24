module.exports = {
  name: "feed",
  des: "Come tu o dale de comer a un usuario",
  uso: "feed <@usuario> (opcional)",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;Ñaam $username];false;$username le da de comer a $username[$mentioned[1]]]]
$image[1;$randomText[https://nekocdn.com/images/5ahRacPj.gif;https://nekocdn.com/images/4j9Xu6l6o.gif;https://nekocdn.com/images/m3ACNRqX.gif;https://nekocdn.com/images/uXguoDXA.gif;https://nekocdn.com/images/A5IS3xV-k.gif;https://nekocdn.com/images/T-m9BBrws.gif;https://nekocdn.com/images/oBFofvKco.gif;https://nekocdn.com/images/sbyZPPGuD.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;Gracias de darme de comer $username :3]
`
} 