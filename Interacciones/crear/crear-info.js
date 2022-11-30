module.exports = {
    name: "cr inf",
    code: `$createApplicationCommand[global;user-info;Ve la informacion de un usuario;true;USER;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": false
}]

$createApplicationCommand[global;avatar;Manda el avatar de un usuario;true;CHAT_INPUT;{
    "name": "usuario",
    "description": "Menciona a alguien",
    "type": 6,
    "required": false
}]

$supressErrors[**Oh-oh parece que hay una nueva actualizacion de comandos slash, pero no tengo suficientes permisos para crearlos a este servidor, 
por favor ponte en contacto con mi creador: $userTag[$botOwnerID]**]
$onlyForIDs[$botOwnerID;]`
}