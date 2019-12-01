import React from 'react'

interface BtnProps {
  children: string
}

const Button = ({ children, ...props }: BtnProps) => (
  <button className="boxButton">{children}</button>
)

export default Button
