module.exports = {
  name: "comment",
  code: `$image[1;https://some-random-api.ml/canvas/youtube-comment?username=$uri[encode;$username[$authorID]]&avatar=$replaceText[$userAvatar[$authorAvatar];webp;png]&comment=$uri[encode;$message]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
$onlyIf[$message!=;⚠️** | Escribe un mensaje**]`
}