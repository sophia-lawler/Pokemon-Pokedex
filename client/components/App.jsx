/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react'

import Loader from './Loader'
import PokeSearch from './PokeSearch'
import Divider from './Divider'
import RightPanel from './RightPanel'
import LeftPanel from './LeftPanel'
import { fetchPokemon } from '../api'

function App() {
  const [pokemonData, setPokemonData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userInputPokemon, setUserInputPokemon] = useState('bulbasaur')
  const [speciesData, setSpeciesData] = useState(null)
  const [randomId, setRandomId] = useState(null)

function fetchingPokemon(pokemon) {
    setLoading(true)
    setTimeout(() => {
      fetchPokemon(pokemon)
        .then((data) => {
          setPokemonData(data.body)
          console.log(data.body)
        })
        .finally(() => {
          setLoading(false)
        })
        .catch((err) => console.error(err.message))
    }, 1500)
  }
  
  useEffect(() => {
    fetchingPokemon(userInputPokemon) 
  }, [userInputPokemon])

  useEffect(() => {
    fetchingPokemon(randomId) 
  }, [randomId])

  return (
    <div className="wrapper">
      <div className="titutal">
        <img src="../pokemon.png"></img>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="pokedex">
          <LeftPanel
            pokemonData={pokemonData}
            setUserInputPokemon={setUserInputPokemon}
            PokeSearch={PokeSearch}
            speciesData={speciesData}
            setRandomId={setRandomId}
          />
          <Divider />
          <RightPanel
            pokemonData={pokemonData}
            speciesData={speciesData}
            setSpeciesData={setSpeciesData}
          />
        </div>
      )}
    </div>
  )
}

export default App
