module.exports = {
    name: "emojify",
    code: `$reply[$messageID;no]
$advancedTextSplit[$djsEval[
const Lumina = require('lumina-wrapper.js')
const lms = new Lumina()
        
lms.get("text", "emojify", { "text": \`$message\` }).then((res) => {
    return res
});yes];';2]
$onlyIf[$message!=;**⚠️ | Escribe un mensaje**]`
}