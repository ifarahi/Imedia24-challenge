async function fetchPokemons() {
  const results = await fetch("https://pokeapi.co/api/v2/pokemon")
    .then((data) => data.json())
    .then(({ results }) => results);

  const pokemons = results.map(async (pokemon) => {
    return fetchPokemonDetails(pokemon.url);
  });

  return await Promise.all(pokemons);
}

async function fetchPokemonDetails(url) {
  return fetch(url).then((data) => data.json());
}

async function fetchPokemonDetailsById(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) =>
    data.json()
  );
}

module.exports = {
  fetchPokemonDetailsById,
  fetchPokemons,
};
