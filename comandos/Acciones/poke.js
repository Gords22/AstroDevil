module.exports = {
  name: "poke",
  code: `$description[1;**$username** le fastidia a **$username[$mentioned[1]]**. ewe]
$image[1;$randomText
[https://nekocdn.com/images/hifMYtdNZ.gif;
https://nekocdn.com/images/rUH9W8Ypn.gif;
https://nekocdn.com/images/mVRzUaLn.gif;
https://nekocdn.com/images/HDmNws3UP.gif;
https://nekocdn.com/images/srFV0tea.gif;
https://nekocdn.com/images/tAT9R6Ib.gif;
https://nekocdn.com/images/ACMVNfOe.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;L-lo siento >u<, pero debes mencionar a alguien.]
$onlyIf[$mentioned[1]!=$clientID;Noo me fastidies **$username** >:D]
`
} 