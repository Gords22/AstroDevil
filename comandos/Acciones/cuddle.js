module.exports = {
  name: "cuddle",
  des: "Acurrucate conmigo ;) o con un usuario",
  uso: "cuddle <@usuario> (opcional)",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;Prrr, acurrucate conmigo n.n];false;$username se acurrucó con $username[$findMember[$message[1]]]]]
$image[1;$randomText[https://nekocdn.com/images/xk-wOzTk.gif;https://nekocdn.com/images/mxEZdENm.gif;https://nekocdn.com/images/BMPasf8H.gif;https://nekocdn.com/images/2ORwKQpy7.gif;https://nekocdn.com/images/X8vfwuWXs.gif;https://nekocdn.com/images/49-CrkJf7.gif;https://nekocdn.com/images/xALfxxEy.gif;https://nekocdn.com/images/rUTbcwqj.gif;https://nekocdn.com/images/V_vAMCuP.gif;https://nekocdn.com/images/lDDaWzZX.gif;https://nekocdn.com/images/vqQ-BILg.gif;https://nekocdn.com/images/5vS9YkRB.gif;https://nekocdn.com/images/Dd_acTW8.gif;https://nekocdn.com/images/Hfr26kE9.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;{newEmbed:{title:$username se acurruco conmigo n.n}{image:$randomText[https://nekocdn.com/images/xk-wOzTk.gif;https://nekocdn.com/images/mxEZdENm.gif;https://nekocdn.com/images/BMPasf8H.gif;https://nekocdn.com/images/2ORwKQpy7.gif;https://nekocdn.com/images/X8vfwuWXs.gif;https://nekocdn.com/images/49-CrkJf7.gif;https://nekocdn.com/images/xALfxxEy.gif;https://nekocdn.com/images/rUTbcwqj.gif;https://nekocdn.com/images/V_vAMCuP.gif;https://nekocdn.com/images/lDDaWzZX.gif;https://nekocdn.com/images/vqQ-BILg.gif;https://nekocdn.com/images/5vS9YkRB.gif;https://nekocdn.com/images/Dd_acTW8.gif;https://nekocdn.com/images/Hfr26kE9.gif]}{color:RANDOM}}]
`
} 