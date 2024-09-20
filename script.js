let urlBase = 'https://pokeapi.co/api/v2';
let pokemon2 = 'pokemon/ditto';


document.getElementById('botonBusqueda').addEventListener('click', () => {
  const pokemon = document.getElementById('pokEntrada').value;
  if (pokemon) {
    fetchDatosPok(pokemon);
  }
})

function fetchDatosPok(pokemon) {
  fetch(`${urlBase}/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(response => mostrarDatosPok(response))

}

function mostrarDatosPok(data) {
  const divDatosPok = document.getElementById('datosPok');
  divDatosPok.innerHTML = '';

  //          NOMBRE
  const namePoke = data.forms[0].name;
  const divNamePoke = document.createElement('h2');
  divNamePoke.textContent = `NAME: ${namePoke}`;
  divDatosPok.appendChild(divNamePoke);

  //          ABILIDAD
  const abilityPoke1 = data.abilities[0].ability.name;
  const abilityPoke2 = data.abilities[1].ability.name;
  const divAbilityPoke1 = document.createElement('p');
  const divAbilityPoke2 = document.createElement('p');
  divAbilityPoke1.textContent = `Ability 1: ${abilityPoke1}`;
  divAbilityPoke2.textContent = `Ability 2: ${abilityPoke2}`;
  divDatosPok.appendChild(divAbilityPoke1);
  divDatosPok.appendChild(divAbilityPoke2);

  const fotoPokemon = data.sprites.other["official-artwork"].front_default;
  const imgFotoPokemon = document.createElement('img');
  imgFotoPokemon.src = fotoPokemon;
  divDatosPok.appendChild(imgFotoPokemon);
}

