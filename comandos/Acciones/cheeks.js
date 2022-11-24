module.exports = {
  name: "cheeks",
  des: "Pelliscale las megillas a un usuario",
  uso: "cheeks <@usuario>",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;Jejeje <:sexo:858868792070504448>];false;$username le pellizca las mejillas a $username[$findMember[$message[1]]]]]
$image[1;$randomText[https://nekocdn.com/images/g8kxzQZIg.gif;https://nekocdn.com/images/NvHJH8Vn.gif;https://nekocdn.com/images/bSzm88Rv.gif;https://nekocdn.com/images/rOrszHj4.gif;https://nekocdn.com/images/uABwJYmjT.gif;https://nekocdn.com/images/n-Dnt_xQ.gif;https://nekocdn.com/images/U0Orqx9A.gif;https://nekocdn.com/images/qPIANn7o.gif;https://nekocdn.com/images/i2rha9cf.gif;https://nekocdn.com/images/ggv6yk6X.gif;https://nekocdn.com/images/USZNTWLk.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;**Oyeee, deja mis mejillas $username**]
`
}  