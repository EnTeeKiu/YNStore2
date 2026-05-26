$(document).ready(function () {
    $('#eye, .eye-toggle').click(function () {
        let input = $(this).siblings('input');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            input.attr('type', 'password');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    $('#form-login').submit(function (e) {
        e.preventDefault();
        let username = $('.form-input').eq(0).val();
        let password = $('#password').val();
        
        if (username === "" || password === "") {
            alert("Please input your username and password!");
        } else if (username === "admin" && password === "admin") {
            alert("Login success! Welcome Admin");
            window.location.href = "home.html";
        } else {
            alert("Invalid credentials! Only admins can access this portal.");
        }
    });
});
