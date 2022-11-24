module.exports = [{
name: "afk",
code: `$setUserVar[afk;si]
$setuserVar[afkr;$replacetext[$replacetext[$checkcondition[$message==];true;Sin razon];false;$message]]
$setUserVar[afktime;$dateStamp]
$reply[$messageID;no]
$title[1;✅ | Estado afk activo $username]
$addTimestamp[1]
$thumbnail[1;$authorAvatar]
$addField[1;Razon:;$replaceText[$replaceText[$checkCondition[$message==];true;Sin razon];false;$message];no]
$color[1;GREEN]
$footer[1;Avisare si te mencionan]`
},{
name: "$alwaysExecute",
code: `$setUserVar[afk;no]
$setUserVar[afktime;]
$setUserVar[afkmentions;0]
$setUservar[afkr;]
$reply[$messageID;no]
$title[1;$username ah vuelto!]
$thumbnail[1;$authorAvatar]
$addField[1;Razon:;$getUserVar[afkr];no]
$addField[1;Total de Menciones:;$getUserVar[afkmentions];no]
$addField[1;Tiempo afk:;$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$sub[$datEstamp;$getUserVar[afktime;$mentioned[1]]];time];seconds;segundos];minutes;minutos];minute;segundo];second;segundo];no]
$color[1;RANDOM]
$addTimestamp[1]
$onlyIf[$checkContains[$message;$getServerVar[prefix]afk]==false;]
$onlyIf[$getUserVar[afk]==si;]
$onlyIf[$checkContains[$message;a!afk]==false;]
`
},{
name: "$alwaysExecute",
code: `
$setUserVar[afkmentions;$sum[$getuservar[afkmentions;$mentioned[1]];1];$mentioned[1]]
$reply[$messageID;no]
$title[1;⚠️ | $userTag[$mentioned[1]] esta AFK]
$thumbnail[1;$authorAvatar]
$color[1;RED]
$addField[1;AFK desde:;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$sub[$datestamp;$getUserVar[afktime;$mentioned[1]]];time];seconds;segundos];minutes;minutos];minute;segundo];second;segundo];hours;horas];no]
$addField[1;Razón:;$getUserVar[afkr;$mentioned[1]];no]
$onlyIf[$getUserVar[afk;$mentioned[1]]==si;]
$onlyIf[$mentioned[1]!=$authorID;]
$onlyIf[$mentioned[1]!=;]
`
}]