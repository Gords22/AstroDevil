module.exports = {
  name: "baka",
  des: "Dile \"baka\" a un usuario",
  uso: "baka <@usuario>",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;$username,¡BAKA!];false;$username[$mentioned[1]],¡BAKA!]]
$image[1;$randomText[https://nekocdn.com/images/-CVm0Bft.gif;https://nekocdn.com/images/IISfTkrk.gif;https://nekocdn.com/images/aMzrX5K9.gif;https://nekocdn.com/images/oijW1BaY.gif;https://nekocdn.com/images/ee4Giwqe.gif;https://nekocdn.com/images/10QOItBy.gif;https://nekocdn.com/images/1f0zLPz_.gif;https://nekocdn.com/images/9M9Gnf8Yk.gif;https://nekocdn.com/images/X0yOMpHo.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;**Tu eres un ¡BAKA! $username**]
`
} 