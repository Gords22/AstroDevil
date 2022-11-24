module.exports = { 
   name: "deredere",
   code: `$title[1;$replaceText[$replaceText[$checkContains[$mentioned[1];$authorID];true;$username se siente enamorad@];false;$username esta enamorad@ de $username[$mentioned[1]]]]
$image[1;$randomText [https://nekocdn.com/images/IFejdVyn.gif;https://nekocdn.com/images/X03mYSIf.gif;https://nekocdn.com/images/-T3jFkST.gif;https://nekocdn.com/images/kO1up7WS.gif;https://nekocdn.com/images/nrZT5zxlA.gif;https://nekocdn.com/images/-wWbxYpF_.gif]]
$onlyIf[$mentioned[1]!=$clientID;**⚠️ | Menciona a un usuario**]
$color[1;RANDOM]
`
}