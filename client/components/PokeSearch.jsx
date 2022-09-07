/* eslint-disable no-unused-vars */
import React from "react"

function PokeSearch({handleSubmit, handleChange}) {
  return (
    <div className="panel-row controls">
      <form>
        <input  className="screen" type="text" name="pokemon" placeholder="Search Pokemon!" onChange={handleChange}></input>
        <button className='submit' type="submit" onClick={handleSubmit}>Go</button>
      </form>
    </div>
  )
}

export default PokeSearch


