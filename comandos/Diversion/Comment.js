module.exports = {
  name: "comment",
  code: `$image[1;https://some-random-api.ml/canvas/youtube-comment?username=$uri[$username[$findMember[$message[1]]];encode]&avatar=$replaceText[$userAvatar[$findMember[$message[1]]];webp;png]&comment=$uri[$checkCondition[$messageSlice[1];encode]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
$onlyIf[$messageSlice[1]!=;⚠️** | Escribe un mensaje**]`
} 