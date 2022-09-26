/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Sprite({ pokemonData }) {
  const [image, setImage] = useState('front_default')

  function handleImage() {
    image === 'front_default'
      ? setImage('back_default')
      : setImage('front_default')
  }
  return (
    <>
      <div className="spriteScreen">
        <div className="pokemon-sprite">
          <img
            className="pokemon"
            src={pokemonData.sprites[image]}
            alt={`Front sprite of ${pokemonData.name}`}
          />
        </div>
      </div>
      <div className="sprite-controls">
        <button
          className="sprite-control sprite-controls-gender "
          onClick={handleImage}
        ></button>
        <button
          className="sprite-control sprite-controls-rotate "
          onClick={handleImage}
        ></button>
      </div>
    </>
  )
}

export default Sprite
