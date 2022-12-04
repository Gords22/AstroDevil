module.exports = {
  type: "join",
  channel: "$getServerVar[canalWel]",
  code: `$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[mensajeWel];user.mention;<@$authorID>];user.name;$username];user.tag;$userTag];server.name;$serverName]
$attachment[https://some-random-api.ml/welcome/img/1/space?type=join&avatar=$replaceText[$authorAvatar;webp;png]&username=$uri[$username;encode]&discriminator=$discriminator&guildName=$uri[$serverName;encode]&textcolor=white&memberCount=$membersCount&key=G7ztt2d65ioePTCwELCAz7peRzuAdlkhiGtAfeToa9r9pHfeS1xyrfseOrM6Ghwc;astro-nida.png;url]
$onlyIf[$getServerVar[canalWel]!=;]`
}