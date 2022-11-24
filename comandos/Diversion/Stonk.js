module.exports = {
  name: "stonk",
  aliases: ["stonks"],
  code: `$image[1;https://api.avux.tk/image/stonk?avatar=$replaceText[$userAvatar[$findMember[$message[1]]];webp;png]]
$addTimestamp[1]
$color[1;RANDOM]`
}