module.exports = {
  name: "spray",
  code: `$description[1;**$username** ha rociado a **$username[$mentioned[1]]**]
$image[1;$randomText
[https://nekocdn.com/images/7gMFN4iB.gif;
https://nekocdn.com/images/uGH5GgtT.gif;
https://nekocdn.com/images/sMowFDD5.gif;
https://nekocdn.com/images/tmq_LiAb.gif;
https://nekocdn.com/images/PIFjYIUP.gif;
https://nekocdn.com/images/bbPgMyzv.gif;
https://nekocdn.com/images/SKijDvjR.gif;
https://nekocdn.com/images/USj0gsVB.gif;
https://nekocdn.com/images/ftmvskj2.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**menciona a alguien para rocearlo 😈.**]
$onlyIf[$mentioned[1]!=$clientID;Noooooooo te voy a recear **$username**]
`
} 