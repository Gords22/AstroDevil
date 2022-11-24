module.exports = {
  name: "ascii",
  code: `$djsEval[const figlet = require('figlet');

figlet(\`$message\`, (err, result) => {
 message.channel.send(\`\\\`\\\`\\\`
\${result}
\\\`\\\`\\\`\`)
})
]
$onlyIf[$message!=;⚠️** | Escribe un texto**]
$suppressErrors[⚠️** | Formato de Texto no valido**]
`
}