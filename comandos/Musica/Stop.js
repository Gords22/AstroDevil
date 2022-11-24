module.exports = {
  name: "stop",
  code: `$title[1;Cola de canciones eliminadas]
$description[1;Eh abandonado el canal de voz]
$color[1;RANDOM]
$leaveVC
$stop
$onlyIf[$queueLength!=0;⚠️** | No hay canciones en reproduccion**]
$onlyIf[$voiceID!=;⚠️** | Debes estar en un canal de voz**]
$onlyForIDs[$botOwnerID;]
`
}