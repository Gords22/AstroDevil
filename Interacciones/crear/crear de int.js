module.exports = {
    name: "cr",
    code: `
$createApplicationCommand[$guildID;int-hug;Abraza a un usuario \:D;true;CHAT_INPUT;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": true
}]

$createApplicationCommand[$guildID;int-kiss;Besa a un usuario \;);true;CHAT_INPUT;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": true
}]

$createApplicationCommand[$guildID;int-slap;Cachetea a un usuario \:0;true;CHAT_INPUT;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": true
}]
$onlyForIDs[$botOwnerID;]`
}