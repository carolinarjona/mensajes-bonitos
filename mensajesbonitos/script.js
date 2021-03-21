var mensajes = new Array(
  "¡Estás haciéndolo lo mejor que puedes!",
  "¡Acuérdate de que descansar es necesario!",
  "¡Mantente hidratada!",
  "¡Toma vitamina D!",
  "¡Haz estiramientos si estás mucho tiempo sentada!",
  "¡Mantén tu espalda recta!",
  "¡Te mereces cosas buenas!",
  "¡Eres válida!",
  "¡Eres suficiente!",
  "¡Estás capacitada!",
  "¡Siempre te superas a ti misma!",
  "¡Eres capaz!",
  "¡No pasa nada!",
  "¡Puedes lograrlo!",
  "¡No te sientas culpable por empezar de nuevo!",
  "¡No te sientas mal por tener que intentarlo varias veces!",
  "¡Tus aspiraciones pueden cambiar y no pasa nada!",
  "¡No invalides tus sentimientos, solo fluye con ellos sin obsesionarte!",
  "¡Prioriza tu salud!",
  "¡Apóyate en las personas que te rodean!",
  "¡La vida es complicada y, aún así, sigues adelante!",
  "¡No seas tan dura contigo misma!",
  "¡Sé amable contigo misma, lo estás haciendo lo mejor que puedes!",
  "Elige lo que te da paz",
  "Estoy muy orgullosa de todo lo que estás progresando",
  "Algunos días son mejores que otros, tú sigue adelante",
  "Está bien si te sientes un poquito perdida hoy",
  "Vamos a estar bien",
  "Crecer significa no quedarse estancada",
  "Date tiempo",
  "Respira",
  "Me merezco lo bueno que me pasa",
  "No te olvides de lo lejos que has llegado",
  "Todos crecemos de forma diferente",
  "Y si tienes que empezar de nuevo, pues se empieza"
);

var elemento = document.getElementById("mensajerandom");

function GetValue() {
    var random = mensajes[Math.floor(Math.random() * mensajes.length)];
    //alert(random);
    elemento.innerHTML = random;
    elemento.style.color = "#739c72";
  }
