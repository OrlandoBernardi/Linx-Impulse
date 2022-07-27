import React from 'react'
import style from './Button.module.css'

const SecondaryButton = ({ type, text, href, clickHandler }) => {
  const { secondaryButton } = style

  return (
    <a href={href} style={{ all: 'unset' }}>
      <button className={secondaryButton} onClick={clickHandler}>
        {text}
      </button >
    </a>
  )
}

export default SecondaryButton