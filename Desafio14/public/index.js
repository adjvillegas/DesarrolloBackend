document.addEventListener("DOMContentLoaded", function () {

    const socket = io();
    const visualization = document.querySelector("#my_template");
    const my_msg = document.querySelector('#my_message');
    const to_render = document.querySelector("#to_render");
    const to_messge = document.querySelector('#to_messge');
    const mensajes = [];

    socket.on("welcome", (data) => {

        const template = ejs.compile(visualization.innerHTML);
        to_render.innerHTML = template({ producto: data.producto });
      });

      socket.on("visualizar", (data) => {

      const template = ejs.compile(visualization.innerHTML);
      to_render.innerHTML = template({ producto: data.producto });
    });

    socket.on("user_msg", (data) => {

        mensajes.push(data);
        const template = ejs.compile(my_msg.innerHTML);
        to_messge.innerHTML = template({ msg: mensajes,title:'Bienvenido al chat' });
    });    

    document.getElementById('formCreate').addEventListener('submit', (oEvent) => {
        oEvent.preventDefault()
        
        if ( document.getElementById('InputCreateTitle').value && document.getElementById('exampleInputPrecio').value) {

            socket.emit('submit', { 
                title: document.getElementById('InputCreateTitle').value, 
                price: parseInt(document.getElementById('exampleInputPrecio').value) 
            });
            document.getElementById('InputCreateTitle').value = "";
            document.getElementById('exampleInputPrecio').value = "";

        }


    })

    document.getElementById('msgSubmit').addEventListener('click', (oEvent) => {
        oEvent.preventDefault()
        if (document.getElementById('email').value && document.getElementById('inputMensaje').value ) {
        socket.emit("msgClick", { email: document.getElementById('email').value,
                                  text: document.getElementById('inputMensaje').value });

        document.getElementById('email').value = "";
        document.getElementById('inputMensaje').value = "";
    }
    })

});