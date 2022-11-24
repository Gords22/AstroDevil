module.exports = {
  name: "grey",
  code: `$image[1;https://some-random-api.ml/canvas/greyscale?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]`
} 