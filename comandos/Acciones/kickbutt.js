module.exports = {
  name: "kickbutt",
  des: "Patea a un usuario",
  uso: "kickbutt <@usuario>",
  code: `$title[1;$username ha pateado a $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/8SD1JOTKp.gif;https://nekocdn.com/images/nHkdUvUG.gif;https://nekocdn.com/images/bFz3j8n3.gif;https://nekocdn.com/images/aAd4g6gxS.gif;https://nekocdn.com/images/ZASkZRWO.gif;https://nekocdn.com/images/tO2SS9MZ.gif;https://nekocdn.com/images/VYV_h1wGy.gif;https://nekocdn.com/images/1r2bDs4w.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;¡No soy violenta! Mejor selecciona a un usuario para patearlo.]
$onlyIf[$mentioned[1]!=$clientID;¿Heyyy no! Menciona a alguien mas ;)] 
`
} 
