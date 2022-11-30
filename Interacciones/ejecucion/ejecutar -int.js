module.exports = [{
    name: "int-hug",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{title:$username[$interactionData[author.id]] le dio un abrazo a $username[$findMember[$interactionData[options.data[0].value]]]}{image:$randomText[https://nekocdn.com/images/ZxnDk7Sx.gif;https://nekocdn.com/images/_DKjv1J1.gif;https://nekocdn.com/images/i6wKzufP.gif;https://nekocdn.com/images/1BlXHF4R.gif;https://nekocdn.com/images/trYMVXTu.gif;https://nekocdn.com/images/84RVP9FR.gif;https://nekocdn.com/images/zJz37_q-.gif;https://nekocdn.com/images/6hgY2K1t.gif;https://nekocdn.com/images/8uYwL6G9.gif;https://nekocdn.com/images/7xSdtDj_.gif;https://nekocdn.com/images/rHWL1M78.gif;https://nekocdn.com/images/G28u_mVkK.gif;https://nekocdn.com/images/f_WTij-n.gif;https://nekocdn.com/images/xV5AuVLD.gif;https://nekocdn.com/images/osbqQHgU.gif;https://nekocdn.com/images/UqFzUna9.gif;https://nekocdn.com/images/H31aUh0pH.gif;https://nekocdn.com/images/_HPBDopl.gif;https://nekocdn.com/images/0bUSg7Vq.gif;https://nekocdn.com/images/brs_qFJSz.gif;https://nekocdn.com/images/rxjRvJmt.gif;https://nekocdn.com/images/y-1DCcK2.gifhttps://nekocdn.com/images/X6RLyO-P.gif]}{color:RANDOM}}]
    $onlyIf[$findMember[$interactionData[options.data[0].value]]!=$interactionData[author.id];{
        "content" : "⚠️** | No puedes interactuar contigo mismo*",
        "ephemeral" : true,
        "options" : {"interaction" : true}
       }]`
},{
    name: "int-slap",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{title:$username[$interactionData[author.id]] le dio una cachetada a $username[$findMember[$interactionData[options.data[0].value]]]}{image:$randomText[https://nekocdn.com/images/mPM4mhrV.gif;https://nekocdn.com/images/mPM4mhrV.gif;https://nekocdn.com/images/x1_bGNp6.gif;https://nekocdn.com/images/DKG8rDBj.gif;https://nekocdn.com/images/gqZCqLOa-.gif;https://nekocdn.com/images/U_PBkWNK.gif;https://nekocdn.com/images/caNp-cCFJ.gif;https://nekocdn.com/images/4OGFfco1W.gif;https://nekocdn.com/images/ru6ds5JS.gif;https://nekocdn.com/images/OLU3EvHw.gif;https://nekocdn.com/images/9-b0vW08.gif;https://nekocdn.com/images/P7YGdSQL.gif;https://nekocdn.com/images/Cce4ShGk.gif;https://nekocdn.com/images/mdpcqfEf.gif;https://nekocdn.com/images/gcQvEOSI.gif;https://nekocdn.com/images/VX9seotd.gif;https://nekocdn.com/images/OPvRFcsw.gif;https://nekocdn.com/images/j0GLhnKc.gif;https://nekocdn.com/images/fJhrnfJ3P.gif;https://nekocdn.com/images/N3_DyuEDK.gif;https://nekocdn.com/images/MuTW1A8a.gif;https://nekocdn.com/images/rZ8poeMB.gif]}{color:RANDOM}}]
    $onlyIf[$findMember[$interactionData[options.data[0].value]]!=$interactionData[author.id];{
        "content" : "⚠️** | No puedes interactuar contigo mismo**",
        "ephemeral" : true,
        "options" : {"interaction" : true}
       }]`
},{
    name: "int-kiss",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{title:$username[$interactionData[author.id]] le dio un besito a $username[$findMember[$interactionData[options.data[0].value]]]}{image:$randomText[https://nekocdn.com/images/VsbgMg0S.gif;https://nekocdn.com/images/NmmVj6HdJ.gif;https://nekocdn.com/images/JKRSP4Xn.gif;https://nekocdn.com/images/Md8sga2c.gif;https://nekocdn.com/images/tNfkJjuPK.gif;https://nekocdn.com/images/GQkjmNCw.gif;https://nekocdn.com/images/XfQdb7D3h.gif;https://nekocdn.com/images/fk3kNXy3I.gif;https://nekocdn.com/images/oUiAFsDZ.gif;https://nekocdn.com/images/7zsWss3Az.gif;https://nekocdn.com/images/SiZwWxBhA.gif;https://nekocdn.com/images/dUTutY96.gif;https://nekocdn.com/images/-mqrr0BL.gif;https://nekocdn.com/images/77TT-530.gif;https://nekocdn.com/images/iKvlZdyw.gif;https://nekocdn.com/images/g2FiClix.gif;https://nekocdn.com/images/uBg5v6aN.gif;https://nekocdn.com/images/o85u_nFq.gif;https://nekocdn.com/images/sv7eQBqu.gif;https://nekocdn.com/images/dUTutY96.gif;https://nekocdn.com/images/_7OKtwuz.gif]}{color:RANDOM}}]
    $onlyIf[$findMember[$interactionData[options.data[0].value]]!=$interactionData[author.id];{
        "content" : "⚠️** | No puedes interactuar contigo mismo**",
        "ephemeral" : true,
        "options" : {"interaction" : true}
       }]`
},{
    name: "user-info",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{color:RANDOM}{thumbnail:$userAvatar[$findMember[$message]]}{field:Tiene Banner?:$replaceText[$replaceText[$checkCondition[$getUserBanner[$findMember[$message]]!=null];false;No tiene banner personalizado (imagen abajo)];true;Si Tiene banner Personalizado (imagen abajo)]:no}{field:Roles del Usuario:$userRoles[$findMember[$message];$guildID;mention;, ]:no}{field:Fecha de creacion de la cuenta:$creationDate[$findMember[$message];date]:no}{field:Miembro desde?:$formatDate[$memberJoinedDate[$findMember[$message];$guildID];MM/DD/YYYY, hh:mm:ss A]:no}{field:Estado Personalizado:$replaceText[$getCustomStatus[$findMember[$message];$guildID;emoji];none;] $replaceText[$getCustomStatus[$findMember[$message];$guildID;state];none;Sin estado]:no}{field:Actividad;$replaceText[$replaceText[$activity[$guildID;$findMember[$message]];Custom Status;Estado Personalizado];none;Ninguno];no}{field:Platforma:$replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;Ninguna];web;🌐 | Web];mobile;📱 | Telefono];desktop;💻 | PC]:no}{field:Es bot?:$replaceText[$replaceText[$isBot[$findMember[$message]];true;🤖 | Si es bot];false;👤 | No es bot]:no}{field:Estado:$replaceText[$replaceText[$replaceText[$replaceText[$status[$findMember[$message]];dnd;🔴 | No molestar];idle;🟡 | Ausente];offline;⚪ | Invisible / Desconectado];online;🟢 | En linea]:no}{description:**Nombre:** $username[$findMember[$message]]
    **Apodo:** $replaceText[$replaceText[$checkCondition[$nickname[$findMember[$message]]==];true;Sin Apodo];false;$nickname[$findMember[$message]]]
    **Tag:** #$discriminator[$findMember[$message]]
    **ID:** $findMember[$message]}{image:$replaceText[$replaceText[$checkCondition[$getUserBanner[$findMember[$message]]!=null];false;https://i.ibb.co/Jx7rJvK/Smart-Select-20220314-191216-Gallery.jpg];true;$getUserBanner[$findMember[$message]]]}}]`
}]