module.exports = {
  name: "shoot", 
  code: `$description[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;**Matesito 🌴** le dispara a **$username** >:D];false;**$username** le dispara a **$username[$mentioned[1]]**]]
$image[1;$randomText
[https://nekocdn.com/images/Msi8RuOpV.gif;
https://nekocdn.com/images/dAiWDxXc.gif;
https://nekocdn.com/images/f1yKTabP.gif;
https://nekocdn.com/images/jDc8cpL0.gif;
https://nekocdn.com/images/SiQiXWmx.gif;
https://nekocdn.com/images/MfLrPKasy.gif;
https://nekocdn.com/images/fvvjgbWu.gif;
https://nekocdn.com/images/q-LLfLTdm.gif;
https://nekocdn.com/images/mfO0IN4C.gif;
https://nekocdn.com/images/Vu8lDKyY.gif;
https://nekocdn.com/images/6gkqpXSO.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;**Yo soy invensible **$username** muajajajaja**]
`
} 