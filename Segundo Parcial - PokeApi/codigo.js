const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    mostrarPokemon(input.value);
})


function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => 
        res.json()
    )
    .then((data) => {
        crearPokemon(data);
        // mostrarPokemon(data);
    })
};
function listarPokemono(n){
    for (let i = 1; i <= n; i++){
        traerPokemon(i);
    }
}
listarPokemono(100);

function crearPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const isd = document.createElement('p');
    isd.textContent = `legajo: ${pokemon.id}`;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const links = document.createElement('a');
    links.textContent = "detalle"
    links.setAttribute('href', `detalle.html?id=${pokemon.id}`);

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(isd);
    div.appendChild(links);

    pokemonContainer.appendChild(div);
}

traerPokemon();