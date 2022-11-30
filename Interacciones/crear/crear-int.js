module.exports = [{
    name: "cr int",
    code: `
    $createApplicationCommand[global;int-hug;Abraza a un usuario;true;CHAT_INPUT;{
        "name": "usuario",
        "description": "Menciona a alguien",
        "type": 6,
        "required": true
    }]
    
    $createApplicationCommand[global;int-kiss;Besa a un usuario;true;CHAT_INPUT;{
        "name": "usuario",
        "description": "Menciona a alguien",
        "type": 6,
        "required": true
    }]
    
    $createApplicationCommand[global;int-slap;Cachetea a un usuario;true;CHAT_INPUT;{
        "name": "usuario",
        "description": "Menciona a alguien",
        "type": 6,
        "required": true
    }]
    
$supressErrors[**Oh-oh parece que hay una nueva actualizacion de comandos slash, pero no tengo suficientes permisos para crearlos a este servidor, 
        por favor ponte en contacto con mi creador: $userTag[$botOwnerID]**]
$onlyForIDs[$botOwnerID;]`
}]