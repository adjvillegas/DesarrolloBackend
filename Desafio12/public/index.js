document.addEventListener("DOMContentLoaded", function () {

    const socket = io();
    const visualization = document.querySelector("#my_template");
    const to_render = document.querySelector("#to_render");

    socket.on("message", (data) => {
        console.log(data);
      });

      socket.on("visualizar", (data) => {
        console.log(data);
      const template = ejs.compile(visualization.innerHTML);
      to_render.innerHTML = template({ producto: data.producto });
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

});