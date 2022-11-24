module.exports = {
  name: "punch",
  code: `$description[1;**$username** le dio un golpe a **$username[$mentioned[1]]** D:]
$image[1;$randomText
[https://nekocdn.com/images/qIhIgxDp.gif;
https://nekocdn.com/images/BZK0J3CX.gif;
https://nekocdn.com/images/dJ3-kYiD.gif;
https://nekocdn.com/images/6rAcGsLT4.gif;
https://nekocdn.com/images/SUI6klc4i.gif;
https://nekocdn.com/images/MCZx5DGj.gif;
https://nekocdn.com/images/1qKF5Zke.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**Lo siento... pero yo no soy violenta... Así que debes mencionar a alguien.**]
$onlyIf[$mentioned[1]!=$clientID;**¿Heyyy no!Menciona a alguien mas. >-<**] 
`
} 