
function ValidaCampos() {
    var nombre = document.getElementById('txtNombre').value;
    var email = document.getElementById('txtEmail').value;
    var mensaje = document.getElementById('txtMensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, completa todos los campos obligatorios.');

      return false; // Evita que el formulario se envíe si hay campos vacíos
    }
    else
    {
        alert('Se enviaron los datos correctamente, pronto recibirá respuesta a su consulta. Gracias por contactarnos');
        
        return true; // Permite el envío del formulario si todos los campos están completos
    }

  }