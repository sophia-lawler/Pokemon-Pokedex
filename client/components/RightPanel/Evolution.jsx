/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { fetchEvolution, fetchPokemon } from '../../api'

function Evolution({ speciesData }) {
  const [loader, setLoader] = useState(true)
  const [evoArray, setEvoArray] = useState([1, 2, 3])
  const url = speciesData?.evolution_chain.url

  useEffect(() => {
    setLoader(true)
    fetchEvolution(url)
      .then((res) => {
        const evoOne = res.body.chain.species.name
        const evoTwo = res.body.chain?.evolves_to[0]
        const evoThree = evoTwo?.evolves_to[0]?.species.name
        const evoChain = [evoOne, evoTwo?.species.name, evoThree]
        return Promise.all(evoChain.map((evo) => fetchPokemon(evo)))
      })
      .then((res) => {
        const pokeArray = res.map((res) => res.body)
        setEvoArray(pokeArray)
      })
      .finally(() => setLoader(false))
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return loader ? (
    <p>Loading...</p>
  ) : (
    <div className="panel-row panel-evo">
      {evoArray.map((evo, i) => {
        return (
          <div key={i}>
            <div className="flex-center">
              {i === 0 ? (
                <h3 className="evo-num">I</h3>
              ) : i === 1 ? (
                <h3 className="evo-num">II</h3>
              ) : (
                <h3 className="evo-num">II</h3>
              )}
            </div>
            {typeof evo === 'number' ? (
              <img
                src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/30ac2a54dfa0553.png"
                alt="?"
                className="pokemon-sprite pokemon-sprite-small"
              ></img>
            ) : (
              <img
                src={evo.sprites.front_default}
                alt="pokemon"
                className="pokemon-sprite pokemon-sprite-small"
              ></img>
            )}

            <p className="screen evo-name">{evo.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Evolution
