/* eslint-disable no-unused-vars */
import React from "react"

function Stats({pokemonData}) {
  return (
    <div className="panel-row">
    <div className="screen stats">
      {pokemonData.stats.map((stat, i) => <p key={i} className="stat-line">{stat.stat.name}....{stat.base_stat}</p>)}
    </div>
    <div className="type-list">
      <p className="panel-header">Types</p>
      <div className="type-box">
        {pokemonData.types.map(type => 
          <p key={type.slot} className={`type ${type.type.name}`} >{type.type.name}</p>)}
     </div>
    </div>
  </div>
  )
}

export default Stats