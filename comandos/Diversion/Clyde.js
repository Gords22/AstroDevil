module.exports = {
  name: "clyde",
  code: `$description[1;Clyde ha hecho un anuncio!]
$image[1;$djsEval[
const { NekoBot } = require("nekobot-api")
const api = new NekoBot();

;(async () => {
  const image = await api.generate("clyde", { text: \`$message\` });
  return image;
})();yes]]
$addTimeStamp[1]
$color[1;RANDOM]
$onlyIf[$message!=;**⚠️ | Escribe un mensaje**]`
} 