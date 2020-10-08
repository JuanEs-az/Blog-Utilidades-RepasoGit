var fraseDeAmor = document.querySelector("#fraseDeAmor")
var fraseDeDesamor = document.querySelector("#fraseDeDesamor")
var fraseDeInspiracion = document.querySelector("#fraseDeInspiracion")
var emojisPrediccion = document.querySelector("#emojis")
var emojis = "🎈 🎆 🎇 🧨 ✨ 🎉 🎊 🎃 🎄 🎋 🎍 🎎 🎏 🎐 🎑 🧧 🎀 🎁 🎗 🎞 🎟 🎫 🎠 🎡 🎢 🎪 🎭 🖼 🎨 🧵 🧶 🛒 👓 🕶 🦺 🥽 🥼 🧥 👔 👕 👖 🩳 🧣 🧤 🧦 👗 🥻 👘 👚 🩲 🩱 👙 👛 👜 👝 🛍 🎒 👞 👟 🥾 🥿 👠 👡 👢 🩰 🧢 ⛑ 👒 🎩 🎓 💋 💄 💎 💍 ⚽ ⚾ 🥎 🏀 🏐 🏈 🏉 🎱 🎳 🥌 ⛳ ⛸ 🎣 🤿 🎽 🛶 🎿 🏒 🥍 🏏 🏑 🏓 🏸 🎾 🥏 🪁 🎯 🥊 🥋 🥇 🥈 🥉 🏅 🎖 🏆 🎮 🕹 🎰 🎲 🔮 🧿 🧩 🧸 🪀 🎴 🃏 🀄 ♟ ♠ ♣ ♥ ♦ 🔈 🔉 🔊 📢 📣 🔔 🎼 🎵 🎶 🎙 🎤 🎚 🎛 🎧 📯 🥁 🎷 🎺 🪕 🎹 🎻 📻 🔒 🔓 🔏 🔐 🔑 🗝 🪓 🔨 ⛏ ⚒ 🛠 🔧 🔩 🧱 ⚙ 🗜 🛢 ⚗ 🧪 🧫 🧬 🩺 💉 🩸 🩹 💊 🔬 🔭 ⚖ 📿 🔗 ⛓ 🧰 🧲 🦯 🛡 🏹 🗡 ⚔ 🔪 💣 🔫 ☎ 📞 📟 📠 📱 📲 📳 📴 🚬 ⚰ ⚱ 🗿 🔋 🔌 💻 🖥 🖨 ⌨ 🖱 🖲 💽 💾 💿 📀 🧮 🎥 🎬 📽 📡 📺 📷 📸 📹 📼 🔍 🔎 🕯 🪔 💡 🔦 🏮 📔 📕 📖 📗 📘 📙 📚 📓 📃 📒 📜 📄 📑 📰 🗞 🔖 💰 💴 💵 💶 💷 💸 💳 🧾 🏧 ✉ 📧 📨 📩 📤 📥 📦 📫 📪 📬 📭 📮 🗳 ✏ ✒ 🖋 🖊 🖌 🖍 📝 🗒 💼 📁 📂 🗂 📅 📆 🗓 📇 📈 📉 📊 📋 📌 📍 📎 🖇 📏 📐 ✂ 🗃 🗄 🗑 ⌛ ⏳ ⌚ ⏰ ⏱ ⏲ 🕰 " . split(" ")
var campoFrase = document.querySelector("#campo")
function obtenerNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
var amor = [
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
var desamor = [
    "La soledad ha sido una verdadera amiga, nunca me ha dejado, aún cuando yo trato de alejarme de ella, siempre está conmigo.",
    "Frases de desamor cortas y tristes - La soledad ha sido una verdadera amiga, nunca me ha dejado, aún cuando yo trato de alejarme de ella, siempre está conmigo.",
    "Es mejor perder amando, que no haber amado nunca.",
    "Pasamos tiempo pensando en el amor, pero el tiempo nos permitirá pasar del amor.",
    "Cuando estás soltero tienes que ir de flor en flor no de capullo en capullo.",
    "A veces, el amor puede parecer magia. Pero a menudo, la magia es una ilusión.",
    "El amor de verdad no tiene un final feliz... simplemente no tiene un final.",
    "Querer a alguien sin esperanza es duro, pero peor es vivir sin la esperanza de querer a alguien.",
    "Amar a alguien que pasa de ti es como querer volar sin alas.",
]
var inspiracion = [
    "Las mejores y más bellas cosas del mundo no pueden ser tocadas o vistas-deben ser sentidas con el corazón.-Helen Keller.",
    "No te esfuerces por ser exitoso, más bien por ser de valor.-Albert Einstein.",
    "Fallas el 100% de los tiros que no usas.-Wayne Gretzky.",
    "La definición del propósito es el punto de comienzo de todo logro.-W. Clement Stone.",
    "El 80% del éxito es mostrarse.-Woody Allen.",
    "La vida es un 10% lo que me ocurre y 90% cómo reacciono a ello.-John Maxwell.",
    "Cree y actúa como si fuese imposible fallar.-Charles Kettering.",
    "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.-Winston Churchill.",
    "No cuentes los días, haz que los días cuenten.-Muhammad Ali.",
    "Un año a partir de ahora desearás haber comenzado hoy.-Karen Lamb.",
    "No se trata de si te derriban, se trata de si te levantas.-Vince Lombardi.",
]
fraseDeAmor.addEventListener("click",() => {
    let index = parseInt(obtenerNumeroAleatorio(0,amor.length))
    campoFrase.innerHTML = amor[index] + " ❤ "
})
fraseDeDesamor.addEventListener("click",() => {
    let index = parseInt(obtenerNumeroAleatorio(0,desamor.length))
    campoFrase.innerHTML = desamor[index] + " 💔 "
})
fraseDeInspiracion.addEventListener("click",() => {
    let index = parseInt(obtenerNumeroAleatorio(0,inspiracion.length))
    campoFrase.innerHTML = inspiracion[index] + " 🎆 "
})
emojisPrediccion.addEventListener("click",() => {
    let i = 0
    var Intervalo = setInterval(() => {
        let index = parseInt(obtenerNumeroAleatorio(0,emojis.length))
        campoFrase.innerHTML = emojis[index]  
        if (i == 20){
            clearInterval(Intervalo)
        }
        i ++
    },0.05 * 1000)
    
})