module.exports = {
  name: "cook",
  des: "Cocina para ti o para un usuario",
  uso: "cook <@usuario> (opcional)",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;$username está cocinado algo delicioso];false;$username está cocinado algo delicioso para $username[$findMember[$message[1]]]]]
$image[1;$randomText[https://nekocdn.com/images/gYiFzFaX.gif;https://nekocdn.com/images/EK3HUC14.gif;https://nekocdn.com/images/VJL97KV-.gif,https://nekocdn.com/images/WNOZlIVP.gif;https://nekocdn.com/images/HHr4Esn1.gif;https://nekocdn.com/images/MQab6hmo.gif;https://nekocdn.com/images/Ujn0_YE9.gif,https://nekocdn.com/images/2dTNiW-F.gif;https://nekocdn.com/images/Q3-d7d0w.gif;https://nekocdn.com/images/PFWKr2Itu.gif;https://nekocdn.com/images/tnw71Y00.gif;https://nekocdn.com/images/mins5flIj.gif;https://nekocdn.com/images/HJdCyAYK.gif;https://nekocdn.com/images/ZGdKmOOz.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;**Gracias $username :)**]
`
} 