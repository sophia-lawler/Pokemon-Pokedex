/* eslint-disable no-unused-vars */
import React from 'react'

function Types({ pokemonData }) {
  return (
    <>
      <div className="type-list">
        <p className="panel-header">Types</p>
        <div className="type-box">
          {pokemonData.types.map((type) => (
            <p key={type.slot} className={`type ${type.type.name}`}>
              {type.type.name}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default Types
