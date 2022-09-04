import request from 'superagent'

export function fetchPokemon(pokemon) {
  return request.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
}

export function fetchMove(url) {
  return request.get(url)
}
