module.exports = {
  name: "glare",
  des: "Frunce el ceño o fruncele el ceño a un usuario",
  uso: "glare <@usuario> (opcional)",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;$username frunce el ceño];false;$username le frunce el ceño a $username[$mentioned[1]]]]
$image[1;$randomText[https://nekocdn.com/images/NIfobsBDK.gif;https://nekocdn.com/images/Cxuh-5x0.gif;https://nekocdn.com/images/-6v37nSL.gif;https://nekocdn.com/images/gMn6oB6k.gif;https://nekocdn.com/images/F4frE6AP.gif;https://nekocdn.com/images/wZdxSAIX.gif;https://nekocdn.com/images/KZf8BxFw.gif;https://nekocdn.com/images/WZxr7K-p.gif;https://nekocdn.com/images/XRjp5OKV.gif;https://nekocdn.com/images/4suD8xlP.gif;https://nekocdn.com/images/3bI_A53K.gif;https://nekocdn.com/images/5ny8YFsi.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$clientID;Eyy $username No me mires de esa manera >:(] 
`
} 