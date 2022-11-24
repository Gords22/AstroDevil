module.exports = {
  name: "pixelate",
  code: `$image[1;https://some-random-api.ml/canvas/pixelate?avatar=$replaceText[$userAvatar[$findMember[$message[1]]];webp;png]]
$addTimestamp[1;$dateStamp]
$color[1;RANDOM]`
} 