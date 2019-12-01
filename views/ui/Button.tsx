import React from 'react'
import styled from 'styled-components'

const BoxButton = styled.button`
  font-size: 13px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 13px 30px 12px 30px;
  border-radius: 7px;
  transition: box-shadow 0.35s, color 0.27s, background 0.3s;
  letter-spacing: 0.02em;
`

interface BtnProps {
  children: string
  disabled?: boolean
  onClickHandler?: Function
}

const Button = ({ children, disabled = true, onClickHandler }: BtnProps) => {
  const handleClick = () => {
    if (!disabled && onClickHandler) {
      onClickHandler()
    }
  }

  return (
    <BoxButton
      className={'boxButton' + (disabled ? ' disabled' : '')}
      onClick={() => handleClick()}
    >
      {children}
    </BoxButton>
  )
}

export default Button
