
const formulario = document.getElementById('formularioContacto');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert("Mensaje enviado con éxito");


    setTimeout(() => {
        location.reload();
    }, 100); 

});


function agregarAlCarrito() {
    alert("Esta seccion aun no esta habilitada¡Próximamente, podras comprar el producto!");
  }
