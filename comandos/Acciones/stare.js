module.exports = {
  name: "stare",
  code: `$description[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;o.o -clava la mirada en **$username**];false;**$username** clava su mirada en **$username[$mentioned[1]]**]]
$image[1;$randomText
[https://nekocdn.com/images/j4yxeqgon.gif;
https://nekocdn.com/images/FhfZDH28.gif;
https://nekocdn.com/images/PRWVf24VF.gif;
https://nekocdn.com/images/ym0lV76kL.gif;
https://nekocdn.com/images/E9b1xZAt.gif;
https://nekocdn.com/images/hn45q6RE.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;nO ME MIRES DE ESA MANERA **$username**]
`
} 