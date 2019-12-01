import React from 'react'

interface ListProps {
  userObject?: any
}

const UserCard = ({ userObject }: ListProps) => {
  const { login } = userObject
  return <li>{login}</li>
}

export default UserCard
