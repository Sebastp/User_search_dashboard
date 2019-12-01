import React, { useState, useRef } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'

import { useOnClickOutside } from '~lib/useOnClickOutside'

import { CHANGE_SELECTED } from '~graphqlM/users'
import { GET_CURRENT_SELECTED } from '~graphqlQ/users'

type DropdownProps = {
  placeholderText: string
  options: string[]
}

const Select = ({ options = [''], placeholderText = '' }: DropdownProps) => {
  const [isOpened, setIsOpened] = useState(false),
    [changeSelected] = useMutation(CHANGE_SELECTED),
    {
      data: { currentSelected },
    } = useQuery(GET_CURRENT_SELECTED),
    drpWrapper = useRef()

  const handleLiClick = (toSelect: number) => {
    console.log(currentSelected)
    if (currentSelected != toSelect) {
      changeSelected({
        variables: { toSelect },
      })
      toggleList()
    }
  }

  const toggleList = () => {
    setIsOpened(!isOpened)
  }
  useOnClickOutside(drpWrapper, () => setIsOpened(false))

  return (
    <div
      className={'dropdownWrapper ' + (isOpened && 'opened')}
      ref={drpWrapper}
    >
      <div className="dropdown__top" onClick={() => toggleList()}>
        <span className="dropdown__top__label">
          {currentSelected ? options[currentSelected] : placeholderText}
        </span>
        <div
          className={
            'dropdown__top__arrow arrowBtn__horizontal ' +
            (isOpened && 'rotatedTop')
          }
          style={{
            backgroundImage: `url('/icons/chevron-down.svg')`,
          }}
        />
      </div>
      <div className="dropdown__panel">
        <ul>
          {options.map((optionTitle, k) => (
            <li
              key={k}
              onClick={() => handleLiClick(k)}
              className={k == currentSelected ? 'active' : ''}
            >
              {optionTitle}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Select
