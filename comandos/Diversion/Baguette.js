module.exports = {
  name: "baguette",
  code: `$djsEval[const { api } = require("./index.js")
(async () => {
const image = await api.generate("baguette", { image: "$userAvatar[$findMember[$message]]"})
return image
})()]
$addTimestamp[1;$dateStamp]
$color[1;RANDOM]`
} 