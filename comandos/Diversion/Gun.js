module.exports = {
  name: "gun",
  code: `$image[1;https://api.avux.tk/image/gun?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$addTimestamp[1;$dateStamp]
$color[1;RANDOM]`
} 