
login = () => {
    let email = document.querySelector('[login-email]').value
    let password = document.querySelector('[login-password]').value
    let body = JSON.parse(`{
        "email": "${email}",
        "password": "${password}"
    }`)

    $.ajax({
        type: "POST",
        url:"http://localhost:3000/auth",
        data: body,
        success: () => {
            console.log(body);
        }
    })
}