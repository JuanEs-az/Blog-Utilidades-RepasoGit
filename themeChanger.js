$(document).ready(() => {
    theme = $("#theme")
    if(localStorage.getItem("theme") == null){
        localStorage.setItem("theme","azul.css")
    }
    theme.attr("href",localStorage.getItem("theme"))
    $("#blue").click(() => {
        theme.attr("href","azul.css")
        localStorage.setItem("theme","azul.css")
        })
    $("#red").click(() => {
        theme.attr("href","rojo.css")
        localStorage.setItem("theme","rojo.css")
        })
})