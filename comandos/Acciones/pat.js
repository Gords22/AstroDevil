module.exports = {
  name: "pat",
  code: `$description[1;**$username** acarició a **$username[$mentioned[1]]**]
$image[1;$randomText
[https://nekocdn.com/images/RZWDIY2K5.gif;
https://nekocdn.com/images/iyl-v3GY.gif;
https://nekocdn.com/images/FEofKGfP.gif;
https://nekocdn.com/images/9iDDiq1w.gif;
https://nekocdn.com/images/CxX7uk0M.gif;
https://nekocdn.com/images/3BFSkVGW.gif;
https://nekocdn.com/images/6QEmeL35.gif;
https://nekocdn.com/images/L2nfrgNxT.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;L-lo siento >u<, pero debes mencionar a alguien.]
$onlyIf[$mentioned[1]!=$clientID;Eres el mejor **$username**]
`
} 