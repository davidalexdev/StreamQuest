$(document).ready(function () {
    $('#btn-login').on('click', function () {
        var user = $('#user').val();
        var pass = $('#pass').val();

        if(user === '' || pass === ''){
            $("#index-message").text("El campo usuario o contraseña no pueden estar vacíos");
        } else {
            $.ajax({
                type: 'POST',
                url: '../login.php',
                data: {
                    user: user,
                    pass: pass
                },
                success: function (response) {
                    $("#index-message").text(response);
                }
            });
        }
    });
});