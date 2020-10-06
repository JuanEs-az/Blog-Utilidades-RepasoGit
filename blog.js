var fraseDeAmor = document.querySelector("#fraseDeAmor")
var campoFrase = document.querySelector("#campoFrase")

function obtenerNumeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }
var frasesDeAmor = [
    "Te extraño, nunca lo dudes, te quiero no me lo preguntes, te amo así que nunca lo olvides.",
    "No sabes las ganas que tengo de poder verte.",
    "Aunque nos encontremos lejos, en realidad no lo estamos, cierra los ojos y siénteme en el fondo de tu corazón.",
    "Haré que nunca me olvides, haré que nunca dejes de amarte y si es verdad que con el tiempo todo amor muere, detendré el tiempo entre los dos.",
    "Pienso en el amor de mi vida y me doy cuenta de que tienen tu nombre y apellido.",
    "Solo te quería pensar, termine queriendo estar contigo.",
    "Miro aquella estrella y me recuerda la promesa que hicimos, la de siempre estar juntos.",
    "Aunque parezca que amores verdaderos ya no existen, existen en nuestros corazones, amor a nosotros mismos.",
    "Amores como los nuestros duraran por toda la eternidad, pues tuvimos momentos preciosos que nunca podremos olvidar.",
    "A mí solo me importa una persona, a mí me importas solo tú.",
    "Más que darte un beso, más que darte una caricia, sobre todo quisiera darte mi amor sincero.",
    "Hasta en mis días mas tristes y oscuros eres capaz de darme felicidad y alegria.",
    "La medicina de mi alma son la de tus besos que me hacen suspirar.",
    "Solo existe un amor verdadero, pero puedes encontrar miles de versiones diferentes.",
    "Si te hace reír mucho, si te divierte no busques más, estas con el amor de tu vida.",
    "El verdadero amor se conoce por lo que ofrece, nunca por lo que existe.",
    "Me enamore de tu sonrisa y tu mirada y aunque no seamos nada me tienes muy enamorada.",
    "No sé que es lo que quiero la verdad es que lo único que deseo es seguir pero contigo.",
]
fraseDeAmor.addEventListener("click",() => {
    let index = parseInt(obtenerNumeroAleatorio(0,frasesDeAmor.length))
    campoFrase.innerHTML = frasesDeAmor[index]
})
