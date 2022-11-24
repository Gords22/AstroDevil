module.exports = [{
  name: "aki-character",
  aliases: ["aki-c","aki-personaje"],
  code: `$djsEval[const akinator = require("discord.js-akinator");
akinator(message, { 
language: 'es', 
childMode: 'false', 
gameType: 'character', 
useButtons: 'false', 
embedColor: 'RANDOM'
});]`
},{
  name: "aki-animal",
  aliases: ["aki-a"],
  code: `$djsEval[const akinator = require("discord.js-akinator");
akinator(message, { 
language: 'es', 
childMode: 'false', 
gameType: 'animal', 
useButtons: 'false', 
embedColor: 'RANDOM'
});]`
},{
  name: "aki-object",
  aliases: ["aki-o","aki-objeto"],
  code: `$djsEval[const akinator = require("discord.js-akinator");
akinator(message, { 
language: 'es', 
childMode: 'false', 
gameType: 'object', 
useButtons: 'false', 
embedColor: 'RANDOM'
});]`
}]
//a copiar se ah dicho xD
//XD