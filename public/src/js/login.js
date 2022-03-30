
// login = () => {
    let email = document.querySelector('[login-email]').value
    let password = document.querySelector('[login-password]').value
    let data = { email, password }

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch('localhost:3000/auth', options)
        .catch(err => { console.log(err) })
// }