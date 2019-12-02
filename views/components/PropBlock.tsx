import React from 'react'

import styled from 'styled-components'

const BlockWrapper = styled.div`
  font-size: 15px;
  text-align: center;
  margin-bottom: 30px;

  &:hover {
    transition: opacity 0.2s;
    opacity: 1;
  }
`

const BlockName = styled.span`
  font-size: 13px;
  display: block;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5px;
  opacity: 0.5;
`

const BlockValue = styled.p`
  font-size: 18px;
  display: block;
  letter-spacing: 0.02em;
  text-align: center;
`

interface BlockProperties {
  blockName: string
  value: string
}

const PropBlock = ({ blockName, value }: BlockProperties) => (
  <BlockWrapper>
    <BlockName>{blockName}</BlockName>
    <BlockValue>{value}</BlockValue>
  </BlockWrapper>
)

export default PropBlock
