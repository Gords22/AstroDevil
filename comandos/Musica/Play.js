module.exports = {
  name: "play",
  $if: "v4",
  code: `
$if[$voiceID[$clientID]==]
$title[1;Cancion en reproduccion]
$addField[1;Nombre:;$songInfo[name;0];no]
$addField[1;Url:;$songInfo[url;0];no]
$color[1;RANDOM]
$let[name;$playTrack[youtube;$message]]
$joinVC
$else
$title[1;Cancion añadida a la cola]
$addField[1;Url;$songInfo[url;previous];no]
$addField[1;Vistas;$numberSeparator[$songInfo[views;previous]];no]
$addField[1;Likes;$replaceText[$songInfo[likes;previous];null;No se pudo obtener];no]
$addField[1;Duracion;$formatDate[$songInfo[duration;previous];mm:ss];no]
$addField[1;Autor;$songInfo[author;previous];no]
$addField[1;Nombre;$get[name];no]
$thumbnail[1;$songInfo[thumbnail;previous]]
$color[1;RANDOM]
$let[name;$playTrack[youtube;$message]
$endif
$onlyIf[$message!=;⚠️** | Escribe el nombre o url de una cancion**]
$onlyIf[$voiceID!=;⚠️** | Debes estar en un canal de voz primero**]
$onlyForIDs[$botOwnerID;]
`
} 