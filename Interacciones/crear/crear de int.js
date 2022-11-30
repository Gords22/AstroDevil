module.exports = {
    name: "cr",
    code: `
$createApplicationCommand[global;int hug;Abraza a un usuario;true;CHAT_INPUT;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": true
}]

$createApplicationCommand[global;int kiss;Besa a un usuario;true;CHAT_INPUT;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": true
}]

$createApplicationCommand[global;int slap;Cachetea a un usuario;true;CHAT_INPUT;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": true
}]

$createApplicationCommand[$global;user info;Ve la informacion de un usuario;true;USER;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": false
}]

$createApplicationCommand[global;avatar;Manda el avatar de un usuario;true;CHAT_INPUT;{
    "name": "Usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": false
}]

$onlyForIDs[$botOwnerID;]`
}