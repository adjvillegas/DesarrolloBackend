document.addEventListener("DOMContentLoaded", () => {

    const socket = io();

    socket.on('mensaje', data => {
        debugger
    })

    socket.on('response', data => {
        debugger
    })

    document.getElementById('formCreate').addEventListener('submit', (oEvent) => {
        oEvent.preventDefault()
        debugger
        var data = { title: document.getElementById('InputCreateTitle').value, price: parseInt(document.getElementById('exampleInputPrecio').value), thumbnail: document.getElementsByName('thumbnail')[0]}

        socket.emit('refresh', data)
    })

});