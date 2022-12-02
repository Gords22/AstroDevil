module.exports = {
  name: "comment",
  code: `$description[1;$username[$authorID] hizo un nuevo comentario!]
  $image[1;https://some-random-api.ml/canvas/youtube-comment?username=$uri[$username[$authorID];encode]&avatar=$replaceText[$authorAvatar;webp;png]&comment=$uri[$message;encode]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
$onlyIf[$message!=;⚠️** | Escribe un mensaje**]`
}