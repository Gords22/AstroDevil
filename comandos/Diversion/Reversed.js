module.exports = {
  name: "reverse",
  code: `$reply[$messageID;no]
$advancedTextSplit[$djsEval[
const Lumina = require('lumina-wrapper.js')
const lms = new Lumina()

lms.get("text", "reverse", { "text": \`$message\` }).then((res) => {
  return res
});yes];';2]`
}