/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Loader from '../Loader'

function Sprite({ pokemonData, loading }) {
  const [image, setImage] = useState('front_default')

  function handleImage() {
    image === 'front_default'
      ? setImage('back_default')
      : setImage('front_default')
  }
  return loading ? (
    <>
      <div className="spriteScreen">
        <div className="pokemon-sprite">
        </div>
      </div>
      <Loader />
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
  ) : (
    <>
      <div className="spriteScreen">
        <div className="pokemon-sprite">
          <img
            className="pokemon"
            src={pokemonData.sprites[image]}
            alt={`Front sprite of ${pokemonData.name}`}
            style={{height: '100%', width: 'auto'}}
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
