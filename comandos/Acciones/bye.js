module.exports = {
  name: "bye",
  des: "Despidete de un usuario",
  uso: "bye <@usuario>",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;$username se despide de todos];false;$username se despide de $username[$mentioned[1]]]]
$image[1;$randomText[https://nekocdn.com/images/KwaLuDSf3.gif;https://nekocdn.com/images/IK-sISU3f.gif;https://nekocdn.com/images/gvJtTGTBE.gif;https://nekocdn.com/images/NzPWydHcE.gif;https://nekocdn.com/images/pv_5UPKRK.gif;https://nekocdn.com/images/bJF2341sf.gif;https://nekocdn.com/images/3yjF6ywIg.gif;https://nekocdn.com/images/M1luTGWA3.gif;https://nekocdn.com/images/eLOoV3q5U.gif;https://nekocdn.com/images/ZCmb3Si57.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;{newEmbed:{title:Adiooos $username}{image:$randomText[https://nekocdn.com/images/KwaLuDSf3.gif;https://nekocdn.com/images/IK-sISU3f.gif;https://nekocdn.com/images/gvJtTGTBE.gif;https://nekocdn.com/images/NzPWydHcE.gif;https://nekocdn.com/images/pv_5UPKRK.gif;https://nekocdn.com/images/bJF2341sf.gif;https://nekocdn.com/images/3yjF6ywIg.gif;https://nekocdn.com/images/M1luTGWA3.gif;https://nekocdn.com/images/eLOoV3q5U.gif;https://nekocdn.com/images/ZCmb3Si57.gif]}{color:RANDOM}}]
`
} 