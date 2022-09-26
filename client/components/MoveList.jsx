/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { move } from 'superagent'
import { fetchMove } from '../api'

function MoveList({ pokemonData }) {
  const { moves } = pokemonData
  const [moveIndex, setMoveIndex] = useState(0)
  const [newMove, setNewMove] = useState({})
  const [loader, setLoader] = useState(true)

  function handleMove(direction) {
    let i = moveIndex
    direction === 'up' && moveIndex < moves.length - 1
      ? setMoveIndex(i + 1)
      : moveIndex !== 0
      ? setMoveIndex(i - 1)
      : null
  }

  useEffect(() => {
    setLoader(true)
    fetchMove(moves[moveIndex].move.url)
      .then((move) => setNewMove(move.body))
      .finally(() => setLoader(false))
      .catch((err) => console.log(err))
  }, [moveIndex])

  return loader ? (
    <p>Loading...</p>
  ) : (
    <>
      <p className="panel-header">Moves</p>
      <div className="move-list">
        <div className="move-body move-screen screen">
          <div className="move-left">
            <p className="move-name">{moves[moveIndex].move.name}</p>
            <p className="move-status">Accuracy.....{newMove.accuracy}</p>
            <p className="move-status">Power.........{newMove.power}</p>
            <p className="move-status">PP............{newMove.pp}</p>
          </div>
          <div className="move-right">
            <p className="move-type">Type: {newMove.type.name}</p>
          </div>
        </div>
      </div>
      <div className="sprite-controls">
        <button
          className="sprite-control sprite-controls-gender "
          onClick={() => handleMove('down')}
        ></button>
        <button
          className="sprite-control sprite-controls-rotate "
          onClick={() => handleMove('up')}
        ></button>
      </div>
    </>
  )
}

export default MoveList
