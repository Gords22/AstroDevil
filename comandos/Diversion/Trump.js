module.exports = {
  name: "trump",
  code: `$description[1;Donald Trump a tweeteado algo!]
$image[1;$djsEval[
  const { NekoBot } = require("nekobot-api")
  const api = new NekoBot();
    
  ;(async () => {
    const image = await api.generate("trumptweet", { text: \`$message\` });
    return image;
  })();yes]]
$color[1;RANDOM]
$addTimestamp[1]
$onlyIf[$message!=;**⚠️ | Escribe un mensaje**]`
} 