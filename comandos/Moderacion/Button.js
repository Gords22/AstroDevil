module.exports = [{
name: "ok",
code: `
ok
$addButton[1;Label;primary;example_$authorID]
`
},{
 type: "interaction",
 prototype: "button",
 code: `

$interactionReply[ok]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]!=$interactionData[author.id];{
 "content" : "no",
 "ephemeral" : true,
 "options" : {
 "interaction" : true
 }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==example;]
 `
}]