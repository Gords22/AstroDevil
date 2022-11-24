module.exports = {
  name: "kisscheeks",
  code: `$title[1;$username le dio un beso en la mejilla a $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/RitF1wOp.gif;https://nekocdn.com/images/yhevOLMeV.gif;https://nekocdn.com/images/VsQnR9gxs.gif;https://nekocdn.com/images/z5Vd7BKB.gif;https://nekocdn.com/images/kAphud9x.gif;https://nekocdn.com/images/iYwUWaDS.gif;https://nekocdn.com/images/elWiloglN.gif;https://nekocdn.com/images/c9w4ofLI.gif]]
$color[1;RANDOM]

$onlyIf[$mentioned[1]!=$clientID;Mmm rico **$username**]
`
} 