/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Abilities from './Abilities'
import Sprite from './Sprite'

function LeftPanel({ pokemonData, setUserInputPokemon, PokeSearch, setRandomId }) {
  const [form, setForm] = useState('')

  function handleChange(event) {
    setForm(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setUserInputPokemon(form)
  }
function handleClick(e) {
  e.preventDefault() 
  const index = Math.floor(Math.random() * (1118 - 1) + 1);
  setRandomId(index)
}




  return (
    <div className="panel left-panel">
      <div className="button" onClick={handleClick}></div>
      <div className="titleScreen">
        <h2 className="pokemon-name">
          {pokemonData.name} no.{pokemonData.id}
        </h2>
      </div>
        <Sprite pokemonData={pokemonData} />
      <div className="screen">
        <p> placeholder text for some kind of description</p>
      </div>
      <Abilities pokemonData={pokemonData} />
      <PokeSearch handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  )
}

export default LeftPanel
