module.exports = {
  name: "highfive",
  des: "Choca los 5 con un usuario o conmigo :D",
  uso: "highfive <@usuario> (opcional)",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;¡Dame esos 5!];false;$username le dio los 5 a $username[$mentioned[1]]]]
$image[1;$randomText[https://nekocdn.com/images/whfpAdLF3.gif;https://nekocdn.com/images/HuQiNAz7.gif;https://nekocdn.com/images/RCxMHLn9J.gif;https://nekocdn.com/images/stCHAJbN.gif;https://nekocdn.com/images/xVrF36Hax.gif;https://nekocdn.com/images/5en4sqdM.gif;https://nekocdn.com/images/BsipNOHV.gif;https://nekocdn.com/images/whfpAdLF3.gif;https://nekocdn.com/images/Yqu6oaQN.gif;https://nekocdn.com/images/gipBvILV.gif;https://nekocdn.com/images/xdvJFgdG.gif;https://nekocdn.com/images/io9MOyUO.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;Dame esos 5 $username :D]
`
}