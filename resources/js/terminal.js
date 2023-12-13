document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector('form').addEventListener('click', function (event) {
        console.log("Terminal")
        event.preventDefault()
        const data= document.querySelector('#terminal').value
        if(data === ''){
            return
        }
        if(data.includes('$clear')){
            document.querySelector('#terminal').value = ''
            return
        }
        if (data === '$exit') {
            window.location.href = "/resources/html/escritorio.html"
            return
        }
        if (data === '$help') {
            document.querySelector('#terminal').value += `
            clear: limpiar la terminal
            exit: salir de la terminal
            help: ayuda de la terminal
            procesos: ver los procesos
            editor: abrir el editor de texto
            `
            return
        }
        if (data === '$procesos') {
            window.location.href = "/resources/html/procesos.html"
            return
        }
        if (data === '$editor') {
            window.location.href = "/resources/html/editor.html"
            return
        }
        if (data === '$imagenes') {
            window.location.href = "/resources/html/imagenes.html"
            return
        }
        if (data === '$videos') {
            window.location.href = "/resources/html/videos.html"
            return
        }
        console.log(data)
    })

    document.querySelector('.cerrar-ter').addEventListener('click', function () {
        window.location.href = "/resources/html/escritorio.html"
    })
})