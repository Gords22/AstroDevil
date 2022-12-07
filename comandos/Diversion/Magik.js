module.exports = {
  name: "magik",
  code: `
$image[1;$djsEval[
const { NekoBot } = require("nekobot-api")
const api = new NekoBot();
  
;(async () => {
  const image = await api.generate("magik", { image: "$replaceText[$userAvatar[$findMember[$message]];webp;png]" });
  return image;
})();yes]]
$color[1;RANDOM]
$addTimeStamp[1]`
} 