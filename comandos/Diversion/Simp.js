module.exports = {
  name: "simp",
  code: `$image[1;https://some-random-api.ml/canvas/simpcard?avatar=$replaceText[$userAvatar[$findMember[$message[1]]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]`
} 