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


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetchPokemon(userInputPokemon)
        .then((data) => {
          setPokemonData(data.body)
          console.log(data.body)
        })
        .finally(() => {
          setLoading(false)
    
        })
        .catch((err) => console.error(err.message))
    }, 1500)
  }, [userInputPokemon])

  

  return (
    <div className='wrapper'>
      <div className='titutal'>
        <img src="../pokemon.png"></img>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="pokedex">
          <LeftPanel pokemonData={pokemonData} setUserInputPokemon={setUserInputPokemon} PokeSearch={PokeSearch}/>
          <Divider/>
           <RightPanel pokemonData={pokemonData}/>
        </div> 
      )}
    </div>
  )
}

export default App
