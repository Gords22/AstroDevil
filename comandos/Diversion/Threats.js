module.exports = {
  name: "threats",
  code: `$title[1;las 3 mayores amenazas de la sociedad]
  $image[1;$djsEval[
    const { NekoBot } = require("nekobot-api")
    const api = new NekoBot();
      
    ;(async () => {
      const image = await api.generate("threats", { url: "$replaceText[$userAvatar[$findMember[$message]];webp;png]" });
      return image;
    })();yes]]
    $color[1;RANDOM]
    $addTimeStamp[1]`
} 