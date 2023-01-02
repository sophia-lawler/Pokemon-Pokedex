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

export function evoFontHelper(evolution) {
  const style =
    evolution.length > 9 ? { fontSize: '0.5em' } : { fontSize: '0.8em' }
  return style
}
