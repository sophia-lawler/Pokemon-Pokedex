/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react'

import Divider from './Divider'
import RightPanel from './RightPanel/RightPanel'
import LeftPanel from './LeftPanel/LeftPanel'
import Title from './Title'
import Loader from './Loader'

import { fetchPokemon } from '../api'
import { fetchingPokemon } from './pokeHelper'

function App() {
  const [pokemonData, setPokemonData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userInputPokemon, setUserInputPokemon] = useState('bulbasaur')
  const [speciesData, setSpeciesData] = useState(null)
  const [randomId, setRandomId] = useState(1)

  useEffect(() => {
    fetchingPokemon(userInputPokemon, setLoading, fetchPokemon, setPokemonData)
  }, [userInputPokemon])

  useEffect(() => {
    fetchingPokemon(randomId, setLoading, fetchPokemon, setPokemonData)
  }, [randomId])
  return (
    <div className="wrapper">
      <Title />
      <div className="pokedex">
        <LeftPanel
          pokemonData={pokemonData}
          setUserInputPokemon={setUserInputPokemon}
          speciesData={speciesData}
          setRandomId={setRandomId}
          loading={loading}
        />
        <Divider />
        {loading ? (
          <div className="panel right-panel">
            <div className="panel-row">
              <div className="screen">
                <p>...loading</p>
              </div>
            </div>
          </div>
        ) : (
          <RightPanel
            pokemonData={pokemonData}
            speciesData={speciesData}
            setSpeciesData={setSpeciesData}
            loading={loading}
          />
        )}
      </div>
    </div>
  )
}

export default App
