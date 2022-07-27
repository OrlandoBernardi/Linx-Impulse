import React from 'react'
import style from './Input.module.css'

const TextInput = ({ id, label, type, pattern }) => {
  const { input, inputLabel, inputContainer } = style

  return (
    <div className={inputContainer}>
      <label className={inputLabel} htmlFor={id}>
        {label}
      </label>

      <input
        className={input}
        type={type != null ? type : 'text'}
        pattern={pattern}
        id={id}
      />

    </div>
  )
}

export default TextInput