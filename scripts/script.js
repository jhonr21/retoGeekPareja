let btnWindows = document.getElementById("btnWindows");
let btnLinux = document.getElementById("btnLinux");


url = 'http://localhost:4003/todos'

const getSearch = async () => {

    let ss = 'http://localhost:4003/todos';
    let response = await fetch(ss);
    let data = await response.json();
    let informationFound = data;
    return informationFound;
}

const getData = async (url) => {
    let games = document.querySelector(".juego");
    games.innerHTML = ''
    const res = await fetch(url);
    const data = await res.json();
    data.forEach(game => {
        games.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${game.thumbnail}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${game.title}</h5>
                    <p class="card-text">${game.platform}</p>
                    <a href="../ecommerce.html" class="btn btn-primary">Comprar</a>
                </div>
        </div>
        `
    });
}

getData(url);

const getGames = async (url) => {
    let games = document.querySelector(".juego");
    games.innerHTML = '';
    const res = await fetch(url);
    const data = await res.json();
    data.forEach(game => {
        games.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${game.thumbnail}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${game.title}</h5>
                    <p class="card-text">${game.platform}</p>
                    <a href="../ecommerce.html" class="btn btn-primary">Comprar</a>
                </div>
        </div>
        `
    });
}


btnWindows.addEventListener('click', () => {
    getGames('http://localhost:4000/sistemaWindows');
})

btnLinux.addEventListener('click', () => {
    getGames('http://localhost:4001/sistemaLinux');
})

btnTodos.addEventListener('click', () => {
    getData('http://localhost:4003/todos')
})

let btn = document.getElementById('btnBuscar');



btn.addEventListener('click', async () => {
    let games = document.querySelector(".juego");
    games.innerHTML = ''
    let tex = document.getElementById('inputBuscar').value;
    let dataBase = await getSearch();
    let searching = dataBase.filter(search => search.title.toLowerCase() === tex.toLowerCase())
    searching.forEach(
        game => {
            games.innerHTML += `
            <div class="card" >
                <img class="card-img-top" src="${game.thumbnail}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${game.title}</h5>
                        <p class="card-text">${game.platform}</p>
                        <a href="../ecommerce.html" class="btn btn-primary">Comprar</a>
                    </div>
            </div>
        `
        });

});