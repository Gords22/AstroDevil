module.exports = [{
  name: "news",
  des: "Muestra las novedades y actualizaciones del bot",
  uso: "news",
  code: `$author[1;❔ | Novedades y actualizaciones;$userAvatar[$clientID]]
$description[1;$getVar[new]]
$color[1;GREEN]`
},{
  name: "set",
  code: `$deleteIn[2s]
ya
$setVar[new;$message]
$onlyForIDs[$botOwnerID;]`
}]