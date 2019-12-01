import React from 'react'
import styled from 'styled-components'

const UserLi = styled.li`
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 24px;
  opacity: 0.75;
  transition: opacity 0.27s;
  letter-spacing: 0.02em;

  &:hover {
    transition: opacity 0.2s;
    opacity: 1;
  }
`

interface ListProps {
  userObject?: any
}

const UserCard = ({ userObject }: ListProps) => {
  const { login } = userObject
  return <UserLi>{login}</UserLi>
}

export default UserCard
