$(document).ready(function () {
    $('#form-registry').submit(function (event) {
        event.preventDefault();
        var email = $('#email').val();

        $.ajax({
            type: 'POST',
            url: '../recovery.php',
            data: {
                email: email
            },
            success: function (response) {
                alert(response);
                window.location.href = "../front/index.html";
            }
        });
    });
});