module.exports = {
  name: "bite",
  des: "Muerde a un usuario",
  uso: "bite <@usuario>",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;Ñam... muerde a $username];false;$username ha mordido a $username[$mentioned[1]]]]
$image[1;$randomText[https://nekocdn.com/images/zi-wYCr0.gif;https://nekocdn.com/images/E1kVhdly.gif;https://nekocdn.com/images/AJSzlZgV.gif;https://nekocdn.com/images/3l5XGJTG.gif;https://nekocdn.com/images/rSprRj4z.gif;https://nekocdn.com/images/9huv86lO.gif;https://nekocdn.com/images/Cmv03Da8.gif;https://nekocdn.com/images/Ko86CWU-.gif;https://nekocdn.com/images/B9J1FN50C.gif;https://nekocdn.com/images/_zts5iLN.gif;https://nekocdn.com/images/ZX0_HpRm.gif;https://nekocdn.com/images/UzfrvhbS.gif;https://nekocdn.com/images/UNHmEI8K.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;⚠️** | No puedes morderme a mi**]
`
} 