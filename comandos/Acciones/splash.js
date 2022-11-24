module.exports = {
  name: "splash",
  code: `$description[1;**$username** mojó a **$username[$mentioned[1]]**]
$image[1;$randomText
[https://nekocdn.com/images/Fcf7hnhM.gif;
https://nekocdn.com/images/rjJXTYjO.gif;
https://nekocdn.com/images/oFY-QYT4.gif;
https://nekocdn.com/images/fP4f5lkB.gif;
https://nekocdn.com/images/XSz5tOUn.gif;
https://nekocdn.com/images/QC4TV3_U.gif;
https://nekocdn.com/images/YgdUojkx.gif;
https://nekocdn.com/images/Q9K-SAlgs.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;L-lo siento >u<, pero debes mencionar a alguien.]
$onlyIf[$mentioned[1]!=$clientID;¿Heyyy no!Menciona a alguien mas. >-<]
`
} 