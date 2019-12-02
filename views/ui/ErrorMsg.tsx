import React from 'react'
import styled from 'styled-components'

const ErrorP = styled.button`
  font-size: 13px;
  color: red;
  padding: 13px 30px 12px 30px;
  letter-spacing: 0.02em;
  text-align: center;
  display: block;
  width: 100%;
`

interface PProps {
  children: string
}

const ErrorMsg = ({ children }: PProps) => <ErrorP>{children}</ErrorP>

export default ErrorMsg
