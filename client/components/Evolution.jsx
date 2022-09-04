/* eslint-disable no-unused-vars */
import React from "react"

function Evolution() {
  return (
    <div className="panel-row panel-evo">
    <div>
      <div className="flex-center">
      <h3 className="evo-num">I</h3>
    </div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon" className="pokemon-sprite pokemon-sprite-small"></img>
      <p className="screen evo-name">bulbasaur</p>
    </div>
    <div>
    <div className="flex-center">
      <h3 className="evo-num">II</h3>
    </div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="pokemon" className="pokemon-sprite pokemon-sprite-small"></img>
      <p className="screen evo-name">ivysaur</p>
    </div>
    <div>
      <div className="flex-center">
        <h3 className="evo-num">III</h3>
      </div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="pokemon" className="pokemon-sprite pokemon-sprite-small"></img>
      <p className="screen evo-name">venusaur</p>
    </div>
  </div>
  )
}

export default Evolution
