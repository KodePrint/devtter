const timeline = [
  {
    id: 0,
    avatar:
      'https://pbs.twimg.com/profile_images/1550204219185037312/iwbWQU9z_400x400.jpg',
    username: 'Brais Moure',
    message: `¡Nueva sede de MoureDev!
    ¿No estaría mal, no?
    
    Fin de las mini vacaciones... A trabajar 💪`,
  },
  {
    id: 1,
    avatar:
      'https://pbs.twimg.com/profile_images/1550210767047143424/sTV4_rHy_400x400.jpg',
    username: 'Miguel Ángel Durán',
    message: `¡Te presento la miduConf!
    Conferencia de Programación y Desarrollo Web gratuita para que sigas subiendo de nivel. 📈`,
  },
  {
    id: 2,
    avatar:
      'https://pbs.twimg.com/profile_images/1407515353316462602/wRyoZ9Zb_400x400.jpg',
    username: 'Platzi English Academy',
    message: `El vocabulario en inglés que TODAS las personas necesitan:

    🏨At the hotel.
    ✈️At the airport.
    🏥At the hospital.
    🌮At the restaurant.
    👚At the clothing store.
    
    Habla inglés con confianza en estos lugares👇`,
  },
  {
    id: 3,
    avatar:
      'https://pbs.twimg.com/profile_images/1491825490038042634/Nqr6oJtH_400x400.jpg',
    username: 'Oscar Barajas Tavares',
    message: `🙌 ¿Como aprovecharon su fin de semana? 

    Yo hice un iPhone 5c Framed con un iPhone viejo que tenía ☺️ 
    
    ¿Quieren video del proceso? 🙈`,
  },
  {
    id: 4,
    avatar:
      'https://pbs.twimg.com/profile_images/1497701062991437824/evabz349_400x400.jpg',
    username: 'Nicolás Schürmann',
    message: `si mi video de "no uses for" dejó la kagada espera a ver mi video de "no uses console.log" (o print, o similares)`,
  },
  {
    id: 5,
    avatar:
      'https://pbs.twimg.com/profile_images/1550210767047143424/sTV4_rHy_400x400.jpg',
    username: 'Miguel Ángel Durán',
    message: `1️⃣4️⃣ Deja de esperar

    En lugar de esperar por un futuro mejor, el momento perfecto para hacer algo... ¡hazlo!
    
    No esperes siempre en tener la motivación o te frustarás por no llegar nunca.
    
    Si tienes miedo, hazlo con miedo.
    Si no te motivas, hazlo sin esperar a motivarte.`,
  },
  {
    id: 6,
    avatar:
      'https://pbs.twimg.com/profile_images/1550204219185037312/iwbWQU9z_400x400.jpg',
    username: 'Brais Moure',
    message: `¡Nueva sede de MoureDev!
    ¿No estaría mal, no?
    
    Fin de las mini vacaciones... A trabajar 💪`,
  },
  {
    id: 7,
    avatar:
      'https://pbs.twimg.com/profile_images/1550210767047143424/sTV4_rHy_400x400.jpg',
    username: 'Miguel Ángel Durán',
    message: `¡Te presento la miduConf!
    Conferencia de Programación y Desarrollo Web gratuita para que sigas subiendo de nivel. 📈`,
  },
  {
    id: 8,
    avatar:
      'https://pbs.twimg.com/profile_images/1407515353316462602/wRyoZ9Zb_400x400.jpg',
    username: 'Platzi English Academy',
    message: `El vocabulario en inglés que TODAS las personas necesitan:

    🏨At the hotel.
    ✈️At the airport.
    🏥At the hospital.
    🌮At the restaurant.
    👚At the clothing store.
    
    Habla inglés con confianza en estos lugares👇`,
  },
  {
    id: 9,
    avatar:
      'https://pbs.twimg.com/profile_images/1491825490038042634/Nqr6oJtH_400x400.jpg',
    username: 'Oscar Barajas Tavares',
    message: `🙌 ¿Como aprovecharon su fin de semana? 

    Yo hice un iPhone 5c Framed con un iPhone viejo que tenía ☺️ 
    
    ¿Quieren video del proceso? 🙈`,
  },
  {
    id: 10,
    avatar:
      'https://pbs.twimg.com/profile_images/1497701062991437824/evabz349_400x400.jpg',
    username: 'Nicolás Schürmann',
    message: `si mi video de "no uses for" dejó la kagada espera a ver mi video de "no uses console.log" (o print, o similares)`,
  },
  {
    id: 11,
    avatar:
      'https://pbs.twimg.com/profile_images/1550210767047143424/sTV4_rHy_400x400.jpg',
    username: 'Miguel Ángel Durán',
    message: `1️⃣4️⃣ Deja de esperar

    En lugar de esperar por un futuro mejor, el momento perfecto para hacer algo... ¡hazlo!
    
    No esperes siempre en tener la motivación o te frustarás por no llegar nunca.
    
    Si tienes miedo, hazlo con miedo.
    Si no te motivas, hazlo sin esperar a motivarte.`,
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(timeline))
}
