import React from 'react'
import Link from 'next/link'

import styled, { keyframes } from 'styled-components'

const keyFrameFadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

//create looped anim delay for styled components
let animatioDelays = ''
for (let i = 2; i < 11; i++) {
  animatioDelays += `
    &:nth-child(${i}){
      animation-delay: ${i * 0.05}s
    }
   `
}

const UserLi = styled.li`
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 24px;
  opacity: 0.75;
  transition: opacity 0.27s;
  letter-spacing: 0.02em;
  opacity: 0;
  animation: ${keyFrameFadeIn} 0.45s forwards;
  ${animatioDelays}

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
  return (
    <UserLi>
      <Link href={`/user/${login}`}>
        <a>{login}</a>
      </Link>
    </UserLi>
  )
}

export default UserCard
