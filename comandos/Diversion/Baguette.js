module.exports = {
  name: "baguette",
  code: `$image[1;$djsEval[
const { NekoBot } = require("nekobot-api")
const api = new NekoBot();

;(async () => {
  const image = await api.generate("baguette", { url: "$replaceText[$userAvatar[$findMember[$message]];webp;png]"});
  return image;
})();yes]]
$addTimeStamp[1]
$color[1;RANDOM]`
} 