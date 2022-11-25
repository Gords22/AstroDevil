module.exports = {
    name: "cr",
    code: `$createApplicationCommand[$guildID;int hug;Abraza a un usuario :D;true;CHAT_INPUT;{
        "name": "Usuario",
        "description": "Menciona a alguien",
        "type": 6,
        "required": true
        }]
        $onlyForIDs[$botOwnerID;]`
}