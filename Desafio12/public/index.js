document.addEventListener("DOMContentLoaded", () => {

    const socket = io();
    const visualization = document.getElementById('template_visualization')
    socket.on('index', data => {
        const template = ejs.compile(visualization.innerHTML);
        template({producto: [{title: "Hola", price: 12}]})
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