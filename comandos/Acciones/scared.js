module.exports = {
  name: "scared",
  code: `$description[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;**$username** le tiene miedo a algo D:];false;**$username** le tiene miedo a **$username[$mentioned[1]]**]]
$image[1;$randomText
[https://nekocdn.com/images/5Y6HTWVk.gif;
https://nekocdn.com/images/3iwDaPiLW.gif;
https://nekocdn.com/images/PcdqiWtB.gif;
https://nekocdn.com/images/5hjgI8f21.gif;
https://nekocdn.com/images/bbXY7xw5c.gif;
https://nekocdn.com/images/rx2qOd7E6.gif;
https://nekocdn.com/images/LrrXjcTZM.gif;
https://nekocdn.com/images/5hjgI8f21.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;No por que me tienes miedo **$username**. D:]
`
} 