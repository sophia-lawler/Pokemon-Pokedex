/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Sprite from './Sprite'
import PokeSearch from './PokeSearch'

function LeftPanel({
  pokemonData,
  setUserInputPokemon,
  setRandomId,
  loading,
  speciesData,
}) {
  const [form, setForm] = useState('')

  function handleChange(event) {
    setForm(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setUserInputPokemon(form)
    setForm('')
  }
  function handleClick(e) {
    e.preventDefault()
    const index = Math.floor(Math.random() * (1118 - 1) + 1)
    setRandomId(index)
  }

  const description = speciesData?.flavor_text_entries.find(
    (entry) => entry.language.name === 'en'
  )

  return loading ? (
    <div className="panel left-panel">
      <div className="button"></div>
      <div className="titleScreen">
        <h2 className="pokemon-name">...Loading</h2>
      </div>
      <Sprite pokemonData={pokemonData} loading={loading} />
      <div className="screen">
        <p> ...</p>
      </div>
      <PokeSearch handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  ) : (
    <div className="panel left-panel">
      <div className="button" onClick={handleClick}></div>
      <div className="titleScreen">
        <h2 className="pokemon-name">
          {pokemonData.name} no.{pokemonData.id}
        </h2>
      </div>
      <Sprite pokemonData={pokemonData} />
      <div className="screen">
        {description && <p>{description.flavor_text}</p>}
      </div>
      <PokeSearch handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  )
}

export default LeftPanel
