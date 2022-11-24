module.exports = {
  name: "avatar",
  aliases: ["av"],
  code: `$title[1;Avatar de $userTag[$mentioned[1]]]
$color[1;RANDOM]
$image[1;$userAvatar[$mentioned[1]]]
$addTimestamp[1]`
} 