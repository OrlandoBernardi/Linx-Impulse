import React from 'react'
import Button from '../Button/Button'
import style from './Header.module.css'

const Header = () => {
  const { buttons, header, headerText, triangle, triangleContainer } = style

  return (
    <div className={header}>
      <div className={headerText}>
        <p style={{ fontSize: '1.25em', fontWeight: '200', marginBottom: '0.5em', padding: '0.1em' }}>
          uma seleção de produtos
        </p>

        <h1 style={{ fontSize: '2.5em', fontWeight: '600', marginBottom: '0.5em', padding: '0.1em' }}>
          especial para você
        </h1>

        <p style={{ fontSize: '1em', fontWeight: '300', padding: '0.1em' }}>
          Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
        </p>
      </div>

      <div className={buttons}>
        <Button text="Conheça a Linx" href='#' />
        <Button text="Ajude o algorítimo" href='#ajude-o-algoritmo' />
        <Button text="Seus produtos" href='#produtos' />
        <Button text="Compartilhe" href='#compartilhe' />
      </div>

      <div className={triangleContainer}>
        <div className={triangle}></div>
      </div>
    </div>
  )
}

export default Header