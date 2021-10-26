let formulario = document.getElementById('formulario');
let url = 'http://localhost:4002/formulario'

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    let name = document.getElementById('typeNombresX').value;
    let lastName = document.getElementById('typeApellidosX').value;
    let email = document.getElementById('typeEmailX').value;

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            name,
            lastName,
            email
        }),
        headers: { 
            'Content-Type':"application/json; charset=UTF-8"
        }
    })
})
