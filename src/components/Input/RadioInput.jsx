import React from 'react'
import style from './Input.module.css'

const RadioInput = ({ value }) => {
  const { radio, inputLabel, radioContainer } = style

  return (
    <div className={radioContainer}>
      <input className={radio} type='radio' value={value}>
      </input>

      <label className={inputLabel}>

        {value}
      </label>
    </div>
  )
}

export default RadioInput