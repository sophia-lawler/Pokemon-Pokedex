/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Evolution from './Evolution'
import Stats from './Stats'
import MoveList from './MoveList'
import Types from './Types'
import { fetchSpecies } from '../../api'

function RightPanel({ pokemonData, speciesData, setSpeciesData, loading }) {
  const [loader, setLoader] = useState(true)
  const url = pokemonData.species.url

  useEffect(() => {
    setLoader(true)

    pokemonData && fetchSpecies(url)
      .then((res) => setSpeciesData(res.body))
      .finally(() => setLoader(false))
      .catch((err) => console.error(err))
  }, [])

  return loader ? (
    <div className="panel right-panel">
      <div className="panel-row">
        <div className="screen">
          <p>...loading</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="panel right-panel">
      <div className="panel-row">
        <Stats pokemonData={pokemonData} />
        <Types pokemonData={pokemonData} />
      </div>
      <Evolution speciesData={speciesData} />
      <MoveList pokemonData={pokemonData} />
    </div>
  )
}

export default RightPanel
