async function fetchPokemon() {
  await request.get('https://pokeapi.co/api/v2/pokemon/bulbasaur')
}

useEffect(() => {
  setLoading(true)
  setTimeout(async () => {
    try {
      const data = await fetchPokemon()
      setPokemonData(data.body)
    } catch (err) {
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }, 1500)
}, [])
