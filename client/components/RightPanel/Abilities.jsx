/* eslint-disable no-unused-vars */
import React from 'react'

function Abilities({ pokemonData }) {
  return (
    <>
      <p className="panel-header">Abilities</p>
      <div className="type-box-abil">
        {pokemonData.abilities.map((x, i) => (
          <p key={i} className="type normal">
            {x.ability.name}
          </p>
        ))}
      </div>
    </>
  )
}

export default Abilities
