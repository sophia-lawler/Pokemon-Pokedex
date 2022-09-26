/* eslint-disable no-unused-vars */
import React from 'react'

function Abilities({ pokemonData }) {
  return (
    <>

        <p className="panel-header">Abilities</p>
        <div className="type-box-abil">
          {pokemonData.abilities.map((x, i) => 
            i === 0 ?
            <p key={i} className="type fire">
              {x.ability.name}
            </p>
            :  <p key={i} className="type water">
            {x.ability.name}
          </p>
)}
        </div>

    </>
  )
}

export default Abilities
