module.exports = [{
    name: "cr rct",
    code: `$createApplicationCommand[global;rct-happy;Muestra que estas feliz;true;CHAT_INPUT]
    
$suppressErrors[**Oh-oh parece que hay una nueva actualizacion de comandos slash, pero no tengo suficientes permisos para crearlos a este servidor, 
por favor ponte en contacto con mi creador: $userTag[$botOwnerID]**]
$onlyForIDs[$botOwnerID;]`
}]