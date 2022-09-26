/* eslint-disable no-unused-vars */
import React from 'react'

function Stats({pokemonData}) {
  return (
      <div className="screen stats">
        {pokemonData.stats.map((stat, i) => (
          <p key={i} className="stat-line">
            {stat.stat.name}........{stat.base_stat}
          </p>
        ))}
        </div>
  )
}

export default Stats