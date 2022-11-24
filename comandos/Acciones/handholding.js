module.exports = {
  name: "handholding",
  des: "Toma mi mano o la de un usuario",
  uso: "handholding <@usuario> (opcional)",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;$username, toma mi mano :)];false;$username tomo la mano de $username[$mentioned[1]]]]
$image[1;$randomText[https://nekocdn.com/images/A1YNiwA-.gif;https://nekocdn.com/images/PCuZ5gWrW.gif;https://nekocdn.com/images/IN1-FZps.gif;https://nekocdn.com/images/tsuoA7Xb.gif;https://nekocdn.com/images/JzKKwPTe.gif;https://nekocdn.com/images/-f42MEZb.gif;https://nekocdn.com/images/tsuoA7Xb.gif;https://nekocdn.com/images/Wx3JU-5G.gif;https://nekocdn.com/images/eJfDsVfF.gif;https://nekocdn.com/images/STvIrjpvQ.gif;https://nekocdn.com/images/DJJ2QaVx.gif;https://nekocdn.com/images/ZH8YIiuW.gif;https://nekocdn.com/images/I7LjItCZ.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;{
"embeds": "{newEmbed{title:Toma mi mano $username :)}{color:RANDOM}{image:$randomText[https://nekocdn.com/images/A1YNiwA-.gif;https://nekocdn.com/images/PCuZ5gWrW.gif;https://nekocdn.com/images/IN1-FZps.gif;https://nekocdn.com/images/tsuoA7Xb.gif;https://nekocdn.com/images/JzKKwPTe.gif;https://nekocdn.com/images/-f42MEZb.gif;https://nekocdn.com/images/tsuoA7Xb.gif;https://nekocdn.com/images/Wx3JU-5G.gif;https://nekocdn.com/images/eJfDsVfF.gif;https://nekocdn.com/images/STvIrjpvQ.gif;https://nekocdn.com/images/DJJ2QaVx.gif;https://nekocdn.com/images/ZH8YIiuW.gif;https://nekocdn.com/images/I7LjItCZ.gif]}}"
}]
`
} 