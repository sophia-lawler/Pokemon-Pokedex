/* eslint-disable no-unused-vars */
import React, {useState} from "react"

function LeftPanel({pokemonData, setUserInputPokemon, PokeSearch}) {

  const [form, setForm] = useState('')
  const [image, setImage] = useState('front_default')

  function handleChange(event) {
    setForm(event.target.value)
  
  }

  function handleSubmit(event) {
    event.preventDefault()
    setUserInputPokemon(form)
  }

  function handleImage() {
    image === 'front_default' ? setImage('back_default') : setImage('front_default')
  }

  return (
    <div className="panel left-panel">
            <div className="screen"> 
              <h2 className='pokemon-name'>{pokemonData.name} no.{pokemonData.id}</h2>
            </div>
            <img className='pokemon-sprite'
                src={pokemonData.sprites[image]}
                alt={`Front sprite of ${pokemonData.name}`}
            />
            <div className="sprite-controls">
              <button className="sprite-control sprite-controls-gender " onClick={handleImage}>ᐅ</button>
              <button className="sprite-control sprite-controls-rotate " onClick={handleImage}>ᐊ</button>
            </div>

            <div className="screen">
            <p> placeholder text for some kind of description</p>
            </div>
            <PokeSearch handleSubmit={handleSubmit} handleChange={handleChange}/>
          </div>
  )
}

export default LeftPanel