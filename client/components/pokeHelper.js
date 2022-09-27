export function fetchingPokemon(
  pokemon,
  setLoading,
  fetchPokemon,
  setPokemonData
) {
  setLoading(true)
  setTimeout(() => {
    fetchPokemon(pokemon)
      .then((data) => {
        setPokemonData(data.body)
      })
      .finally(() => {
        setLoading(false)
      })
      .catch((err) => console.error(err.message))
  }, 1500)
}
