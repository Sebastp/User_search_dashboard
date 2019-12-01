import React from 'react'

interface BtnProps {
  children: string
  disabled?: boolean
}

const Button = ({ children, disabled = true }: BtnProps) => (
  <button className={'boxButton' + (disabled ? ' disabled' : '')}>
    {children}
  </button>
)

export default Button
