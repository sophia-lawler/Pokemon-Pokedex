/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from "react"
import Stats from "./Stats"
import Evolution from "./Evolution"
import MoveList from "./MoveList"

function RightPanel({pokemonData}) {
  return (
    <div className='panel right-panel'>
      <Stats pokemonData={pokemonData}/>
      <Evolution/>
      <MoveList pokemonData={pokemonData}/>
    </div>
  )
}

export default RightPanel