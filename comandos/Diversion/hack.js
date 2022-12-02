module.exports = {
    name: "hack",
    code: `$reply[$messageID;false]
Iniciando Hack!
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
$editIn[3s;Hack Iniciado en $userTag[$findMember[$message]]
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒;Conectando con el Servidor
██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒;Conectando con el Servidor
███▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒;Conexion Completada con exito
████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒;Descargando Virus
████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒;Descargando Virus
█████▒▒▒▒▒▒▒▒▒▒▒▒▒▒;Descarga Completa
██████▒▒▒▒▒▒▒▒▒▒▒▒▒;Instalando Virus
██████▒▒▒▒▒▒▒▒▒▒▒▒▒;Instalando Virus
███████▒▒▒▒▒▒▒▒▒▒▒▒;Instalando Virus
████████▒▒▒▒▒▒▒▒▒▒▒;Instalando Virus
█████████▒▒▒▒▒▒▒▒▒▒;Instalacion Completa!
██████████▒▒▒▒▒▒▒▒▒;Obteniendo Datos de $userTag[$findMember[$message]]
███████████▒▒▒▒▒▒▒▒;Datos Obtenidos con Exito
████████████▒▒▒▒▒▒▒;Recopilando Informacion Obtenida
█████████████▒▒▒▒▒▒;Recopilando Informacion Obtenida
██████████████▒▒▒▒▒;Recopilando Informacion Obtenida
███████████████▒▒▒▒;Enviando Informacion a los Servidores
████████████████▒▒▒;Enviando Informacion a los Servidores
█████████████████▒▒;Eliminando Virus
██████████████████▒;Virus Elminado Ya no quedan rastros del hackeo
██████████████████▒;Hackeo Completado con Exito
**Nombre:** $username[$findMember[$message]]
**ID:** $findMember[$message]
**Token:** $jsonRequest[https://some-random-api.ml/bottoken;token]
███████████████████]
$onlyIf[$findMember[$message;false]!=$authorID;**⚠️ | No puedes hackearte a ti mismo**]
$onlyIf[$findMember[$message;false]!=;**⚠️ | Menciona un usuario**]`
}