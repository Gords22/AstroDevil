module.exports = {
  name: "triggered",
  code: `$image[1;https://some-random-api.ml/canvas/triggered?avatar=$replaceText[$userAvatar[$findMember[$message[1]]];webp;png]]
$addTimestamp[1;$dateStamp]
$color[1;RANDOM]`
} 