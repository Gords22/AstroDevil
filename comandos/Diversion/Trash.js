module.exports = {
  name: "trash",
  code: `$image[1;https://luminabot.xyz/api/image/trash?image=$replaceText[$userAvatar[$findMember[$message[1]]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]`
} 