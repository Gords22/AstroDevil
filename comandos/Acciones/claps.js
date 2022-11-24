module.exports = {
  name: "claps",
  des: "Aplaude o Aplaudele a un usuario",
  uso: "claps <@usuario> (opcional)",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;$username está aplaudiendo];false;$username le aplaude a $username[$findMember[$message[1]]]]]
$image[1;$randomText[https://nekocdn.com/images/BBn_DqLZ.gif;https://nekocdn.com/images/rraU4djf.gif;https://nekocdn.com/images/qLPUZ2pz.gif;https://nekocdn.com/images/xns4NFyn.gif;https://nekocdn.com/images/zY6EBcsm.gif;https://nekocdn.com/images/b4oPAe0x.gif;https://nekocdn.com/images/GulDGXJ-.gif;https://nekocdn.com/images/NArg2mHJ.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;**Gracias $username me alagas**]
`
} 