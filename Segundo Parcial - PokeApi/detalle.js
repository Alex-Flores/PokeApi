console.log(window.location.href);
console.log(window.location.search);
let katamura = new URLSearchParams(location.search);
let val = katamura.get('id');
console.log(val);
const pokemonContainer = document.querySelector('.container')

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


function crearPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const isd = document.createElement('p');
    isd.textContent = `legajo: ${pokemon.id}`;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const links = document.createElement('a');
    links.textContent = "volver al home"
    links.setAttribute('href', `index.html`);

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(isd);
    div.appendChild(links);

    pokemonContainer.appendChild(div);
}

traerPokemon(val);