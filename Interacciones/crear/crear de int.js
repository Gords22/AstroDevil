module.exports = {
    name: "cr",
    code: `
$createApplicationCommand[$guildID;int-hug;Abraza a un usuario;true;CHAT_INPUT;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": true
}]

$createApplicationCommand[$guildID;int-kiss;Besa a un usuario;true;CHAT_INPUT;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": true
}]

$createApplicationCommand[$guildID;int-slap;Cachetea a un usuario;true;CHAT_INPUT;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": true
}]

$createApplicationCommand[$guildID;user-info;Ve la informacion de un usuario;true;USER;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": false
}]

$onlyForIDs[$botOwnerID;]`
}