/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function PokeSearch({ handleSubmit, handleChange }) {
  return (
    <>
      <form>
        <input
          className="screen input"
          type="text"
          name="pokemon"
          placeholder="Search Pokemon!"
          onChange={handleChange}
        ></input>
        <FontAwesomeIcon
          type="submit"
          onClick={handleSubmit}
          className="game-plus"
          icon={faPlus}
        />
      </form>
    </>
  )
}

export default PokeSearch
