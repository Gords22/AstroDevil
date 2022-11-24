module.exports = {
  name: "laugh",
  code: `$description[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;**$username** se está riendo.];false;**$username** se está burlando de **$username[$mentioned[1]]**]]
$image[1;$randomText
[https://nekocdn.com/images/XEdGsn7S.gif;
https://nekocdn.com/images/wXL2tSfE.gif;
https://nekocdn.com/images/g4ffEsha.gif;
https://nekocdn.com/images/RG3-_JY-.gif;
https://nekocdn.com/images/i8Sof--O.gif;
https://nekocdn.com/images/xKjpozS0.gif;
https://nekocdn.com/images/d0X_K4To.gif;
https://nekocdn.com/images/xo275icE.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;No no te burles de miiii **$username**]
`
} 