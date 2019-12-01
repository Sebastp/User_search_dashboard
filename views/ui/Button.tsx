import React from 'react'

interface BtnProps {
  children: string
}

const Button = ({ children, ...props }: BtnProps) => (
  <button {...props}>{children}</button>
)

export default Button
