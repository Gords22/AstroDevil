module.exports = {
  name: "random",
  code: `$title[1;Seleccion aleatoria]
$description[1;Usuario: \`$userTag[$randomUserID]\`
ID: \`$randomUserID\`
Apodo: \`$replaceText[$replaceText[$checkCondition[$nickName[$randomUserID]==];true;Sin apodo];false;$nickName[$randomUserID]]\`]
$thumbnail[1;$userAvatar[$randomUserID]]
$color[1;RANDOM]
$let[id;$randomUserID]`
} 