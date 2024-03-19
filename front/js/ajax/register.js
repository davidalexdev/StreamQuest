$(document).ready(function () {
    $('#form-registry').submit(function (event) {
        event.preventDefault();
        var nombre = $('#name').val();
        var apellido = $('#lastname').val();
        var email = $('#email').val();
        var password = $('#password').val();

        const validateNombre = validarCampo(nombre);
        const validateApellido = validarCampo(nombre);
        const validatePassword = validarContraseña(password);
        //const validateEmail = validarEmail(email);


        if (validateNombre !== true) {
            $('#register-message').text(validateNombre);
        } else {
            if (validatePassword !== true) {
                $('#register-message').text(validatePassword);
            } else {
                $.ajax({
                    type: 'POST',
                    url: '../register.php',
                    data: {
                        nombre: nombre,
                        apellido: apellido,
                        email: email,
                        password: password
                    },
                    success: function (response) {
                        $('#register-message').text(response);
                        setTimeout(function() {
                            window.location.href = "../front/index.html";
                        }, 5000);
                    }
                });
            }
        }
    });
});

function validarContraseña(campo) {
    console.log(campo);
    // Expresión regular para una letra mayúscula
    const regexMayuscula = /[A-Z]/;

    // Expresión regular para un número
    const regexNumero = /[0-9]/;

    // Validar la longitud
    if (campo.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }

    // Validar la letra mayúscula
    if (!regexMayuscula.test(campo)) {
        return "La contraseña debe tener al menos una letra mayúscula.";
    }

    // Validar el número
    if (!regexNumero.test(campo)) {
        return "La contraseña debe tener al menos un número.";
    }

    // La contraseña es válida
    return true;
}

function validarCampo(campo){
    if(campo === '') {
        return "No puede haber campos vacíos";
    }
    return true;
}

function validarEmail(email) {
    // Expresión regular para un correo electrónico
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regexEmail.test(email)){
        return "El correo electrónico no es correcto"
    }
}
